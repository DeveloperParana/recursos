import { css, CustomElement, html, listen } from '@devpr/common/web'

import './app.element.scss'

@CustomElement('devpr-root')
export class AppElement extends HTMLElement {
  public static observedAttributes = []

  @listen('devpr-form', 'onChange')
  onChange({ detail }: CustomEvent) {
    console.log(detail)
  }

  styles = css``
  innerHTML = html`
    <header>
      <a>
        <img src="assets/devparana.svg" alt="Dev Paraná" />
      </a>
      <h1>Dev Paraná</h1>
    </header>

    <table-page></table-page>

    <form-page></form-page>
  `

  connectedCallback() {}
}
