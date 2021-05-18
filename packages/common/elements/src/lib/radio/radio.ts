import { BuiltInElement } from '@devpr/common/web'

@BuiltInElement('devpr-radio', 'label')
export class RadioElement extends HTMLLabelElement {
  connectedCallback() {
    this.classList.add('devpr-radio')
  }
}
