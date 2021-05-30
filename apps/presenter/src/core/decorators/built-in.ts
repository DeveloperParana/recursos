import { parseValue, lifecycle, cloneTemplate } from '../utilities'
import { Component } from '../interfaces/component'
import { BuiltInOptions } from '../interfaces'

export function BuiltIn({ selector, ...opts }: BuiltInOptions) {
  return function (target: CustomElementConstructor) {
    const connected = lifecycle.conn(target)
    const disconnected = lifecycle.disconn(target)
    const attribute = lifecycle.attr(target)

    ;(target as unknown as Component).selector = selector

    const styles = (target as unknown as Component)?.styles

    const template = (target as unknown as Component)?.template

    const observed = (target as unknown as Component)?.observed

    ;(target as any).observedAttributes = observed

    target.prototype.attributeChangedCallback = function (
      name: string,
      prev: string,
      next: string
    ) {
      this[name] = parseValue(next)
      if (this.attributeChanged) {
        this.attributeChanged(name, prev, parseValue(next))
      }
      attribute.call(name, prev, parseValue(next))
    }

    target.prototype.connectedCallback = function (): void {
      if (styles || this.styles) {
        this.appendChild(styles || this.styles)
      }

      if (template?.content || this.template?.content) {
        this.appendChild(cloneTemplate(template || this.template))
      }

      if (this.connected) {
        this.connected.call(this)
      }

      connected.call(this)
    }
    target.prototype.disconnectedCallback = function (): void {
      disconnected.call(this)
    }

    customElements.define(selector, target, { extends: opts.extends })
  }
}
