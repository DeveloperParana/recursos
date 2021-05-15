import { Navigator } from './navigator'

type ButtonCtrl = 'first' | 'prev' | 'next' | 'last' | 'pos'

export class Controls extends HTMLElement {
  static observedAttributes = ['deck']

  private _ctrl: Record<ButtonCtrl, HTMLButtonElement>

  private _deck: Navigator

  async connectedCallback() {
    const response = await fetch('assets/templates/controls.html')
    const template = await response.text()
    this.innerHTML = ''

    const host = document.createElement('div')
    host.innerHTML = template
    this.appendChild(host)

    this._ctrl = {
      first: document.querySelector('#ctrlFirst'),
      prev: document.querySelector('#ctrlPrevious'),
      next: document.querySelector('#ctrlNext'),
      last: document.querySelector('#ctrlLast'),
      pos: document.querySelector('#position'),
    }

    this._ctrl.first.addEventListener('click', () => this._deck.jumpTo(0))
    this._ctrl.prev.addEventListener('click', () => this._deck.previous())
    this._ctrl.next.addEventListener('click', () => this._deck.next())

    this._ctrl.last.addEventListener('click', () =>
      this._deck.jumpTo(this._deck.totalSlides - 1)
    )
    this.refreshState()
  }

  async attributeChangedCallback(
    attrName: string,
    oldVal: string,
    newVal: string
  ) {
    if (attrName === 'deck') {
      if (oldVal !== newVal) {
        this._deck = document.querySelector(`${newVal}`)
        this._deck.addEventListener('slideschanged', () => this.refreshState())
      }
    }
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

export const registerControls = () =>
  customElements.define('slide-controls', Controls)
