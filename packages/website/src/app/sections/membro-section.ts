import { BuiltInElement, html } from '@devpr/common/web'
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
      <h3><span>Compartilhe</span> 😉</h3>
    </article>
  `

  connectedCallback() {
    super.connectedCallback()
  }
}
