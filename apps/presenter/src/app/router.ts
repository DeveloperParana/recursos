export class Router {
  /**
   * Elemento origem de eventos
   * @type {HTMLDivElement}
   * @private
   */
  private _eventSource: HTMLDivElement

  /**
   * Evento que informa mudanças
   * de transições entre rotas
   * @type {CustomEvent<unknown>}
   * @private
   */
  private _routeChanged: CustomEvent<unknown>

  /**
   * Rota atual
   * @type {string}
   * @private
   */
  private _route: string

  constructor() {
    this._eventSource = document.createElement('div')
    this._routeChanged = new CustomEvent('routechanged', {
      bubbles: true,
      cancelable: false,
    })
    this._route = null

    onpopstate = () => {
      if (this.getRoute() !== this._route) {
        this._route = this.getRoute()
        this._eventSource.dispatchEvent(this._routeChanged)
      }
    }
  }

  get eventSource() {
    return this._eventSource
  }

  setRoute(route: string) {
    location.hash = route
    this._route = route
  }

  getRoute() {
    const hash = location.hash
    return hash.substr(1).replace(/\//gi, '/')
  }
}
