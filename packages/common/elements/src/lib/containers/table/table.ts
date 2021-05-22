import { BuiltInElement, prop, handleTableData } from '@devpr/common/web'

/**
 * @description
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

  private template: HTMLTemplateElement

  @prop()
  source: string

  connectedCallback() {
    this.template = this.querySelector('template')

    if (this.template && this.source) {
      this.updateRows()
    }
  }

  updateRows() {
    const data = this.getDataFromContext(this.source)
    handleTableData<T>(this.template, data)
  }

  add(data: T[]) {
    handleTableData<T>(this.template, data)
  }

  async(url: string, handle?: (data: T[]) => T[]) {
    fetch(url)
      .then((res) => res.json())
      .then((res: T[]) => {
        const data = handle ? handle(res) : res
        handleTableData(this.template, data)
      })
  }

  reset() {
    this.querySelector('tbody').innerHTML = ''
    this.querySelector('tbody').appendChild(this.template)
  }

  private getDataFromContext(source: string) {
    console.log(this.getRootNode())

    return this.parentElement[source]
  }
}
