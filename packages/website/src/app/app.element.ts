import { css, html, listen, CustomElement } from '@devpr/common/web'

import './app.element.scss'

@CustomElement('devpr-root')
export class AppElement extends HTMLElement {
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
        <section is="devpr-section" id="mx">
          <devpr-member></devpr-member>
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
            <figure
              is="devpr-figure"
              src="assets/images/kanban.svg"
              caption="Apps como recursos"
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
              caption="Apoio e feedbacks"
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
              caption="Espaço e divulgação"
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
              caption="Membro em constante evolução"
            ></figure>
            <p>Cresça e ajude crescer, o <br />conhecimento é a base!</p>
            <h3><span>Compartilhe</span> 😉</h3>
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
