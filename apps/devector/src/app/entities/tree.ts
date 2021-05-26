export interface Tree {
  type: string
  name?: string
  contents?: Content[]
  directories?: number
  files?: number
}

export interface Content {
  type: Type
  name: string
}

export enum Type {
  File = 'file',
}
