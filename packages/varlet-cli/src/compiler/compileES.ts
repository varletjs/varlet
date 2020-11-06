import { resolve } from 'path'
import { copy, readdir } from 'fs-extra'
import { ES_DIR, SRC_DIR } from '../shared/constant'
import { isDir } from '../shared/fsUtils'
import { compileComponent } from './compileComponent'
import logger from '../shared/logger'

export async function compileESDir(esDir: string[], dirPath: string) {
  esDir.forEach((filename: string) => {
    const path: string = resolve(dirPath, filename)
    isDir(path) && compileComponent(path)
  })
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
