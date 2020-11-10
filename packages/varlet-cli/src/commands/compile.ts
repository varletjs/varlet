import logger from '../shared/logger'
import ora from 'ora'
import { compileES } from '../compiler/compileES'
import { copy, readdir, remove } from 'fs-extra'
import { CJS_DIR, ES_DIR, SRC_DIR, UMD_DIR } from '../shared/constant'
import { compileCJS } from '../compiler/compileCJS'
import { watch } from 'chokidar'
import { getDirComponentNames, isExampleDir, isTestsDir } from '../shared/fsUtils'
import { compileComponent, compileFile } from '../compiler/compileComponent'
import { parse } from 'path'
import { compileLibraryEntry } from '../compiler/compileScript'
import { compileUMD } from '../compiler/compileUMD'

export function removeDir() {
  return Promise.all([
    remove(ES_DIR),
    remove(CJS_DIR),
    remove(UMD_DIR)
  ])
}

export async function recompile(path: string) {
  const esPath = path.replace('src', 'es')
  const cjsPath = path.replace('src', 'cjs')
  const { ext, dir } = parse(path)
  const { dir: esDir } = parse(esPath)
  const { dir: cjsDir } = parse(cjsPath)
  if (ext === '.vue') {
    // style deps collection
    await Promise.all([remove(esDir), remove(cjsDir)])
    await Promise.all([copy(dir, esDir), copy(dir, cjsDir)])
    await Promise.all([compileComponent(esDir), compileComponent(cjsDir, 'cjs')])
  } else {
    await Promise.all([copy(path, esPath), copy(path, cjsPath)])
    await Promise.all([compileFile(esPath), compileFile(cjsPath, 'cjs')])
  }
  const dirs: Array<Array<string>> = await Promise.all([readdir(ES_DIR), readdir(CJS_DIR)])
  compileLibraryEntry(ES_DIR, getDirComponentNames(dirs[0]))
  compileLibraryEntry(CJS_DIR, getDirComponentNames(dirs[1]), 'cjs')
}

export function handleFilesChange() {
  watch(SRC_DIR).on('change', async (path: string) => {
    if (isExampleDir(path) || isTestsDir(path)) {
      return
    }
    logger.info(`${path} has changed`)
    await recompile(path)
  })
}

export async function compile(cmd: { watch: boolean }) {
  const s = ora('Compile start for ES & CJS & UMD').start()
  try {
    await removeDir()
    await Promise.all([compileES(), compileCJS()])
    await compileUMD()
    s.succeed('Compile success!')

    if (cmd.watch) {
      handleFilesChange()
      logger.info('i will watching your files change')
    }
  } catch (err) {
    logger.error(err.toString())
    s.fail('Compile fail!')
  }
}
