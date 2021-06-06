import { css, CustomElement, html } from '@devpr/common-web'

@CustomElement('devpr-ticked')
export class TickedElement extends HTMLElement {
  get styles() {
    return css`
      devpr-ticked {
        display: inline-flex;
      }
      devpr-ticked svg {
        display: inline-flex;
        width: 40px;
        height: auto;
      }
    `
  }
  get template() {
    return html`
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M44 24C44 35 35 44 24 44C13 44 4 35 4 24C4 13 13 4 24 4C35 4 44 13 44 24Z"
          fill="#C8E6C9"
        />
        <path
          d="M14 24L21 31L36 16"
          stroke="#4CAF50"
          stroke-width="4"
          stroke-miterlimit="10"
        />
      </svg>
    `
  }

  connectedCallback() {
    console.log('ticked')
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'devpr-ticked': TickedElement
  }
}
