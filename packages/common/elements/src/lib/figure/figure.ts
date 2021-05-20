import { BuiltInElement, html, prop } from 'dist/packages/common/web/src'

@BuiltInElement('devpr-figure', 'figure')
export class Figure extends HTMLElement {
  static observedAttributes = ['src', 'caption']

  @prop()
  src = ''

  @prop()
  caption = ''

  connectedCallback() {
    const src = this.src || this.getAttribute('src')
    const caption = this.caption || this.getAttribute('caption')

    this.innerHTML = html`
      <img slot="image" src="${src}" alt="${caption}" />
      <figcaption slot="caption">${caption}</figcaption>
    `

    const image = this.querySelector('img')
    image.onload = () => {
      image.setAttribute('width', image.width + 'px')
      image.setAttribute('height', image.height + 'px')
    }
  }
}
