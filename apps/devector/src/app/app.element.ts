import { css, Element, html, debounce, listen } from './elements/core'
import { HttpDataService } from './data-access/http-data.service'
import { Gallery, Photo } from './elements/gallery'
import { Tree, Content } from './entities/tree'

@Element({
  selector: 'devpr-root',
  useShadow: true,
})
export class AppElement extends HTMLElement {
  public static observedAttributes = []

  dataService = new HttpDataService()

  gallery: Gallery<Photo>
  images: Photo[] = []

  loadEvery = 33
  loaded = 0

  @debounce(600)
  @listen('input', 'input', true)
  onChange({ value }: HTMLInputElement) {
    console.log(value)
  }

  styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }
    header,
    footer {
      padding: 25px;
      display: flex;
      justify-content: space-between;
    }
  `

  template = html`
    <header>
      <img height="86px" src="assets/images/logo.svg" alt="DevParaná" />
      <devpr-icon name="add-r"></devpr-icon>
      <text-field>
        <input type="text" disabled />
        <label>Pesquisar</label>
      </text-field>
    </header>

    <main>
      <devpr-gallery></devpr-gallery>
    </main>

    <footer>
      <p>Copyright 2021 Katerina Limpitsouni</p>
      <button>Carregar mais</button>
    </footer>
  `

  find<T extends HTMLElement>(selector: string) {
    return this.shadowRoot.querySelector<T>(selector)
  }

  async findImages() {
    const res = await fetch('assets/undraw.json')
    return await res.json()
  }

  connectedCallback() {
    this.gallery = this.find<Gallery<Photo>>('devpr-gallery')

    this.find('button').onclick = () => {
      this.loadMore(this.loaded, this.loaded + this.loadEvery)
    }

    this.findImages().then(([images, report]: Tree[]) => {
      this.handleImages(images, images.name)
      queueMicrotask(() => {
        this.loadMore(this.loaded, this.loaded + this.loadEvery)
      })
      // const label = this.find('label')
      // label.textContent = `Pesquisar em ${report.files} imagens`
    })
  }

  loadMore(start: number, end: number) {
    this.images.slice(start, end).map((image) => {
      this.gallery.addItem(image)
    })
    this.loaded = end
  }

  handleImages({ contents }: Tree, name: string) {
    contents.map((content) => {
      if (content.type === 'file') {
        const title = content.name
        const image = `${name}/${title}`
        this.images.push({ title, image })
      }
    })
  }
}
