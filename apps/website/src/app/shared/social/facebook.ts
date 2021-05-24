import { BuiltInElement, html } from '@devpr/common/web'

@BuiltInElement('devpr-facebook', 'a')
export class Facebook extends HTMLAnchorElement {
  href = 'https://facebook.com/DeveloperParana/'

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
  alt = 'Facebook'

  innerHTML = html`
    <svg
      width="40"
      height="40"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Facebook</title>
      <g clip-path="url(#clip0)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0H128V128H0V0Z"
          fill="#1877F2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M128 128H73.9L53.9 108L59.5 73.5L69.9 28.7L82 24L128 70V128Z"
          fill="#1877F2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M82.1 24H71.6C71.6 24 54 22.7 54 41.3C54 45.3 54 54.1 54 54.1H44V64.1H54V108.1H68L68.1 64.1H81.2L84 54H68V40.9C68 40.9 67.9 36 73.6 36H82L82.1 24Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="128" height="128" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <span>Facebook</span>
  `
}
