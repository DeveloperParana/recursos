import { prop, BuiltInElement, event, listen, Emitter } from '@devpr/common/web'

type TextFieldMode = 'filled' | 'outlined' | 'standard'

@BuiltInElement('devpr-textfield', 'label')
export class TextField extends HTMLLabelElement {
  static get observedAttributes() {
    return ['mode']
  }

  public input: HTMLInputElement

  public touched = false
  public focused = false

  @event()
  valueChange: Emitter<string>

  @prop()
  mode: TextFieldMode = 'filled'

  @listen('input', 'input', true)
  onChange(input: HTMLInputElement) {
    this.classList.add('touched')
    this.valueChange.emit(input.value)
    this.touched = true
  }

  @listen('input', 'focus')
  onFocus() {
    this.classList.add('focused')
    this.focused = true
  }

  @listen('input', 'blur')
  onBlur() {
    this.classList.remove('focused')
    this.focused = false
  }

  connectedCallback() {
    this.classList.add('devpr-textfield')
    this.classList.add(this.getMode(this.mode))

    const input = this.querySelector('input')

    if (!input) {
      throw Error('input element not founded')
    }

    input.setAttribute('placeholder', ' ')
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
  interface HTMLElementEventMap {
    valueChange: string
  }
}
