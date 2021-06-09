import {
  css,
  html,
  event,
  listen,
  Emitter,
  Connected,
  Component,
  Autonomous,
} from '@devpr/web-core'

@Autonomous({
  selector: 'demo-avatars',
  mode: 'open',
})
export class AvatarsElement
  extends Component(HTMLElement)
  implements Connected {
  static observed = []

  @event()
  onClick: Emitter<MouseEvent>

  @listen('button', 'click')
  onWebClick(event: EventWithTarget) {
    console.log(event.currentTarget)

    this.onClick.emit(event.target)
  }

  styles = css`
    :host {
      display: flex;
      justify-content: space-around;
    }

    :host > div {
      display: flex;
      flex-direction: column;
    }
    button {
      margin: 10px;
    }
    pre {
      padding: 9px;
      border-radius: 4px;
      background-color: black;
      color: #eee;
    }

    details {
      border-radius: 4px;
      color: #333;
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid rgba(0, 0, 0, 0.12);
      padding: 3px 9px;
      margin-bottom: 9px;
    }

    summary {
      cursor: pointer;
      outline: none;
      height: 36px;
      line-height: 36px;
    }

    .container {
      display: flex;
      /* justify-content: center; */
      margin: 10px 0;
      gap: 10px;
    }
    details .container {
      gap: 30px;
    }
    details details details .container {
      gap: 60px;
    }
    details details details details .container {
      gap: 10px;
    }
  `

  template = html`
    <div>

      <section>
        <image-avatar>
          <img slot="src" src="assets/avatar.jpeg" />
        </image-avatar>
        <image-avatar>
          <!-- <img slot="src" src="assets/avatar.jpeg" /> -->
        </image-avatar>
        <image-avatar name="Guilherme Siquinelli"> </image-avatar>
      </section>
    </div>
  `

  connected() {
    // const webButton = this.shadowRoot.querySelector('web-button');
    // console.log(webButton);
  }

  public emitClick<D = unknown>(detail: D) {
    this.onClick.emit(detail)
  }
}
