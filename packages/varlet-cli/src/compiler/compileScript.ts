import { BabelFileResult, transformAsync } from '@babel/core'
import { bigCamelize, replaceExt } from '../shared/fsUtils'
import { replaceStyleExt } from './compileStyle'
import { writeFileSync, readFileSync, removeSync, writeFile } from 'fs-extra'
import { resolve } from 'path'

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

export async function compileScript(script: string, path: string, modules: string | boolean = false) {
  let { code } = (await transformAsync(script, {
    filename: replaceExt(path, '.ts'),
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules,
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: ['@babel/plugin-transform-runtime'],
  })) as BabelFileResult

  code = replaceStyleExt(code as string)
  code = replaceVueExt(code as string)
  code = replaceTSExt(code as string)

  removeSync(path)
  writeFileSync(replaceExt(path, '.js'), code, 'utf8')
}

export async function compileScriptFile(path: string, modules: string | boolean = false) {
  const sources = readFileSync(path, 'utf-8')

  await compileScript(sources, path, modules)
}

export async function compileLibraryEntry(
  dir: string,
  componentNames: string[],
  exportDirNames: string[],
  modules: string | boolean = false
) {
  const imports = exportDirNames
    .map(
      (exportDirNames: string) =>
        `import ${bigCamelize(exportDirNames)}, { _${bigCamelize(exportDirNames)}Component } from './${exportDirNames}'`
    )
    .join('\n')

  const requires = exportDirNames
    .map((exportDirNames: string) => `var ${bigCamelize(exportDirNames)} = require('./${exportDirNames}')`)
    .join('\n')

  const install = `\
function install(app) {
  ${exportDirNames
    .map((exportDirName: string) => `${bigCamelize(exportDirName)}.install && app.use(${bigCamelize(exportDirName)})`)
    .join('\n  ')}
}
`
  const esExports = `\
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
  const cjsExports = `\
module.exports = {
  install,
  ${exportDirNames.map((exportDirName: string) => `${bigCamelize(exportDirName)}`).join(',\n  ')}
}\
`

  const template = `\
${modules === 'cjs' ? requires : imports}\n
${install}
${modules === 'cjs' ? cjsExports : esExports}
`

  const cssImports = componentNames.map((componentName: string) => `import './${componentName}/style'`).join('\n')
  const cssRequires = componentNames.map((componentName: string) => `require('./${componentName}/style')`).join('\n')
  const styleTemplate = `\
${modules === 'cjs' ? cssRequires : cssImports}
`

  const umdTemplate = `\
${modules === 'cjs' ? requires : imports}\n
${install}
${modules === 'cjs' ? cssRequires : cssImports}\n
${modules === 'cjs' ? cjsExports : esExports}
`

  const lessImports = componentNames.map((componentName: string) => `import './${componentName}/style/less'`).join('\n')
  const lessRequires = componentNames
    .map((componentName: string) => `require('./${componentName}/style/less')`)
    .join('\n')
  const lessTemplate = `\
${modules === 'cjs' ? lessRequires : lessImports}
`
  await Promise.all([
    writeFile(resolve(dir, 'index.js'), template, 'utf-8'),
    writeFile(resolve(dir, 'umdIndex.js'), umdTemplate, 'utf-8'),
    writeFile(resolve(dir, 'style.js'), styleTemplate, 'utf-8'),
    writeFile(resolve(dir, 'less.js'), lessTemplate, 'utf-8'),
  ])
}
