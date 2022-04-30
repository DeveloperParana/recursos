import { FormFieldBase } from '../form-field-base'
import {
  css,
  html,
  event,
  listen,
  Emitter,
  Connected,
  Component,
  Autonomous,
} from '@devpr/web-core'

let NEXT_ID = 0

@Autonomous({
  selector: 'form-field',
  mode: 'open',
})
export class FormFieldElement
  extends Component(FormFieldBase)
  implements Connected
{
  static observed = []

  private _dirty: boolean

  private _touched: boolean

  @event()
  focused: Emitter<HTMLInputElement>

  @event()
  blurred: Emitter<HTMLInputElement>

  @event()
  valueChange: Emitter<string>

  @listen('input', 'focus')
  onFocused(event: EventWithTarget) {
    this.focused.emit(event.target)
    this.classList.add('focused')
  }

  @listen('input', 'blur')
  onBlured(event: EventWithTarget) {
    this.blurred.emit(event.target)
    this.classList.remove('focused')
  }

  @listen('input', 'change')
  onChanged(event: EventWithTarget<InputEvent, HTMLInputElement>) {
    console.log(event)
    if (!this._dirty) {
      this._dirty = true
      this.classList.add('dirty')
    }
    this.handleChange(event.target)
  }

  @listen('input', 'input')
  onInputed(event: EventWithTarget<InputEvent, HTMLInputElement>) {
    this.handleChange(event.target)
    this.valueChange.emit(event.target.value)
  }

  handleChange(target: HTMLInputElement) {
    if (!this._touched) {
      this._touched = true
      this.classList.add('touched')
    } else {
      this.checkValidate(target)
    }
  }

  checkValidate(target: HTMLInputElement) {
    if (this._dirty && this._touched) {
      if (!target.checkValidity()) {
        this.classList.add('invalid')
        this.classList.remove('valid')
      } else {
        this.classList.remove('invalid')
        this.classList.add('valid')
      }
    }
  }

  styles = css`
    :host {
      width: 240px;
      position: relative;
      margin-bottom: 26px;
      display: inline-flex;
      flex-direction: column;
    }

    .text-field {
      display: inline-flex;
      flex-direction: row;
      align-items: center;

      box-sizing: border-box;

      background: var(--white);

      border-color: var(--grey-03);
      border-style: solid;
      border-width: 2px;

      border-radius: 8px;

      transition: border-color 150ms ease-in-out;
    }

    ::slotted(input),
    ::slotted(input)::placeholder {
      font-size: calc(var(--manrope-body-1-font-size) * 1px);
      text-decoration: var(--manrope-body-1-text-decoration);
      font-family: var(--manrope-body-1-font-family);
      font-weight: var(--manrope-body-1-font-weight);
      font-style: var(--manrope-body-1-font-style);
      font-stretch: var(--manrope-body-1-font-stretch);
      letter-spacing: var(--manrope-body-1-letter-spacing);
      line-height: calc(var(--manrope-body-1-line-height) * 1px);
      text-transform: var(--manrope-body-1-text-case);

      font-feature-settings: 'tnum' on, 'lnum' on;
    }

    ::slotted(input) {
      outline: 0;
      width: 100%;
      height: 48px;
      padding: 0px 12px;
      border-radius: 8px;
      border-color: transparent;
      color: var(--black);
    }

    ::slotted(input)::placeholder {
      color: var(--grey-02);
      transition: color 150ms ease-in-out;
    }

    ::slotted(input:focus)::placeholder {
      color: var(--grey-04);
    }

    ::slotted(label),
    ::slotted(small) {
      text-decoration: var(--manrope-caption-text-decoration);
      font-family: var(--manrope-caption-font-family);
      font-weight: var(--manrope-caption-font-weight);
      font-style: var(--manrope-caption-font-style);
      font-stretch: var(--manrope-caption-font-stretch);
      letter-spacing: var(--manrope-caption-letter-spacing);
      line-height: calc(var(--manrope-caption-line-height) * 1px);
      text-transform: var(--manrope-caption-text-case);
    }

    ::slotted(label) {
      margin: 0px 4px;
      padding: 2px 4px;
      border-radius: 4px;
      display: inline-flex;
      color: var(--grey-05);
      transition: color 150ms ease-in-out;
    }

    ::slotted(output),
    ::slotted(small) {
      left: 8px;
      right: 8px;
      height: 16px;
      bottom: -18px;
      font-size: 14px;
      position: absolute;
    }

    ::slotted(small) {
      display: inline-flex;
      color: var(--grey-04);
      transition: visibility 200ms ease-out 200ms, opacity 200ms ease-out;
    }

    ::slotted(output) {
      visibility: hidden;
      opacity: 0;
      display: inline-flex;
      color: var(--red-03);
      transition: visibility 200ms ease-in 200ms, opacity 200ms ease-out;
    }

    :host(.focused) .text-field {
      border-color: var(--blue-03);
    }

    :host(.focused) ::slotted(label) {
      color: var(--blue-03);
    }

    :host(.invalid) .text-field {
      border-color: var(--red-03);
    }
    :host(.invalid) ::slotted(label) {
      color: var(--red-03);
    }
    :host(.invalid) ::slotted(output) {
      visibility: visible;
      opacity: 1;
    }
    :host(.invalid) ::slotted(small) {
      visibility: hidden;
      opacity: 0;
    }

    :host(.valid) .text-field {
      border-color: var(--green-04);
    }
    :host(.valid) ::slotted(label) {
      color: var(--green-05);
    }
  `

  template = html`
    <slot name="label"></slot>
    <span class="text-field">
      <slot name="input"></slot>
      <slot name="bs-icon"></slot>
    </span>
    <slot name="small"></slot>
    <slot name="output"></slot>
  `

  connected() {
    const label = this.querySelector('label')
    const input = this.querySelector('input')
    const id = `form-field-id${NEXT_ID++}`
    input.setAttribute('id', id)
    label.setAttribute('for', id)
  }
}
