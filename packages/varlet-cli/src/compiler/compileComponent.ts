import { EXAMPLE_DIR_NAME, TESTS_DIR_NAME, DOCS_DIR_NAME } from '../shared/constant'
import { readdir, removeSync } from 'fs-extra'
import { isDir, isLess, isScript, isSFC } from '../shared/fsUtils'
import { compileSFC } from './compileSFC'
import { resolve } from 'path'
import { compileScriptFile } from './compileScript'
import { compileLess } from './compileStyle'

export async function compileComponent(path: string, modules: string | boolean = false) {
  const dirs = await readdir(path)
  await Promise.all(
    dirs.map((filename) => {
      const filePath = resolve(path, filename)
      ;[TESTS_DIR_NAME, EXAMPLE_DIR_NAME, DOCS_DIR_NAME].includes(filename) && removeSync(filePath)
      return compileFile(filePath, modules)
    })
  )
}

export async function compileFile(path: string, modules: string | boolean = false) {
  isSFC(path) && await compileSFC(path, modules)
  isScript(path) && await compileScriptFile(path, modules)
  isLess(path) && await compileLess(path)
  isDir(path) && await compileComponent(path)
}
