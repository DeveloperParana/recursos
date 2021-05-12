import { Emitter } from '../core'

/**
 * Usado em conjunto com `Emitter`
 * para emissão de eventos entre elementos
 *
 * @export
 * @returns
 */
export function event() {
  return (protoOrDescriptor: any, name: string): any => {
    const descriptor = {
      get(this: HTMLElement) {
        return new Emitter(
          this,
          name !== undefined ? name : protoOrDescriptor.key
        )
      },
      enumerable: true,
      configurable: true,
    }

    if (name !== undefined) {
      // legacy TS decorator
      return Object.defineProperty(protoOrDescriptor, name, descriptor)
    } else {
      // TC39 Decorators proposal
      return {
        kind: 'method',
        placement: 'prototype',
        key: protoOrDescriptor.key,
        descriptor,
      }
    }
  }
}
