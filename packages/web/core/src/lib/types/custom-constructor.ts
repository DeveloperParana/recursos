export type CustomConstructor = HTMLElement & {
  connectedCallback?: () => void
  attributeChangedCallback?: (name: string, prev: string, next: string) => void
  disconnectedCallback?: () => void
  [P: string]: any
}
