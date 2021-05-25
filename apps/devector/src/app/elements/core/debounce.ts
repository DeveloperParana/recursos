import debounceFn from 'lodash.debounce'

/**
 * @description
 * Adiciona um tempo antes de executar
 * alguma chamada, em milisegundos
 *
 * @example
 * ```ts
 * ＠debounce(400)
 * ＠listen('devpr-search', 'onChange')
 * formChange({ detail }) {
 *   // Faz algo
 * }
 * ```
 *
 * @export
 * @param {number} [milliseconds=0]
 * @param {*} [options={}]
 */
export function debounce(milliseconds = 0, options = {}) {
  return function (
    target: HTMLElement,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const map = new WeakMap()
    const originalMethod = descriptor.value
    descriptor.value = function (...params: unknown[]) {
      let debounced = map.get(this)
      if (!debounced) {
        debounced = debounceFn(originalMethod, milliseconds, options).bind(this)
        map.set(this, debounced)
      }
      debounced(...params)
    }
    return descriptor
  }
}
