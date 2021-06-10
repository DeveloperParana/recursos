import { FormFieldElement } from './form-field'

describe('webForms', () => {
  let formField: FormFieldElement

  beforeEach(() => {
    formField = document.createElement('form-field')
  })

  it('should form-field is defined', async () => {
    expect(formField).toBeDefined()
  })
  it('should form-field is FormFieldElement instance', async () => {
    await customElements.whenDefined('form-field')
    expect(formField).toBeInstanceOf(FormFieldElement)
  })
})
