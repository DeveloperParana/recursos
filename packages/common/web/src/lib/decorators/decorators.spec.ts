import { BuiltInElement } from './built-in-element'
import { CustomElement } from './custom-element'

const whenDefined = (selector: string, fn: () => void) => {
  customElements.whenDefined(selector).then(fn).catch(console.error)
}

@BuiltInElement('test-button', 'button')
class Btn extends HTMLButtonElement {}

@CustomElement('test-page')
class Page extends HTMLElement {
  styles = ''
  template = ''
}

describe('AppElement', () => {
  let btn: Btn
  let page: Page

  beforeEach(() => {
    btn = new Btn()
    customElements.upgrade(btn)

    page = new Page()
    customElements.upgrade(page)
  })

  it('should create btn successfully', () => {
    expect(btn).toBeTruthy()
  })

  it('should btn is instance of Btn', () => {
    whenDefined('test-button', () => {
      expect(btn).toBeInstanceOf(Btn)
    })
  })

  it('should create page successfully', () => {
    expect(page).toBeTruthy()
  })

  it('should btn is instance of Page', () => {
    whenDefined('test-page', () => {
      expect(page).toBeInstanceOf(Page)
    })
  })
})
