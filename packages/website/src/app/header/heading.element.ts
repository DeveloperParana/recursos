import { css, CustomElement } from '@devpr/common/web'

@CustomElement('devpr-heading', { extends: 'h1' })
export class Heading extends HTMLHeadingElement {
  get styles() {
    return css`
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
      @media (max-width: 600px) {
        h1 {
          font-size: 64px;
        }
      }
    `
  }

  get template() {
    return this.textContent
  }
}
