import { Template } from '../abstracts'
import { noop, tmpl } from '../core'

type TemplateConstructor = CustomElementConstructor & typeof Template

/**
 * Este decorator facilita a legibilidade ao
 * declarar um custom element
 *
 * *WebComponent*
 *
 * @example
 * ```ts
 * ＠CustomElement('web-element')
 * class WebElement extends HTMLElement { }
 *
 * ＠CustomElement('web-text', { extends: 'p' })
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
  return function (target: TemplateConstructor) {
    target['selector'] = selector

    /**
     * @todo
     */
    // const template = document.createElement('template')
    // const element = document.querySelector(selector)
    // template.append(document.createElement('slot'))
    // template.setAttribute('id', selector)
    // document.body.append(template)
    // document.body.insertBefore(template.content.cloneNode(true), element)

    if (tmpl(selector)) {
      const connected = target.prototype.connectedCallback ?? noop

      target.prototype.connectedCallback = function (): void {
        const template = tmpl(selector).content.cloneNode(true)
        this.innerHTML = this.styles + this.template
        console.log(template)

        this.attachShadow({ mode: 'open' }).append(template)
        connected.call(this)
      }
    }

    customElements.define(selector, target, options)
  }
}
