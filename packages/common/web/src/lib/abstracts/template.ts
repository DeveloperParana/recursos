export abstract class Template extends HTMLElement {
  static selector?: string

  abstract styles: string
  abstract template: string
}
