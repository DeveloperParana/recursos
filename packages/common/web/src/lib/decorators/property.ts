import 'reflect-metadata'

/**
 * Esta função é utilizada como decorator
 * acima da propriedade que você deseja
 * marcar como entrada de dados em um
 * custom element
 *
 * @example
 * Marcando o atributo `text` como entrada de strings
 * ```
 * @property
 * text: string
 * ```
 *
 * @export
 * @returns {*}
 */
export function property(): any {
  return (target: any) => {
    target.attributeChangedCallback = function (
      name: string,
      prev: string,
      next: string
    ) {
      this[name] = next
    }
  }
}
