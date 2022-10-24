import fse from 'fs-extra'
import { transformAsync } from '@babel/core'
import { bigCamelize } from '@varlet/shared'
import { replaceExt } from '../shared/fsUtils.js'
import {
  extractStyleDependencies,
  IMPORT_CSS_RE,
  IMPORT_LESS_RE,
  REQUIRE_CSS_RE,
  REQUIRE_LESS_RE,
} from './compileStyle.js'
import { resolve } from 'path'
import type { BabelFileResult } from '@babel/core'
import { get } from 'lodash-es'
import { getVarletConfig } from '../config/varlet.config.js'

const { writeFileSync, readFileSync, removeSync, writeFile } = fse

export const IMPORT_VUE_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+)\.vue(\s*['"`]);?(?!\s*['"`])/g
export const IMPORT_TS_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+)\.ts(\s*['"`]);?(?!\s*['"`])/g
export const IMPORT_JSX_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+)\.jsx(\s*['"`]);?(?!\s*['"`])/g
export const IMPORT_TSX_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+)\.tsx(\s*['"`]);?(?!\s*['"`])/g
export const REQUIRE_VUE_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\s*\.{1,2}\/.+)\.vue(\s*['"`]\))(?!\s*['"`])/g
export const REQUIRE_TS_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\s*\.{1,2}\/.+)\.ts(\s*['"`]\))(?!\s*['"`])/g
export const REQUIRE_JSX_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\s*\.{1,2}\/.+)\.jsx(\s*['"`]\))(?!\s*['"`])/g
export const REQUIRE_TSX_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\s*\.{1,2}\/.+)\.tsx(\s*['"`]\))(?!\s*['"`])/g

const scriptReplacer = (_: any, p1: string, p2: string): string => `${p1}.js${p2}`

export const replaceVueExt = (script: string): string =>
  script.replace(IMPORT_VUE_PATH_RE, scriptReplacer).replace(REQUIRE_VUE_PATH_RE, scriptReplacer)

export const replaceTSExt = (script: string): string =>
  script.replace(IMPORT_TS_PATH_RE, scriptReplacer).replace(REQUIRE_TS_PATH_RE, scriptReplacer)

export const replaceJSXExt = (script: string): string =>
  script.replace(IMPORT_JSX_PATH_RE, scriptReplacer).replace(REQUIRE_JSX_PATH_RE, scriptReplacer)

export const replaceTSXExt = (script: string): string =>
  script.replace(IMPORT_TSX_PATH_RE, scriptReplacer).replace(REQUIRE_TSX_PATH_RE, scriptReplacer)

export const moduleCompatible = async (script: string): Promise<string> => {
  const moduleCompatible = get(await getVarletConfig(), 'moduleCompatible', {} as Record<string, string>)

  Object.keys(moduleCompatible).forEach((esm) => {
    const commonjs = moduleCompatible[esm]
    script = script.replace(esm, commonjs)
  })

  return script
}

export async function compileScript(script: string, file: string) {
  const modules = process.env.BABEL_MODULE

  if (modules === 'commonjs') {
    script = await moduleCompatible(script)
  }

  let { code } = (await transformAsync(script, {
    filename: file,
  })) as BabelFileResult

  code = extractStyleDependencies(file, code as string, modules === 'commonjs' ? REQUIRE_CSS_RE : IMPORT_CSS_RE)
  code = extractStyleDependencies(file, code as string, modules === 'commonjs' ? REQUIRE_LESS_RE : IMPORT_LESS_RE)
  code = replaceVueExt(code as string)
  code = replaceTSXExt(code as string)
  code = replaceJSXExt(code as string)
  code = replaceTSExt(code as string)

  removeSync(file)
  writeFileSync(replaceExt(file, '.js'), code, 'utf8')
}

export async function compileScriptFile(file: string) {
  const sources = readFileSync(file, 'utf-8')

  await compileScript(sources, file)
}

export async function compileESEntry(dir: string, publicDirs: string[]) {
  const imports: string[] = []
  const plugins: string[] = []
  const constInternalComponents: string[] = []
  const cssImports: string[] = []
  const publicComponents: string[] = []

  publicDirs.forEach((dirname: string) => {
    const publicComponent = bigCamelize(dirname)

    publicComponents.push(publicComponent)
    imports.push(`import ${publicComponent}, * as ${publicComponent}Module from './${dirname}'`)
    constInternalComponents.push(
      `export const _${publicComponent}Component = ${publicComponent}Module._${publicComponent}Component || {}`
    )
    plugins.push(`${publicComponent}.install && app.use(${publicComponent})`)
    cssImports.push(`import './${dirname}/style'`)
  })

  const install = `
function install(app) {
  ${plugins.join('\n  ')}
}
`

  const indexTemplate = `\
${imports.join('\n')}\n
${constInternalComponents.join('\n')}\n
${install}
export {
  install,
  ${publicComponents.join(',\n  ')}
}

export default {
  install,
  ${publicComponents.join(',\n  ')}
}
`

  const styleTemplate = `\
${cssImports.join('\n')}
`

  const umdTemplate = `\
${imports.join('\n')}\n
${cssImports.join('\n')}\n
${install}
export {
  install,
  ${publicComponents.join(',\n  ')}
}

export default {
  install,
  ${publicComponents.join(',\n  ')}
}
`

  await Promise.all([
    writeFile(resolve(dir, 'index.js'), indexTemplate, 'utf-8'),
    writeFile(resolve(dir, 'umdIndex.js'), umdTemplate, 'utf-8'),
    writeFile(resolve(dir, 'style.js'), styleTemplate, 'utf-8'),
  ])
}

export async function compileCommonJSEntry(dir: string, publicDirs: string[]) {
  const requires: string[] = []
  const plugins: string[] = []
  const cssRequires: string[] = []
  const publicComponents: string[] = []

  publicDirs.forEach((dirname: string) => {
    const publicComponent = bigCamelize(dirname)

    publicComponents.push(publicComponent)
    requires.push(`var ${publicComponent} = require('./${dirname}')['default']`)
    plugins.push(`${publicComponent}.install && app.use(${publicComponent})`)
    cssRequires.push(`require('./${dirname}/style')`)
  })

  const install = `
function install(app) {
  ${plugins.join('\n  ')}
}
`

  const indexTemplate = `\
${requires.join('\n')}\n
${install}

module.exports = {
  install,
  ${publicComponents.join(',\n  ')}
}
`

  const styleTemplate = `\
${cssRequires.join('\n')}
`

  await Promise.all([
    writeFile(resolve(dir, 'index.js'), indexTemplate, 'utf-8'),
    writeFile(resolve(dir, 'style.js'), styleTemplate, 'utf-8'),
  ])
}
