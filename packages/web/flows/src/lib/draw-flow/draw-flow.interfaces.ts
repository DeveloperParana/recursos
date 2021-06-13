export interface NodeDrawFlow {
  html: HTMLElement
  props: Record<string, string>
  options: Record<string, string>
}

export interface ContainerDrawFlow {
  drawflow: {
    [k: string]: {
      data: Record<string, any>
    }
  }
}

export interface DataDrawFlow {
  posX?: number
  posY?: number
  html?: string
  data?: Record<string, string>
  class?: string
  typenode?: boolean
  id: string | number
  inputs: HTMLElement
  outputs: HTMLElement
}
