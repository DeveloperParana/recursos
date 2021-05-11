import { CustomElement, prop } from '../decorators'
import { css, html } from '../core'

@CustomElement('devpr-heading')
export class Heading extends HTMLElement {
  static get observedAttributes() {
    return ['size']
  }

  @prop()
  size = 100

  styles = css`
    h1 {
      margin-top: 20px;
      text-align: center;
      color: transparent;
      background: green url('/assets/images/devparana.svg');
      -webkit-background-clip: text;
      background-position: center;
      background-clip: text;
    }
    @media (max-width: 600px) {
      h1 {
        font-size: 64px;
      }
    }
  `

  template = html`<h1>${this.textContent}</h1>`

  heading: HTMLHeadingElement

  connectedCallback() {
    this.heading = this.querySelector('h1')
    this.setStyle()
  }

  attributeChangedCallback(name: string, prev: string, next: string) {
    if (name === 'size') this.setStyle()
  }
  setStyle() {
    this.heading.style.fontSize = `${this.size}px`
    this.heading.style.backgroundSize = `${this.size / 2}%`
  }
}
