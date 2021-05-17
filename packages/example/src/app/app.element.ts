import { css, CustomElement, html, listen } from '@devpr/common/web'

import './app.element.scss'

@CustomElement('devpr-root')
export class AppElement extends HTMLElement {
  public static observedAttributes = []

  styles = css``
  innerHTML = html`
    <header>
      <a>
        <img src="assets/devparana.svg" width="60" alt="Dev Paraná" />
      </a>
      <h1>Dev Paraná</h1>
    </header>

    <table-page></table-page>
  `

  connectedCallback() {
    console.log('example')
  }
}
