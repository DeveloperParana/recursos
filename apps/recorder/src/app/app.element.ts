import { css, html, CustomElement, eventTarget } from '@devpr/common/web'

@CustomElement('devpr-root')
export class AppElement extends HTMLElement {
  title = 'DevPR Screen'

  mimeType: string
  stream: MediaStream
  mediaRecorder: MediaRecorder
  recordedBlobs: Blob[] = []

  button: Record<'play' | 'start' | 'record' | 'download', HTMLButtonElement>
  video: Record<'recorder' | 'recorded', HTMLVideoElement>
  link: HTMLAnchorElement

  get styles() {
    return css``
  }

  get template() {
    return html`
      <main>
        <section>
          <video id="recorder" playsinline autoplay></video>
          <video id="recorded" playsinline loop></video>
        </section>
        <nav>
          <div>
            <button is="devpr-button" id="start">Start camera</button>
            <label is="devpr-checkbox">
              <input type="checkbox" name="muted" />
              <span>Mute</span>
            </label>
            <button is="devpr-button" mode="outlined" id="record" disabled>
              Start Recording
            </button>
          </div>
          <div>
            <button is="devpr-button" id="play" disabled>Play</button>
            <button is="devpr-button" mode="outlined" id="download" disabled>
              Download
            </button>
          </div>
        </nav>
        <a id="downlink" download></a>
        <output id="error-message"></output>
      </main>
    `
  }

  connectedCallback() {
    this.button = {
      play: this.querySelector('#play'),
      start: this.querySelector('#start'),
      record: this.querySelector('#record'),
      download: this.querySelector('#download'),
    }

    this.video = {
      recorder: this.querySelector('#recorder'),
      recorded: this.querySelector('#recorded'),
    }

    this.link = this.querySelector('#downlink')

    this.button.record.onclick = eventTarget(this.onRecord.bind(this))
    this.button.download.onclick = this.onDownload.bind(this)
    this.button.start.onclick = this.onStart.bind(this)
    this.button.play.onclick = this.onPlay.bind(this)

    const check = this.querySelector('input')
    check.onchange = ({ target }) => {
      const { checked } = target as HTMLInputElement
      this.video.recorder.muted = checked
    }

    this.button.start.focus()
  }

  onStart() {
    const constraints = { video: { width: 1920, height: 1080 }, audio: true }

    this.init(constraints)
      .then((stream) => {
        this.stream = stream
        this.button.start.disabled = true
        this.button.record.disabled = false
        this.video.recorder.srcObject = stream
      })
      .then(() => this.button.record.focus())
  }

  onPlay() {
    const blob = new Blob(this.recordedBlobs, { type: this.mimeType })
    this.video.recorded.src = URL.createObjectURL(blob)
    this.video.recorded.controls = true
    this.video.recorded.play()
    this.button.download.focus()
  }

  onRecord(button: HTMLButtonElement) {
    const { state } = this.mediaRecorder ?? {}

    if (state && state === 'recording') {
      this.mediaRecorder.stop()
      button.textContent = 'Start'
    } else {
      this.startRecording()
      button.textContent = 'Stop'
    }
  }

  onDownload() {
    const blob = new Blob(this.recordedBlobs, { type: this.mimeType })
    this.link.href = URL.createObjectURL(blob)
    this.link.download = 'video.webm'
    this.link.click()
  }

  // Core
  startRecording() {
    this.recordedBlobs = []

    const mimeTypes = [
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm',
      'video/mp4',
    ]

    this.mimeType = mimeTypes.find((type) => {
      return MediaRecorder.isTypeSupported(type)
    })

    if (!this.mimeType) {
      console.error('MediaRecorder support')
    }

    try {
      this.mediaRecorder = new MediaRecorder(this.stream, {
        mimeType: this.mimeType,
      })

      this.mediaRecorder.ondataavailable = ({ data }: BlobEvent) => {
        if (data && data.size > 0) {
          this.recordedBlobs.push(data)
        }
      }

      this.mediaRecorder.start()

      this.mediaRecorder.onstop = () => {
        this.button.play.disabled = false
        this.button.download.disabled = false
        this.button.play.focus()
      }
    } catch (err) {
      console.error('Exception while creating MediaRecorder:', err)
    }
  }

  async init({ video, audio }: MediaStreamConstraints) {
    try {
      const display = await this.getDisplay(video as MediaTrackConstraints)
      const user = await this.getUser(audio as MediaTrackConstraints)

      const [track] = user.getAudioTracks()
      display.addTrack(track)

      return display
    } catch (err) {
      alert(err)
    }
  }

  getUser(audio: MediaTrackConstraints) {
    return navigator.mediaDevices.getUserMedia({ audio })
  }

  getDisplay(video: MediaTrackConstraints) {
    return navigator.mediaDevices.getDisplayMedia({ video })
  }
}
