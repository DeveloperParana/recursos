import { CustomElement, event, listen } from '../../decorators'
import { css, Emitter, html } from '../../core'

@CustomElement('devpr-search')
export class Search extends HTMLElement {
  @event()
  onChange: Emitter<string>

  @listen('label', 'valueChange')
  onSearch({ detail }: CustomEvent<string>) {
    this.onChange.emit(detail)
  }

  styles = css``

  template = html`
    <label is="devpr-textfield" mode="outlined">
      <input type="search" name="search" role="search" />
      <span>Busca</span>
    </label>
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'devpr-search': Search
  }
  interface HTMLElementEventMap {
    onChange: string
  }

  interface HTMLElementEventMap {
    onChange: string
  }

  interface HTMLElementEventMap {
    valueChange: string
  }
}
