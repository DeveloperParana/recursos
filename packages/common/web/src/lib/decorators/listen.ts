import { noop } from '../core'

/**
 *
 *
 * @export
 * @template T
 * @param {string} selector
 * @param {string} event
 * @returns
 */
export function listen<T>(selector: string, event: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const connected = target.connectedCallback ?? noop

    target.connectedCallback = function (): void {
      const elements: HTMLElement[] = this.querySelectorAll(selector)

      const onEvent = (e: CustomEvent<T>) => {
        target[propertyKey].call(this, e)
      }

      elements.forEach((el) => el.addEventListener(event, onEvent))

      connected.call(this)
    }

    return descriptor
  }
}
