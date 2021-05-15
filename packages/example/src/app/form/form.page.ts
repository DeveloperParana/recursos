import { html, event, listen, Emitter, CustomElement } from '@devpr/common/web'

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

  innerHTML = html`
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
      <label is="devpr-checkbox">
        <input type="checkbox" name="check" value="concordo" />
        <span>Aceito os termos</span>
      </label>
      <footer>
        <button is="devpr-button">Enviar</button>
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
}
