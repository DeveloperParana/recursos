import { css, event, Element, html, listen, Emitter } from '../core'

@Element({
  selector: 'text-field',
  useShadow: false,
})
export class TextField extends HTMLElement {
  public static observedAttributes = []

  styles = css`
    text-field {
      --primary: #6200ee;
      --error: #b00020;
      --surface: #ffffff;
      --outline-and-divider: rgba(0, 0, 0, 0.04);
      --on-surface-high: rgba(0, 0, 0, 0.87);
      --on-surface-medium: rgba(0, 0, 0, 0.6);
      --on-surface-disabled: rgba(0, 0, 0, 0.38);

      position: relative;
      display: inline-block;
      font-size: 16px;
      line-height: 1.5;
      width: 300px;
      max-height: 56px;
      margin-bottom: 24px;

      padding-top: 6px;
    }
    /* Input, Textarea */
    text-field.filled input,
    text-field.filled textarea {
      display: block;
      box-sizing: border-box;
      margin: 0;
      border: none;
      border-top: solid 24px transparent;
      border-bottom: solid 1px var(--on-surface-medium);
      border-radius: 4px 4px 0 0;
      padding: 0 12px 7px;
      width: 100%;
      height: inherit;
      color: var(--on-surface-high);
      -webkit-text-fill-color: currentColor; /* Safari */
      background-color: var(--outline-and-divider);
      box-shadow: none; /* Firefox */
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      caret-color: var(--primary);
      transition: border-bottom 0.2s, background-color 0.2s;
    }

    /* Span */
    text-field.filled input + label,
    text-field.filled textarea + label {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      box-sizing: border-box;
      padding: 7px 12px 0;
      color: var(--on-surface-medium);
      font-size: 75%;
      line-height: 18px;
      pointer-events: none;
      transition: color 0.2s, font-size 0.2s, line-height 0.2s;
    }

    /* Underline */
    text-field.filled input + label::after,
    text-field.filled textarea + label::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--primary);
      transform-origin: bottom center;
      transform: scaleX(0);
      transition: transform 0.3s;
    }

    /* Hover */
    text-field.filled:hover input,
    text-field.filled:hover textarea {
      border-bottom-color: var(--on-surface-high);
      background-color: rgba(0, 0, 0, 0.08);
    }

    /* Placeholder-shown */
    text-field.filled input:not(:focus):placeholder-shown + label,
    text-field.filled textarea:not(:focus):placeholder-shown + label {
      font-size: inherit;
      line-height: 48px;
    }

    /* Focus */
    text-field.filled input:focus,
    text-field.filled textarea:focus {
      outline: none;
    }

    text-field.filled input:focus + label,
    text-field.filled textarea:focus + label {
      color: var(--primary);
    }

    /* Error state */

    text-field.filled.touched input:invalid + label,
    text-field.filled.touched textarea:invalid + label {
      color: var(--error);
    }
    text-field.filled.touched input:invalid + label::after,
    text-field.filled.touched textarea:invalid + label::after {
      background-color: var(--error);
    }

    text-field.filled input:focus + label::after,
    text-field.filled textarea:focus + label::after {
      transform: scale(1);
    }

    /* Disabled */
    text-field.filled input:disabled,
    text-field.filled textarea:disabled {
      border-bottom-color: var(--outline-and-divider);
      color: var(--on-surface-disabled);
      background-color: var(--outline-and-divider);
    }

    text-field.filled input:disabled + label,
    text-field.filled textarea:disabled + label {
      color: var(--on-surface-disabled);
    }
  `

  public input: HTMLInputElement

  public touched = false
  public focused = false

  @event()
  valueChange: Emitter<string>

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
    this.classList.add('filled')

    const input = this.querySelector('input')

    if (!input) {
      throw Error('input element not founded')
    }

    input.setAttribute('placeholder', ' ')
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'text-field': TextField
  }
}
