import {
  css,
  html,
  event,
  listen,
  Emitter,
  Connected,
  Component,
  Autonomous,
  query,
} from '@devpr/web-core'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'

const ffmpeg = createFFmpeg({
  corePath: 'assets/ffmpeg/ffmpeg-core.js',
  log: true,
})

@Autonomous({
  selector: 'video-gif',
  mode: 'open',
})
export class VideoGifElement
  extends Component(HTMLElement)
  implements Connected {
  static observed = []

  private _ready = false

  public set ready(val) {
    this._ready = val
  }

  public get ready() {
    return this._ready
  }

  private _video: string

  public set video(val) {
    this._video = val
  }

  public get video() {
    return this._video
  }

  private _gif: HTMLImageElement

  public set gif(val) {
    this._gif = val
  }

  public get gif() {
    return this._gif
  }

  setVideo(file: File) {
    this.video = URL.createObjectURL(file)
  }

  @query('input')
  inputEl: HTMLInputElement

  @query('img')
  imgEl: HTMLImageElement

  @query('button')
  buttonEl: HTMLButtonElement

  @event()
  onClick: Emitter<MouseEvent>

  @listen('button', 'click')
  onClicked(event: Event) {
    const inputEl = this.shadowRoot.querySelector('input')
    console.log(inputEl)
    this.onClick.emit(event.target)
  }

  styles = css`
    :host {
      display: inline-flex;
    }
  `

  template = html`
    <input type="file" name="video" />
    <img src="" />
    <button disabled>Converter</button>
  `

  // ffmpeg = createFFmpeg({ log: true })

  async convertToGif(video: string) {
    // Params
    const input = 'test.mp4'
    const time = ['-t', '2.5']
    const ss = ['-ss', '2.0']
    const format = ['-f', 'gif']
    const out = 'out.gif'

    // Write the file to memory
    ffmpeg.FS('writeFile', input, await fetchFile(video))

    // Command
    await ffmpeg.run('-i', input, ...time, ...ss, ...format, out)

    // Result
    const data = ffmpeg.FS('readFile', out)

    // URL
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: 'image/gif' })
    )

    this.imgEl.src = url
  }

  load = async () => {
    await ffmpeg.load()
    this.ready = true
    this.buttonEl.disabled = false
  }

  connected() {
    queueMicrotask(() => {
      this.load()
    })
    if (this.ready) {
      console.log('ready')
    }
    // Do something
    queueMicrotask(() => {
      console.log(this.video)
      console.log(this.inputEl)

      console.log(this.imgEl)

      this.inputEl.onchange = ({ target }) => {
        const { files } = target as HTMLInputElement
        // console.log(files.item(0))

        this.convertToGif(URL.createObjectURL(files.item(0)))
      }
    })
  }
}
