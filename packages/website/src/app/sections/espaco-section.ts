import { Section } from './../section/section'
import { BuiltInElement, html } from '@devpr/common/web'

@BuiltInElement('devpr-espaco-section', 'section')
export class EspacoSection extends Section {
  innerHTML = html`
    <header>
      <h2>Comunicação</h2>
    </header>
    <article>
      <figure
        is="devpr-figure"
        src="assets/images/comunicacao.svg"
        caption="Espaço e divulgação"
      ></figure>
      <p>Alguns querem falar, outros querem ouvir</p>
      <p>Nós divulgamos para a comunidade</p>
    </article>
  `

  connectedCallback() {
    super.connectedCallback()
  }
}
