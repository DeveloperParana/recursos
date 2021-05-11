import { BuiltInElement, prop } from '@devpr/common/web'

type ButtonMode = 'text' | 'outlined'

@BuiltInElement('devpr-button', 'button')
export class DevPRButton extends HTMLButtonElement {
  static get observedAttributes() {
    return ['mode']
  }

  @prop()
  mode: ButtonMode

  connectedCallback() {
    console.log('button');

    this.classList.add(this.getMode(this.mode))
  }

  getMode(mode: ButtonMode) {
    switch (mode) {
      case 'outlined':
        return 'devpr-button-outlined'
      case 'text':
        return 'devpr-button-text'
      default:
        return 'devpr-button-text'
    }
  }
}
