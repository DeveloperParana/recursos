import { FormFieldBase } from './form-field-base'

declare global {
  interface HTMLElementTagNameMap {
    'form-field': FormFieldBase
  }

  type EventWithTarget<E = Event, T = HTMLElement> = E & {
    target: T
    currentTarget: T
  }
}
