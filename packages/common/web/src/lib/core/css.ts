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
  const styles = strings.map((str, i) => str + (values[i] ?? '')).join('')
  return `<style>${styles}</style>`
}
