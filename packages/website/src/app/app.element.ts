import { css, CustomElement, html } from '@devpr/common/web'

import './app.element.scss'

@CustomElement('devpr-root')
export class AppElement extends HTMLElement {
  title = 'DevParaná'

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
        <devpr-heading>${this.title}</devpr-heading>

        <section>
          <button is="devpr-button">Text</button>
          <button is="devpr-button" mode="outlined">Outlined</button>
        </section>
      </main>
    `
  }

  connectedCallback() {
    // Do something
  }
}
