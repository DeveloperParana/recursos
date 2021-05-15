export const handleTableData = <T>(
  template: HTMLTemplateElement,
  data: T[]
) => {
  data.map((row: T) => handleTableRow(template, row))
}

export const handleTableRow = <T>(template: HTMLTemplateElement, row: T) => {
  const clone = cloneTemplate(template)
  const dataCells = clone.querySelectorAll('td')
  dataCells.forEach((node) => addData(node, row))
  template.parentNode.appendChild(clone)
}

export function getDataContext({ source }: DOMStringMap) {
  return this.parentElement[source]
}

export const addData = <T>(node: HTMLTableDataCellElement, row: T) => {
  if (node.dataset.val) {
    if (
      node.hasChildNodes &&
      node.firstElementChild instanceof HTMLButtonElement
    ) {
      node.firstElementChild.value = row[node.dataset.val]
    }
  }
  if (
    typeof row[node.dataset.col] === 'string' ||
    typeof row[node.dataset.col] === 'number'
  ) {
    node.textContent = row[node.dataset.col]
  }
}

export function cloneTemplate(template: HTMLTemplateElement) {
  return template.content.cloneNode(true) as HTMLElement
}
