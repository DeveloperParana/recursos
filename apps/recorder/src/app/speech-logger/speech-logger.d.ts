import { SpeechLoggerElement } from './speech-logger.element'

declare global {
  interface HTMLElementTagNameMap {
    'speech-logger': SpeechLoggerElement
  }

  interface HTMLElementEventMap {
    onClick: ElementClickEvent<SpeechLoggerElement>
  }
}
