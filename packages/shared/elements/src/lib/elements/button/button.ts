import { BuiltInElement } from '../../decorators'

import './button.scss'

@BuiltInElement('devpr-button', 'button')
export class Button extends HTMLButtonElement {
  connectedCallback() {
    this.classList.add('devpr-button')
  }
}
