import { Navigator } from './navigator'

export class KeyHandler extends HTMLElement {
  static observedAttributes = ['deck']

  private _deck: Navigator

  async attributeChangedCallback(name: string, prev: string, next: string) {
    if (name === 'deck') {
      if (prev !== next) {
        console.log(next)
        this._deck = document.querySelector(`#${next}`)

        this._deck.parentElement.addEventListener('keydown', (kev) => {
          if (kev.code == 'ArrowRight' || kev.code == 'Space') {
            this._deck.next()
          } else if (kev.code == 'ArrowLeft') {
            this._deck.previous()
          }
        })
      }
    }
  }
}

export const registerKeyHandler = () => {
  customElements.define('key-handler', KeyHandler)
}
