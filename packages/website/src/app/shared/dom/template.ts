import { tmpl } from './html'
import 'reflect-metadata'

export const noop = () => null

/**
 * Este decorator facilita a legibilidade ao
 * declarar um custom element
 *
 * @export
 * @param {string} selector
 * @param {ElementDefinitionOptions} [options]
 * @returns
 */
export function CustomElement(
  selector: string,
  options?: ElementDefinitionOptions
) {
  return function (target: CustomElementConstructor) {
    if (tmpl(selector)) {
      const connected = target.prototype.connectedCallback ?? noop
      const template = tmpl(selector).content.cloneNode(true)

      target.prototype.connectedCallback = function (): void {
        this.innerHTML = this.styles + this.template
        this.attachShadow({ mode: 'open' }).append(template)
        connected.call(this)
      }
    }

    customElements.define(selector, target, options)
  }
}

/**
 * Esta função é utilizada como decorator
 * acima da propriedade que você deseja
 * marcar como entrada de dados em um
 * custom element
 *
 * @example
 * Marcando o atributo `text` como entrada de strings
 * ```
 * @property
 * text: string
 * ```
 *
 * @export
 * @returns {*}
 */
export function property(): any {
  return (target: any) => {
    target.attributeChangedCallback = function (
      name: string,
      prev: string,
      next: string
    ) {
      this[name] = next
    }
  }
}

/**
 *
 *
 * @export
 * @abstract
 * @class WebComponent
 * @extends {HTMLElement}
 */
// export abstract class WebComponent extends HTMLElement {
//   _shadowRoot: ShadowRoot

//   set shadowRoot(value: ShadowRoot) {
//     this._shadowRoot = value
//   }

//   get shadowRoot() {
//     return this._shadowRoot
//   }

//   constructor(html = '', mode: ShadowRootMode = 'open') {
//     super()

//     if (html) {
//       const template = document.createElement('template')
//       template.innerHTML = html

//       this.shadowRoot = this.attachShadow({ mode })
//       this.shadowRoot.appendChild(template.content.cloneNode(true))
//     }
//   }
// }
