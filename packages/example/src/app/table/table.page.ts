import { CustomElement, html } from '@devpr/common/web'

@CustomElement('table-page')
export class TablePage extends HTMLElement {
  data = [
    { name: 'Guilherme', color: 'Preto', sex: 'M', legs: 2 },
    { name: 'Americo', color: 'Azul', sex: 'M', legs: 2 },
  ]

  innerHTML = html`
    <table is="devpr-table" source="data">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cor</th>
          <th>Sexo</th>
          <th>Pernas</th>
        </tr>
      </thead>
      <tbody>
        <template>
          <tr>
            <td data-col="name"></td>
            <td data-col="color"></td>
            <td data-col="sex"></td>
            <td data-col="legs"></td>
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
