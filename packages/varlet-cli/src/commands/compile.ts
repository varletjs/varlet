import logger from '../shared/logger'
import ora from 'ora'
import { copy, remove } from 'fs-extra'
import { CJS_DIR, ES_DIR, SRC_DIR, UMD_DIR } from '../shared/constant'
import { watch } from 'chokidar'
import { getComponentNames, getExportDirNames, isExampleDir, isTestsDir } from '../shared/fsUtils'
import { compileModule, compileFile, compileDir } from '../compiler/compileModule'
import { parse } from 'path'
import { compileLibraryEntry } from '../compiler/compileScript'
import { compileTemplateHighlight } from '../compiler/compileTemplateHighlight'

export function removeDir() {
  return Promise.all([remove(ES_DIR), remove(CJS_DIR), remove(UMD_DIR)])
}

export async function recompile(changedRawPath: string) {
  const changedESPath = changedRawPath.replace('src', 'es')
  const changedCjsPath = changedRawPath.replace('src', 'cjs')

  const { ext, dir: changedRawDir } = parse(changedRawPath)
  const { dir: changedEsDir } = parse(changedESPath)
  const { dir: changedCjsDir } = parse(changedCjsPath)

  if (ext === '.vue') {
    // style deps collection
    await Promise.all([remove(changedEsDir), remove(changedCjsDir)])
    await Promise.all([copy(changedRawDir, changedEsDir), copy(changedRawDir, changedCjsDir)])
    await Promise.all([compileDir(changedEsDir), compileDir(changedCjsDir, 'cjs')])
  } else {
    await Promise.all([copy(changedRawDir, changedESPath), copy(changedRawDir, changedCjsPath)])
    await Promise.all([compileFile(changedESPath), compileFile(changedCjsPath, 'cjs')])
  }

  const [componentNames, exportDirNames]: Array<Array<string>> = await Promise.all([
    getComponentNames(),
    getExportDirNames(),
  ])
  await Promise.all([
    compileLibraryEntry(ES_DIR, componentNames, exportDirNames),
    compileLibraryEntry(CJS_DIR, componentNames, exportDirNames, 'cjs'),
  ])
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
  const s = ora().start('Compile start for ES & CJS & UMD & Template Highlight')

  await removeDir()

  await Promise.all([compileTemplateHighlight(), compileModule(), compileModule('cjs')])

  await compileModule('umd')

  s.succeed('Compile success!')

  if (cmd.watch) {
    handleFilesChange()
    logger.info('i will watching your files change')
  }
}
