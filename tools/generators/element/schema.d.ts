// export interface ToolReleaseGeneratorSchema {
//   project: string
//   name?: string
//   dist?: string
//   directory?: string
// }

export interface Schema {
  selector: string
  project: string
  inherit?: string
}

export interface NormalizedSchema extends Schema {
  projectRoot: string
  projectDist: string
}
