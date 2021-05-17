import { noop } from '../core'

/**
 * Decorator para escuta de eventos por
 * seletores e opção que determina caso
 * deva retornar o evento ou seu target
 *
 * @example
 * ```ts
 * ＠listen('form', 'onChange')
 * onChanged({ detail }: CustomEvent) {
 *   // Faz algo
 * }
 * ```
 *
 * @export
 * @template T
 * @param {string} selector
 * @param {string} event
 * @returns
 */
export function listen<T>(
  selector: keyof HTMLElementTagNameMap | string,
  event: keyof HTMLElementEventMap,
  getTarget = false
) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const connected = target.connectedCallback ?? noop

    target.connectedCallback = function (): void {
      const elements: HTMLElement[] = this.querySelectorAll(selector)

      const onEvent = (e: CustomEvent<T>) => {
        target[propertyKey].call(this, getTarget ? e.target : e)
      }

      elements.forEach((el) => el.addEventListener(event, onEvent))

      connected.call(this)
    }

    return descriptor
  }
}
