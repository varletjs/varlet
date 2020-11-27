import { resolve } from 'path'
import { copy, readdir } from 'fs-extra'
import { CJS_DIR, SRC_DIR } from '../shared/constant'
import { getComponentNames, getExportDirNames, isDir } from '../shared/fsUtils'
import { compileComponent } from './compileComponent'
import { compileLibraryEntry } from './compileScript'
import { buildStyleEntry } from './compileStyle'

export async function compileCJS() {
  await copy(SRC_DIR, CJS_DIR)
  const cjsDir: string[] = await readdir(CJS_DIR)
  await Promise.all(
    cjsDir.map((filename: string) => {
      const path: string = resolve(CJS_DIR, filename)
      isDir(path) && buildStyleEntry(path)
      return isDir(path) ? compileComponent(path) : null
    })
  )
  compileLibraryEntry(CJS_DIR, await getComponentNames(), await getExportDirNames(), 'cjs')
}
