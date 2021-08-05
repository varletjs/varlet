import { readFileSync, writeFileSync } from 'fs-extra'
import { render, FileManager } from 'less'
import { replaceExt, smartAppendFileSync } from '../shared/fsUtils'
import { parse, resolve } from 'path'

export const EMPTY_SPACE_RE = /[\s]+/g
export const EMPTY_LINE_RE = /[\n\r]*/g
export const IMPORT_CSS_RE = /(?<!['"`])import\s+['"](.+\.css)['"]\s*;?(?!\s*['"`])/g
export const IMPORT_LESS_RE = /(?<!['"`])import\s+['"](.+\.less)['"]\s*;?(?!\s*['"`])/g
export const STYLE_IMPORT_RE = /@import\s+['"](.+)['"]\s*;/g

class TildeResolver extends FileManager {
  loadFile(filename: string, ...args: any[]) {
    filename = filename.replace('~', '')
    return super.loadFile.apply(this, [filename, ...args])
  }
}

const TildeResolverPlugin = {
  install(lessInstance: unknown, pluginManager: any) {
    pluginManager.addFileManager(new TildeResolver())
  },
}

export const clearEmptyLine = (s: string) => s.replace(EMPTY_LINE_RE, '').replace(EMPTY_SPACE_RE, ' ')

export function normalizeStyleDependency(styleImport: string, reg: RegExp) {
  let relativePath = styleImport.replace(reg, '$1')
  relativePath = relativePath.replace(/(.less)|(\.css)/, '')

  if (relativePath.startsWith('./')) {
    return '.' + relativePath
  }

  return '../' + relativePath
}

export function extractStyleDependencies(
  file: string,
  code: string,
  reg: RegExp,
  expect: 'css' | 'less',
  self: boolean
) {
  const { dir, base } = parse(file)
  const styleImports = code.match(reg) ?? []
  const cssFile = resolve(dir, './style/index.js')
  const lessFile = resolve(dir, './style/less.js')

  styleImports.forEach((styleImport: string) => {
    const normalizedPath = normalizeStyleDependency(styleImport, reg)
    smartAppendFileSync(cssFile, `import '${normalizedPath}.css'\n`)
    smartAppendFileSync(lessFile, `import '${normalizedPath}.${expect}'\n`)
  })

  if (self) {
    smartAppendFileSync(cssFile, `import '${normalizeStyleDependency(base, reg)}.css'\n`)
    smartAppendFileSync(lessFile, `import '${normalizeStyleDependency(base, reg)}.${expect}'\n`)
  }

  return code.replace(reg, '')
}

export async function compileLess(file: string) {
  const source = readFileSync(file, 'utf-8')
  const { css } = await render(source, {
    filename: file,
    plugins: [TildeResolverPlugin],
  })

  writeFileSync(replaceExt(file, '.css'), clearEmptyLine(css), 'utf-8')
}
