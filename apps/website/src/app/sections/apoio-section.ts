import { BuiltInElement, html } from '@devpr/common-web'
import { Section } from './../section/section'

@BuiltInElement('devpr-apoio-section', 'section')
export class ApoioSection extends Section {
  innerHTML = html`
    <header>
      <h2>Apoio</h2>
    </header>
    <article>
      <figure
        is="devpr-figure"
        src="assets/images/mentorias.svg"
        caption="Apoio com mentorias feedbacks"
      ></figure>

      <p>Feedbacks e mentorias com membros experientes da comunidade</p>
    </article>
  `

  connectedCallback() {
    super.connectedCallback()
  }
}
