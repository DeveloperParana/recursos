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
export class Emitter<T = unknown> {
  constructor(private target: HTMLElement, private eventName: string) {}

  emit<D = unknown>(value: D | T, options?: EventOptions) {
    this.target.dispatchEvent(
      new CustomEvent<D | T>(this.eventName, { detail: value, ...options })
    )
  }
}
