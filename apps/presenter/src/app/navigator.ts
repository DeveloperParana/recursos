import { loadSlides } from './slide-loader'
import { Animator } from './animator'
import { Router } from './router'
import { Slide } from './slide'

export class Navigator extends HTMLElement {
  static observedAttributes = ['start']

  slidesChangedEvent: CustomEvent<unknown>

  /**
   *
   *
   * @type {Animator}
   * @memberof Navigator
   */
  _animator: Animator

  /**
   * The related router control
   * @type {Router}
   */
  _router: Router

  /**
   * The last known route
   * @type {string}
   */
  _route: string

  _slides: Slide[] = []

  _title: HTMLHeadingElement

  _currentIndex: any

  constructor() {
    super()
    this._animator = new Animator()
    this._router = new Router()
    this._route = this._router.getRoute()

    /**
     * Custom event raised when the current slide changes
     */
    const eventInit = { bubbles: true, cancelable: false }
    this.slidesChangedEvent = new CustomEvent('slideschanged', eventInit)

    this._router.eventSource.addEventListener('routechanged', () => {
      if (this._route !== this._router.getRoute()) {
        this._route = this._router.getRoute()

        if (this._route) {
          const slide = parseInt(this._route) - 1
          this.jumpTo(slide)
        }
      }
    })
  }

  async attributeChangedCallback(name: string, prev: string, next: string) {
    if (name === 'start') {
      if (prev !== next) {
        this._slides = await loadSlides(next)
        this._route = this._router.getRoute()
        let slide = 0
        if (this._route) {
          slide = parseInt(this._route) - 1
        }
        this.jumpTo(slide)
        this._title = document.querySelector('h1')
      }
    }
  }

  get currentIndex() {
    return this._currentIndex
  }

  get currentSlide() {
    return this._slides ? this._slides[this._currentIndex] : null
  }

  get totalSlides() {
    return this._slides ? this._slides.length : 0
  }

  get hasPrevious() {
    return this._currentIndex > 0
  }

  get hasNext() {
    const host = this.querySelector('div')
    if (host) {
      const appear = host.querySelectorAll('.appear')
      if (appear && appear.length) {
        return true
      }
    }
    return this._currentIndex < this.totalSlides - 1
  }

  jumpTo(slideIdx: number) {
    if (this._animator.transitioning) {
      return
    }
    if (slideIdx >= 0 && slideIdx < this.totalSlides) {
      this._currentIndex = slideIdx

      this.innerHTML = ''
      this.appendChild(this.currentSlide.html)

      this._router.setRoute((slideIdx + 1).toString())
      this._route = this._router.getRoute()

      const title = `${this.currentIndex + 1}/${this.totalSlides}`
      document.title = ` ${title}: ${this.currentSlide.title}`

      this.dispatchEvent(this.slidesChangedEvent)

      if (this._animator.animationReady) {
        this._animator.endAnimation(this.querySelector('div'))
      }
    }
  }

  checkForAppears() {
    const host = this.querySelector('div')
    const appear = host.querySelectorAll('.appear')
    if (appear.length) {
      appear[0].classList.remove('appear')
      return true
    }
    return false
  }

  /**
   * Avance para o próximo slide, se houver.
   * Aplica animação se a transição for especificada
   */
  next() {
    if (this.checkForAppears()) {
      this.dispatchEvent(this.slidesChangedEvent)
      return
    }
    if (this.hasNext) {
      if (this.currentSlide.transition !== null) {
        this._animator.beginAnimation(
          this.currentSlide.transition,
          this.querySelector('div'),
          () => this.jumpTo(this.currentIndex + 1)
        )
      } else {
        this.jumpTo(this.currentIndex + 1)
      }
    }
  }

  previous() {
    if (this.hasPrevious) {
      this.jumpTo(this.currentIndex - 1)
    }
  }
}

export const registerDeck = () => {
  customElements.define('slide-deck', Navigator)
}
