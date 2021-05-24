import { environment } from './../envs/env'
import { MetaDefinition } from './models'

export class AppDocument extends HTMLElement {
  metaTags: MetaDefinition[] = environment.meta

  constructor(tags: MetaDefinition[] = []) {
    super()

    document.title = environment.title

    Array.from([...tags, ...environment.meta]).map((meta) => {
      const metaTag = this.createMetaTag(meta)
      document.head.insertAdjacentElement('beforeend', metaTag)
    })
  }

  createMetaTag(definition: MetaDefinition) {
    const meta = document.createElement('meta')
    Object.entries(definition).map(([name, content]) => {
      meta.setAttribute(name, content)
    })
    return meta
  }
}
