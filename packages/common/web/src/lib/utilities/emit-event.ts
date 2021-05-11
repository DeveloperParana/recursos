import 'reflect-metadata'

const eventMetadataKey = Symbol('output')

export function event(eventString: string) {
  return Reflect.metadata(eventMetadataKey, eventString)
}

export function getEvent(target: any, propertyKey: string) {
  return Reflect.getMetadata(eventMetadataKey, target, propertyKey)
}

export function outputEvent<T>(detail: T) {
  const type = getEvent(this, 'output')
  this.dispatchEvent(new CustomEvent(type, { detail }))
}
