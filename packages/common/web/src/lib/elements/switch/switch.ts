import { BuiltInElement } from '../../decorators'

@BuiltInElement('devpr-switch', 'label')
export class SwitchElement extends HTMLLabelElement {
  connectedCallback() {
    this.classList.add('devpr-switch')
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'devpr-switch': SwitchElement
  }
}
