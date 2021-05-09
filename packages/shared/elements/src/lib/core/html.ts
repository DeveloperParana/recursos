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
