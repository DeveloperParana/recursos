export class Animator {
  /**
   * Quando uma animação está em "ação"
   * @type {boolean}
   * @private
   */
  private _transitioning: boolean

  /**
   * Animação inicial
   * @type {string}
   * @private
   */
  private _begin: string

  /**
   * Animação final
   * @type {string}
   * @private
   */
  private _end: string

  constructor() {
    this._transitioning = false
    this._begin = null
    this._end = null
  }

  /**
   * Se a animação estiver acontecendo
   * @readonly
   */
  get transitioning() {
    return this._transitioning
  }

  /**
   * Quando estiver pronto para completar
   * a segunda parte da animação
   * @readonly
   */
  get animationReady() {
    return !!this._end
  }

  /**
   * Começa uma nova animação (slide anterior)
   * @param {string} animationName
   * @param {HTMLDivElement} host
   * @param {() => void} callback
   */
  beginAnimation(
    animationName: string,
    host: HTMLDivElement,
    callback: () => void
  ) {
    this._transitioning = true
    this._begin = `anim-${animationName}-begin`
    this._end = `anim-${animationName}-end`
    const animationEnd = () => {
      host.removeEventListener('animationend', animationEnd)
      host.classList.remove(this._begin)
      this._transitioning = false
      callback()
    }
    host.addEventListener('animationend', animationEnd, false)
    host.classList.add(this._begin)
  }

  /**
   * Começa a animação final (próximo slide)
   * @param {HTMLDivElement} host
   */
  endAnimation(host: HTMLDivElement) {
    this._transitioning = true
    const animationEnd = () => {
      host.removeEventListener('animationend', animationEnd)
      host.classList.remove(this._end)
      this._transitioning = false
      this._begin = null
      this._end = null
    }
    host.addEventListener('animationend', animationEnd, false)
    host.classList.add(this._end)
  }
}
