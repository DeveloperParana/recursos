import { DataBinding } from './data-binding'
import * as hljs from 'highlight.js'
import { parse } from './metadata'
import * as marked from 'marked'

/**
 * Configura syntax highlight com
 * a biblioteca marked
 */
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: (code, lang) => {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  },
})

export class Slide {
  public _text: string

  public _context: Record<string, unknown>

  private _dataBinding: DataBinding<string>
  private _html: HTMLDivElement
  private _nextSlideName: string
  private _transition: string
  private _title: string
  private _styles: string

  constructor(text: string) {
    const { content, metadata } = parse(text)

    this._text = content

    this._context = {}

    this._dataBinding = new DataBinding()

    this._html = document.createElement('div')
    this._html.innerHTML = marked.parse(content)

    this._title = metadata.title
    this._styles = metadata.styles

    this._html.classList.add(this._styles)

    // this._html.querySelector('h1')?.innerText
    const transition = this._html.querySelectorAll<HTMLElement>('transition')

    if (transition.length) {
      this._transition = transition[0].innerText
    } else {
      this._transition = null
    }

    if (metadata.nextSlide) {
      this._nextSlideName = metadata.nextSlide
    } else {
      this._nextSlideName = null
    }

    const script = this._html.querySelector('script')
    if (script) {
      this._dataBinding.executeInContext(script.innerText, this._context, true)
      this._dataBinding.bindAll(this._html, this._context)
    }
  }

  getSlideByLink(a: HTMLAnchorElement) {
    const { protocol, host } = location
    const prefix = `${protocol}//${host}/`
    return a.innerText.replace(prefix, '')
  }

  get transition() {
    return this._transition
  }

  get title() {
    return this._title
  }

  get html() {
    return this._html
  }

  get nextSlide() {
    return this._nextSlideName
  }
}
