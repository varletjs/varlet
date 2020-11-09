import logger from '../shared/logger'
import ora from 'ora'
import { compileES } from '../compiler/compileES'
import { copy, remove } from 'fs-extra'
import { CJS_DIR, ES_DIR, SRC_DIR } from '../shared/constant'
import { compileCJS } from '../compiler/compileCJS'
import { watch } from 'chokidar'
import { isExampleDir, isTestsDir } from '../shared/fsUtils'
import { compileComponent, compileFile } from '../compiler/compileComponent'
import { parse } from 'path'

export function removeDir() {
  return Promise.all([
    remove(ES_DIR),
    remove(CJS_DIR)
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
    await Promise.all([
      remove(esDir),
      remove(cjsDir)
    ])
    await Promise.all([
      copy(dir, esDir),
      copy(dir, cjsDir)
    ])
    await Promise.all([
      compileComponent(esDir),
      compileComponent(cjsDir, 'cjs')
    ])
  } else {
    await Promise.all([
      copy(path, esPath),
      copy(path, cjsPath)
    ])
    compileFile(esPath)
    compileFile(cjsPath, 'cjs')
  }
}

export function handleFilesChange() {
  watch(SRC_DIR).on('change', async (path: string, ...args) => {
    if (isExampleDir(path) || isTestsDir(path)) {
      return
    }
    logger.info(`${path} has changed`)
    await recompile(path)
  })
}

export async function compile(cmd: { watch: boolean }) {
  const s = ora('Compile start for ES & CJS').start()
  try {
    await removeDir()
    await Promise.all([compileES(), compileCJS()])
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
