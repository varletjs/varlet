import { parse, resolve } from 'path'
import fse from 'fs-extra'
import glob from 'glob'
import less from 'less'
import * as sass from 'sass'
import { CWD } from '../shared/constant.js'
import { replaceExt, smartAppendFileSync } from '../shared/fsUtils.js'
import { getScriptExtname } from './compileScript.js'

const { render: renderLess } = less
const { readFileSync, writeFileSync, unlinkSync } = fse

export const EMPTY_SPACE_RE = /[\s]+/g
export const EMPTY_LINE_RE = /[\n\r]*/g
export const IMPORT_CSS_RE = /(?<!['"`])import\s+['"](\.{1,2}\/.+\.css)['"]\s*;?(?!\s*['"`])/g
export const IMPORT_LESS_RE = /(?<!['"`])import\s+['"](\.{1,2}\/.+\.less)['"]\s*;?(?!\s*['"`])/g
export const IMPORT_SCSS_RE = /(?<!['"`])import\s+['"](\.{1,2}\/.+\.scss)['"]\s*;?(?!\s*['"`])/g
export const STYLE_EXTNAME_RE = /(\.less)|(\.scss)|(\.css)/
export const STYLE_IMPORT_RE = /@import\s+['"](.+)['"]\s*;/g

export const compressCss = (s: string) => s.replace(EMPTY_LINE_RE, '').replace(EMPTY_SPACE_RE, ' ')

export function normalizeStyleDependency(styleImport: string, reg: RegExp) {
  let relativePath = styleImport.replace(reg, '$1')
  relativePath = relativePath.replace(STYLE_EXTNAME_RE, '')

  if (relativePath.startsWith('./')) {
    return '.' + relativePath
  }

  return '../' + relativePath
}

export function extractStyleDependencies(file: string, code: string, styleReg: RegExp) {
  const styleImports = code.match(styleReg) ?? []
  const cssFile = resolve(parse(file).dir, `./style/index${getScriptExtname()}`)

  styleImports.forEach((styleImport: string) => {
    const normalizedPath = normalizeStyleDependency(styleImport, styleReg)
    smartAppendFileSync(cssFile, `import '${normalizedPath}.css'\n`)
  })

  return code.replace(styleReg, '')
}

export async function compileLess(file: string) {
  const source = readFileSync(file, 'utf-8')
  const { css } = await renderLess(source, {
    filename: file,
    paths: [resolve(CWD, 'node_modules')],
  })

  writeFileSync(replaceExt(file, '.css'), compressCss(css), 'utf-8')
}

export function compileScss(file: string) {
  const { css } = sass.compile(file, {
    loadPaths: [resolve(CWD, 'node_modules')],
  })

  writeFileSync(replaceExt(file, '.css'), compressCss(css), 'utf-8')
}

export function clearLessFiles(dir: string) {
  glob.sync(`${dir}/**/*.less`).forEach(unlinkSync)
}

export function clearScssFiles(dir: string) {
  glob.sync(`${dir}/**/*.scss`).forEach(unlinkSync)
}
