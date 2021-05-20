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

  it('should update successfully', async () => {
    header.setAttribute('text', 'DevPR')

    whenElement('devpr-header')
      .then(() => {
        expect(header.querySelector('.logo').textContent).toEqual('DevPR')
      })
      .catch(console.log)
  })

  it('should update successfully', async () => {
    whenElement('devpr-header')
      .then(() => {
        spyOn(header, 'onClick')
        header.querySelector('a').click()
        expect(header.onClick).toHaveBeenCalledTimes(1)
      })
      .catch(console.log)
  })

  it('should update successfully', async () => {
    whenElement('devpr-header')
      .then(() => {
        spyOn(header, 'onClick')
        header.onClicked({ target: header })
        expect(header.onClick.emit).toHaveBeenCalledTimes(1)
      })
      .catch(console.log)
  })

  it('should update successfully', async () => {
    whenElement('devpr-header')
      .then(() => {
        header.querySelector('a').click()
        expect(header.onClicked).toHaveBeenCalledTimes(1)
      })
      .catch(console.log)
  })
})
