import { BuiltInElement, prop } from '@devpr/common/web'

type ButtonMode = 'text' | 'outlined'

/**
 * Botão integrado com opção de aparência
 * em dois modos: `text` e `outlined`
 *
 * @export
 * @class Button
 * @extends {HTMLButtonElement}
 */
@BuiltInElement('devpr-button', 'button')
export class Button extends HTMLButtonElement {
  static get observedAttributes() {
    return ['mode']
  }

  @prop()
  mode: ButtonMode

  connectedCallback() {
    this.classList.add(this.getMode(this.mode))
  }

  getMode(mode: ButtonMode) {
    switch (mode) {
      case 'outlined':
        return 'devpr-button-outlined'
      case 'text':
      default:
        return 'devpr-button-text'
    }
  }
}
