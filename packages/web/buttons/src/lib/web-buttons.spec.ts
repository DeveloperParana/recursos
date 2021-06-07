import { ContainedButtonElement } from './contained-button'
import { OutlinedButtonElement } from './outlined-button'
import { ShadedButtonElement } from './shaded-button'
import { TextButtonElement } from './text-button'
import { ButtonBase } from './button-base'

const create = <T extends HTMLButtonElement>(tag: string) => {
  return document.createElement('button', {
    is: tag,
  }) as T
}

describe('webButtons', () => {
  let contained: ContainedButtonElement
  let outlined: OutlinedButtonElement
  let shaded: ShadedButtonElement
  let text: TextButtonElement

  beforeEach(() => {
    contained = create<ContainedButtonElement>('contained-button')
    outlined = create<ContainedButtonElement>('outlined-button')
    shaded = create<ContainedButtonElement>('shaded-button')
    text = create<ContainedButtonElement>('text-button')
  })

  it('should contained is defined', () => {
    expect(contained).toBeDefined()
  })
  it('should contained is ContainedButtonElement instance', () => {
    customElements.whenDefined('contained-button')
    expect(contained).toBeInstanceOf(ContainedButtonElement)
  })
  it('should outlined is defined', () => {
    expect(outlined).toBeDefined()
  })
  it('should outlined is OutlinedButtonElement instance', () => {
    customElements.whenDefined('outlined-button')
    expect(outlined).toBeInstanceOf(OutlinedButtonElement)
  })
  it('should shaded is defined', () => {
    expect(shaded).toBeDefined()
  })
  it('should shaded is ShadedButtonElement instance', () => {
    customElements.whenDefined('shaded-button')
    expect(shaded).toBeInstanceOf(ShadedButtonElement)
  })
  it('should text is defined', () => {
    expect(text).toBeDefined()
  })
  it('should text is TextButtonElement instance', () => {
    customElements.whenDefined('text-button')
    expect(text).toBeInstanceOf(TextButtonElement)
  })
})
