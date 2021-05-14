import {
  Tree,
  names,
  formatFiles,
  generateFiles,
  offsetFromRoot,
  getWorkspaceLayout,
  updateProjectConfiguration,
  readProjectConfiguration,
  addDependenciesToPackageJson,
  installPackagesTask,
} from '@nrwl/devkit'
import * as path from 'path'
import { NormalizedSchema, Schema } from './schema'

function addFiles(host: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.project),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
    dot: '.',
  }

  if (!host.exists('.releaserc.json')) {
    generateFiles(
      host,
      path.join(__dirname, 'root-files'),
      '.',
      templateOptions
    )
  }

  generateFiles(
    host,
    path.join(__dirname, 'files'),
    options.projectRoot,
    templateOptions
  )
}

export default async function (
  host: Tree,
  options: Schema
) {
  const config = readProjectConfiguration(host, options.project)
  const { build } = config.targets
  if (config.projectType !== 'library' || !build) {
    console.log('This generator can only be run against buildable libraries.')
  } else {
    // prettier-ignore
    // config.targets.release = { executor: '@nrwl/workspace:run-commands', options: {
    //   command: `npx semantic-release -e ./${config.root}/.releaserc.json` }
    // }

    // updateProjectConfiguration(host, options.project, config)

    const { libsDir } = getWorkspaceLayout(host)

    // prettier-ignore
    const normalizedOptions: NormalizedSchema = { ...options, projectRoot: config.root,
      projectDist: build.options.outputPath || `dist/${libsDir}/${options.project}`,
    }

    addFiles(host, normalizedOptions)
    await formatFiles(host)

    return () => {
      installPackagesTask(host)
    }
  }
}

// import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit'
// import { libraryGenerator } from '@nrwl/workspace/generators'

// export default async function (host: Tree, schema: any) {
//   await libraryGenerator(host, { name: schema.name })
//   await formatFiles(host)
//   return () => {
//     installPackagesTask(host)
//   }
// }
