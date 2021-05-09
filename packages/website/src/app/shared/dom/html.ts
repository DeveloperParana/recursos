/**
 * Esta função `template literals` não tem tanta utilidade funcional
 * por enquanto, porém utilizando a extensão do LitElement no VSCode
 * permite que escrevamos o html com syntax highlight
 *
 * @export
 * @param {TemplateStringsArray} strings
 * @param {...unknown[]} values
 * @returns
 */
export function html(strings: TemplateStringsArray, ...values: unknown[]) {
  return strings.map((str, i) => str + (values[i] ?? '')).join('')
}

/**
 * Esta função `template literals` não tem tanta utilidade funcional
 * por enquanto, porém utilizando a extensão do LitElement no VSCode
 * permite que escrevamos o css com syntax highlight
 *
 * @export
 * @param {TemplateStringsArray} strings
 * @param {...unknown[]} values
 * @returns
 */
export function css(strings: TemplateStringsArray, ...values: unknown[]) {
  return (
    `<style>` +
    strings.map((str, i) => str + (values[i] ?? '')).join('') +
    `</style>`
  )
}

/**
 * Retorna o template pelo atributo `#id`,
 * geralmente localizado na `index.html`
 *
 * Os templates da index.html são apenas a base
 * estrutural, ou seja, que facilitem alterações
 * de estrutura base do layout
 *
 * @export
 * @param {string} templateId
 * @returns {HTMLTemplateElement}
 */
export function tmpl(templateId: string): HTMLTemplateElement {
  return document.querySelector('#' + templateId)
}
