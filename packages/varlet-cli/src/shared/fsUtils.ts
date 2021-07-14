import { parse, extname, resolve } from 'path'
import { lstatSync, pathExistsSync, readdir, readdirSync, readFileSync, writeFileSync } from 'fs-extra'
import { EXAMPLE_DIR_NAME, SRC_DIR, TESTS_DIR_NAME } from './constant'

export async function getComponentNames(): Promise<string[]> {
  const srcDir: string[] = await readdir(SRC_DIR)
  return srcDir.filter((filename: string) => isComponentDir(resolve(SRC_DIR, filename)))
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

export function isIndexTS(path: string): boolean {
  return pathExistsSync(path) && path.endsWith('index.ts')
}

export function hasSFC(path: string): boolean {
  const dir = readdirSync(path)
  return dir.some((filename) => isSFC(resolve(path, filename)))
}

export function isScript(path: string): boolean {
  return (pathExistsSync(path) && extname(path) === '.js') || extname(path) === '.ts'
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

export function isComponentDir(path: string): boolean {
  return hasSFC(path) && isExportDir(path)
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

export function appendContent(file: string, content: string) {
  const code = readFileSync(file)
  writeFileSync(file, `${code}${content}`)
}
