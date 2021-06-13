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
import { Drawflow } from './draw-flow'

@Autonomous({
  selector: 'draw-flow',
  mode: 'open',
})
export class DrawFlowElement
  extends Component(HTMLElement)
  implements Connected {
  static observed = ['param']

  public param: string

  @event()
  onClick: Emitter<MouseEvent>

  @listen('button', 'click')
  onClicked(event: Event) {
    this.onClick.emit(event.target)
  }

  styles = css`
    :host {
      min-height: 600px;
      display: flex;
      width: 100%;
    }

    .parent-drawflow {
      width: 100%;
      display: flex;
      overflow: hidden;
      touch-action: none;
      outline: none;
    }

    .drawflow {
      width: 100%;
      height: 100%;
      position: relative;
      user-select: none;
    }

    .parent-node {
      position: relative;
    }

    .drawflow-node {
      display: flex;
      align-items: center;
      position: absolute;
      background: var(--green-01);
      width: 160px;
      min-height: 40px;
      border-radius: 4px;
      border: 1px solid var(--grey-02);
      color: black;
      z-index: 2;
      padding: 15px;
    }

    .drawflow-node.selected {
      background: var(--green-03);
      border-color: var(--grey-05);
      z-index: 10;
    }

    .drawflow-node:hover {
      cursor: move;
    }

    .drawflow-node .inputs,
    .drawflow-node .outputs {
      width: 0px;
    }

    .drawflow-node .drawflow_content_node {
      width: 100%;
      display: block;
    }

    .drawflow-node .input,
    .drawflow-node .output {
      position: relative;
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      border: 1px solid var(--grey-02);
      cursor: crosshair;
      z-index: 1;
      margin-bottom: 5px;
    }

    .drawflow-node .input {
      left: -25px;
      top: 2px;
      background: var(--blue-02);
    }
    .drawflow-node .output {
      right: -6px;
      top: 2px;
    }

    .drawflow svg {
      z-index: 0;
      position: absolute;
      overflow: visible !important;
    }
    .connection {
      position: absolute;
      transform: translate(9999px, 9999px);
    }
    .connection .main-path {
      fill: none;
      stroke-width: 3px;
      stroke: var(--blue-03);
      transform: translate(-9999px, -9999px);
    }
    .connection .main-path:hover {
      stroke: var(--purple-03);
      cursor: pointer;
    }

    .connection .main-path.selected {
      stroke: #43b993;
    }

    .connection .point {
      cursor: move;
      stroke: black;
      stroke-width: 2;
      fill: white;
      transform: translate(-9999px, -9999px);
    }

    .connection .point.selected,
    .connection .point:hover {
      fill: var(--purple-03);
    }

    .main-path {
      fill: none;
      stroke-width: 5px;
      stroke: var(--blue-03);
    }
    .selectbox {
      z-index: 3;
      position: absolute;
      transform: translate(9999px, 9999px);
    }
    .selectbox rect {
      fill: blue;
      opacity: 0.5;
      stroke: yellow;
      stroke-width: 5;
      stroke-opacity: 0.5;
      transform: translate(-9999px, -9999px);
    }

    .drawflow-delete {
      position: absolute;
      display: block;
      width: 30px;
      height: 30px;
      background: black;
      color: white;
      z-index: 4;
      /* border: 1px solid var(--grey-02); */
      line-height: 30px;
      font-weight: bold;
      text-align: center;
      border-radius: 50%;
      font-family: monospace;
      cursor: pointer;
    }
    .drawflow > .drawflow-delete {
      margin-left: -15px;
      margin-top: 15px;
    }

    .parent-node .drawflow-delete {
      right: -15px;
      top: -15px;
    }
  `

  template = html` <div id="drawflow"></div> `

  connected() {
    // Do something
    console.log(this.param)

    const container = this.shadowRoot?.querySelector<HTMLElement>('#drawflow')

    const editor = new Drawflow(container)

    editor.reroute = true
    editor.rerouteFixCurvature = true

    editor.start()
    const data = {
      name: '',
    }

    let posY = 0
    new Array(6).fill({ name: '' }).forEach(({ name }, i) => {
      posY = posY + 100

      const talk = `Palestra`
      const member = `Membro`

      editor.addNode(
        `member-${i}`,
        1,
        1,
        100,
        posY,
        member,
        { name: member },
        member
      )
      editor.addNode(`talk-${i}`, 1, 1, 800, posY, talk, { name: talk }, talk)
    })

    editor.addNode('bar', 1, 1, 450, 320, 'bar', data, 'Comunidade')
  }
}
