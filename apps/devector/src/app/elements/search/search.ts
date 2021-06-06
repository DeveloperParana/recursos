import {
  css,
  html,
  event,
  listen,
  Emitter,
  CustomElement,
} from '@devpr/common-web'

/**
 * @description
 * Campo de busca autônomo e reativo, emite
 * eventos a cada caractere digitado, tem
 * como auxiliar um decorator de @debounce
 * que não é adicionado aqui, mas onde o dev
 * for capturar o evento aqui emitido.
 *
 * *WebComponent*
 *
 * @example
 * ```html
 * <devpr-search></devpr-search>
 * <table is="devpr-table">
 *  <thead>
 *    <tr>
 *      <th>Nome</th>
 *    </tr>
 *  </thead>
 *  <tbody>
 *    <template>
 *      <tr>
 *        <td data-col="name"></td>
 *      </tr>
 *    </template>
 *  </tbody>
 * </table>
 * ```
 *
 * ```ts
 * class WebElement extends HTMLElement {
 *  ＠debounce(400)
 *  ＠listen('devpr-search', 'onChange')
 *  formChange({ detail }) {
 *    this.table.reset()
 *    this.table.add(dataSearch(this.data, detail))
 *  }
 *
 *  connectedCallback() {
 *    this.table = this.querySelector<Table<Employee>>('table')
 *    this.table.async('assets/employees.json',
 *      (data: Employee[]) => (this.data = data)
 *    )
 *  }
 * }
 * ```
 *
 * @export
 * @class Search
 * @extends {HTMLElement}
 */
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
    valueChange: string
  }
}
