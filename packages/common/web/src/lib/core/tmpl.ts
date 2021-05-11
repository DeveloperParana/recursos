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
