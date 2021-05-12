import { css, CustomElement, eventDetail, html, query } from '@devpr/common/web'

import './app.element.scss'
import { ContactElement } from './contact'

@CustomElement('devpr-root')
export class AppElement extends HTMLElement {
  title = 'DevParaná'

  @query('devpr-root')
  widget: ContactElement

  get styles() {
    return css`
      :host {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      main {
        padding-top: 60px;
      }
    `
  }

  get template() {
    return html`
      <header is="devpr-header" link="/" text="${this.title}"></header>

      <main>
        <devpr-contact data-on-contact="devpr-root.onContact"></devpr-contact>
      </main>
    `
  }

  connectedCallback() {
    // Do something
    const contact = this.querySelector('devpr-contact')
    contact.addEventListener('onContact', eventDetail(this.onContact))

    setTimeout(() => {
      console.log('this.contact: ', this.widget)
    }, 1000)
  }

  onContact(detail: any) {
    console.log('app: ', detail)
  }
}
