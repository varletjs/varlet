import webpack from 'webpack'
import logger from '../shared/logger'
import { EXAMPLE_DIR_NAME, TESTS_DIR_NAME, DOCS_DIR_NAME, SRC_DIR, ES_DIR, STYLE_DIR_NAME } from '../shared/constant'
import { copy, ensureFileSync, readdir, removeSync } from 'fs-extra'
import { getExportDirNames, isDir, isLess, isScript, isSFC } from '../shared/fsUtils'
import { compileSFC } from './compileSFC'
import { resolve } from 'path'
import { compileLibraryEntry, compileScriptFile } from './compileScript'
import { compileLess } from './compileStyle'
import { getUmdConfig } from '../config/webpack.umd.config'

export function compileUMD() {
  return new Promise<void>((resolve, reject) => {
    const config = getUmdConfig()

    webpack(config, (err, stats: any) => {
      if (err) {
        logger.error(err.toString())
        reject()
      }
      if (stats?.hasErrors()) {
        logger.error(stats)
        reject()
      }
      if (!err && !stats?.hasErrors()) {
        resolve()
      }
    })
  })
}

export async function compileDir(dir: string) {
  const dirs = await readdir(dir)

  await Promise.all(
    dirs.map((filename) => {
      const file = resolve(dir, filename)

      ;[TESTS_DIR_NAME, EXAMPLE_DIR_NAME, DOCS_DIR_NAME].includes(filename) && removeSync(file)

      if (filename === STYLE_DIR_NAME) {
        return Promise.resolve()
      }

      return compileFile(file)
    })
  )
}

export async function compileFile(file: string) {
  isSFC(file) && (await compileSFC(file))
  isScript(file) && (await compileScriptFile(file))
  isLess(file) && (await compileLess(file))
  isDir(file) && (await compileDir(file))
}

export async function compileModule(modules: string | boolean = false) {
  if (modules === 'umd') {
    await compileUMD()
    return
  }

  await copy(SRC_DIR, ES_DIR)
  const moduleDir: string[] = await readdir(ES_DIR)

  await Promise.all(
    moduleDir.map((filename: string) => {
      const file: string = resolve(ES_DIR, filename)

      if (isDir(file)) {
        ensureFileSync(resolve(file, './style/index.js'))
        ensureFileSync(resolve(file, './style/less.js'))
      }

      return isDir(file) ? compileDir(file) : null
    })
  )

  await compileLibraryEntry(ES_DIR, await getExportDirNames())
}
