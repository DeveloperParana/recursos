import { VideoGifElement } from './video-gif.element'

declare global {
  interface HTMLElementTagNameMap {
    'video-gif': VideoGifElement
  }

  interface HTMLElementEventMap {
    onClick: ElementClickEvent<VideoGifElement>
  }
}
