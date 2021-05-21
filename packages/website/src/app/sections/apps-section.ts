import { BuiltInElement, html } from '@devpr/common/web'
import { Section } from './../section/section'

@BuiltInElement('devpr-apps-section', 'section')
export class AppsSection extends Section {
  innerHTML = html`
    <header>
      <h2>Apps</h2>
    </header>
    <article>
      <figure
        is="devpr-figure"
        src="assets/images/kanban.svg"
        caption="Apps disponíveis como recursos"
      ></figure>
      <p>Facilitadores para preparação de talks e organização de meetups</p>
      <p>Preocupe-se apenas com o conteúdo</p>
    </article>
  `

  connectedCallback() {
    super.connectedCallback()
  }
}
