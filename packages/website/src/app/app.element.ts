import { css, CustomElement, eventDetail, html, query } from '@devpr/common/web'

import './app.element.scss'
import { ContactElement } from './contact'

@CustomElement('devpr-root')
export class AppElement extends HTMLElement {
  title = 'mx'

  @query('header')
  widget: ContactElement

  get styles() {
    return css``
  }

  get template() {
    return html`
      <header is="devpr-header" text="DevParaná"></header>

      <main class="wrapper">
        <section class="section">
          <div id="home">
            <devpr-heading size="120"> MX </devpr-heading>
          </div>

          <div class="grid-container">
            <div>
              <p>
                Escolha um conteúdo que quer aprender, ensinar ou compartilhar
              </p>
            </div>
            <div>
              <p>
                Escreva sobre ele pensando em como transmiti-lo de forma
                didática
              </p>
            </div>
            <div>
              <p>
                Envie sua talk para nosso C4P e compartilhe seu conhecimento
              </p>
            </div>
            <div>
              <h2>Aprenda 2x!</h2>
              <div class="section__content">
                <devpr-c4p-button>C4P</devpr-c4p-button>
              </div>
            </div>
          </div>
        </section>

        <section is="devpr-section">
          <header>
            <h2>Como podemos ajudar?</h2>
          </header>
          <article>
            <p>
              Consequat quis minim qui exercitation Lorem quis magna aliquip
              exercitation. Adipisicing duis pariatur fugiat tempor enim est
              irure excepteur consectetur laboris voluptate. Ullamco anim
              officia labore consectetur veniam sunt est culpa fugiat.
            </p>
          </article>
        </section>

        <section is="devpr-section">
          <header>
            <h2>Como podemos ajudar?</h2>
          </header>
          <article id="iniciativa">
            <ol>
              <li>
                <devpr-ticked></devpr-ticked>
                Aplicativos criados sob medida
              </li>
              <li>
                <devpr-ticked></devpr-ticked>
                Banco de imagens úteis
              </li>
              <li>
                <devpr-ticked></devpr-ticked>
                Coleção de animações SVG
              </li>
              <li>
                <devpr-ticked></devpr-ticked>
                Repositório de GIFs
              </li>
              <li>
                <devpr-ticked></devpr-ticked>
                Apoio da comunidade
              </li>
            </ol>
          </article>
        </section>
        <section is="devpr-section">
          <header>
            <h2>Grave sua voz</h2>
          </header>
          <article id="movimento">
            <p>
              Est eu exercitation irure nostrud exercitation velit minim laboris
              in deserunt pariatur eu. Aute duis ipsum aliqua adipisicing ut
              quis. Lorem dolore aliquip mollit reprehenderit dolor consequat
              minim Lorem. Irure velit culpa amet sunt laborum adipisicing
              fugiat ex tempor irure amet culpa.
            </p>
          </article>
        </section>
        <section is="devpr-section">
          <header>
            <h2>Use animações SVG</h2>
          </header>
          <article id="eventos">
            <p>
              Est eu exercitation irure nostrud exercitation velit minim laboris
              in deserunt pariatur eu. Aute duis ipsum aliqua adipisicing ut
              quis. Lorem dolore aliquip mollit reprehenderit dolor consequat
              minim Lorem. Irure velit culpa amet sunt laborum adipisicing
              fugiat ex tempor irure amet culpa.
            </p>
          </article>
        </section>
      </main>
    `
  }

  connectedCallback() {
    const header = this.querySelector('header')

    const onClick = ({ detail }: CustomEvent) => {
      const section = this.querySelector(detail)
      section.scrollIntoView({ behavior: 'smooth' })
    }

    header.addEventListener('onClick', onClick)

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
