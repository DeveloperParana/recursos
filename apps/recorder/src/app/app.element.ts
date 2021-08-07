import { createFFmpeg, fetchFile, FFmpeg } from '@ffmpeg/ffmpeg'
import { css, html, Autonomous } from '@devpr/web-core'

let ffmpeg: FFmpeg = null

type ActionButton = 'play' | 'start' | 'record' | 'download'

const getCurrentDate = () =>
  Date()
    .toString()
    .split('GMT')
    .shift()
    .trim()
    .replace(new RegExp(' ', 'g'), '-')

@Autonomous({
  selector: 'devpr-root',
  mode: 'open',
})
export class AppElement extends HTMLElement {
  mimeType: string
  stream: MediaStream
  mediaRecorder: MediaRecorder
  recordedBlobs: Blob[] = []

  button: Record<ActionButton, HTMLButtonElement>

  transcode: NodeListOf<HTMLButtonElement>

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

      <!-- <video-gif></video-gif> -->

      <nav>
        <div>
          <button is="outlined-button" id="start">
            <bs-icon slot="prefix" icon="cast"></bs-icon>
            <span>Capturar</span>
          </button>

          <button is="outlined-button" mode="outlined" id="record" disabled>
            <bs-icon slot="prefix" icon="record"></bs-icon>
            <span>Gravar</span>
          </button>
        </div>
        <div>
          <button is="outlined-button" id="play" disabled>
            <bs-icon slot="prefix" icon="play"></bs-icon>
            <span>Play</span>
          </button>

          <button is="outlined-button" mode="outlined" id="download" disabled>
            <bs-icon slot="prefix" icon="download"></bs-icon>
            <span>WebM</span>
          </button>

          <button
            is="outlined-button"
            mode="outlined"
            class="transcode"
            data-format="mp4"
            disabled
          >
            <bs-icon slot="prefix" icon="slow_motion_video"></bs-icon>
            <span>MP4</span>
          </button>

          <button
            is="outlined-button"
            mode="outlined"
            class="transcode"
            data-format="gif"
            disabled
          >
            <bs-icon slot="prefix" icon="motion_photos_auto"></bs-icon>
            <span>GIF</span>
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

      this.transcode = this.shadowRoot?.querySelectorAll('.transcode')

      this.video = {
        recorder: this.shadowRoot?.querySelector('#recorder'),
        recorded: this.shadowRoot?.querySelector('#recorded'),
      }

      this.link = this.shadowRoot?.querySelector('#downlink')

      this.button.record.onclick = (event: PointerEvent) => {
        this.onRecord(event.currentTarget as HTMLButtonElement)
      }

      this.transcode.forEach((button) => {
        button.onclick = (event) => {
          this.onTranscode(
            event.currentTarget as HTMLButtonElement,
            button.dataset.format
          )
        }
      })

      this.button.download.onclick = this.onDownload.bind(this)
      this.button.start.onclick = this.onStart.bind(this)
      this.button.play.onclick = this.onPlay.bind(this)
      this.video.recorder.muted = true

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

  // onTranscode() {
  //   const blob = new Blob(this.recordedBlobs, { type: this.mimeType })

  //   if (ffmpeg === null) {
  //     ffmpeg = createFFmpeg({
  //       corePath: 'assets/ffmpeg/ffmpeg-core.js',
  //       log: true,
  //     })
  //   }

  //   const btn = this.button.transcode
  //   const span = btn.querySelector('span')

  //   const transcode = async () => {
  //     span.textContent = 'Convertendo...'
  //     btn.disabled = true

  //     if (!ffmpeg.isLoaded()) {
  //       await ffmpeg.load()
  //     }

  //     ffmpeg.FS('writeFile', 'video.webm', await fetchFile(blob))
  //     await ffmpeg.run('-i', 'video.webm', 'video.mp4')
  //     const data = ffmpeg.FS('readFile', 'video.mp4')

  //     this.link.href = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
  //     this.link.download = 'video.mp4'
  //     this.link.click()
  //   }

  //   transcode().then(() => {
  //     span.textContent = 'Converter para MP4'
  //     btn.disabled = false
  //   })
  // }

  onTranscode(target: HTMLButtonElement, format = 'mp4') {
    const blob = new Blob(this.recordedBlobs, { type: this.mimeType })

    if (ffmpeg === null) {
      ffmpeg = createFFmpeg({
        corePath: 'assets/ffmpeg/ffmpeg-core.js',
        log: true,
      })
    }

    // const btn = this.button.transcode
    const span = target.querySelector('span')

    const transcode = async () => {
      const time = ['-t', '2.5']
      const ss = ['-ss', '2.0']
      const out = ['-f', format]

      span.textContent = 'Convertendo...'
      target.disabled = true

      if (!ffmpeg.isLoaded()) {
        await ffmpeg.load()
      }

      ffmpeg.FS('writeFile', 'video.webm', await fetchFile(blob))

      const params = format === 'gif' ? [...time, ...ss, ...out] : [...out]

      await ffmpeg.run('-i', 'video.webm', ...params, 'video.' + format)

      const data = ffmpeg.FS('readFile', 'video.' + format)

      this.link.href = URL.createObjectURL(
        new Blob([data.buffer], { type: 'video/' + format })
      )
      this.link.download = getCurrentDate() + '.' + format
      this.link.click()
    }

    transcode().then(() => {
      span.textContent = format.toUpperCase()
      target.disabled = false
    })
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
        this.transcode.forEach((button) => (button.disabled = false))
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
