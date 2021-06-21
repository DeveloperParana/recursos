/**
 * Interface representing an object storage.
 *
 * The storage is organized by entity. An entity is identified by its name. An entiyt name can, for example, be
 * 'car', 'user', 'chair', ...
 */
export interface Storage<T> {
  /**
   * Initialize the storage for the given entity name.
   *
   * This should take care of all setup and initialization efforts.
   */
  init(entityName: string, storagePath: string): Promise<void>

  create(entity: T): Promise<T>

  getAll(): Promise<T[]>

  get(id: number): Promise<T | undefined>

  update(entity: T): Promise<T>

  delete(entity: T): Promise<void>

  exists(id: number): Promise<boolean>
}
