import { BuiltInElement, prop } from '@devpr/common/web'

import './section.scss'

@BuiltInElement('devpr-section', 'section')
export class DevPRSection extends HTMLElement {
  static observedAttributes = ['id']

  @prop()
  id: string

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
    'devpr-section': DevPRSection
  }
}
