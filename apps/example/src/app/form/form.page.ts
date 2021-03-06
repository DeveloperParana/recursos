import { html, event, listen, Emitter, CustomElement } from '@devpr/common-web'

import './form.page.scss'

@CustomElement('form-page')
export class FormPage extends HTMLElement {
  @event()
  onSubmit: Emitter

  @listen('form', 'onSubmit')
  onSubmitted({ detail }: CustomEvent) {
    console.log('form-page onSubmit: ', detail)
    this.onSubmit.emit(detail)
  }

  @event()
  onChange: Emitter

  @listen('form', 'onChange')
  onChanged({ detail }: CustomEvent) {
    console.log('form-page onChange: ', detail)
    this.onChange.emit(detail)
  }

  @event()
  valueChange: Emitter

  @listen('label', 'valueChange')
  onValueChange({ detail }: CustomEvent) {
    console.log('form-page valueChange: ', detail)
    this.valueChange.emit(detail)
  }

  styles = ''

  template = html`
    <form is="devpr-form" data-submit="submit">
      <label is="devpr-textfield" standard>
        <input type="text" name="name" />
        <span>Nome</span>
      </label>
      <label is="devpr-textfield" filled>
        <input type="number" name="legs" />
        <span>Pernas</span>
      </label>
      <label is="devpr-textfield" filled>
        <input type="text" name="color" />
        <span>Cor</span>
      </label>

      <fieldset>
        <legend>Sexo</legend>

        <label is="devpr-radio">
          <input type="radio" name="sex" value="F" />
          <span>Feminino</span>
        </label>
        <label is="devpr-radio">
          <input type="radio" name="sex" value="M" />
          <span>Masculino</span>
        </label>
        <br />
      </fieldset>
      <footer>
        <button is="devpr-button" mode="outlined">Enviar</button>
      </footer>
    </form>
  `

  connectedCallback() {
    console.log('form')
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'form-page': FormPage
  }
  interface HTMLElementEventMap {
    onSubmit: unknown
    onChange: unknown
  }
}
