import {
  css,
  html,
  event,
  listen,
  Emitter,
  Template,
  CustomElement,
} from '@devpr/common/web'

@CustomElement('slide-control')
export class Control extends Template {
  @event()
  onChange: Emitter

  @listen('#left', 'click', true)
  onLeftClick(button: HTMLButtonElement) {
    console.log(button, this.input.value)
  }

  @listen('#right', 'click', true)
  onRightClick(button: HTMLButtonElement) {
    console.log(button, this.input.value)
  }

  get input(): HTMLInputElement {
    return this.querySelector('input#current')
  }
  get left(): HTMLButtonElement {
    return this.querySelector('button#left')
  }
  get right(): HTMLButtonElement {
    return this.querySelector('button#right')
  }

  styles = css`
    slide-control {
      z-index: 10;
      position: fixed;
      right: 20px;
      bottom: 20px;
    }
    slide-control input {
      width: 30px;
      max-width: 30px;
      text-align: center;
      padding: 6px 12px;
      border: none;
      background-color: rgba(0, 0, 0, 0.1);
    }
    slide-control button {
      border: none;
      padding: 6px 12px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  `

  template = html`
    <button id="left">Left</button>
    <input id="current" value="1" aria-current="step" />
    <button id="right">Right</button>
  `

  connectedCallback() {
    if (+this.input.value <= 1) {
      this.left.disabled = true
    }
  }
}
