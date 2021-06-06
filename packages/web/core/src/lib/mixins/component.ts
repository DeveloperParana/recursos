import { BehaviorSubject } from 'rxjs'

type Constructor = new (...args: any[]) => any

// Auxilia a especificação de tipo para os dados de estado
export type ComponentState<S> = S | Record<string, string | number | boolean>

/**
 * Este mixin adiciona uma propriedade de estado,
 * com getters e setters para alterá-lo com uma
 * propriedade privada encapsulada:
 * @export
 * @template TBase
 * @template SBase
 * @param {TBase} Base
 * @returns
 */
export function Component<
  TBase extends Constructor,
  SBase extends ComponentState<TBase>
>(Base: TBase) {
  return class CustomElement extends Base {
    static observedAttributes?: string[]
    static selector = ''
    static is?: string
    static template?: HTMLTemplateElement
    static styles?: HTMLStyleElement

    /**
     * Mixins não podem declarar propriedades
     * privadas/protegidas
     *
     * @todo usar campos privados ES2020
     */
    // _state = undefined;
    _state = new BehaviorSubject(null)

    state$ = this._state.asObservable()

    setState(state: SBase) {
      this._state.next(state)
    }
    get state(): SBase {
      return this._state.value
    }
  }
}
