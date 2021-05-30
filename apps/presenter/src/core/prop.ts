import { parseValue } from './utilities'
import 'reflect-metadata'

/**
 * Esta função é utilizada como decorator
 * acima da propriedade que você deseja
 * marcar como entrada de dados em um
 * custom element
 *
 * Marcando o atributo `text` como entrada de strings
 * @example
 * ```ts
 * ＠prop()
 * text: string
 * ```
 *
 * @export
 * @returns {*}
 */
export function prop(): any {
  return (target: any) => {
    target.attributeChangedCallback = function (
      name: string,
      prev: string,
      next: string
    ) {
      this[name] = parseValue(next)
    }
  }
}
