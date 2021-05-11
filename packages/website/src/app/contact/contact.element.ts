import {
  CustomElement,
  output,
  event,
  EventEmitter,
  outputEvent,
  html,
} from '@devpr/common/web'
import 'reflect-metadata'

@CustomElement('devpr-contact')
export class ContactElement extends HTMLElement {
  @event()
  onContact: EventEmitter

  innerHTML = html`
    <form is="web-form" data-submit="onSend">
      <devpr-heading>${this.title}</devpr-heading>
      <section>
        <label is="devpr-textfield">
          <input type="text" name="text" />
          <span>Text</span>
        </label>
      </section>
      <nav>
        <button is="devpr-button">Text</button>
        <button is="devpr-button" mode="outlined">Outlined</button>
      </nav>
      <section>
        <label is="devpr-checkbox">
          <input type="checkbox" name="checkbox" />
          <span>Checkbox</span>
        </label>
      </section>
      <footer>
        <button is="devpr-button" mode="outlined">Enviar</button>
      </footer>
    </form>
  `

  onSend(value: any) {
    this.onContact.emit(value)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'devpr-contact': ContactElement
  }
}
