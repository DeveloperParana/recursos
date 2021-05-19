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

            <devpr-social></devpr-social>
          </article>
        </section>

        <section is="devpr-section" id="apps">
          <header>
            <h2>Apps</h2>
          </header>
          <article>
            <!-- <img src="assets/images/kanban.svg" alt="apps como recursos" /> -->
            <figure
              is="devpr-figure"
              src="assets/images/kanban.svg"
              caption="apps como recursos"
            ></figure>
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
            <figure
              is="devpr-figure"
              src="assets/images/mentorias.svg"
              caption="apoio e feedbacks devpr"
            ></figure>

            <p>Feedbacks e mentorias com membros experientes da comunidade</p>
          </article>
        </section>
        <section is="devpr-section" id="espaco">
          <header>
            <h2>Comunicação</h2>
          </header>
          <article>
            <figure
              is="devpr-figure"
              src="assets/images/comunicacao.svg"
              caption="espaco e divulgacao devpr"
            ></figure>
            <p>Alguns querem falar, outros querem ouvir</p>
            <p>Nós divulgamos para a comunidade</p>
          </article>
        </section>

        <section is="devpr-section" id="membro">
          <header>
            <h2>Membro</h2>
          </header>
          <article>
            <figure
              is="devpr-figure"
              src="assets/images/membro-decolando-devpr.svg"
              caption="membro decolando devpr"
            ></figure>
            <p>Cresça e ajude crescer, o <br />conhecimento é a base!</p>
            <h2>Compartilhe 😉</h2>
          </article>
        </section>
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
