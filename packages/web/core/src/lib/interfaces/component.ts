// /**
//  * @internal
//  * @interface Component
//  */
export abstract class Component {
  is?: string
  selector?: string

  template?: HTMLTemplateElement
  //   // new (params: HTMLTemplateElement): HTMLTemplateElement
  styles?: HTMLStyleElement
  //   // new (param: HTMLStyleElement): HTMLStyleElement
  observed?: string[]
  //   // new (...params: string[]): string[]

  //   abstract connected(): void
  //   abstract disconnected(): void
  //   abstract attributeChanged(name: string, prev: string, next: string): void
}
