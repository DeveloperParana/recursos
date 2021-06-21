import { Storage, AbstractStorageFactory } from '@devpr/core-entities'
import { ServerStorageImpl } from './server-storage.impl'

/**
 * A factory that creates a singleton {@link Storage} object.
 */
export class ServerStorageFactory<T> implements AbstractStorageFactory<T> {
  private storage: Storage<any>

  getStorage<T>(): Storage<T> {
    if (this.storage == null) {
      this.storage = new ServerStorageImpl()
    }
    return this.storage
  }
}
