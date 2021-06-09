import { css } from '@devpr/web-core'

export const imageStyles = css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
  }
  figure {
    max-width: 40px;
    width: 40px;
    height: 40px;
  }
  ::slotted(figure) {
    max-width: 40px;
  }
`
