import { DataBinding } from './data-binding'

export class Slide {
  public _text: string

  public _context: Record<string, unknown>

  private _dataBinding: DataBinding<string>
  private _html: HTMLDivElement
  private _title: any
  private _transition: any
  private _nextSlideName: any

  constructor(text: string) {
    this._text = text

    this._context = {}

    this._dataBinding = new DataBinding()

    this._html = document.createElement('div')
    this._html.innerHTML = text

    this._title = this._html.querySelector('h1')?.innerText
    const transition = this._html.querySelectorAll<HTMLElement>('transition')

    if (transition.length) {
      this._transition = transition[0].innerText
    } else {
      this._transition = null
    }

    const selector = 'a[title="next-slide"]'
    const hasNext = this._html.querySelector<HTMLAnchorElement>(selector)
    if (hasNext) {
      this._nextSlideName = this.getSlideByLink(hasNext)
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
