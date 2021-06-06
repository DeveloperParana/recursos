import { BuiltInElement, css, html, prop } from '@devpr/common-web'

import './section.scss'

@BuiltInElement('devpr-section', 'section')
export class Section extends HTMLElement {
  static observedAttributes = ['id']

  styles = css``

  template = html``

  @prop()
  id = ''

  connectedCallback() {
    const header = this.querySelector('header')
    const content = this.querySelector('article')

    this.classList.add('section')
    header?.classList.add('section__header')
    content?.classList.add('section__content')
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'devpr-section': Section
  }
}
