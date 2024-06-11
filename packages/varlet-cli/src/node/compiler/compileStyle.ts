import fse from 'fs-extra'
import less from 'less'
import * as sass from 'sass'
import glob from 'glob'
import { replaceExt, smartAppendFileSync } from '../shared/fsUtils.js'
import { parse, resolve } from 'path'
import { getScriptExtname } from './compileScript.js'
import { CWD } from '../shared/constant.js'
import { createRequire } from 'module'

const { render: renderLess } = less
const { renderSync: renderScss } = sass
const { readFileSync, writeFileSync, unlinkSync } = fse
const require = createRequire(import.meta.url)

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
  const source = readFileSync(file, 'utf-8')
  const { css } = renderScss({
    data: source,
    file,
    importer(path: string) {
      if (!path.endsWith('.scss') || !path.endsWith('.css')) {
        path += '.scss'
      }

      if (path.startsWith('~')) {
        path = path.replace('~', '')
        path = require.resolve(path)
      }

      return { file: path }
    },
  })

  writeFileSync(replaceExt(file, '.css'), compressCss(css.toString('utf8')), 'utf-8')
}

export function clearLessFiles(dir: string) {
  glob.sync(`${dir}/**/*.less`).forEach(unlinkSync)
}

export function clearScssFiles(dir: string) {
  glob.sync(`${dir}/**/*.scss`).forEach(unlinkSync)
}
