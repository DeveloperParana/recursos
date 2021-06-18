import { BuiltInElement, html } from '@devpr/common-web'
import { Section } from './../section/section'

@BuiltInElement('devpr-membro-section', 'section')
export class MembroSection extends Section {
  innerHTML = html`
    <header>
      <h2>Membro</h2>
    </header>
    <article>
      <figure
        is="devpr-figure"
        src="assets/images/membro-decolando-devpr.svg"
        caption="Evolução contrínua"
      ></figure>
      <p>Cresça e ajude crescer, o <br />conhecimento é a base!</p>
      <h3>
        <a
          target="_blank"
          class="twitter-share-button"
          href="https://twitter.com/intent/tweet?text=Conheçam o DevParaná Member Experience. https://devparana.mx/"
        >
          Compartilhe
        </a>
        😉
      </h3>
    </article>
  `

  connectedCallback() {
    super.connectedCallback()
  }
}
