import { css, CustomElement, html } from '@devpr/common-web'

@CustomElement('devpr-pair')
export class Pair extends HTMLElement {
  styles = css`
    devpr-pair {
      width: 100vw;
      height: 100vh;
      display: block;
      position: relative;
    }
    devpr-pair #big-code,
    devpr-pair #better-code,
    devpr-pair #langs,
    devpr-pair #members,
    devpr-pair #plant {
      content: ' ';
      width: 80%;
      height: 80%;
      position: absolute;
      padding-top: 20%;
      background-size: 80%;
      background-repeat: no-repeat;
      transition: opacity 250ms ease-in-out;
    }
    devpr-pair #members {
      background-image: url('assets/pair/members.svg');
      background-position: calc(var(--x, 0) * 1.1px) calc(var(--y, 0) * 1.1px);
    }
    devpr-pair #big-code {
      background-image: url('assets/pair/big-code.svg');
      background-position: calc(var(--x, 0) * 1.2px) calc(var(--y, 0) * 1.2px);
    }
    devpr-pair #better-code {
      background-image: url('assets/pair/better-code.svg');
      background-position: calc(var(--x, 0) * 1.3px) calc(var(--y, 0) * 1.3px);
    }
    devpr-pair #langs {
      background-image: url('assets/pair/langs.svg');
      background-position: calc(var(--x, 0) * 1.4px) calc(var(--y, 0) * 1.4px);
    }
    devpr-pair #plant {
      background-image: url('assets/pair/plant.svg');
      background-position: calc(var(--x, 0) * 2px) calc(var(--y, 0) * 2px);
    }
  `

  template = html`
    <div id="plant"></div>
    <div id="big-code"></div>
    <div id="langs"></div>
    <div id="better-code"></div>
    <div id="members"></div>
  `

  static LIMIT = 60 // pixel movement

  swapPositions: (pos: Record<'x' | 'y', number>) => void

  connectedCallback() {
    this.swapPositions = ({ x, y }) => {
      this.style.setProperty('--x', this.getX(x))
      this.style.setProperty('--y', this.getY(y))
    }

    this.addEventListener('pointermove', this.swapPositions)
  }

  genMapper(
    inLower: number,
    inUpper: number,
    outLower: number,
    outUpper: number
  ) {
    const range = inUpper - inLower
    const output = outUpper - outLower
    const mapper = (input: number) => {
      return String(outLower + (((input - inLower) / range) * output || 0))
    }
    return mapper
  }

  getX(x: number) {
    return this.genMapper(0, innerWidth, -Pair.LIMIT, Pair.LIMIT)(x)
  }

  getY(y: number) {
    return this.genMapper(0, innerHeight, -Pair.LIMIT, Pair.LIMIT)(y)
  }

  disconnectedCallback() {
    this.removeEventListener('pointermove', this.swapPositions)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'devpr-pair': Pair
  }
}
