import { BuiltInElement, html } from '@devpr/common/web'

@BuiltInElement('devpr-youtube', 'a')
export class Youtube extends HTMLAnchorElement {
  href = 'https://www.youtube.com/c/DevParana'

  /**
   * O uso do atributo target como _blank
   * exige que seja em conjunto com o rel
   * por motivos de segurança, segue link
   * para acompanhar a issue no repositório
   *
   * @see
   * https://github.com/whatwg/html/issues/4078
   *
   * @memberof GitHub
   */
  target = '_blank'
  rel = 'noopener'
  alt = 'YouTube'

  innerHTML = html`
    <svg
      width="40"
      height="40"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>YouTube</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0H128V128H0V0Z"
        fill="#f00"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27 91L36.7 44L101 40L128 67V128H64L27 91Z"
        fill="#f00"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M106 66.4C106 78.2 104 89.7 99.7999 92.8C95.0999 96.3 72.3999 96.1 63.9999 96.1C55.2999 96.1 33.9999 96.2 29.0999 93.2C24.4999 90.4 22.0999 78.3 21.8999 66.4C22.0999 54.4 24.4999 41.6 29.0999 38.8C33.9999 35.8 55.2999 35.9 63.9999 35.9C72.3999 35.9 94.9999 35.8 99.7999 39.2C104 42.3 106 54.7 106 66.4Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M56 50V82L80 66L56 50Z"
        fill="#f00"
      />
    </svg>
    <span>YouTube</span>
  `
}
