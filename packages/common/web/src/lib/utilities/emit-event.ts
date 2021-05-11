import 'reflect-metadata'

const eventMetadataKey = Symbol('output')

/**
 * @deprecated use `@event` instead
 */
export function output(eventString: string) {
  return Reflect.metadata(eventMetadataKey, eventString)
}

function getEvent(target: any, propertyKey: string) {
  return Reflect.getMetadata(eventMetadataKey, target, propertyKey)
}

/**
 * @deprecated use `EventEmitter<T>` instead
 */
export function outputEvent<T>(detail: T) {
  const type = getEvent(this, 'output')
  this.dispatchEvent(new CustomEvent(type, { detail }))
}

