import { css, Element, html, prop } from '../core'

@Element({ selector: 'devpr-icon', useShadow: true })
export class Icon extends HTMLElement {
  static observedAttributes = ['type', 'name', 'color']

  @prop()
  path = 'assets/icons.svg'

  @prop()
  name: string

  @prop()
  color: string

  styles = css`
    :host {
      width: 24px;
      height: 24px;
      display: inline-flex;
    }
  `
  template = html`<svg><use xlink:href=""></use></svg>`

  connectedCallback() {
    this.style.setProperty('color', this.color)

    const use = this.shadowRoot.querySelector('use')
    const icon = `${this.path}#${this.name}`
    queueMicrotask(() => {
      use.setAttribute('xlink:href', icon)
    })
  }
}
