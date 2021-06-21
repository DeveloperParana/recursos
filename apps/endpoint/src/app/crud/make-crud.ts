import { NextFunction, Response, Request, Router } from 'express'
import { ServerStorageFactory } from '@devpr/server-storage'
import * as express from 'express'

export function makeCrud<T>(entityName: string, storagePath: string): Router {
  const router = express.Router()
  const factory = new ServerStorageFactory()
  const storage = factory.getStorage<T>()
  storage.init(entityName, storagePath)

  router.use(express.json())

  router.use((req: Request, res: Response, next: NextFunction) => {
    res.append('Content-Type', 'application/json')
    next()
  })

  router.get('/', async (req: Request, res: Response) => {
    res.send(await storage.getAll())
  })

  router.get('/:id', async (req: Request, res: Response) => {
    const entityForId = await storage.get(+req.params.id)
    if (entityForId == null) {
      return res.status(404).send()
    }
    res.send(entityForId)
  })

  router.post('/', async (req: Request, res: Response) => {
    const obj = req.body
    const storedObject = await storage.create(obj)
    res.status(201).send(storedObject)
  })

  router.put('/:id', async (req: Request, res: Response) => {
    const existingObject = await storage.get(+req.params.id)
    if (existingObject == null) {
      return res.status(404).send()
    }

    const obj = req.body
    if (obj.id !== +req.params.id) {
      obj.id = +req.params.id
    }
    const updatedObject = await storage.update(obj)
    res.status(200).send(updatedObject)
  })

  router.delete('/:id', async (req: Request, res: Response) => {
    const existingObject = await storage.get(+req.params.id)
    if (existingObject == null) {
      return res.status(404).send()
    }
    await storage.delete(existingObject)
    res.status(200).send()
  })

  return router
}
