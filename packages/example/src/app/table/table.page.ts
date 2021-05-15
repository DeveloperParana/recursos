import {
  css,
  CustomElement,
  eventTarget,
  html,
  listen,
} from '@devpr/common/web'

import './table.page.scss'

@CustomElement('table-page')
export class TablePage extends HTMLElement {
  styles = css``

  data = [
    { name: 'Guilherme', color: 'Preto', sex: 'M', legs: 2, id: 1 },
    { name: 'Americo', color: 'Azul', sex: 'M', legs: 2, id: 2 },
  ]

  @listen('table button', 'click', true)
  onClick({ value }: HTMLButtonElement) {
    console.log(value)
  }

  template = html`
    <table is="devpr-table" source="data">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cor</th>
          <th>Sexo</th>
          <th>Pernas</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <template>
          <tr>
            <td data-col="name"></td>
            <td data-col="color"></td>
            <td data-col="sex"></td>
            <td data-col="legs"></td>
            <td data-val="id">
              <button type="button" is="devpr-button">Remover</button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'table-page': TablePage
  }
}
