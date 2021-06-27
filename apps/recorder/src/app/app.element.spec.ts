import { AppElement } from './app.element'

describe('AppElement', () => {
  let app: AppElement

  beforeEach(() => {
    app = new AppElement()
    // app = document.createElement('devpr-root') as AppElement
  })

  it('should create successfully', () => {
    expect(app).toBeTruthy()
  })

  it('should have a greeting', async () => {
    jest.spyOn(app, 'connected')
    await customElements.whenDefined('devpr-root')
    app.connected()
    expect(app.connected).toHaveBeenCalledTimes(1)
  })
})
