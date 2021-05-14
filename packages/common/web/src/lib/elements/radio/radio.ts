import { BuiltInElement } from '../../decorators'

@BuiltInElement('devpr-radio', 'label')
export class RadioElement extends HTMLLabelElement {
  connectedCallback() {
    this.classList.add('devpr-radio')
  }
}
