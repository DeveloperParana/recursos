import { BuiltInElement } from '../../decorators'
import { parse } from 'json5'

@BuiltInElement('web-form', 'form')
export class Form<T> extends HTMLFormElement {
  connectedCallback() {
    this.onchange = (evt) => {
      const value = this.handleValue()
      const data = this.handleData(value)
      this.emitEvent('formChange', data)
    }

    this.onsubmit = (evt) => {
      evt.preventDefault()
      const { submit } = this.dataset
      const value = this.handleValue()
      const data = this.handleData(value)
      this.emitEvent('formSubmit', data)
      this.parentElement[submit](data)
    }
  }

  emitEvent<T>(type: string, detail: T) {
    const event = new CustomEvent(type, { detail })
    this.parentElement.dispatchEvent(event)
  }

  queryControls(types = []) {
    return this.querySelectorAll(`${types.join(',')}`)
  }

  handleValue() {
    const mount = ({ name, type, checked, value }) => {
      if (type === 'checkbox' && value === 'on') {
        value = value && checked
      }
      return { [name]: value }
    }
    const controls = this.queryControls(['input', 'select'])
    return Array.from(controls).map((control) => {
      return mount(control as HTMLInputElement)
    })
  }

  handleData(data: any[]) {
    const values = data.reduce((result, item) => {
      const key = Object.keys(item)[0]
      result[key] = item[key]
      return result
    })

    try {
      return parse(values)
    } catch (err) {
      return values
    }
  }
}
