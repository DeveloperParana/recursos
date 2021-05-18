import { css, html, listen, CustomElement } from '@devpr/common/web'

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
        <section is="devpr-section" id="home">
          <article>
            <div>
              <devpr-heading> DevPR </devpr-heading>
            </div>
            <h2>Member Experience</h2>
          </article>
        </section>

        <section is="devpr-section" id="apps">
          <header>
            <h2>Apps</h2>
          </header>
          <article>
            <img src="assets/images/kanban.svg" alt="apps como recursos" />
            <p>
              Facilitadores para preparação de talks e organização de meetups
            </p>
            <p>Preocupe-se apenas com o conteúdo</p>
          </article>
        </section>

        <section is="devpr-section" id="apoio">
          <header>
            <h2>Apoio</h2>
          </header>
          <article>
            <img
              src="assets/images/mentorias.svg"
              alt="apoio e feedbacks devpr"
            />
            <p>Feedbacks e mentorias com membros experientes da comunidade</p>
          </article>
        </section>
        <section is="devpr-section" id="espaco">
          <header>
            <h2>Comunicação</h2>
          </header>
          <article>
            <img
              src="assets/images/comunicacao.svg"
              alt="espaco e divulgacao devpr"
            />
            <p>Alguns querem falar, outros querem ouvir</p>
            <p>Nós divulgamos para a comunidade</p>
          </article>
        </section>

        <section is="devpr-section" id="membro">
          <header>
            <h2>Membro</h2>
          </header>
          <article>
            <img
              src="assets/images/membro-decolando-devpr.svg"
              alt="membro decolando devpr"
            />
            <p>Cresça e ajude crescer, o <br />conhecimento é a base!</p>
            <h2>Compartilhe 😉</h2>
          </article>
        </section>

        <footer>
          <devpr-social></devpr-social>
        </footer>
      </main>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'devpr-root': AppElement
  }
  interface HTMLElementEventMap {
    onClick: CustomEvent<string>
  }
}
