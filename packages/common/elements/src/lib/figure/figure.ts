import { css, BuiltInElement, html, prop } from 'dist/packages/common/web/src'

@BuiltInElement('devpr-figure', 'figure')
export class Figure extends HTMLElement {
  static observedAttributes = ['src', 'caption']
  css = css``

  @prop()
  src = ''

  @prop()
  caption = ''

  connectedCallback() {
    this.innerHTML = html`
      <img slot="image" src="${this.src}" alt="${this.caption}" />
      <figcaption slot="caption">${this.caption}</figcaption>
    `

    const image = this.querySelector('img')
    image.onload = () => {
      // image.setAttribute('width', image.width + 'px')
      // image.setAttribute('height', image.height + 'px')
    }
  }
}
