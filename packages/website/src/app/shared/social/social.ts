import { css, CustomElement, html } from '@devpr/common/web'

@CustomElement('devpr-social')
export class SocialElement extends HTMLElement {
  styles = css`
    devpr-social {
      transition: all 0.2s;
      margin: 0 auto;
      display: flex;
      z-index: 1;
    }

    /* Icons */

    devpr-social a {
      color: #fff;
      width: 40px;
      display: inline-flex;
      margin: 50px 5px 0 5px;
      transition: all 0.2s;
      text-align: center;
      position: relative;
      -webkit-font-smoothing: antialiased;
      border-radius: 5px;
      overflow: hidden;
    }

    devpr-social a:hover {
      border-color: var(--devpr-primary-500);
      background: var(--devpr-surface);
      overflow: visible;
      opacity: 1;
    }

    /* pop-up text */

    devpr-social a span {
      color: #666;
      position: absolute;
      bottom: 0;
      left: -25px;
      right: -25px;
      padding: 5px 7px;
      z-index: -1;
      border-radius: 5px;
      background: #fff;
      visibility: hidden;
      opacity: 0;
      -o-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      -webkit-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      -moz-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    /* pop-up text arrow */

    devpr-social a span:before {
      content: '';
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #fff;
      position: absolute;
      bottom: -5px;
      left: 40px;
    }

    /* text pops up when icon is in hover state */

    devpr-social a:hover span {
      bottom: 50px;
      visibility: visible;
      opacity: 1;
    }
  `

  template = html`
    <div>
      <a is="devpr-facebook"> </a>
      <a is="devpr-youtube"> </a>
      <a is="devpr-twitter"> </a>
      <a is="devpr-github"> </a>
      <a is="devpr-meetup"> </a>
    </div>
  `
}
