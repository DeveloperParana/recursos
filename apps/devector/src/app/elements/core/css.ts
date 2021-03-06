/**
 * Cria um elemento HTMLStyleElement vinculando seu CSS ao mesmo.
 * Caso você adicione algo dinâmico por meio de variáveis JS / TS
 * também é posicionada no seu devido local.
 *
 * @export
 * @param {TemplateStringsArray} strings
 * @param {...unknown[]} values
 * @returns {HTMLStyleElement}
 */
export function css(
  strings: TemplateStringsArray,
  ...values: unknown[]
): HTMLStyleElement {
  const style = document.createElement('style')

  style.textContent = strings.map((str, i) => str + (values[i] ?? '')).join('')

  return style
}
