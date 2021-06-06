import { CustomConstructor } from '../types'
import { noop } from '../utilities'
import 'reflect-metadata'

/**
 * Esta função é utilizada como decorator
 * acima da propriedade que você deseja
 * marcar como entrada de dados em um
 * custom element
 *
 * Marcando o atributo `text` como entrada de strings
 * @example
 * ```ts
 * ＠prop()
 * text: string
 * ```
 *
 * @export
 * @returns {*}
 */
export function query<T extends HTMLElement>(
  selector: keyof HTMLElementTagNameMap | string
): any {
  return (target: CustomConstructor, propertyKey: string) => {
    const connected = target.connectedCallback ?? noop

    target.connectedCallback = function (): void {
      let element: HTMLElement | undefined

      const el = this as HTMLElement
      element = el.querySelector<T>(selector)

      if (!!element == false) {
        element = el?.shadowRoot?.querySelector<T>(selector)
      }

      this[propertyKey] = element

      connected.call(this)
    }
  }
}

/**
 *
 *
 * @export
 * @template T
 * @param {(keyof HTMLElementTagNameMap | string)} selector
 * @returns
 */
export function queryAll<T extends HTMLElement>(
  selector: keyof HTMLElementTagNameMap | string
) {
  return function (target: CustomConstructor, propertyKey: string) {
    const connected = target.connectedCallback ?? noop

    target.connectedCallback = function (): void {
      let element: NodeListOf<HTMLElement> | undefined

      const el = this as HTMLElement
      element = el.querySelectorAll<T>(selector)

      if (!!element == false) {
        element = el?.shadowRoot?.querySelectorAll<T>(selector)
      }

      this[propertyKey] = element

      connected.call(this)
    }
  }
}
