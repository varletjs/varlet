import fse from 'fs-extra'
import { SRC_DIR, TYPES_DIR } from '../shared/constant.js'
import { resolve } from 'path'
import { isDir, isMD } from '../shared/fsUtils.js'

const { ensureDirSync, readdirSync, readFileSync, writeFileSync } = fse

export function compileMD(path: string, keys: Set<string>) {
  const content = readFileSync(path, 'utf-8')
  const result = content.match(/`--[\w-]+`/g) ?? []
  result.forEach((key) => {
    keys.add(key.replace(/`/g, ''))
  })
}

export function compileDir(path: string, keys: Set<string>) {
  const dir = readdirSync(path)

  dir.forEach((filename) => {
    const filePath = resolve(path, filename)

    isDir(filePath) && compileDir(filePath, keys)
    isMD(filePath) && compileMD(filePath, keys)
  })
}

export function compileStyleVars() {
  ensureDirSync(TYPES_DIR)

  const keys = new Set<string>()

  compileDir(SRC_DIR, keys)

  const template = [...keys].reduce((template, key: string) => {
    template += `  '${key}': string;\n`
    return template
  }, 'export interface StyleVars {\n')

  writeFileSync(resolve(TYPES_DIR, 'styleVars.d.ts'), template + '}')
}
