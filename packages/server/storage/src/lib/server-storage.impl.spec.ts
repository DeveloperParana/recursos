import { ServerStorageImpl } from './server-storage.impl'
import { Storage } from '@devpr/core-entities'
import * as path from 'path'
import * as fs from 'fs'

describe('Storage', () => {
  const storagePath = './test'
  let storage: Storage<any>

  beforeAll(async () => {
    storage = new ServerStorageImpl()
    await storage.init('entity', storagePath)
  })

  it('should create the storage directory if it does not exist', () => {
    expect(fs.statSync(storagePath).isDirectory()).toBeTruthy()
  })

  it('should CRUD an entity', async () => {
    let entity1: any = { a: 'b' }
    entity1 = await storage.create(entity1)
    expect(entity1.id).toEqual(0)

    expect(await storage.getAll()).toHaveLength(1)
    let entity2: any = { c: 'd' }
    entity2 = await storage.create(entity2)
    expect(entity2.id).toEqual(1)
    let allEntities = await storage.getAll()
    expect(allEntities.find((e) => e.a === 'b')).not.toBeUndefined()
    expect(allEntities.find((e) => e.c === 'd')).not.toBeUndefined()

    await storage.delete(entity2)
    allEntities = await storage.getAll()
    expect(allEntities).toHaveLength(1)
    expect(allEntities.find((e) => e.a === 'b')).not.toBeUndefined
    expect(allEntities.find((e) => e.c === 'd')).toBeUndefined

    await storage.update({ id: entity1.id, e: 'f' })
    expect((await storage.get(entity1.id)).e).toEqual('f')

    await storage.delete(entity1)
    expect(await storage.getAll()).toHaveLength(0)
  })

  it('should throw an error when trying to update an entity without an ID', async () => {
    let error
    try {
      await storage.update({})
    } catch (e) {
      error = e
    }
    expect(error).not.toBeUndefined()
  })

  it('should throw an error when trying to delete an entity without an ID', async () => {
    let error
    try {
      await storage.delete({})
    } catch (e) {
      error = e
    }
    expect(error).not.toBeUndefined()
  })

  it('should throw an error when trying to delete an entity that does not exist', async () => {
    let error
    try {
      await storage.delete({ id: 12345 })
    } catch (e) {
      error = e
    }
    expect(error).not.toBeUndefined()
  })

  afterAll(() => {
    fs.unlinkSync(path.join(storagePath, 'entity.json'))
    fs.rmdirSync(storagePath)
  })
})
