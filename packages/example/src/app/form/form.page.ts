import { html, event, listen, Emitter, CustomElement } from '@devpr/common/web'

import './form.page.scss'

@CustomElement('form-page')
export class FormPage extends HTMLElement {
  @event()
  onCreate = Emitter

  @listen('form', 'onSubmit')
  onSubmit({ detail }: CustomEvent) {
    console.log(detail)
  }

  @listen('form', 'onChange')
  onChange({ detail }: CustomEvent) {
    console.log(detail)
  }

  @listen('label', 'valueChange')
  onValueChange({ detail }: CustomEvent) {
    console.log(detail)
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
    // this.querySelectorAll('label').forEach((textfield) =>
    //   textfield.addEventListener('valueChange', console.log)
    // )
  }

  attributeChangedCallback(name: string, prev: string, next: string) {
    this[name] = next
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'form-page': FormPage
  }
}
