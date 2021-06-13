import {
  css,
  html,
  event,
  listen,
  Emitter,
  Connected,
  Component,
  Autonomous,
  // EventWithTarget,
} from '@devpr/web-core'

@Autonomous({
  selector: 'demo-flows',
  mode: 'open',
})
export class AvatarsElement
  extends Component(HTMLElement)
  implements Connected {
  static observed = []

  // @event()
  // onClick: Emitter<MouseEvent>

  // @listen('button', 'click')
  // onWebClick(event: EventWithTarget) {
  //   console.log(event.currentTarget)

  //   this.onClick.emit(event.target)
  // }

  styles = css`
    :host {
      display: block;
      height: 600px;
      width: 100%;
    }
  `

  template = html` <draw-flow></draw-flow> `

  connected() {
    // const webButton = this.shadowRoot.querySelector('web-button');
    // console.log(webButton);
  }
}
