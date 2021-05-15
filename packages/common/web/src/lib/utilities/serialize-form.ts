/**
 * Serializa o dados através do elemento de formulário.
 *
 * @export
 * @template T
 * @param {HTMLFormElement} form
 * @returns
 */

export function serializeForm<T>(form: HTMLFormElement) {
  const pairs = {}

  const formData = new FormData(form)

  formData.forEach((value, name) => {
    pairs[name] = value
  })

  return pairs as T
}
