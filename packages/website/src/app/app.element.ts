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

      <main role="main" class="wrapper" tabindex="0">
        <section is="devpr-section">
          <article>
            <devpr-heading size="480"> MX </devpr-heading>
          </article>
        </section>

        <section is="devpr-section">
          <header>
            <h2>Apps</h2>
          </header>
          <article id="apps">
            <img src="/assets/images/apps-como-recursos-devpr.svg" alt="apps como recursos" />
            <p>
              Aplicativos disponíveis que facilitam a criação de slides e
              organização de eventos
            </p>
          </article>
        </section>

        <section is="devpr-section">
          <header>
            <h2>Apoio</h2>
          </header>
          <article id="apoio">
            <img src="/assets/images/apoio-e-feedbacks-devpr.svg" alt="apoio e feedbacks devpr" />
            <p>
              Apoio na preparação, feedbacks e mentorias com membros experientes
              da comunidade
            </p>
          </article>
        </section>
        <section is="devpr-section">
          <header>
            <h2>Espaço</h2>
          </header>
          <article id="espaco">
            <img src="/assets/images/espaco-e-divulgacao-devpr.svg" alt="espaco e divulgacao devpr" />
            <p>
              Todos temos o direito de espaço para propagação de conhecimento
            </p>
          </article>
        </section>
        <section is="devpr-section">
          <header>
            <h2>Comunidade</h2>
          </header>
          <article id="comunidade">
            <img src="/assets/images/comunidade-devpr.svg" alt="comunidade devpr" />
            <p>Comunidade sempre disposta a participar</p>
          </article>
        </section>
        <section is="devpr-section">
          <header>
            <h2>Membro</h2>
          </header>
          <article id="membro">
            <img src="/assets/images/membro-decolando-devpr.svg" alt="membro decolando devpr" />
            <p>Tudo isso pra que você, membro da nossa comunidade.</p>
            <p>Decole e faça com que decolem!</p>
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
