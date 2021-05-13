import { css, CustomElement, html } from '@devpr/common/web'

@CustomElement('devpr-stream-section')
export class StreamSection extends HTMLElement {
  styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `
  template = html`
    <h2 class="section__header">Stream</h2>

    <div class="section__content">
      <video id="video" autoplay controls></video>
    </div>
  `

  connectedCallback() {
    if (navigator.mediaDevices.getUserMedia) {
      var constraints = { audio: true, video: true }
      var chunks = []

      const onSuccess = function (stream) {
        var options = {
          audioBitsPerSecond: 128000,
          videoBitsPerSecond: 2500000,
          mimeType: 'video/mp4',
        }
        var mediaRecorder = new MediaRecorder(stream, options)
        // m = mediaRecorder
      }
      navigator.mediaDevices.getDisplayMedia().then(onSuccess)
    }
  }
}
