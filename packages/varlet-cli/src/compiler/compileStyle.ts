import { readFileSync, removeSync, writeFileSync } from 'fs-extra'
import { render } from 'less'
import { replaceExt, smartAppendFileSync } from '../shared/fsUtils'
import { parse, resolve } from 'path'

export const EMPTY_SPACE_RE = /[\s]+/g
export const EMPTY_LINE_RE = /[\n\r]*/g
export const IMPORT_CSS_RE = /(?<!['"`])import\s+['"](\.{1,2}\/.+\.css)['"]\s*;?(?!\s*['"`])/g
export const IMPORT_LESS_RE = /(?<!['"`])import\s+['"](\.{1,2}\/.+\.less)['"]\s*;?(?!\s*['"`])/g
export const REQUIRE_CSS_RE = /(?<!['"`])require\(\s*['"](\.{1,2}\/.+\.css)['"]\s*\);?(?!\s*['"`])/g
export const REQUIRE_LESS_RE = /(?<!['"`])require\(\s*['"](\.{1,2}\/.+\.less)['"]\s*\);?(?!\s*['"`])/g
export const STYLE_IMPORT_RE = /@import\s+['"](.+)['"]\s*;/g

export const clearEmptyLine = (s: string) => s.replace(EMPTY_LINE_RE, '').replace(EMPTY_SPACE_RE, ' ')

export function normalizeStyleDependency(styleImport: string, reg: RegExp) {
  let relativePath = styleImport.replace(reg, '$1')
  relativePath = relativePath.replace(/(\.less)|(\.css)/, '')

  if (relativePath.startsWith('./')) {
    return '.' + relativePath
  }

  return '../' + relativePath
}

export function extractStyleDependencies(file: string, code: string, styleReg: RegExp) {
  const styleImports = code.match(styleReg) ?? []
  const cssFile = resolve(parse(file).dir, './style/index.js')
  const modules = process.env.BABEL_MODULE

  styleImports.forEach((styleImport: string) => {
    const normalizedPath = normalizeStyleDependency(styleImport, styleReg)
    smartAppendFileSync(
      cssFile,
      modules === 'commonjs' ? `require('${normalizedPath}.css')\n` : `import '${normalizedPath}.css'\n`
    )
  })

  return code.replace(styleReg, '')
}

export async function compileLess(file: string) {
  const source = readFileSync(file, 'utf-8')
  const { css } = await render(source, { filename: file })

  removeSync(file)
  writeFileSync(replaceExt(file, '.css'), clearEmptyLine(css), 'utf-8')
}
