import { resolve } from 'path'
import { copy, readdir } from 'fs-extra'
import { CJS_DIR, SRC_DIR } from '../shared/constant'
import { isDir } from '../shared/fsUtils'
import { compileComponent } from './compileComponent'
import logger from '../shared/logger'

export async function compileCJSDir(cjsDir: string[], dirPath: string) {
  cjsDir.forEach((filename: string) => {
    const path: string = resolve(dirPath, filename)
    isDir(path) && compileComponent(path, 'cjs')
  })
}

export async function compileCJS() {
  try {
    await copy(SRC_DIR, CJS_DIR)
    const esDir: string[] = await readdir(CJS_DIR)
    await compileCJSDir(esDir, CJS_DIR)
  } catch (e) {
    logger.error(e.toString())
  }
}
