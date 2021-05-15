/**
 * Este decorator facilita a escrita e
 * legibilidade para declaração de um
 * novo custom element integrado
 *
 * @example
 * ```ts
 * _@BuiltInElement('devpr-table', 'table')
 * export class Table<T> extends HTMLTableElement { }
 * ```
 *
 * @export
 * @param {string} selector
 * @param {keyof HTMLElementTagNameMap} inherit
 * @returns
 */
export function BuiltInElement(
  selector: string,
  inherit: keyof HTMLElementTagNameMap
) {
  return function (target: CustomElementConstructor) {
    customElements.define(selector, target, { extends: inherit })
  }
}
