import fse from 'fs-extra'
import { TYPES_DIR, UI_PACKAGE_JSON } from '../shared/constant.js'
import { bigCamelize } from '@varlet/shared'
import { resolve, relative } from 'path'
import { getVarletConfig } from '../config/varlet.config.js'
import { get } from 'lodash-es'

const { ensureDir, writeFileSync, readdir, writeFile, readJSONSync } = fse

export function generateReference(moduleDir: string) {
  writeFileSync(
    resolve(moduleDir, 'index.d.ts'),
    `\
export * from '${relative(moduleDir, TYPES_DIR)}'
`
  )
}

export async function compileTypes() {
  await ensureDir(TYPES_DIR)

  const varletConfig = await getVarletConfig()
  const namespace = get(varletConfig, 'namespace')
  const directives = get(varletConfig, 'directives')
  const { name: libraryName } = readJSONSync(UI_PACKAGE_JSON)

  const filenames = await readdir(TYPES_DIR)
  const includeFilenames = filenames.filter((filename) => filename !== 'index.d.ts' && filename !== 'global.d.ts')
  const exports: string[] = []
  const componentDeclares: string[] = []
  const directiveDeclares: string[] = []

  includeFilenames.forEach((filename) => {
    const folder = filename.slice(0, filename.indexOf('.d.ts'))
    const name = bigCamelize(folder)

    exports.push(`export * from './${folder}'`)

    if (filename.startsWith(namespace)) {
      // ignore prefix with namespace e.g. varComponent
      return
    }

    if (directives.includes(folder)) {
      directiveDeclares.push(`v${name}: typeof import('${libraryName}')['_${name}Component']`)
    } else {
      componentDeclares.push(`${bigCamelize(namespace)}${name}: typeof import('${libraryName}')['_${name}Component']`)
    }
  })

  const vueDeclares = `\
declare module 'vue' {
  export interface GlobalComponents {
    ${componentDeclares.join('\n    ')}
  }

  export interface ComponentCustomProperties {
    ${directiveDeclares.join('\n    ')}
  }
}`

  const template = `\
import type { App } from 'vue'

export const version: string
export const install: (app: App) => void

${exports.join('\n')}

${vueDeclares}
`

  await writeFile(resolve(TYPES_DIR, 'index.d.ts'), template)
}
