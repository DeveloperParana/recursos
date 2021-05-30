import { Navigator } from './navigator'
import { Autonomous } from '../core'

@Autonomous({
  selector: 'key-handler',
  mode: 'open',
})
export class KeyHandler extends HTMLElement {
  static observed = ['deck']

  private _deck: Navigator
  private deck: string

  connected() {
    if (this.deck) {
      const parent = this.parentElement
      this._deck = parent.querySelector(`#${this.deck}`)
    }
    if (this._deck) {
      const parent = this._deck.parentElement
      parent.addEventListener('keydown', (kev) => {
        if (kev.code == 'ArrowRight' || kev.code == 'Space') {
          this._deck.next()
        } else if (kev.code == 'ArrowLeft') {
          this._deck.previous()
        }
      })
    }
  }
}
