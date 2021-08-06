import { EyeHoleElement } from './eye-hole.element'

declare global {
  interface HTMLElementTagNameMap {
    'eye-hole': EyeHoleElement
  }

  interface HTMLElementEventMap {
    onClick: ElementClickEvent<EyeHoleElement>
  }
}
