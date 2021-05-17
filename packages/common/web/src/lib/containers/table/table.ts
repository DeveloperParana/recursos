import { BuiltInElement, prop } from '../../decorators'
import { handleTableData } from '../../core'

/**
 * Tabela integrada com template handling
 * que adiciona valores de objetos em td's
 *
 * *WebComponent*
 *
 * @example
 * class WebElement extends HTMLElement {
 *  data = [
 *    { name: 'Nome' }
 *  ]
 * }
 * ```
 *
 * ```html
 * <table is="devpr-table" source="data">
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
 * @export
 * @class Table
 * @extends {HTMLTableElement}
 * @template T
 */
@BuiltInElement('devpr-table', 'table')
export class Table<T> extends HTMLTableElement {
  static observedAttributes = ['source']

  @prop()
  source: string

  connectedCallback() {
    const template = this.querySelector('template')

    if (template && this.source) {
      this.updateRows()
    }
  }

  updateRows() {
    const template = this.querySelector('template')
    const data = this.getDataFromContext(this.source)
    handleTableData<T>(template, data)
  }

  add(data: T[]) {
    const template = this.querySelector('template')
    handleTableData<T>(template, data)
  }

  async(url: string, handle?: (data: T[]) => T[]) {
    fetch(url)
      .then((res) => res.json())
      .then((res: T[]) => {
        const data = handle ? handle(res) : res
        handleTableData(this.querySelector('template'), data)
      })
  }

  reset() {
    const template = this.querySelector('template')
    this.querySelector('tbody').innerHTML = ''
    this.querySelector('tbody').appendChild(template)
  }

  private getDataFromContext(source: string) {
    console.log(this.getRootNode())

    return this.parentElement[source]
  }
}
