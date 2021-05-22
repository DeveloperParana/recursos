import { Header } from './header.element'

function whenElement(selector: string) {
  return customElements.whenDefined(selector)
}

describe('Header', () => {
  let header: Header

  beforeEach(() => {
    header = new Header()
  })

  it('should create successfully', () => {
    expect(header).toBeTruthy()
  })

  it('should create successfully', () => {
    expect(header.template).toBeTruthy()
  })

  it('should update successfully', () => {
    expect(header.text).toEqual('')
    header.setAttribute('text', 'attr')
    expect(header.text).toEqual('attr')
  })
})
