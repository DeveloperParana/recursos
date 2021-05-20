import { css, CustomElement, html } from '@devpr/common/web'

@CustomElement('devpr-member')
export class Member extends HTMLElement {
  styles = css`
    devpr-member {
      width: 100vw;
      height: 100vh;
      display: block;
      position: relative;
    }
    devpr-member #c-plus-plus,
    devpr-member #code-thinking,
    devpr-member #computer,
    devpr-member #css,
    devpr-member #dev,
    devpr-member #editor,
    devpr-member #file,
    devpr-member #html,
    devpr-member #mouse,
    devpr-member #plant,
    devpr-member #table,
    devpr-member #browser,
    devpr-member #editor,
    devpr-member #file,
    devpr-member #code,
    devpr-member #lib,
    devpr-member #lang {
      content: ' ';
      width: 60%;
      height: 80%;
      position: absolute;
      padding-top: 20%;
      background-size: 80%;
      background-repeat: no-repeat;
      transition: opacity 250ms ease-in-out;
    }
    devpr-member #dev {
      background-image: url('assets/member/dev.svg');
      background-position: calc(var(--x, 0) * 1.1px) calc(var(--y, 0) * 1.1px);
    }
    devpr-member #code-thinking {
      background-image: url('assets/member/code-thinking.svg');
      background-position: calc(var(--x, 0) * 1.2px) calc(var(--y, 0) * 1.2px);
    }
    devpr-member #computer {
      background-image: url('assets/member/computer.svg');
      background-position: calc(var(--x, 0) * 1.3px) calc(var(--y, 0) * 1.3px);
    }
    devpr-member #css {
      background-image: url('assets/member/css.svg');
      background-position: calc(var(--x, 0) * 1.4px) calc(var(--y, 0) * 1.4px);
    }
    devpr-member #c-plus-plus {
      background-image: url('assets/member/c-plus-plus.svg');
      background-position: calc(var(--x, 0) * 1.5px) calc(var(--y, 0) * 1.5px);
    }
    devpr-member #table {
      background-image: url('assets/member/table.svg');
      background-position: calc(var(--x, 0) * 1.6px) calc(var(--y, 0) * 1.6px);
    }
    devpr-member #file {
      background-image: url('assets/member/file.svg');
      background-position: calc(var(--x, 0) * 1.7px) calc(var(--y, 0) * 1.7px);
    }
    devpr-member #html {
      background-image: url('assets/member/html.svg');
      background-position: calc(var(--x, 0) * 1.8px) calc(var(--y, 0) * 1.8px);
    }
    devpr-member #mouse {
      background-image: url('assets/member/mouse.svg');
      background-position: calc(var(--x, 0) * 1.9px) calc(var(--y, 0) * 1.9px);
    }
    devpr-member #plant {
      background-image: url('assets/member/plant.svg');
      background-position: calc(var(--x, 0) * 2px) calc(var(--y, 0) * 2px);
    }
    devpr-member #editor {
      background-image: url('assets/member/editor.svg');
      background-position: calc(var(--x, 0) * 2.1px) calc(var(--y, 0) * 2.1px);
    }
  `

  template = html`
    <div id="table"></div>
    <div id="computer"></div>
    <div id="editor"></div>
    <div id="file"></div>
    <div id="mouse"></div>
    <div id="plant"></div>
    <div id="dev"></div>
    <div id="code-thinking"></div>
    <div id="css"></div>
    <div id="html"></div>
    <div id="c-plus-plus"></div>
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
    return this.genMapper(0, innerWidth, -Member.LIMIT, Member.LIMIT)(x)
  }

  getY(y: number) {
    return this.genMapper(0, innerHeight, -Member.LIMIT, Member.LIMIT)(y)
  }

  disconnectedCallback() {
    this.removeEventListener('pointermove', this.swapPositions)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'devpr-member': Member
  }
}
