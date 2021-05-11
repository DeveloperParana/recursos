import { html, css, prop, CustomElement } from '../shared'

/**
 * Sempre utilize o selector
 * do componente como attr id
 * do template na `index.html`
 */
const selector = 'devpr-header'

@CustomElement(selector, { extends: 'header' })
export class Header extends HTMLElement {
  static observedAttributes = ['text', 'link']

  @prop()
  public text = ''

  @prop()
  public link = '#'

  get styles() {
    return css`
      .header {
        background-color: var(--devpr-color-primary-500-contrast);
        box-shadow: 1px 1px 4px 0
          rgba(var(--devpr-color-primary-50-contrast), 0.1);
        position: fixed;
        width: 100%;
        z-index: 3;
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

      @media (min-width: 48em) {
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
      <a slot="logo" class="logo" href="${this.link}"> ${this.text} </a>

      <input slot="menu-btn" type="checkbox" id="menu-btn" />
      <label slot="menu-btn" class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>

      <ul slot="menu" part="menu" class="menu">
        <li><a href="#iniciativa">Iniciativa</a></li>
        <li><a href="#movimento">Movimento</a></li>
        <li><a href="#eventos">Eventos</a></li>
      </ul>
    `
  }

  connectedCallback() {
    this.classList.add('header')
  }
}
