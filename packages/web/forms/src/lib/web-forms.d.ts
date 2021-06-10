import { FormFieldBase } from './form-field-base'

declare global {
  type EventWithTarget<E = Event, T = HTMLElement> = E & {
    target: T
    currentTarget: T
  }
}
