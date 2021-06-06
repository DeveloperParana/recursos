import { BuiltInElement, html } from '@devpr/common-web'

@BuiltInElement('devpr-github', 'a')
export class GitHub extends HTMLAnchorElement {
  href = 'https://github.com/DeveloperParana'

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
  alt = 'GitHub'

  innerHTML = html`
    <svg
      width="40"
      height="40"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0H128V128H0V0Z"
        fill="#000"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30 90.9999C30 90.9999 20 52.2999 36.6 38.5999C53.1 24.8999 75.5 25.0999 90 32.9999L128 70.9999V128H67.1L30 90.9999Z"
        fill="#000"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M64 24C87.2 24 106 42.8 106 66C106 89.2 87.2 108 64 108C40.8 108 22 89.2 22 66C22 42.8 40.8 24 64 24Z"
        fill="white"
      />
      <path
        d="M75.9999 88.8999C75.9999 85.4999 74.0999 83.4999 71.9999 81.9999C84.4999 80.8999 89.0999 74.7999 89.8999 65.7999C90.5999 59.7999 89.4999 54.9999 85.8999 51.1999C87.4999 47.4999 86.3999 42.3999 85.4999 40.2999C82.6999 39.4999 76.0999 42.9999 74.2999 44.4999C70.3999 42.9999 59.5999 42.3999 53.8999 44.4999C49.7999 41.5999 45.1999 39.6999 42.6999 40.2999C40.3999 45.5999 41.8999 50.5999 42.2999 51.1999C39.2999 53.9999 37.2999 59.6999 38.2999 66.5999C39.9999 76.6999 44.2999 80.6999 55.9999 82.0999C54.2999 83.5999 54.0999 84.9999 53.8999 85.7999C45.9999 89.0999 43.6999 83.6999 42.6999 82.2999C39.3999 78.0999 36.3999 79.2999 36.1999 79.3999C35.9999 79.4999 35.8999 79.6999 35.8999 79.8999C36.0999 80.7999 37.8999 81.6999 37.9999 81.7999C40.3999 83.6999 41.3999 86.9999 41.8999 87.9999C45.8999 96.0999 53.7999 91.4999 53.8999 91.4999C53.8999 91.9999 53.8999 110.1 53.8999 110.1L75.8999 110.2C75.9999 110.1 75.9999 94.1999 75.9999 88.8999Z"
        fill="#000"
      />
    </svg>
    <span>GitHub</span>
  `
}
