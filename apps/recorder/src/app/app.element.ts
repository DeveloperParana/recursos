import { css, html, Autonomous } from '@devpr/web-core'

@Autonomous({
  selector: 'devpr-root',
  mode: 'open',
})
export class AppElement extends HTMLElement {
  title = 'DevPR Screen'

  mimeType: string
  stream: MediaStream
  mediaRecorder: MediaRecorder
  recordedBlobs: Blob[] = []

  button: Record<'play' | 'start' | 'record' | 'download', HTMLButtonElement>
  video: Record<'recorder' | 'recorded', HTMLVideoElement>
  link: HTMLAnchorElement

  styles = css`
    main {
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 800px;
      margin: 0px auto;
      flex: 1;
    }

    section {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    section video {
      position: absolute;
      width: 100%;
      max-width: 100%;
      border-radius: 8px;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.1);
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 80px;
      position: relative;
    }
    nav > div {
      gap: 16px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      align-content: center;
    }
  `

  template = html`
    <main>
      <section>
        <video id="recorder" playsinline autoplay></video>
        <video id="recorded" playsinline loop></video>
      </section>
      <nav>
        <div>
          <button is="outlined-button" id="start">
            <bs-icon slot="suffix" icon="external"></bs-icon>
          </button>

          <button is="outlined-button" mode="outlined" id="record" disabled>
            <bs-icon slot="prefix" icon="record"></bs-icon>
            <!-- <span>Gravar</span> -->
          </button>

          <label is="devpr-checkbox">
            <input type="checkbox" name="muted" />
            <span>Mute</span>
          </label>
        </div>
        <div>
          <button is="outlined-button" id="play" disabled>
            <bs-icon slot="prefix" icon="play"></bs-icon>
          </button>
          <template> </template>
          <button is="outlined-button" mode="outlined" id="download" disabled>
            <bs-icon slot="prefix" icon="download"></bs-icon>
          </button>
        </div>
      </nav>
      <a id="downlink" download></a>
      <output id="error-message"></output>
    </main>
  `

  connected() {
    if (this.shadowRoot) {
      this.button = {
        play: this.shadowRoot?.querySelector('#play'),
        start: this.shadowRoot?.querySelector('#start'),
        record: this.shadowRoot?.querySelector('#record'),
        download: this.shadowRoot?.querySelector('#download'),
      }

      this.video = {
        recorder: this.shadowRoot?.querySelector('#recorder'),
        recorded: this.shadowRoot?.querySelector('#recorded'),
      }

      this.link = this.shadowRoot?.querySelector('#downlink')

      // this.button.record.onclick = eventTarget(this.onRecord.bind(this))
      this.button.record.onclick = (event: PointerEvent) => {
        this.onRecord(event.currentTarget as HTMLButtonElement)
      }
      this.button.download.onclick = this.onDownload.bind(this)
      this.button.start.onclick = this.onStart.bind(this)
      this.button.play.onclick = this.onPlay.bind(this)

      const check = this.shadowRoot?.querySelector('input')
      check.onchange = ({ target }) => {
        const { checked } = target as HTMLInputElement
        this.video.recorder.muted = checked
      }

      this.button.start.focus()
    }
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
      button.querySelector('bs-icon').setAttribute('icon', 'record')
    } else {
      button.querySelector('bs-icon').setAttribute('icon', 'pause')
      this.startRecording()
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
