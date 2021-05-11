import { noop, tmpl } from '../core'

export function render(html: string) {
  return (this.innerHTML = html)
}

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
