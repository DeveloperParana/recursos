import { css, Element, html, debounce, listen } from './elements/core'
import { HttpDataService } from './data-access/http-data.service'
import { Gallery, Photo } from './elements/gallery'

import { Tree, TreeContent } from './entities/tree'

@Element({
  selector: 'devpr-root',
  useShadow: true,
})
export class AppElement extends HTMLElement {
  public static observedAttributes = []

  dataService = new HttpDataService()

  gallery: Gallery<Photo>
  images: Photo[] = []

  loadEvery = 100
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
      <text-field>
        <input type="text" disabled />
        <label>Pesquisar</label>
      </text-field>
    </header>

    <main>
      <ul is="devpr-gallery"></ul>
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
    const res = await fetch('assets/images.json')
    return await res.json()
  }

  connectedCallback() {
    import('./elements/gallery').then(() => {
      this.gallery = this.find<Gallery<Photo>>('ul')

      this.find('button').onclick = () => {
        this.loadMore(this.loaded, this.loaded + this.loadEvery)
      }

      this.findImages().then(([root, report]: Tree[]) => {
        this.handleTree(root)
        queueMicrotask(() => {
          this.loadMore(this.loaded, this.loaded + this.loadEvery)
        })
        // const label = this.find('label')
        // label.textContent = `Pesquisar em ${report.files} imagens`
      })
    })
  }

  loadMore(start: number, end: number) {
    this.images.slice(start, end).map((image) => {
      this.gallery.addItem(image)
    })
    this.loaded = end
  }

  handleTree({ contents }: Tree) {
    contents.map(({ type, name, contents }) => {
      if (type === 'directory' && name == 'undraw') {
        this.handleImages(contents, name)
      }
    })
  }

  handleImages(contents: TreeContent[], name: string) {
    contents.map((content) => {
      if (content.type === 'file' && content.name != 'LICENSE') {
        const title = content.name
        const image = `images/${name}/${title}`
        this.images.push({ title, image })
      }
    })
  }
}
