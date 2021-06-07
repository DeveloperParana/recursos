import { OutlinedButtonElement } from './outlined-button.element'

declare global {
  interface HTMLElementTagNameMap {
    'button[outlined-button]': OutlinedButtonElement
  }
}
