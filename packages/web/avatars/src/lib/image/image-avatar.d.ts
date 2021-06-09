import { ImageAvatarElement } from './image-avatar.element'

declare global {
  interface HTMLElementTagNameMap {
    'figure[image-avatar]': ImageAvatarElement
  }
}
