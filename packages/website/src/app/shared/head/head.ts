import { environment } from './../../../envs/env'
import { BuiltInElement } from '@devpr/common/web'

/**
 * Componente built-in responsável por
 * gerenciar as tags do head
 *
 * @example
 *
 * ```html
 * <script is="devpr-head"></script>
 * ```
 *
 * @returns
 * ```html
 * <meta name="google-site-verification" content="***...." />
 * ```
 */
@BuiltInElement('devpr-head', 'head')
export class Head extends HTMLHeadElement {
  connectedCallback() {
    const meta = document.createElement('meta')
    meta.name = 'google-site-verification'
    meta.content = environment.verification
    this.querySelector('base').insertAdjacentElement('beforebegin', meta)
  }
}
