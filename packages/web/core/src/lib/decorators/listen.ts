import { Emitter } from './../emitter'
import { CustomConstructor } from '../types/custom-constructor'
import { noop } from '../utilities'

/**
 * Decorator para escuta de eventos por
 * seletores e opção que determina caso
 * deva retornar o evento ou seu target
 *
 * @example
 * ```ts
 * ＠listen('form', 'onChange')
 * onChanged({ detail }: CustomEvent) {
 *   // Faz algo
 * }
 * ```
 *
 * @export
 * @template T
 * @param {(keyof HTMLElementTagNameMap | string)} selector
 * @param {keyof HTMLElementEventMap} event
 * @param {boolean} [getTarget=false]
 * @returns
 */
export function listen<T>(
  selector: keyof HTMLElementTagNameMap | string,
  event: keyof HTMLElementEventMap,
  getTarget = false
) {
  /**
   * Adiciona listener aos elementos
   * É executado sempre que novos elementos
   * são adicionados ao DOM ou também
   * quando elementos são removidos
   *
   * @param {HTMLElement} context
   * @param {CustomConstructor} target
   * @param {string} propertyKey
   */
  function attachListener(
    context: HTMLElement,
    target: CustomConstructor,
    propertyKey: string
  ) {
    let elements: NodeListOf<HTMLElement> | undefined

    elements = context.querySelectorAll(selector)

    if (!!elements.length == false) {
      elements = context?.shadowRoot?.querySelectorAll(selector)
    }

    if (elements) {
      elements.forEach((el) => {
        // if (!(typeof el[`on${event.toLowerCase()}`] === 'undefined')) {}
        el.addEventListener(event, (e: CustomEvent<T>) => {
          target[propertyKey].call(context, getTarget ? e.target : e)
        })
      })
    }
  }

  return function (
    target: CustomConstructor,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const connected = target.connectedCallback ?? noop

    target.connectedCallback = function (): void {
      const observer = new MutationObserver(() => {
        attachListener(this, target, propertyKey)
        // if (!(typeof this[`on${event}`] === 'function')) {}
      })
      // observa alterações no elemento para manter-se ouvindo
      // observer.observe(this, { subtree: true, childList: true })

      attachListener(this, target, propertyKey)

      // connectedCallback
      connected.call(this)
    }

    return descriptor
  }
}

// import { noop } from '../utilities';

// /**
//  * Decorator para escuta de eventos por
//  * seletores e opção que determina caso
//  * deva retornar o evento ou seu target
//  *
//  * @example
//  * ```ts
//  * ＠listen('form', 'onChange')
//  * onChanged({ detail }: CustomEvent) {
//  *   // Faz algo
//  * }
//  * ```
//  *
//  * @export
//  * @template T
//  * @param {string} selector
//  * @param {string} event
//  * @returns
//  */
// export function listen<T>(
//   selector: keyof HTMLElementTagNameMap | string,
//   event: keyof HTMLElementEventMap,
//   getTarget = false
// ) {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     const connected = target.connectedCallback ?? noop;

//     target.connectedCallback = function (): void {
//       connected.call(this);

//       let elements: NodeListOf<HTMLElement>;

//       if (this.shadowRoot) {
//         elements = this.shadowRoot.querySelectorAll(selector);
//       } else {
//         elements = this.querySelectorAll(selector);
//       }

//       elements.forEach((el) => {
//         el.addEventListener(event, (e: CustomEvent<T>) => {
//           target[propertyKey].call(this, getTarget ? e.target : e);
//         });
//       });
//     };

//     return descriptor;
//   };
// }
