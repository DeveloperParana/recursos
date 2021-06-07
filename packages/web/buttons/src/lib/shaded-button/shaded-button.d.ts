import { ShadedButtonElement } from './shaded-button.element'

declare global {
  interface HTMLElementTagNameMap {
    'button[shaded-button]': ShadedButtonElement
  }
}
