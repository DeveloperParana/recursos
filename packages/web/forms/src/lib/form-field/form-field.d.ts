import { FormFieldElement } from './form-field.element'

declare global {
  interface HTMLElementTagNameMap {
    'form-field': FormFieldElement
  }

  interface HTMLElementEventMap {
    focused: EventWithTarget
    blurred: EventWithTarget
  }
}
