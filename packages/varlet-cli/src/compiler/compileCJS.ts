import logger from '../shared/logger'
import { resolve } from 'path'
import { copy, readdir } from 'fs-extra'
import { CJS_DIR, SRC_DIR } from '../shared/constant'
import { getComponentNames, getExportDirNames, isDir } from '../shared/fsUtils'
import { compileComponent } from './compileComponent'
import { compileLibraryEntry } from './compileScript'

export async function compileCJS() {
  try {
    await copy(SRC_DIR, CJS_DIR)
    const cjsDir: string[] = await readdir(CJS_DIR)
    await Promise.all(
      cjsDir.map((filename: string) => {
        const path: string = resolve(CJS_DIR, filename)
        return isDir(path) ? compileComponent(path, 'cjs') : null
      })
    )
    compileLibraryEntry(CJS_DIR, await getComponentNames(), await getExportDirNames(), 'cjs')
  } catch (e) {
    logger.error(e.toString())
  }
}
