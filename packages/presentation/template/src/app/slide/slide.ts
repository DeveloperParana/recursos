import { BuiltInElement, html } from '@devpr/common/web'

let NEXT_SLIDE = 1

@BuiltInElement('devpr-slide', 'section')
export class Slide extends HTMLElement {
  template = html`
    <slot name="header"></slot>
    <slot name="content"></slot>
  `

  connectedCallback() {
    this.setAttribute('id', '' + NEXT_SLIDE++)

    this.classList.add('section')
    const header = this.querySelector('[slot="header"]')
    if (header) {
      header.classList.add('section__header')
    }

    const content = this.querySelector('[slot="content"]')
    if (content) {
      content.classList.add('section__content')
    }
  }
}
