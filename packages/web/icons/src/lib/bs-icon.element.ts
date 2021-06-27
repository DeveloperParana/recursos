import { css, html, Connected, Component, Autonomous } from '@devpr/web-core'

@Autonomous({
  selector: 'bs-icon',
  mode: 'open',
})
export class BsIconElement extends Component(HTMLElement) implements Connected {
  static observed = ['href', 'icon', 'color', 'size']

  public href = 'assets/icons/bs-icons.svg'
  public _icon = ''
  get icon() {
    return this._icon
  }
  set icon(v: string) {
    this._icon = v
    this.setIcon(this.icon)
  }

  public color: string
  public size: string

  styles = css`
    :host {
      display: flex;
      width: 24px;
      height: 24px;
    }
    svg {
      width: 24px;
      height: 24px;
      fill: var(--icon-color);
    }
  `

  template = html` <svg><use xlink:href=""></use></svg> `

  private use: SVGUseElement

  connected() {
    this.use = this.shadowRoot.querySelector('use')
    this.setIcon(this.icon)
  }

  setIcon(icon: string) {
    const href = `${this.href}#${icon}`
    if (this.use) {
      this.use.setAttribute('xlink:href', href)
    }
  }
}
