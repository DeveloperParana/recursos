import { Emitter } from '../core'

/**
 * Usado em conjunto com `Emitter`
 * para emissão de eventos entre elementos
 *
 * @example
 * ```ts
 * ＠event()
 * onChange: Emitter
 *
 * ＠listen('form', 'onChange')
 * onChanged({ detail }: CustomEvent) {
 *   this.onChange.emit(detail)
 * }
 * ```
 *
 * @export
 * @returns
 */
export function event() {
  // return (protoOrDescriptor: PropertyDecorator & { key: PropertyKey }, name: string) => {
  return (target: any, propertyKey: string | symbol) => {
    const descriptor = {
      get(this: HTMLElement) {
        return new Emitter<string | symbol>(
          this,
          propertyKey !== undefined ? propertyKey.toString() : target.key
        )
      },
      enumerable: true,
      configurable: true,
    }

    if (propertyKey !== undefined) {
      // legacy TS decorator
      return Object.defineProperty(target, propertyKey, descriptor)
    } else {
      // TC39 Decorators proposal
      return {
        kind: 'method',
        placement: 'prototype',
        key: target.key,
        descriptor,
      }
    }
  }
}
