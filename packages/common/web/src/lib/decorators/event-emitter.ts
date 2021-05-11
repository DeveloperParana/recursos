export interface EventOptions {
  kind: string
  placement: 'prototype'
  key: string
  descriptor: PropertyDescriptor
}

/**
 * Usado para emitir eventos de comunicação
 * entre um componente de baixo para cima
 * na árvore do dom
 *
 * @export
 * @class EventEmitter
 * @template T
 */
export class EventEmitter<T = any> {
  constructor(private target: HTMLElement, private eventName: string) {}

  emit(value: T, options?: EventOptions) {
    this.target.dispatchEvent(
      new CustomEvent<T>(this.eventName, { detail: value, ...options })
    )
  }
}

/**
 * Usado em conjunto com `EventEmitter`
 * para emissão de eventos entre elementos
 *
 * @export
 * @returns
 */
export function event() {
  return (protoOrDescriptor: any, name: string): any => {
    const descriptor = {
      get(this: HTMLElement) {
        return new EventEmitter(
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
