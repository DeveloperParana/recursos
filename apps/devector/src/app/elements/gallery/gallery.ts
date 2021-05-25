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
  useShadow: false,
  options: {
    extends: 'ul',
  },
})
export class Gallery<T extends Photo> extends HTMLUListElement {
  static observedAttributes = []

  styles = css`
    ul[is='devpr-gallery'] {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      list-style: none;
      padding: 20px;
    }
    ul[is='devpr-gallery'] li {
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      border-radius: 6px;
      box-sizing: border-box;
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }
    ul[is='devpr-gallery'] li:hover {
      transform: scale(1.05);
      box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    }
    ul[is='devpr-gallery'] a {
      text-decoration: none;
    }
    ul[is='devpr-gallery'] figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    ul[is='devpr-gallery'] img {
      max-width: 100%;
    }
    ul[is='devpr-gallery'] figcaption {
      text-align: center;
      padding: 15px;
      color: #444;
    }
  `

  template = html`
    <template>
      <li>
        <a download>
          <figure>
            <img src="" alt="" />
            <figcaption></figcaption>
          </figure>
        </a>
      </li>
    </template>
  `

  connected() {
    this.template = this.querySelector('template')
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

    this.appendChild(clone)
  }

  reset() {
    this.innerHTML = ''
    this.appendChild(this.template)
  }
}
