import fse from 'fs-extra'
import { SRC_DIR, TYPES_DIR } from '../shared/constant.js'
import { resolve } from 'path'
import { isDir, isMD } from '../shared/fsUtils.js'
import { getVarletConfig } from '../config/varlet.config.js'

const { ensureDirSync, readdirSync, readFileSync, writeFileSync } = fse

export function compileMD(path: string, keys: Set<string>) {
  const content = readFileSync(path, 'utf-8')
  const result = content.match(/`--[\w-]+`/g) ?? []
  result.forEach((key) => {
    keys.add(key.replace(/`/g, ''))
  })
}

export function compileDir(path: string, keys: Set<string>, defaultLanguage: 'zh-CN' | 'en-US') {
  const dir = readdirSync(path)

  dir.forEach((filename) => {
    const filePath = resolve(path, filename)

    isDir(filePath) && compileDir(filePath, keys, defaultLanguage)

    if (isMD(filePath) && filename.includes(defaultLanguage)) {
      compileMD(filePath, keys)
    }
  })
}

export async function compileStyleVars() {
  ensureDirSync(TYPES_DIR)

  const { defaultLanguage } = await getVarletConfig()

  const keys = new Set<string>()

  compileDir(SRC_DIR, keys, defaultLanguage)

  const assistanceType = `type RemoveTwoDashes<T extends string> = T extends \`--$\{infer Rest}\` ? Rest : T

type CamelCase<S extends string> =
  S extends \`$\{infer P1}-$\{infer P2}\`
    ? \`$\{P1}$\{CamelCase<Capitalize<P2>>}\`
    : S

type FormatStyleVars<T> = {
  [K in keyof T as  CamelCase<RemoveTwoDashes<K & string>>]?: T[K];
} & T`

  let baseStyleVars = [...keys].reduce((template, key: string) => {
    template += `  '${key}'?: string\n`
    return template
  }, '\n\ninterface BaseStyleVars {\n')

  baseStyleVars += '  [key: PropertyKey]: string\n}\n'

  writeFileSync(
    resolve(TYPES_DIR, 'styleVars.d.ts'),
    `${assistanceType}${baseStyleVars}
export interface StyleVars extends FormatStyleVars<BaseStyleVars> {}`
  )
}
