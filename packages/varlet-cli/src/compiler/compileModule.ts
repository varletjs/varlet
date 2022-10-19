import { build } from 'vite'
import { resolve } from 'path'
import { copy, ensureFileSync, readdir, removeSync } from 'fs-extra'
import {
  EXAMPLE_DIR_NAME,
  TESTS_DIR_NAME,
  DOCS_DIR_NAME,
  SRC_DIR,
  ES_DIR,
  STYLE_DIR_NAME,
  LIB_DIR,
} from '../shared/constant.js'
import { getPublicDirs, isDir, isDTS, isLess, isScript, isSFC } from '../shared/fsUtils.js'
import { compileSFC } from './compileSFC.js'
import { compileESEntry, compileCommonJSEntry, compileScriptFile } from './compileScript.js'
import { compileLess } from './compileStyle.js'
import { getESMBundleConfig, getUMDConfig } from '../config/vite.config.js'
import { getVarletConfig } from '../config/varlet.config.js'
import { generateReference } from './compileTypes.js'

export function compileUMD() {
  return new Promise<void>((resolve, reject) => {
    const config = getUMDConfig(getVarletConfig())

    build(config)
      .then(() => resolve())
      .catch(reject)
  })
}

export function compileESMBundle() {
  return new Promise<void>((resolve, reject) => {
    const config = getESMBundleConfig(getVarletConfig())

    build(config)
      .then(() => resolve())
      .catch(reject)
  })
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

export async function compileModule(modules: 'umd' | 'commonjs' | 'esm-bundle' | boolean = false) {
  if (modules === 'umd') {
    await compileUMD()
    return
  }

  if (modules === 'esm-bundle') {
    await compileESMBundle()
    return
  }

  process.env.BABEL_MODULE = modules === 'commonjs' ? 'commonjs' : 'module'

  const dest = modules === 'commonjs' ? LIB_DIR : ES_DIR
  await copy(SRC_DIR, dest)
  const moduleDir: string[] = await readdir(dest)

  await Promise.all(
    moduleDir.map((filename: string) => {
      const file: string = resolve(dest, filename)

      isDir(file) && ensureFileSync(resolve(file, './style/index.js'))

      return isDir(file) ? compileDir(file) : null
    })
  )

  const publicDirs = await getPublicDirs()

  if (modules === 'commonjs') {
    await compileCommonJSEntry(dest, publicDirs)
  } else {
    await compileESEntry(dest, publicDirs)
  }

  generateReference(dest)
}
