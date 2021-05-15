import { CustomConstructor } from '../types/custom'
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
    target: CustomConstructor,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const connected = target.connectedCallback ?? noop

    target.connectedCallback = function (): void {
      attachListener(this, target, propertyKey)

      /**
       * @todo
       * O observer está fazendo criar listener duplicados
       * Verificar uma forma melhor de remover listeners
       * existentes e não duplica-los quando houverem
       * alterações no DOM
       */
      // const observer = new MutationObserver(() => {
      //   attachListener(this, target, propertyKey)
      // })

      // // observa alterações no elemento para manter-se ouvindo
      // observer.observe(this, { subtree: true, childList: true })

      // connectedCallback
      connected.call(this)
    }

    return descriptor
  }

  function attachListener(
    context: HTMLElement,
    target: CustomConstructor,
    propertyKey: string
  ) {
    const elements = context.querySelectorAll(selector)

    const onEvent = (e: CustomEvent<T>) => {
      target[propertyKey].call(context, getTarget ? e.target : e)
    }

    elements.forEach((el) => el.removeEventListener(event, onEvent))

    elements.forEach((el) => el.addEventListener(event, onEvent))
  }
}
