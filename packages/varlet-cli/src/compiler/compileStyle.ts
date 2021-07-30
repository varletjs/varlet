import { readFileSync, writeFileSync } from 'fs-extra'
import { render, FileManager } from 'less'
import { replaceExt } from '../shared/fsUtils'

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

export const clearEmptyLine = (s: string) => s.replace(EMPTY_LINE_RE, '').replace(EMPTY_SPACE_RE, ' ')

export async function compileLess(file: string) {
  const source = readFileSync(file, 'utf-8')
  const { css } = await render(source, {
    filename: file,
    plugins: [TildeResolverPlugin],
  })

  writeFileSync(replaceExt(file, '.css'), clearEmptyLine(css), 'utf-8')
}
