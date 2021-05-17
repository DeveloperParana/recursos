import { html, event, listen, Emitter, BuiltInElement } from '@devpr/common/web'

import './search.page.scss'

// @BuiltInElement('search-page', 'template')
export class SearchPage extends HTMLTemplateElement {
  @event()
  onSubmit: Emitter

  @listen('form', 'onSubmit')
  onSubmitted({ detail }: CustomEvent) {
    this.onSubmit.emit(detail)
  }

  @event()
  onChange: Emitter

  @listen('form', 'onChange')
  onChanged({ detail }: CustomEvent) {
    // this.onChange.emit(detail)
  }

  @event()
  valueChange: Emitter

  @listen('label', 'valueChange')
  onValueChange({ detail }: CustomEvent) {
    console.log('search-page valueChange: ', detail)
    this.onSearch(detail)
    // this.valueChange.emit(detail)
  }

  innerHTML = html`
    <form is="devpr-form" data-submit="submit">
      <label is="devpr-textfield" mode="outlined">
        <input type="text" name="query" />
        <span>Buscar</span>
      </label>
      <footer>
        <output></output>
        <button is="devpr-button">Enviar</button>
      </footer>
    </form>
  `

  connectedCallback() {
    console.log('search')
    console.log('this: ', this)
    console.log('this: ', this.parentElement)
    this.parentElement
      .querySelector('slot')
      .appendChild(this.content.cloneNode(true))
  }

  onSearch(query: string) {
    const treeWalker = document.createTreeWalker(
      this.parentElement,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          return NodeFilter.FILTER_ACCEPT
        },
      }
    )

    const nodeList = []
    let currentNode = treeWalker.currentNode

    while (currentNode) {
      if (currentNode.textContent.search(query) > -1) {
        nodeList.push(currentNode)
      }
      currentNode = treeWalker.nextNode()
    }
    console.log(nodeList)
    const [body, ...results] = nodeList
    const output = this.querySelector('output')
    output.textContent = `${results.length} results`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'search-page': SearchPage
  }
}
customElements.define('search-page', SearchPage, { extends: 'template' })
