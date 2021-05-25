import { Config } from './config'
import { noop } from './noop'

export function Element({ selector, useShadow, options }: Config) {
  return function (target: CustomElementConstructor) {
    const connected = target.prototype.connectedCallback ?? noop

    target.prototype.connectedCallback = function (): void {
      const shadow = useShadow ? this.attachShadow({ mode: 'open' }) : this

      if (this.styles) {
        shadow.appendChild(this.styles)
      }

      if (this.template?.content) {
        shadow.appendChild(this.template.content.cloneNode(true))
      }

      if (this.connected) {
        this.connected.call(this)
      }

      connected.call(this)
    }

    customElements.define(selector, target, options)
  }
}
