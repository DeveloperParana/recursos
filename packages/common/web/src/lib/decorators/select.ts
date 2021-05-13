export interface PropertyOptions {
  type:
    | BooleanConstructor
    | DateConstructor
    | NumberConstructor
    | StringConstructor
    | ArrayConstructor
    | ObjectConstructor
  notify?: boolean
  reflectToAttribute?: boolean
  readOnly?: boolean
  computed?: string
  observer?:
    | string
    | ((val: Record<string, unknown>, old: Record<string, unknown>) => void)
}

export interface ElementConstructor extends Function {
  is?: string
  properties?: { [prop: string]: PropertyOptions }
  observers?: string[]
  _addDeclarativeEventListener?: (
    target: string | EventTarget,
    eventName: string,
    handler: (ev: Event) => void
  ) => void
}

export interface ElementPrototype extends HTMLElement {
  constructor: ElementConstructor
}

export function query(selector: string) {
  return (proto: ElementPrototype, propName: string) => {
    Object.defineProperty(proto, propName, {
      get(this: HTMLElement) {
        return this.shadowRoot!.querySelector(selector)
      },
      enumerable: true,
      configurable: true,
    })
  }
}
