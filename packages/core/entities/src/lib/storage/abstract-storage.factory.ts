import { Storage } from './storage'

/**
 * A factory that creates a singleton {@link Storage} object.
 */
export abstract class AbstractStorageFactory<T> {
  private static storage: Storage<any>

  static setStorage<T>(storage: T | any) {
    AbstractStorageFactory.storage = storage
  }

  static getStorage<T>(): Storage<T> {
    return this.storage
  }
}
