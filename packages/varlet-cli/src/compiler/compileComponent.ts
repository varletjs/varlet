import { EXAMPLE_DIR_NAME, TESTS_DIR_NAME } from '../shared/constant'
import { readdir, removeSync } from 'fs-extra'
import { isDir, isLess, isScript, isSFC } from '../shared/fsUtils'
import { compileSFC } from './compileSFC'
import { resolve } from 'path'
import { compileScriptFile } from './compileScript'
import { compileLess } from './compileStyle'


export async function compileComponent(path: string, modules: string | boolean = false) {
  const dirs = await readdir(path)
  dirs.forEach((filename) => {
    const filePath = resolve(path, filename)
    ;[TESTS_DIR_NAME, EXAMPLE_DIR_NAME].includes(filename) && removeSync(filePath)
    compileFile(filePath, modules)
  })
}

export function compileFile(path: string, modules: string | boolean = false) {
  isSFC(path) && compileSFC(path, modules)
  isScript(path) && compileScriptFile(path, modules)
  isLess(path) && compileLess(path)
  isDir(path) && compileComponent(path)
}
