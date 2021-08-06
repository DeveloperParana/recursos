import { DevprConfElement } from './devpr-conf.element'

declare global {
  interface HTMLElementTagNameMap {
    'devpr-conf': DevprConfElement
  }

  interface HTMLElementEventMap {
    onClick: ElementClickEvent<DevprConfElement>
  }
}
