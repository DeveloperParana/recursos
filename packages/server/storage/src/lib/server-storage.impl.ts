import { Storage } from '@devpr/core-entities'
import * as path from 'path'
import * as fs from 'fs'

/**
 * A {@link Storage} implementation that stores data in-memory and in a JSON file.
 */
export class ServerStorageImpl<T extends { id: number }> implements Storage<T> {
  private entityName: string | undefined
  private fullStoragePath = ''
  private wasInitialized = false
  private entities: T[] = []

  async init(entityName: string, storagePath: string): Promise<void> {
    this.entityName = entityName
    this.wasInitialized = true
    this.fullStoragePath = this.generateStoragePathForEntity(
      entityName,
      storagePath
    )

    this.ensureStorageIsSetUp()
    await this.loadAllFromStorage()
  }

  private generateStoragePathForEntity(
    entityName: string,
    storagePath: string
  ): string {
    return `${storagePath}/${entityName}.json`
  }

  private ensureStorageIsSetUp(): void {
    if (!fs.existsSync(this.fullStoragePath)) {
      this.createStorageDirectory()
      this.createStorageFile()
    }
  }

  private createStorageDirectory() {
    const storagePathParts = path.parse(path.resolve(this.fullStoragePath))
    const storageDirectoryPath = path.join(storagePathParts.dir)
    if (!fs.existsSync(storageDirectoryPath)) {
      fs.mkdirSync(storageDirectoryPath, { recursive: true })
    }
  }

  private createStorageFile() {
    try {
      fs.writeFileSync(this.fullStoragePath, JSON.stringify([]))
    } catch (err) {
      console.error('Error creating storage file:')
      console.error(err)
    }
  }

  private async loadAllFromStorage(): Promise<void> {
    if (!this.wasInitialized) {
      throw new Error('Trying to call getAll() without calling init() before')
    }

    try {
      const fileContents = await new Promise<Buffer>((resolve, reject) => {
        fs.readFile(this.fullStoragePath, (err, content) => {
          if (err) {
            return reject()
          }
          resolve(content)
        })
      })
      this.entities = JSON.parse(fileContents.toString())
    } catch (err) {
      console.error(
        'Error reading or parsing entities from ' +
          this.fullStoragePath +
          ' : ' +
          (err ? err.message : '')
      )
    }
  }

  private storeAllToStorage(): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        this.fullStoragePath,
        JSON.stringify(this.entities, null, 2),
        (err) => {
          if (err) {
            return reject(err)
          }
          resolve()
        }
      )
    })
  }

  async create(entity: T): Promise<T> {
    if ((entity.id && (await this.exists(entity.id))) || !entity.id) {
      entity.id = this.createNextEntityId()
    }
    this.entities.push(entity)
    await this.storeAllToStorage()
    return entity
  }

  async update(entity: T): Promise<T> {
    if (entity.id == null) {
      throw new Error('Trying to update an entity without an ID')
    }
    const currentIndex = this.entities.findIndex((e) => e.id === entity.id)
    this.entities[currentIndex] = entity
    await this.storeAllToStorage()
    return entity
  }

  private createNextEntityId(): number {
    if (this.entities.length === 0) {
      return 0
    }
    const sortedEntities = this.entities.sort((e1, e2) =>
      `${e1.id}`.localeCompare(`${e2.id}`)
    )
    const entityWithHighestId = sortedEntities[sortedEntities.length - 1]
    return entityWithHighestId.id + 1
  }

  async get(id: number): Promise<T | undefined> {
    return this.entities.find((e) => e.id === id)
  }

  async getAll(): Promise<T[]> {
    return this.entities
  }

  async delete(entity: T): Promise<void> {
    if (entity.id == null) {
      throw new Error('Trying to delete an entity without an ID')
    }
    const currentIndex = this.entities.findIndex((e) => e.id === entity.id)
    if (currentIndex === -1) {
      throw new Error("Trying to delete entity that didn't exist")
    }
    this.entities.splice(currentIndex, 1)
    await this.storeAllToStorage()
  }

  async exists(id: number): Promise<boolean> {
    const entity = await this.get(id)
    return !!entity
  }
}
