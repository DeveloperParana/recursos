import { CustomElement } from '../decorators'
import { css, html } from '../core'

@CustomElement('devpr-heading')
export class Heading extends HTMLElement {
  styles = css`
    h1 {
      margin-top: 20px;
      font-size: 120px;
      text-align: center;
      color: transparent;
      background: green url('/assets/images/devparana.svg');
      -webkit-background-clip: text;
      background-position: center;
      background-size: 145%;
      background-clip: text;
    }
    @media (min-width: 600px) {
      h1 {
        font-size: 300px;
      }
    }
  `

  template = html`<h1 class="h1">${this.textContent}</h1>`
}
