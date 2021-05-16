import {
  html,
  css,
  prop,
  event,
  listen,
  Emitter,
  CustomElement,
} from '@devpr/common/web'

import './header.element.scss'

@CustomElement('devpr-header')
export class Header extends HTMLElement {
  static observedAttributes = ['text']

  @event() onClick: Emitter<string>

  @listen('a', 'click')
  onClicked({ target }) {
    this.onClick.emit(target.dataset.href)
  }

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
        <li><a data-href="#membro">Membro</a></li>
      </ul>
    `
  }
}
