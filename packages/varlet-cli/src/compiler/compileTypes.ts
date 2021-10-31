import { ensureDir, readdir, writeFile } from 'fs-extra'
import { TYPES_DIR, UI_PACKAGE_JSON } from '../shared/constant'
import { bigCamelize } from '../shared/fsUtils'
import { resolve } from 'path'
import { getVarletConfig } from '../config/varlet.config'
import { get } from 'lodash'

export async function compileTypes() {
  const varletConfig = getVarletConfig()
  const namespace = get(varletConfig, 'namespace')
  const { name } = require(UI_PACKAGE_JSON)
  await ensureDir(TYPES_DIR)

  const dir = await readdir(TYPES_DIR)
  const ignoreEntryDir = dir.filter((filename) => filename !== 'index.d.ts' && filename !== 'global.d.ts')
  const exports: string[] = []
  const declares: string[] = []

  ignoreEntryDir.forEach((filename) => {
    const componentName = filename.slice(0, filename.indexOf('.d.ts'))

    exports.push(`export * from './${componentName}'`)

    if (!componentName.startsWith(namespace)) {
      declares.push(
        `${bigCamelize(namespace)}${bigCamelize(componentName)}: typeof import('${name}')['_${bigCamelize(
          componentName
        )}Component']`
      )
    }
  })

  const template = `\
import type { App } from 'vue'

export const install: (app: App) => void

${exports.join('\n')}
`

  const globalTemplate = `\
declare module 'vue' {
  export interface GlobalComponents {
    ${declares.join('\n    ')}
  }
}

export {}
`

  await Promise.all([
    writeFile(resolve(TYPES_DIR, 'index.d.ts'), template),
    writeFile(resolve(TYPES_DIR, 'global.d.ts'), globalTemplate),
  ])
}
