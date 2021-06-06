import {
  event,
  Emitter,
  serializeForm,
  BuiltInElement,
} from '@devpr/common-web'

/**
 * @description
 * Formulário integrado com handling de dados
 * Emite eventos de alteração e submissão com
 * os dados já serializados como objeto JSON.
 *
 * *WebComponent*
 *
 * @example
 * ```html
 * <form is="devpr-form"> </form>
 * ```
 *
 * @export
 * @template T
 * @extends {HTMLFormElement}
 * @class Form
 */
@BuiltInElement('devpr-form', 'form')
export class Form<T> extends HTMLFormElement {
  @event() onChange: Emitter<T>

  @event() onSubmit: Emitter<T>

  connectedCallback() {
    this.onchange = () => {
      const value = serializeForm<T>(this)
      this.onChange.emit(value)
    }

    this.onsubmit = (evt) => {
      evt.preventDefault()
      const value = serializeForm<T>(this)
      this.onSubmit.emit(value)
    }
  }
}
