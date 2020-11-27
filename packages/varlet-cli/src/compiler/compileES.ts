import { resolve } from 'path'
import { copy, readdir } from 'fs-extra'
import { ES_DIR, SRC_DIR } from '../shared/constant'
import { getComponentNames, getExportDirNames, isDir } from '../shared/fsUtils'
import { compileComponent } from './compileComponent'
import { compileLibraryEntry } from './compileScript'
import { buildStyleEntry } from './compileStyle'

export async function compileES() {
  await copy(SRC_DIR, ES_DIR)
  const esDir: string[] = await readdir(ES_DIR)

  await Promise.all(
    esDir.map((filename: string) => {
      const path: string = resolve(ES_DIR, filename)
      isDir(path) && buildStyleEntry(path)
      return isDir(path) ? compileComponent(path) : null
    })
  )
  compileLibraryEntry(ES_DIR, await getComponentNames(), await getExportDirNames())
}
