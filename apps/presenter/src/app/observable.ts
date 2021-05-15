export type ListenerCallback<T> = (value: T) => void

export class Observable<T> {
  protected _listeners: ListenerCallback<T>[] = []
  protected _value: T

  constructor(value: T) {
    this._listeners = []

    this._value = value
  }

  notify() {
    this._listeners.forEach((listener) => listener(this._value))
  }

  subscribe(listener: ListenerCallback<T>) {
    this._listeners.push(listener)
  }

  set value(value) {
    if (value !== this._value) {
      this._value = value
      this.notify()
    }
  }

  get value() {
    return this._value
  }
}

export class Computed<T> extends Observable<T> {
  constructor(value: () => T, deps: Observable<T>[]) {
    super(value())

    const listener = () => {
      this._value = value()
      this.notify()
    }

    deps.forEach((dep) => dep.subscribe(listener))
  }

  get value() {
    return this._value
  }

  set value(_) {
    throw 'Não é possível definir propriedade computada'
  }
}
