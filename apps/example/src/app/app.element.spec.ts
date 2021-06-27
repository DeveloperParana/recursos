import { AppElement } from './app.element'

describe('AppElement', () => {
  let app: AppElement

  beforeEach(() => {
    app = new AppElement()
  })

  it('should create successfully', () => {
    expect(app).toBeTruthy()
  })

  it('should have a greeting', () => {
    jest.spyOn(app, 'connected')

    app.connected()
    expect(app.connected).toHaveBeenCalledTimes(1)
  })
})
