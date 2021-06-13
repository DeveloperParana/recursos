import { DrawFlowElement } from './draw-flow.element'

declare global {
  interface HTMLElementTagNameMap {
    'draw-flow': DrawFlowElement
  }

  interface HTMLElementEventMap {
    onClick: ElementClickEvent<DrawFlowElement>
  }
}
