import { Emitter, event } from '@devpr/common/web'
import { html, css, prop, CustomElement } from '../shared'

import './header.element.scss'

@CustomElement('devpr-header', { extends: 'header' })
export class Header extends HTMLElement {
  static observedAttributes = ['text']

  @event() onClick: Emitter<string>

  @prop()
  public text = ''

  styles = css``
  get template() {
    return html`
      <a slot="logo" data-href="#home" class="logo" role="link">
        ${this.text}
      </a>

      <input slot="menu-btn" type="checkbox" id="menu-btn" />
      <label slot="menu-btn" class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>

      <ul slot="menu" part="menu" class="menu">
        <li><a data-href="#apps">Apps</a></li>
        <li><a data-href="#apoio">Apoio</a></li>
        <li><a data-href="#espaco">Espaço</a></li>
        <li><a data-href="#comunidade">Comunidade</a></li>
        <li><a data-href="#membro">Membro</a></li>
      </ul>
    `
  }

  connectedCallback() {
    this.classList.add('header')
    this.querySelectorAll('a').forEach((a) => {
      a.onclick = () => this.onClick.emit(a.dataset.href)
    })
  }
}
