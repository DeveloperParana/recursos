import { BsIconElement } from './bs-icon.element'

const create = <T extends HTMLElement>(tag: string) => {
  return document.createElement(tag) as T
}

describe('webIcons', () => {
  let bs: BsIconElement

  beforeEach(() => {
    bs = create<BsIconElement>('bs-icon')
  })

  it('should bs icon is defined', () => {
    expect(bs).toBeDefined()
  })
  it('should bs-icon is BsIconElement instance', () => {
    customElements.whenDefined('bs-icon')
    expect(bs).toBeInstanceOf(BsIconElement)
  })
})
