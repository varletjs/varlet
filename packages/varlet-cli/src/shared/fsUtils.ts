import { extname, resolve } from 'path'
import {
  appendFileSync,
  ensureFileSync,
  lstatSync,
  outputFileSync,
  pathExistsSync,
  readdir,
  readFileSync,
} from 'fs-extra'
import { EXPORT_DIR_INDEXES, SCRIPTS_EXTENSIONS, SRC_DIR } from './constant'

export async function getExportDirNames(): Promise<string[]> {
  const srcDir: string[] = await readdir(SRC_DIR)
  return srcDir.filter((filename: string) => isExportDir(resolve(SRC_DIR, filename)))
}

export const isMD = (file: string): boolean => pathExistsSync(file) && extname(file) === '.md'

export const isDir = (file: string): boolean => pathExistsSync(file) && lstatSync(file).isDirectory()

export const isSFC = (file: string): boolean => pathExistsSync(file) && extname(file) === '.vue'

export const isJSX = (file: string): boolean => pathExistsSync(file) && extname(file) === '.jsx'

export const isTSX = (file: string): boolean => pathExistsSync(file) && extname(file) === '.tsx'

export const isScript = (file: string): boolean => pathExistsSync(file) && SCRIPTS_EXTENSIONS.includes(extname(file))

export const isLess = (file: string): boolean => pathExistsSync(file) && extname(file) === '.less'

export const isExportDir = (dir: string): boolean =>
  EXPORT_DIR_INDEXES.some((index) => pathExistsSync(resolve(dir, index)))

export const replaceExt = (file: string, ext: string): string => file.replace(extname(file), ext)

export const bigCamelize = (s: string): string => camelize(s).replace(s.charAt(0), s.charAt(0).toUpperCase())

export const camelize = (s: string): string => s.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())

export function smartAppendFileSync(file: string, code: string) {
  if (pathExistsSync(file)) {
    const content = readFileSync(file, 'utf-8')

    if (!content.includes(code)) {
      appendFileSync(file, code)
    }
  }
}

export function outputFileSyncOnChange(path: string, code: string) {
  ensureFileSync(path)
  const content = readFileSync(path, 'utf-8')
  if (content !== code) {
    outputFileSync(path, code)
  }
}
