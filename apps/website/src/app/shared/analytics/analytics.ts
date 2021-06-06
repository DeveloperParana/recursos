import { BuiltInElement } from '@devpr/common-web'
import { environment } from './../../../envs/env'

type WindowAnalytic = Window & {
  dataLayer?: unknown[]
}

/**
 * Componente built-in responsável por
 * gerenciar o script de analytics
 *
 * @example
 *
 * ```html
 * <script is="devpr-analytics"></script>
 * ```
 *
 * @returns
 * ```html
 * <!-- Global site tag (gtag.js) - Google Analytics -->
 * <script async src="https://www.googletagmanager.com/gtag/js?id=*-**********"></script>
 * <script>
 *   window.dataLayer = window.dataLayer || [];
 *   function gtag(){dataLayer.push(arguments);}
 *   gtag('js', new Date());
 *   gtag('config', '*-**********');
 * </script>
 * ```
 *
 * @export
 * @class Analytics
 * @extends {HTMLScriptElement}
 */
@BuiltInElement('devpr-analytics', 'script')
export class Analytics extends HTMLScriptElement {
  /**
   * Host Google Tag Manager
   *
   * @private
   * @memberof Analytics
   */
  private host = 'https://www.googletagmanager.com/gtag/js'

  /**
   * Parâmetros `id` relacionado a tag deste
   * projeto usado em composição com o host
   *
   * @private
   * @memberof Analytics
   */
  private params = new URLSearchParams({
    id: environment.googleTag,
  })

  /**
   * Parâmetro recomendado no script
   * informado pelo G.A. Usado para
   * performance no paint da página
   *
   * @memberof Analytics
   */
  async = true

  /**
   * Atributo que receberá a URL
   * formada com host e id da tag
   *
   * @memberof Analytics
   */
  src = ''

  constructor() {
    super()
    if (environment.production) {
      this.src = `${this.host}?${this.params.toString()}`
      this.onload = this.configure
    } else {
      this.remove()
    }
  }

  configure() {
    const service: WindowAnalytic = window
    service.dataLayer = service.dataLayer || []
    function gtag(...args: unknown[]) {
      service.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', environment.googleTag)
  }
}
