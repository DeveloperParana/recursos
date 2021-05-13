import {
  css,
  html,
  listen,
  eventDetail,
  CustomElement,
} from '@devpr/common/web'

import './app.element.scss'

@CustomElement('devpr-root')
export class AppElement extends HTMLElement {
  title = 'mx'

  @listen('devpr-header', 'onClick')
  header({ detail }: CustomEvent<string>) {
    const section = this.querySelector(detail)
    section.scrollIntoView({ behavior: 'smooth' })
  }

  get styles() {
    return css``
  }

  get template() {
    return html`
      <devpr-header text="DevParaná"></devpr-header>

      <main role="main" class="wrapper" tabindex="0">
        <section is="devpr-section">
          <article id="home">
            <div>
              <devpr-heading> DevPR </devpr-heading>
            </div>
            <h2>Member Experience</h2>
          </article>
        </section>

        <section is="devpr-section">
          <header>
            <h2>Apps</h2>
          </header>
          <article id="apps">
            <img
              src="assets/images/apps-como-recursos-devpr.svg"
              alt="apps como recursos"
            />
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
            <img
              src="assets/images/apoio-e-feedbacks-devpr.svg"
              alt="apoio e feedbacks devpr"
            />
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
            <img
              src="assets/images/espaco-e-divulgacao-devpr.svg"
              alt="espaco e divulgacao devpr"
            />
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
            <img
              src="assets/images/comunidade-devpr.svg"
              alt="comunidade devpr"
            />
            <p>Comunidade sempre disposta a participar</p>
          </article>
        </section>
        <section is="devpr-section">
          <header>
            <h2>Membro</h2>
          </header>
          <article id="membro">
            <img
              src="assets/images/membro-decolando-devpr.svg"
              alt="membro decolando devpr"
            />
            <p>Tudo isso pra que você decole!</p>
            <p>E ajude pra que também decolem.</p>
            <div>Compartilhe 😉</div>
          </article>
        </section>
      </main>
    `
  }

  connectedCallback() {
    const contact = this.querySelector('header')
    contact.addEventListener('onContact', eventDetail(this.onContact))
  }

  onContact(detail: any) {
    console.log('app: ', detail)
  }
}
