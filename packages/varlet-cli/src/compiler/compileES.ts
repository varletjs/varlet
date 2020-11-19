import logger from '../shared/logger'
import { resolve } from 'path'
import { copy, readdir } from 'fs-extra'
import { ES_DIR, SRC_DIR } from '../shared/constant'
import { getComponentNames, getExportDirNames, isDir } from '../shared/fsUtils'
import { compileComponent } from './compileComponent'
import { compileLibraryEntry } from './compileScript'

export async function compileES() {
  try {
    await copy(SRC_DIR, ES_DIR)
    const esDir: string[] = await readdir(ES_DIR)
    await Promise.all(
      esDir.map((filename: string) => {
        const path: string = resolve(ES_DIR, filename)
        return isDir(path) ? compileComponent(path) : null
      })
    )
    compileLibraryEntry(ES_DIR, await getComponentNames(), await getExportDirNames())
  } catch (e) {
    logger.error(e.toString())
  }
}
