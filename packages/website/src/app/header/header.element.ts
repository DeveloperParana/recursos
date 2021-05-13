import { Emitter, event } from '@devpr/common/web'
import { html, css, prop, CustomElement } from '../shared'

@CustomElement('devpr-header', { extends: 'header' })
export class Header extends HTMLElement {
  static observedAttributes = ['text']

  @event() onClick: Emitter<string>

  @prop()
  public text = ''

  get styles() {
    return css`
      .header {
        background-color: var(--devpr-color-primary-500-contrast);
        box-shadow: 1px 1px 4px 0
          rgba(var(--devpr-color-primary-50-contrast), 0.1);
        position: sticky;
        width: 100%;
        height: 59px;
        z-index: 3;
        top: 0;
      }

      .header {
        background-image: url(/assets/images/devparana.svg);
        background-repeat: no-repeat;
        background-position-x: 220px;
        background-size: 100px;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
        background-color: var(--devpr-color-primary-500-contrast);
      }

      li a {
        display: block;
        padding: 20px 20px;
        cursor: pointer;
        border-right: 1px solid var(--devpr-color-secondary-800);
        text-decoration: none;
      }

      li a:hover,
      #menu-btn:hover {
        color: var(--devpr-color-primary-500);
        background-color: var(--devpr-color-secondary-100);
      }

      .logo {
        display: block;
        float: left;
        font-size: 2em;
        color: var(--devpr-color-primary-500);
        padding: 10px 20px;
        text-decoration: none;
        cursor: pointer;
      }

      /* menu */

      .menu {
        clear: both;
        max-height: 0;
        transition: max-height 0.2s ease-out;
      }

      /* menu icon */

      .menu-icon {
        cursor: pointer;
        display: inline-block;
        float: right;
        padding: 28px 20px;
        position: relative;
        user-select: none;
      }

      .menu-icon .navicon {
        background: #333;
        display: block;
        height: 2px;
        position: relative;
        transition: background 0.2s ease-out;
        width: 18px;
      }

      .menu-icon .navicon:before,
      .menu-icon .navicon:after {
        background: #333;
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: all 0.2s ease-out;
        width: 100%;
      }

      .menu-icon .navicon:before {
        top: 5px;
      }

      .menu-icon .navicon:after {
        top: -5px;
      }

      /* menu btn */

      #menu-btn {
        display: none;
      }

      #menu-btn:checked ~ .menu {
        max-height: 240px;
      }

      #menu-btn:checked ~ .menu-icon .navicon {
        background: transparent;
      }

      #menu-btn:checked ~ .menu-icon .navicon:before {
        transform: rotate(-45deg);
      }

      #menu-btn:checked ~ .menu-icon .navicon:after {
        transform: rotate(45deg);
      }

      #menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
      #menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
        top: 0;
      }

      /* 48em = 768px */

      @media (min-width: 49em) {
        li {
          float: left;
        }
        li a {
          padding: 20px 30px;
        }
        .menu {
          clear: none;
          float: right;
          max-height: none;
        }
        .menu-icon {
          display: none;
        }
      }
    `
  }
  get template() {
    return html`
      <a slot="logo" data-href="#home" class="logo"> ${this.text} </a>

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
      console.log(a.dataset.href);

      a.onclick = () => this.onClick.emit(a.dataset.href)
    })
  }
}
