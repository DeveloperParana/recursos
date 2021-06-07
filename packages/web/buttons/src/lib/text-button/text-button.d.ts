import { TextButtonElement } from './text-button.element'

declare global {
  interface HTMLElementTagNameMap {
    'button[text-button]': TextButtonElement
  }
}
