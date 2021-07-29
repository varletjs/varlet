import { transformAsync } from '@babel/core'
import { bigCamelize, replaceExt } from '../shared/fsUtils'
import { replaceStyleExt } from './compileStyle'
import { writeFileSync, readFileSync, removeSync, writeFile } from 'fs-extra'
import { resolve } from 'path'
import type { BabelFileResult } from '@babel/core'

export const IMPORT_VUE_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+)\.vue(\s*['"`])(?!\s*['"`])/g
export const REQUIRE_VUE_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\.{1,2}\/.+)\.vue(\s*['"`]\))(?!\s*['"`])/g
export const IMPORT_TS_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+\.)ts(\s*['"`])(?!\s*['"`])/g
export const REQUIRE_TS_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\.{1,2}\/.+\.)ts(\s*['"`]\))(?!\s*['"`])/g

export function replaceVueExt(script: string) {
  const replacer = (_: any, p1: string, p2: string): string => `${p1}.js${p2}`

  return script.replace(IMPORT_VUE_PATH_RE, replacer).replace(REQUIRE_VUE_PATH_RE, replacer)
}

export function replaceTSExt(script: string) {
  const replacer = (_: any, p1: string, p2: string): string => `${p1}js${p2}`

  return script.replace(IMPORT_TS_PATH_RE, replacer).replace(REQUIRE_TS_PATH_RE, replacer)
}

export async function compileScript(script: string, file: string) {
  let { code } = (await transformAsync(script, {
    filename: file,
  })) as BabelFileResult
  code = replaceStyleExt(code as string)
  code = replaceVueExt(code as string)
  code = replaceTSExt(code as string)

  removeSync(file)
  writeFileSync(replaceExt(file, '.js'), code, 'utf8')
}

export async function compileScriptFile(file: string) {
  const sources = readFileSync(file, 'utf-8')

  await compileScript(sources, file)
}

export async function compileLibraryEntry(dir: string, componentNames: string[], exportDirNames: string[]) {
  const imports = exportDirNames
    .map(
      (exportDirNames: string) =>
        `import ${bigCamelize(exportDirNames)}, { _${bigCamelize(exportDirNames)}Component } from './${exportDirNames}'`
    )
    .join('\n')

  const install = `\
function install(app) {
  ${exportDirNames
    .map((exportDirName: string) => `${bigCamelize(exportDirName)}.install && app.use(${bigCamelize(exportDirName)})`)
    .join('\n  ')}
}
`
  const exports = `\
export {
  install,
  ${exportDirNames
    .map((exportDirName: string) => `${bigCamelize(exportDirName)},\n  _${bigCamelize(exportDirName)}Component`)
    .join(',\n  ')}
}

export default {
  install,
  ${exportDirNames.map((exportDirName: string) => `${bigCamelize(exportDirName)}`).join(',\n  ')},
}\
`

  const template = `\
${imports}\n
${install}
${exports}
`

  const cssImports = componentNames.map((componentName: string) => `import './${componentName}/style'`).join('\n')
  const styleTemplate = `\
${cssImports}
`

  const umdTemplate = `\
${imports}\n
${install}
${cssImports}\n
${exports}
`

  const lessImports = componentNames.map((componentName: string) => `import './${componentName}/style/less'`).join('\n')
  const lessTemplate = `\
${lessImports}
`
  await Promise.all([
    writeFile(resolve(dir, 'index.js'), template, 'utf-8'),
    writeFile(resolve(dir, 'umdIndex.js'), umdTemplate, 'utf-8'),
    writeFile(resolve(dir, 'style.js'), styleTemplate, 'utf-8'),
    writeFile(resolve(dir, 'less.js'), lessTemplate, 'utf-8'),
  ])
}
