import {
  css,
  html,
  Component,
  Connected,
  Autonomous,
  cloneTemplate,
} from '@devpr/web-core'

@Autonomous({
  selector: 'image-avatar',
  mode: 'open',
})
export class ImageAvatarElement
  extends Component(HTMLElement)
  implements Connected
{
  static observed = ['name', 'size', 'content']

  public name: string

  public size: AvatarSize = 'default'

  public content: AvatarContent = 'default'

  styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
    }

    svg {
      width: 40px;
    }
    figure {
      margin: 40px;
    }

    ::slotted(img) {
      max-width: 40px;
      overflow: hidden;
      border-radius: 50%;
    }
  `

  template = html`
    <figure>
      <slot name="src"></slot>
    </figure>

    <template id="empty">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="#E0E0E0" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.667 19C30.667 22.6819 27.6822 25.6666 24.0003 25.6666C20.3184 25.6666 17.3337 22.6819 17.3337 19C17.3337 15.3181 20.3184 12.3333 24.0003 12.3333C27.6822 12.3333 30.667 15.3181 30.667 19ZM27.3337 19C27.3337 20.8409 25.8413 22.3333 24.0003 22.3333C22.1594 22.3333 20.667 20.8409 20.667 19C20.667 17.159 22.1594 15.6666 24.0003 15.6666C25.8413 15.6666 27.3337 17.159 27.3337 19Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.0003 5.66663C13.8751 5.66663 5.66699 13.8747 5.66699 24C5.66699 34.1252 13.8751 42.3333 24.0003 42.3333C34.1255 42.3333 42.3337 34.1252 42.3337 24C42.3337 13.8747 34.1255 5.66663 24.0003 5.66663ZM9.00033 24C9.00033 27.4836 10.1879 30.6899 12.1803 33.2361C14.9211 29.6481 19.2441 27.3333 24.1078 27.3333C28.9084 27.3333 33.1823 29.5884 35.9278 33.0971C37.8554 30.5737 39.0003 27.4205 39.0003 24C39.0003 15.7157 32.2846 8.99996 24.0003 8.99996C15.7161 8.99996 9.00033 15.7157 9.00033 24ZM24.0003 39C20.4166 39 17.1264 37.7432 14.5464 35.6464C16.6562 32.6353 20.1521 30.6666 24.1078 30.6666C28.0144 30.6666 31.4725 32.5867 33.5899 35.5347C30.9901 37.6985 27.6472 39 24.0003 39Z"
          fill="white"
        />
      </svg>
    </template>
    <template id="initials">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="24" fill="#818181" />
        <text
          fill="#fff"
          font-size="20"
          transform="translate(8 32)"
          font-family="HelveticaNeue, Helvetica Neue"
        >
          <tspan x="0" y="0">A.B</tspan>
        </text>
      </svg>
    </template>
  `
  empty: HTMLElement
  initials: HTMLElement

  figure: HTMLElement
  avatar: HTMLElement

  connected() {
    queueMicrotask(() => {
      this.figure = this.shadowRoot.querySelector('figure')
      this.empty = cloneTemplate(this.shadowRoot.querySelector('#empty'))
      this.initials = cloneTemplate(this.shadowRoot.querySelector('#initials'))

      const slot = this.shadowRoot.querySelector('slot')
      if (!slot.assignedElements().length) {
        if (this.name) {
          const tspan = this.initials.querySelector('tspan')

          tspan.textContent = this.getName(this.name)

          this.figure.appendChild(this.initials)
        } else {
          this.figure.appendChild(this.empty)
        }
      }
    })

    // queueMicrotask(() => {
    //   this.figure = this.shadowRoot.querySelector('figure')
    //   this.avatar = cloneTemplate(this.shadowRoot.querySelector('template'))

    //   if (!this.hasSource) {
    //     this.figure.appendChild(this.avatar)
    //   }
    //   console.log(this.source.innerHTML)
    //   this.source.addEventListener('slotchange', () => {
    //     if (this.avatar.isConnected) this.avatar.remove()
    //   })
    // })
  }

  getName(value: string) {
    const names = value.split(' ')
    const first = names.shift().split('')
    const last = names.pop()?.split('')

    return first.shift() + '.' + last?.shift()
  }

  get source() {
    return this.shadowRoot.querySelector('slot')
  }

  get hasSource() {
    return !!this.source.assignedNodes().length
  }
}
