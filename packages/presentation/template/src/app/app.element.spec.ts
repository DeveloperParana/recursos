import { AppElement } from './app.element'

describe('AppElement', () => {
  let app: AppElement

  beforeEach(() => {
    app = new AppElement()
  })

  it('should create successfully', () => {
    expect(app).toBeTruthy()
  })

  it('should have a greeting', async () => {
    spyOn(app, 'connectedCallback')
    app.connectedCallback()

    expect(app.connectedCallback).toHaveBeenCalled()
  })
})
