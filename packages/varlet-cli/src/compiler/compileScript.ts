import { BabelFileResult, transformAsync } from '@babel/core'
import { replaceExt } from '../shared/fsUtils'
import { replaceStyleExt } from './compileStyle'
import { writeFileSync, readFileSync, removeSync } from 'fs-extra'
import logger from '../shared/logger'

export const IMPORT_VUE_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+)\.vue(\s*['"`])(?!\s*['"`])/g
export const REQUIRE_VUE_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\.{1,2}\/.+)\.vue(\s*['"`]\))(?!\s*['"`])/g
export const IMPORT_TS_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+\.)ts(\s*['"`])(?!\s*['"`])/g
export const REQUIRE_TS_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\.{1,2}\/.+\.)ts(\s*['"`]\))(?!\s*['"`])/g

export function replaceVueExt(script: string) {
  const replacer = (_: any, p1: string, p2: string): string => {
    return `${p1}Sfc.js${p2}`
  }
  return script
    .replace(IMPORT_VUE_PATH_RE, replacer)
    .replace(REQUIRE_VUE_PATH_RE, replacer)
}

export function replaceTSExt(script: string) {
  const replacer = (_: any, p1: string, p2: string): string => {
    return `${p1}js${p2}`
  }
  return script
    .replace(IMPORT_TS_PATH_RE, replacer)
    .replace(REQUIRE_TS_PATH_RE, replacer)
}

export async function compileScript(script: string, path: string, modules: string | boolean = false) {
  try {
    let { code } = await transformAsync(script, {
      filename: replaceExt(path, '.ts'),
      presets: [
        [require('@babel/preset-env'), {
          loose: true,
          modules
        }],
        require('@babel/preset-typescript')
      ],
      plugins: [
        require('@babel/plugin-transform-runtime')
      ]
    }) as BabelFileResult
    code = replaceStyleExt(code as string)
    code = replaceVueExt(code as string)
    code = replaceTSExt(code as string)
    removeSync(path)
    writeFileSync(replaceExt(path, '.js'), code, 'utf8')
  } catch (e) {
    logger.error(e.toString())
  }
}

export async function compileScriptFile(path: string, modules: string | boolean = false) {
  const sources = readFileSync(path, 'utf-8')
  await compileScript(sources, path, modules)
}
