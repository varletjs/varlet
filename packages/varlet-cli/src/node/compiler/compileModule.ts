import fse from 'fs-extra'
import { build } from 'vite'
import { resolve } from 'path'
import {
  EXAMPLE_DIR_NAME,
  TESTS_DIR_NAME,
  DOCS_DIR_NAME,
  SRC_DIR,
  ES_DIR,
  STYLE_DIR_NAME,
  LIB_DIR,
  UMD_DIR,
} from '../shared/constant.js'
import { getPublicDirs, isDir, isDTS, isLess, isScript, isSFC } from '../shared/fsUtils.js'
import { compileSFC } from './compileSFC.js'
import { compileESEntry, compileScriptFile, getScriptExtname } from './compileScript.js'
import { clearLessFiles, compileLess } from './compileStyle.js'
import { BundleBuildOptions, getBundleConfig } from '../config/vite.config.js'
import { getVarletConfig } from '../config/varlet.config.js'
import { generateReference } from './compileTypes.js'
import { get } from 'lodash-es'
import { kebabCase } from '@varlet/shared'

const { copy, ensureFileSync, readdir, removeSync } = fse

export async function compileBundle() {
  const varletConfig = await getVarletConfig()
  const name = kebabCase(get(varletConfig, 'name'))
  const buildOptions: BundleBuildOptions[] = [
    {
      format: 'es',
      fileName: `${name}.esm.js`,
      output: ES_DIR,
      emptyOutDir: false,
    },
    {
      format: 'cjs',
      fileName: `${name}.cjs.js`,
      output: LIB_DIR,
      emptyOutDir: false,
    },
    {
      format: 'umd',
      fileName: `${name}.js`,
      output: UMD_DIR,
      emptyOutDir: true,
    },
  ]
  const tasks = buildOptions.map((options) => build(getBundleConfig(varletConfig, options)))

  await Promise.all(tasks)
}

export async function compileDir(dir: string) {
  const dirs = await readdir(dir)

  await Promise.all(
    dirs.map((filename) => {
      const file = resolve(dir, filename)

      ;[TESTS_DIR_NAME, EXAMPLE_DIR_NAME, DOCS_DIR_NAME].includes(filename) && removeSync(file)

      if (isDTS(file) || filename === STYLE_DIR_NAME) {
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

export async function compileModule() {
  const targetModule = process.env.TARGET_MODULE

  if (targetModule === 'bundle') {
    await compileBundle()
    return
  }

  const dest = ES_DIR
  await copy(SRC_DIR, dest)
  const moduleDir: string[] = await readdir(dest)

  await Promise.all(
    moduleDir.map((filename: string) => {
      const file: string = resolve(dest, filename)

      isDir(file) && ensureFileSync(resolve(file, `./style/index${getScriptExtname()}`))

      return isDir(file) ? compileDir(file) : null
    })
  )

  const publicDirs = await getPublicDirs()
  await compileESEntry(dest, publicDirs)
  clearLessFiles(dest)
  generateReference(dest)
}
