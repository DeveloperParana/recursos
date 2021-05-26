import { css, Element, html, cloneTemplate } from '../core'

export interface Photo {
  title?: string
  image: string
}

/**
 * @description
 *
 * *WebComponent*
 *
 * @example
 * class WebElement extends HTMLElement {
 * }
 * ```
 *
 * ```html
 * ```
 *
 * @export
 * @class Gallery
 * @extends {HTMLUListElement}
 * @template T
 */
@Element({
  selector: 'devpr-gallery',
  useShadow: true,
})
export class Gallery<T extends Photo> extends HTMLElement {
  static observedAttributes = []

  styles = css`
    :host ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      list-style: none;
      padding: 20px;
    }
    :host li {
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      border-radius: 6px;
      box-sizing: border-box;
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }
    :host li:hover {
      transform: scale(1.05);
      box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    }
    :host a {
      color: var(--devpr-primary-500);
      text-decoration: none;
    }
    :host figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    :host img {
      max-width: 100%;
    }
    :host figcaption {
      text-align: center;
      padding: 15px;
      color: #444;
    }
  `

  template = html`
    <ul></ul>
    <template>
      <li>
        <figure>
          <img src="" alt="" />
          <figcaption></figcaption>
          <a download>
            <svg
              width="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z"
                fill="currentColor"
              />
              <path
                d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </figure>
      </li>
    </template>
  `

  connected() {
    this.template = this.shadowRoot.querySelector('template')
  }

  addItem({ title, image }: T) {
    const clone = cloneTemplate(this.template)

    const link = clone.querySelector('a')
    const img = clone.querySelector('img')
    const caption = clone.querySelector('figcaption')

    img.src = image
    img.alt = title
    link.href = image
    caption.textContent = title

    this.shadowRoot.querySelector('ul').appendChild(clone)
  }

  reset() {
    this.innerHTML = ''
    this.appendChild(this.template)
  }
}
