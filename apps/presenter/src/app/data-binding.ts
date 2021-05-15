import { Observable, Computed } from './observable'

export class DataBinding<T> {
  /**
   * @internal
   * NÃO USEM ISSO EM CASA
   */
  private _execute(js: string) {
    return eval(js)
  }

  /**
   * Evaluates JavaScript with a constrained context (scope)
   * @param {string} src The JavaScript to evaluate
   * @param {Record<string, unknown>} context
   */
  executeInContext(
    src: string,
    context: Record<string, unknown>,
    attachBindingHelpers = false
  ) {
    if (attachBindingHelpers) {
      context.observable = this.observable
      context.computed = this.computed
      context.bindValue = this.bindValue
    }
    return this._execute.call(context, src)
  }

  /**
   * A simple observable implementation
   */
  observable(value: T) {
    return new Observable(value)
  }

  /**
   * Creates an observed computed property
   * @param {function} calculation Calculated value
   * @param {Observable[]} deps The list of dependent observables
   */
  computed(calculation: () => T, deps: Observable<T>[]) {
    return new Computed(calculation, deps)
  }

  /**
   * Binds an input element to an observable value
   */
  bindValue(input: HTMLInputElement, observable: Observable<string>) {
    const initialValue: string = observable.value
    input.value = initialValue
    observable.subscribe(() => (input.value = observable.value))
    /**
     * Converts the values
     */
    let converter = (value: number | string) => value
    if (typeof initialValue === 'number') {
      converter = (num) => (isNaN((num = parseFloat(num as string))) ? 0 : num)
    }
    input.onkeyup = () => {
      observable.value = converter(input.value) as string
    }
  }

  bindAll(elem: HTMLDivElement, context: Record<string, any>) {
    this.bindLists(elem, context)
    this.bindObservables(elem, context)
  }

  /**
   * Searches for "data-bind" attribute to data-bind observables
   */
  bindObservables(elem: HTMLDivElement, context: Record<string, any>) {
    const dataBinding = elem.querySelectorAll<HTMLInputElement>('[data-bind]')
    dataBinding.forEach((elem) => {
      this.bindValue(elem, context[elem.getAttribute('data-bind')])
    })
  }

  /**
   * Searches for "repeat" attribute to data-bind lists
   */
  bindLists(elem: HTMLElement, context: Record<string, any>) {
    const listBinding = elem.querySelectorAll('[repeat]')

    listBinding.forEach((elem) => {
      const parent = elem.parentElement
      const expression = elem.getAttribute('repeat')

      elem.removeAttribute('repeat')

      const template = elem.outerHTML
      parent.removeChild(elem)

      context[expression].forEach((item: string) => {
        let newTemplate = `${template}`
        const regExpMustache = (regExp: RegExp, flags: string) => {
          return new RegExp('{{' + regExp + '}}', flags)
        }
        const matches = newTemplate.match(regExpMustache(/([^}]*?)/, 'g'))
        // const matches = newTemplate.match(/\{\{([^\}]*?)\}\}/g)
        if (matches) {
          matches.forEach((match) => {
            match = match.replace('{{', '').replace('}}', '')
            const value = this.executeInContext(`this.${match}`, { item })
            newTemplate = newTemplate.replace(`{{${match}}}`, value)
          })
          parent.innerHTML += newTemplate
        }
      })
    })
  }
}
