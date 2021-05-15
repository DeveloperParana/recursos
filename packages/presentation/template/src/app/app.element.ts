import { css, html, Template, CustomElement } from '@devpr/common/web'

import './app.element.scss'

@CustomElement('devpr-root')
export class AppElement extends Template {
  styles = css``
  template = html`
    <main role="main" class="wrapper" tabindex="0">
      <slide-control></slide-control>

      <section is="devpr-slide">
        <div slot="content">
          <devpr-member></devpr-member>
        </div>
      </section>
      <section is="devpr-slide">
        <h2 slot="header">HTML</h2>
        <div slot="content">
          <img src="assets/logos/html.svg" />
        </div>
      </section>
      <section is="devpr-slide">
        <h2 slot="header">CSS</h2>
        <div slot="content">
          <img src="assets/logos/css.svg" />
        </div>
      </section>
      <section is="devpr-slide">
        <h2 slot="header">JavaScript</h2>
        <div slot="content">
          <img src="assets/logos/js.svg" />
        </div>
      </section>
    </main>
  `

  connectedCallback() {
    if ('IntersectionObserverEntry' in window) {
      const slides = this.querySelectorAll('[is="devpr-slide"]')
      this.observeCurrentSlide(slides as NodeListOf<HTMLElement>)
    }
  }

  observeCurrentSlide(slides: NodeListOf<HTMLElement>) {
    const slideObserver = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        const slide = entry.target as HTMLElement
        if (entry.isIntersecting) {
          slide.classList.add('current')
        } else {
          slide.classList.remove('current')
        }
      })
    })
    slides.forEach((slide) => slideObserver.observe(slide))
  }
}
