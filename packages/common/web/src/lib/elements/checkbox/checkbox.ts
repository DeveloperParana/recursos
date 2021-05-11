import { BuiltInElement } from '../../decorators'

@BuiltInElement('devpr-checkbox', 'label')
export class CheckboxElement extends HTMLLabelElement {
  connectedCallback() {
    this.classList.add('devpr-checkbox')
  }
}
