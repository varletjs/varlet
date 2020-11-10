import { resolve } from 'path'
import { copy, readdir } from 'fs-extra'
import { ES_DIR, SRC_DIR } from '../shared/constant'
import { getDirComponentNames, isDir } from '../shared/fsUtils'
import { compileComponent } from './compileComponent'
import { compileLibraryEntry } from './compileScript'
import logger from '../shared/logger'

export async function compileESDir(esDir: string[], dirPath: string) {
  await Promise.all(
    esDir.map((filename: string) => {
      const path: string = resolve(dirPath, filename)
      return isDir(path) ? compileComponent(path) : null
    })
  )
  compileLibraryEntry(dirPath, getDirComponentNames(esDir))
}

export async function compileES() {
  try {
    await copy(SRC_DIR, ES_DIR)
    const esDir: string[] = await readdir(ES_DIR)
    await compileESDir(esDir, ES_DIR)
  } catch (e) {
    logger.error(e.toString())
  }
}
