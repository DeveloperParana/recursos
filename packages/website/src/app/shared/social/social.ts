import { css, CustomElement, html } from '@devpr/common/web'

@CustomElement('devpr-social')
export class SocialElement extends HTMLElement {
  styles = css`
    devpr-social {
      bottom: 0;
      display: flex;
      position: absolute;
      transform: translate(-50%, -50%);
    }

    /* Icons */

    devpr-social a {
      color: #fff;
      background: var(--devpr-primary-50);
      border-radius: 4px;
      text-align: center;
      text-decoration: none;
      font-family: fontawesome;
      position: relative;
      display: inline-block;
      width: 40px;
      height: 28px;
      padding-top: 12px;
      margin: 0 2px;
      transition: all 0.5s;
      -webkit-font-smoothing: antialiased;
    }

    devpr-social a:hover {
      background: var(--devpr-primary-500);
    }

    /* pop-up text */

    devpr-social a span {
      color: #666;
      position: absolute;
      font-family: sans-serif;
      bottom: 0;
      left: -25px;
      right: -25px;
      padding: 5px 7px;
      z-index: -1;
      font-size: 14px;
      border-radius: 2px;
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

    /* font awesome icons */

    devpr-social a:nth-of-type(1):before {
      content: '\f09a';
    }
    devpr-social a:nth-of-type(2):before {
      content: '\f099';
    }
    devpr-social a:nth-of-type(3):before {
      content: '\f0d5';
    }
    devpr-social a:nth-of-type(4):before {
      content: '\f113';
    }
    devpr-social a:nth-of-type(5):before {
      content: '\f17d';
    }
    devpr-social a:nth-of-type(6):before {
      content: '\f1cb';
    }
  `

  template = html`
    <div>
      <a href="#"><span>Facebook</span></a>
      <a href="#"><span>Twitter</span></a>
      <a href="#"><span>Github</span></a>
    </div>
  `
}
