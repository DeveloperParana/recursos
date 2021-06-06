import { css, html, listen, CustomElement } from '@devpr/common-web'

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
        <section is="devpr-mx-section" id="mx"></section>

        <section is="devpr-apps-section" id="apps"></section>

        <section is="devpr-apoio-section" id="apoio"></section>

        <section is="devpr-espaco-section" id="espaco"></section>

        <section is="devpr-membro-section" id="membro"></section>
      </main>
    `
  }

  connectedCallback() {
    onpopstate = console.log
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
