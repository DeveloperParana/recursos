import '@devpr/web-core'
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

  it('should call connected callback', () => {
    jest.spyOn(app, 'connected')
    whenDefined('devpr-root', () => {
      app.connected()
      expect(app.connected).toHaveBeenCalledTimes(1)
    })
  })
})
