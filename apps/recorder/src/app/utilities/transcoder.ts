import { createFFmpeg, fetchFile, FFmpeg } from '@ffmpeg/ffmpeg'

let ffmpeg: FFmpeg = null

const getCurrentDate = () => {
  const date = Date().toString().split('GMT')
  return date?.shift().trim().replace(new RegExp(' ', 'g'), '-')
}

export class Transcoder {
  async onTranscode(
    mimeType: string,
    recordedBlobs: Blob[],
    target: HTMLButtonElement,
    format = 'mp4'
  ) {
    const blob = new Blob(recordedBlobs, { type: mimeType })

    const log = true
    const corePath = 'assets/ffmpeg/ffmpeg-core.js'
    if (ffmpeg === null) ffmpeg = createFFmpeg({ corePath, log })

    const span = target.querySelector('span')

    const transcode = async () => {
      const out = ['-f', format]

      span.textContent = 'Convertendo'
      // target.disabled = true

      if (!ffmpeg.isLoaded()) {
        await ffmpeg.load()
      }

      ffmpeg.FS('writeFile', 'video.webm', await fetchFile(blob))

      const params = [...out]

      await ffmpeg.run('-i', 'video.webm', ...params, 'video.' + format)

      const data = ffmpeg.FS('readFile', 'video.' + format)

      const link = document.createElement('a')
      link.href = URL.createObjectURL(
        new Blob([data.buffer], { type: 'video/' + format })
      )
      link.download = getCurrentDate() + '.' + format
      link.click()
      return
    }

    return transcode().then(() => {
      span.textContent = format.toUpperCase()
      // target.disabled = false
    })
  }
}
