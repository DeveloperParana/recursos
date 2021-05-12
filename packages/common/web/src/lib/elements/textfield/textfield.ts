import { prop, BuiltInElement, event } from '../../decorators'
import { eventTarget } from '../../utilities'
import { Emitter } from '../../core'

type TextFieldMode = 'filled' | 'outlined' | 'standard'

@BuiltInElement('devpr-textfield', 'label')
export class TextField extends HTMLLabelElement {
  static get observedAttributes() {
    return ['mode']
  }

  @event()
  valueChange: Emitter<string>

  @prop()
  mode: TextFieldMode = 'filled'

  public input: HTMLInputElement

  public touched = false
  public focused = false

  connectedCallback() {
    this.classList.add('devpr-textfield')
    this.classList.add(this.getMode(this.mode))
    this.input = this.handle(this.querySelector('input'))
  }

  handle(input: HTMLInputElement) {
    if (!input) {
      throw Error('input element not founded')
    }
    input.setAttribute('placeholder', ' ')
    input.oninput = eventTarget(this.onChange.bind(this))
    input.onfocus = eventTarget(this.onFocus.bind(this))
    input.onblur = eventTarget(this.onBlur.bind(this))
    return input
  }

  onChange(input: HTMLInputElement) {
    this.classList.add('touched')
    this.valueChange.emit(input.value)
    this.touched = true
  }

  onFocus(input: HTMLInputElement) {
    this.classList.add('focused')
    this.focused = true
  }

  onBlur(input: HTMLInputElement) {
    this.classList.remove('focused')
    this.focused = false
  }

  getMode(mode: TextFieldMode) {
    switch (mode) {
      case 'outlined':
        return 'outlined'
      case 'filled':
      default:
        return 'filled'
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'devpr-textfield': TextField
  }
}
