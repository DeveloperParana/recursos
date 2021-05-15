import { noop, tmpl } from '../core'

/**
 * Este decorator facilita a legibilidade ao
 * declarar um custom element
 *
 * *WebComponent*
 *
 * @example
 * ```ts
 * _@CustomElement('web-element')
 * class WebElement extends HTMLElement { }
 *
 * _@CustomElement('web-text', { extends: 'p' })
 * class WebElement extends HTMLParagraphElement { }
 * ```
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

      target.prototype.connectedCallback = function (): void {
        const template = tmpl(selector).content.cloneNode(true)
        this.innerHTML = this.styles + this.template

        this.attachShadow({ mode: 'open' }).append(template)
        connected.call(this)
      }
    }

    customElements.define(selector, target, options)
  }
}
