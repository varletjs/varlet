import { extname, resolve } from 'path'
import { fileURLToPath } from 'url'
import fse from 'fs-extra'
import globSync from 'glob'
import { CLI_PACKAGE_JSON, PUBLIC_DIR_INDEXES, SCRIPTS_EXTENSIONS, SRC_DIR, UI_PACKAGE_JSON } from './constant.js'

const {
  appendFileSync,
  ensureFileSync,
  lstatSync,
  outputFileSync,
  pathExistsSync,
  readdir,
  readFileSync,
  readJSONSync,
} = fse

export async function getPublicDirs(): Promise<string[]> {
  const srcDir: string[] = await readdir(SRC_DIR)
  return srcDir.filter((filename: string) => isPublicDir(resolve(SRC_DIR, filename)))
}

export const isMD = (file: string): boolean => pathExistsSync(file) && extname(file) === '.md'

export const isDir = (file: string): boolean => pathExistsSync(file) && lstatSync(file).isDirectory()

export const isSFC = (file: string): boolean => pathExistsSync(file) && extname(file) === '.vue'

export const isDTS = (file: string): boolean => pathExistsSync(file) && file.endsWith('.d.ts')

export const isJsx = (file: string): boolean => pathExistsSync(file) && file.endsWith('.jsx')

export const isTsx = (file: string): boolean => pathExistsSync(file) && file.endsWith('.tsx')

export const isScript = (file: string): boolean => pathExistsSync(file) && SCRIPTS_EXTENSIONS.includes(extname(file))

export const isLess = (file: string): boolean => pathExistsSync(file) && extname(file) === '.less'

export const isScss = (file: string): boolean => pathExistsSync(file) && extname(file) === '.scss'

export const isPublicDir = (dir: string): boolean =>
  PUBLIC_DIR_INDEXES.some((index) => pathExistsSync(resolve(dir, index)))

export const replaceExt = (file: string, ext: string): string => file.replace(extname(file), ext)

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

export function glob(pattern: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    globSync(pattern, (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve(files)
      }
    })
  })
}

export function getDirname(url: string) {
  return fileURLToPath(new URL('.', url))
}

export function getVersion() {
  return readJSONSync(UI_PACKAGE_JSON).version
}

export function getCliVersion() {
  return readJSONSync(CLI_PACKAGE_JSON).version
}
