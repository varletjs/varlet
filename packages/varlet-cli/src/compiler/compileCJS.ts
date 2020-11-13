import { resolve } from 'path'
import { copy, readdir } from 'fs-extra'
import { CJS_DIR, SRC_DIR } from '../shared/constant'
import { getDirComponentNames, isDir } from '../shared/fsUtils'
import { compileComponent } from './compileComponent'
import { compileLibraryEntry } from './compileScript'
import logger from '../shared/logger'

export async function compileCJSDir(cjsDir: string[], dirPath: string) {
  await Promise.all(
    cjsDir.map((filename: string) => {
      const path: string = resolve(dirPath, filename)
      return isDir(path) ? compileComponent(path, 'cjs') : null
    })
  )
  compileLibraryEntry(dirPath, getDirComponentNames(cjsDir), 'cjs')
}

export async function compileCJS() {
  try {
    await copy(SRC_DIR, CJS_DIR)
    const cjsDir: string[] = await readdir(CJS_DIR)
    await compileCJSDir(cjsDir, CJS_DIR)
  } catch (e) {
    logger.error(e.toString())
  }
}
