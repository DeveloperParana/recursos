// prettier-ignore
export interface Tree {
  type:         string
  name?:        string
  contents?:    TreeContent[]
  directories?: number
  files?:       number
}

// prettier-ignore
export interface TreeContent {
  type:     Type
  name:     string
  contents: TreeContent[]
}

export interface TreeFile {
  type: Type
  name: string
}

export interface TreeReport {
  type: Type
  directories: number
  files: number
}

export enum Type {
  Directory = 'directory',
  Report = 'report',
  File = 'file',
}
