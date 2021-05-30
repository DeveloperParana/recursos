/**
 * @internal
 * @interface Component
 */
export interface Component {
  selector: string

  template?: HTMLTemplateElement

  styles?: HTMLStyleElement

  observed?: string[]

  connected(): void
  disconnected(): void
  attributeChanged(name: string, prev: string, next: string): void
}
