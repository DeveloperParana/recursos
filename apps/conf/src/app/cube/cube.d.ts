import { CubeElement } from './cube.element'

declare global {
  interface HTMLElementTagNameMap {
    cube: CubeElement
  }

  interface HTMLElementEventMap {
    onClick: ElementClickEvent<CubeElement>
  }
}
