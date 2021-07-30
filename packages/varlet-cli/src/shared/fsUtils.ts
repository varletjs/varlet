import { parse, extname, resolve } from 'path'
import { ensureFileSync, lstatSync, outputFileSync, pathExistsSync, readdir, readdirSync, readFileSync } from 'fs-extra'
import { EXAMPLE_DIR_NAME, SCRIPTS_EXTENSIONS, SRC_DIR, TESTS_DIR_NAME } from './constant'

export async function getExportComponentNames(): Promise<string[]> {
  const srcDir: string[] = await readdir(SRC_DIR)
  return srcDir.filter((filename: string) => isExportComponentDir(resolve(SRC_DIR, filename)))
}

export async function getExportDirNames(): Promise<string[]> {
  const srcDir: string[] = await readdir(SRC_DIR)
  return srcDir.filter((filename: string) => isExportDir(resolve(SRC_DIR, filename)))
}

export function isMD(path: string): boolean {
  return pathExistsSync(path) && extname(path) === '.md'
}

export function isDir(path: string): boolean {
  return pathExistsSync(path) && lstatSync(path).isDirectory()
}

export function isSFC(path: string): boolean {
  return pathExistsSync(path) && extname(path) === '.vue'
}

export function isJSX(path: string): boolean {
  return pathExistsSync(path) && extname(path) === '.jsx'
}

export function isTSX(path: string): boolean {
  return pathExistsSync(path) && extname(path) === '.tsx'
}

export function isIndexTS(path: string): boolean {
  return pathExistsSync(path) && path.endsWith('index.ts')
}

export function hasComponent(path: string): boolean {
  const dir = readdirSync(path)

  return dir.some((filename) => {
    const file = resolve(path, filename)
    return isSFC(file) || isJSX(file) || isTSX(file)
  })
}

export function outputFileSyncOnChange(path: string, code: string) {
  ensureFileSync(path)
  const content = readFileSync(path, 'utf-8')
  if (content !== code) {
    outputFileSync(path, code)
  }
}

export function isScript(path: string): boolean {
  return pathExistsSync(path) && SCRIPTS_EXTENSIONS.includes(extname(path))
}

export function isLess(path: string): boolean {
  return pathExistsSync(path) && extname(path) === '.less'
}

export function isExampleDir(path: string): boolean {
  return pathExistsSync(path) && parse(path).dir.endsWith(EXAMPLE_DIR_NAME)
}

export function isTestsDir(path: string): boolean {
  return pathExistsSync(path) && parse(path).dir.endsWith(TESTS_DIR_NAME)
}

export function isExportDir(path: string): boolean {
  return pathExistsSync(resolve(path, 'index.js')) || pathExistsSync(resolve(path, 'index.ts'))
}

export function isExportComponentDir(path: string): boolean {
  return hasComponent(path) && isExportDir(path)
}

export function replaceExt(path: string, ext: string): string {
  return path.replace(extname(path), ext)
}

export function bigCamelize(str: string): string {
  return camelize(str).replace(str.charAt(0), str.charAt(0).toUpperCase())
}

export function camelize(str: string): string {
  return str.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())
}
