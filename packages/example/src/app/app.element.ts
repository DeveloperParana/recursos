import { css, CustomElement, html } from '@devpr/common/web'

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
    <label is="devpr-switch">
      <input type="checkbox" name="switch" />
      <span> Switch </span>
    </label>
    <form-page></form-page>
    <!-- <table-page></table-page> -->
  `

  connectedCallback() {
    console.log('example')
  }
}
