import { Autonomous, css, html } from '../core'
import { Navigator } from './navigator'

type ButtonCtrl = 'first' | 'prev' | 'next' | 'last' | 'pos'

@Autonomous({
  selector: 'slide-controls',
  mode: 'open',
})
export class Controls extends HTMLElement {
  static observed = ['deck']

  private _ctrl: Record<ButtonCtrl, HTMLButtonElement>

  private deck: string
  private _deck: Navigator

  styles = css`
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    button {
      border: 0;
      cursor: pointer;
      background-color: transparent;
    }
  `

  template = html`
    <button id="first">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M6 6h2v12H6zm3.5 6l8.5 6V6l-8.5 6zm6.5 2.14L12.97 12 16 9.86v4.28z"
        />
      </svg>
    </button>
    <button id="prev">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
      </svg>
    </button>
    <span id="position">?/?</span>
    <button id="next">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
      </svg>
    </button>
    <button id="last">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z"
        />
      </svg>
    </button>
  `

  async connected() {
    this._ctrl = {
      first: this.shadowRoot.querySelector('#first'),
      prev: this.shadowRoot.querySelector('#prev'),
      next: this.shadowRoot.querySelector('#next'),
      last: this.shadowRoot.querySelector('#last'),
      pos: this.shadowRoot.querySelector('#position'),
    }

    this._deck = this.parentElement.querySelector(`#${this.deck}`)
    if (this._deck) {
      this._deck.addEventListener('slideschanged', () => this.refreshState())
    }

    this._ctrl.first.addEventListener('click', () => this._deck.jumpTo(0))
    this._ctrl.prev.addEventListener('click', () => this._deck.previous())
    this._ctrl.next.addEventListener('click', () => this._deck.next())

    this._ctrl.last.addEventListener('click', () =>
      this._deck.jumpTo(this._deck.totalSlides - 1)
    )

    this.refreshState()
  }

  /**
   * Habilita / desabilita botões e atualiza a posição com base no índice do deck
   */
  refreshState() {
    if (this._ctrl == null) {
      return
    }
    const next = this._deck.hasNext
    const prev = this._deck.hasPrevious
    this._ctrl.first.disabled = !prev
    this._ctrl.prev.disabled = !prev
    this._ctrl.next.disabled = !next
    this._ctrl.last.disabled =
      this._deck.currentIndex === this._deck.totalSlides - 1
    this._ctrl.pos.innerText = `${this._deck.currentIndex + 1} / ${
      this._deck.totalSlides
    }`
  }
}

// export const registerControls = () =>
//   customElements.define('slide-controls', Controls)
