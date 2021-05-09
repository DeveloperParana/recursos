import { AppElement } from './app.element'

const whenDefined = (selector: string, fn: () => void) => {
  customElements.whenDefined(selector).then(fn).catch(console.error)
}

describe('AppElement', () => {
  let app: AppElement

  beforeEach(() => {
    app = new AppElement()
  })

  it('should create successfully', () => {
    expect(app).toBeTruthy()
  })

  it('should have DevParaná', () => {
    whenDefined('devpr-heading', () => {
      expect(app.querySelector('h1').innerHTML).toEqual('DevParaná')
    })
  })
  it('should call connected callback', () => {
    spyOn(app, 'connectedCallback')
    app.connectedCallback()
    whenDefined('devpr-root', () => {
      expect(app.connectedCallback).toHaveBeenCalledTimes(1)
    })
  })
})
