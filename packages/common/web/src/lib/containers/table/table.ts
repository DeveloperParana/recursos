import { BuiltInElement, prop } from '../../decorators'
import { handleTableData } from '../../core'

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

  private getDataFromContext(source: string) {
    console.log(this.getRootNode());

    return this.parentElement[source]
  }
}
