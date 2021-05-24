import { BuiltInElement, html } from '@devpr/common/web'

@BuiltInElement('devpr-twitter', 'a')
export class Twitter extends HTMLAnchorElement {
  href = 'https://twitter.com/developerparana'

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
  alt = 'Twitter'

  innerHTML = html`
    <svg
      width="40"
      height="40"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Twitter</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0H128V128H0V0Z"
        fill="#1da1f2"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M128 128H60L23 91C23 91 41.7 90.9 46 88L33 75L40 76L29 65C29 65 70.5 74.5 80 61.1C82.9 57.1 88 43.4 88 43.4L97.1 38L103 32L128 57V128Z"
        fill="#1da1f2"
      />
      <path
        d="M106 38.1001C102.9 39.5001 99.6001 40.4001 96.1001 40.8001C99.7001 38.7001 102.4 35.3001 103.7 31.3001C100.4 33.3001 96.7001 34.7001 92.8001 35.5001C89.7001 32.2001 85.2001 30.1001 80.2001 30.1001C70.7001 30.0001 63.0001 37.7001 63.0001 47.2001C63.0001 48.5001 63.2001 49.9001 63.4001 51.1001C49.1001 50.4001 36.4001 43.6001 27.9001 33.2001C26.4001 35.7001 25.6001 38.7001 25.6001 41.8001C25.6001 47.8001 28.6001 53.0001 33.3001 56.1001C30.5001 56.0001 27.8001 55.2001 25.5001 54.0001C25.5001 54.1001 25.5001 54.1001 25.5001 54.2001C25.5001 62.5001 31.4001 69.4001 39.3001 71.0001C37.9001 71.4001 36.3001 71.6001 34.8001 71.6001C33.7001 71.6001 32.6001 71.5001 31.6001 71.3001C33.7001 78.1001 40.0001 83.0001 47.6001 83.2001C41.7001 87.8001 34.3001 90.5001 26.2001 90.5001C24.8001 90.5001 23.4001 90.4001 22.1001 90.3001C29.7001 95.2001 38.8001 98.0001 48.5001 98.0001C80.2001 98.0001 97.5001 71.9001 97.5001 49.2001C97.5001 48.5001 97.5001 47.7001 97.5001 47.0001C100.8 44.5001 103.7 41.5001 106 38.1001Z"
        fill="white"
      />
    </svg>
    <span>Twitter</span>
  `
}
