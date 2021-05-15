import { setOptions, Renderer, parse } from 'marked'
import * as hljs from 'highlight.js'
import { Slide } from './slide'

/**
 * Configura syntax highlight com
 * a biblioteca marked
 */
setOptions({
  renderer: new Renderer(),
  highlight: (code, lang) => {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  },
})

/**
 * Carrega os slides pouco a pouco (lazy load)
 * @param {string} start nome do slide inicial
 * @returns lista de slides carregados
 */
export async function loadSlides(start: string) {
  const slides = []
  const cycle = {}

  let next = start

  while (next) {
    if (!cycle[next]) {
      cycle[next] = true

      const slide = await load(next)
      slides.push(slide)

      next = slide.nextSlide
    } else {
      break
    }
  }
  return slides
}

/**
 * Primeiro faremos funcionar bem com markdown
 * @param {string} name
 * @internal
 */
async function loadSlide(name: string) {
  const response = await fetch(`assets/slides/${name}.html`)
  const slide = await response.text()
  return new Slide(slide)
}

export async function load(name: string) {
  console.log('name: ', name)

  const response = await fetch(`assets/slides/${name}.md`)
  const slide = await response.text()
  return new Slide(parse(slide))
}
