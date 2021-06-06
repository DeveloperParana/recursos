import { parseValue } from './utilities'

/**
 * Serializa o dados através do elemento de formulário.
 *
 * @export
 * @template T
 * @param {HTMLFormElement} form
 * @returns
 */

export function form<T>(form: HTMLFormElement) {
  const obj = {}

  const data = new FormData(form)

  data.forEach((value, name) => (obj[name] = value))

  return parseValue(obj) as T
}
