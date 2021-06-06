import { BuiltInElement } from '@devpr/common-web'

/**
 * Checkbox integrado, usa o elemento label
 * adicionando estilos ao input checkbox
 * inserido dentro do seu escopo
 *
 * @export
 * @class CheckboxElement
 * @extends {HTMLLabelElement}
 */
@BuiltInElement('devpr-checkbox', 'label')
export class CheckboxElement extends HTMLLabelElement {
  connectedCallback() {
    this.classList.add('devpr-checkbox')
  }
}
