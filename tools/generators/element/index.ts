import { elementMap } from './utilities';
import { Schema } from './schema';
import {
  Tree,
  names,
  readJson,
  generateFiles,
  joinPathFragments,
} from '@nrwl/devkit';

export default async function (tree: Tree, opts: Schema) {

  const workspace = readJson(tree, 'workspace.json');

  if (!opts.project) {
    opts.project = workspace.defaultProject;
  }

  const project = workspace.projects[opts.project];

  const projectType = project.projectType === 'application' ? 'app' : 'lib';

  const classInherit = elementMap[opts.inherit || 'html'];

  if (opts.path === undefined) {
    opts.path = `${project.sourceRoot}/${projectType}`;
  }

  const _files = (opts.inherit) ? './files/built-in' : './files/autonomous'

  const { className, fileName } = names(opts.name);

  generateFiles(
    tree,
    joinPathFragments(__dirname, _files),
    joinPathFragments(opts.path),
    {
      className,
      classInherit,
      name: fileName,
      inherit: opts.inherit,
      tpl: '',
    }
  );
}
