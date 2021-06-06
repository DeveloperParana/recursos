import { BuiltInElement, html } from '@devpr/common-web'
import { Section } from './../section/section'

@BuiltInElement('devpr-mx-section', 'section')
export class MxSection extends Section {
  innerHTML = html`
    <devpr-member></devpr-member>
    <article>
      <div>
        <devpr-heading> Dev Paraná </devpr-heading>
      </div>

      <h2>Member Experience</h2>

      <devpr-social></devpr-social>
    </article>
  `

  connectedCallback() {
    super.connectedCallback()
  }
}
