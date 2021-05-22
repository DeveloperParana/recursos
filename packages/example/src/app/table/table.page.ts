import { Table } from '@devpr/common/elements'
import {
  css,
  html,
  listen,
  dataSearch,
  CustomElement,
  debounce,
} from '@devpr/common/web'

import './table.page.scss'

// prettier-ignore
export interface Employee {
  id:      number;
  age:     number;
  name:    string;
  surname: string;
  job:     string;
  created: string;
  updated: string;
  phone:   string;
  size:    string;
  area:    string;
}

@CustomElement('table-page')
export class TablePage extends HTMLElement {
  styles = css`
    table-page {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
    }
  `

  data: Employee[] = []

  table: Table<Employee>

  @listen('table button', 'click', true)
  onClick({ value }: HTMLButtonElement) {
    console.log(value)
  }

  // @debounce(400)
  @listen('devpr-search', 'onChange')
  formChange({ detail }) {
    this.table.reset()

    const results = dataSearch(this.data, detail)

    console.log(results.length)

    this.table.add(results)
  }

  template = html`
    <devpr-search></devpr-search>
    <table is="devpr-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Idade</th>
          <th>Telefone</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <template>
          <tr>
            <td data-col="name"></td>
            <td data-col="surname"></td>
            <td data-col="age"></td>
            <td data-col="phone"></td>
            <td data-val="id">
              <button type="button" is="devpr-button">Remover</button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  `

  connectedCallback() {
    this.table = this.querySelector<Table<Employee>>('table')
    this.table.async(
      'assets/employees.json',
      (data: Employee[]) => (this.data = data)
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'table-page': TablePage
  }
}
