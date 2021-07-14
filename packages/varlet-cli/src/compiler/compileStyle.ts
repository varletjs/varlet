import { readFileSync, writeFileSync } from 'fs-extra'
import { render, FileManager } from 'less'
import { replaceExt } from '../shared/fsUtils'

export const IMPORT_LESS_PATH_RE = /((?<!['"`])import\s+['"]\s*\.{1,2}\/.+\.)less(\s*['"`])(?!\s*['"`])/g
export const REQUIRE_LESS_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\.{1,2}\/.+\.)less(\s*['"`]\))(?!\s*['"`])/g
export const EMPTY_SPACE_RE = /[\s]+/g
export const EMPTY_LINE_RE = /[\n\r]*/g

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

export function replaceStyleExt(script: string) {
  const replacer = (_: any, p1: string, p2: string): string => `${p1}css${p2}`
  return script.replace(IMPORT_LESS_PATH_RE, replacer).replace(REQUIRE_LESS_PATH_RE, replacer)
}

export function clearEmptyLine(style: string) {
  return style.replace(EMPTY_LINE_RE, '').replace(EMPTY_SPACE_RE, ' ')
}

export async function compileLess(file: string) {
  const source = readFileSync(file, 'utf-8')
  const { css } = await render(source, {
    filename: file,
    plugins: [TildeResolverPlugin],
  })

  writeFileSync(replaceExt(file, '.css'), clearEmptyLine(css), 'utf-8')
}
