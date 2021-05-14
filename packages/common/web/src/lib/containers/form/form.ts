import { BuiltInElement, event } from '../../decorators'
import { serializeForm } from '../../utilities'
import { BehaviorSubject } from 'rxjs'
import { Emitter } from '../../core'

@BuiltInElement('devpr-form', 'form')
export class Form<T> extends HTMLFormElement {
  @event() onChange: Emitter<T>

  @event() onSubmit: Emitter<T>

  private _valueChanges = new BehaviorSubject<T>(null)
  public valueChanges = this._valueChanges.asObservable()

  connectedCallback() {
    this.onchange = () => {
      const value = serializeForm<T>(this)
      this._valueChanges.next(value)
      this.onChange.emit(value)
    }

    this.onsubmit = (evt) => {
      evt.preventDefault()
      const value = serializeForm<T>(this)
      this.onSubmit.emit(value)
    }
  }
}
