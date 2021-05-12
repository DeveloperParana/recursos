import { css, CustomElement, eventDetail, html, query } from '@devpr/common/web'

import './app.element.scss'
import { ContactElement } from './contact'

@CustomElement('devpr-root')
export class AppElement extends HTMLElement {
  title = 'DevParaná'

  @query('header')
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

      <main class="wrapper">
        <section class="section">
          <div id="sectionA" class="section__content">
            <devpr-heading>${this.title}</devpr-heading>
          </div>

          <h3>Envie sua talk, palestre e leve sua xícara</h3>

          <div class="section__content">
            <devpr-c4p-button>C4P</devpr-c4p-button>
          </div>
        </section>

        <section class="section">
          <div class="section__header">
            <h2>Section #1 Header</h2>
          </div>

          <div id="sectionB" class="section__content"></div>
        </section>
      </main>
      <!-- <header>
        <nav>
          <a data-href="#sectionA" role="link">#1</a>

          <a data-href="#sectionB" role="link">#2</a>

          <a data-href="#sectionC" role="link">#3</a>

          <a data-href="#sectionD" role="link">#4</a>
        </nav>
      </header> -->
      <!-- <main>
        <devpr-contact data-on-contact="devpr-root.onContact"></devpr-contact>
      </main> -->
    `
  }

  connectedCallback() {
    // Do something
    const contact = this.querySelector('header')
    contact.addEventListener('onContact', eventDetail(this.onContact))

    setTimeout(() => {
      console.log('this.contact: ', this.widget)
    }, 1000)
  }

  onContact(detail: any) {
    console.log('app: ', detail)
  }
}
