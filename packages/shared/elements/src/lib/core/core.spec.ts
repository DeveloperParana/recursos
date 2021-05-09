import { JSDOM } from 'jsdom'
import { noop } from './noop'
import { html } from './html'
import { css } from './css'
import { tmpl } from './tmpl'

const dom = new JSDOM()

global.document = dom.window.document
global.window = dom.window

describe('AppElement', () => {
  let styles: string
  let template: string

  beforeEach(() => {
    // prettier-ignore
    styles = css`.button {}`
    template = html`<button></button>`
  })

  it('should create styles successfully', () => {
    expect(styles).toBeTruthy()
  })

  it('should create template successfully', () => {
    expect(template).toBeTruthy()
  })

  it('should have tag style', () => {
    expect(styles).toEqual('<style>.button {}</style>')
  })

  it('should template is button string', () => {
    expect(template).toEqual('<button></button>')
  })

  it('should noop return null', () => {
    expect(noop()).toBeNull()
  })

  it('should tmpl return null', () => {
    expect(tmpl('template')).toBeNull()
  })
})
