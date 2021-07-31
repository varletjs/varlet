import { transformAsync } from '@babel/core'
import { bigCamelize, replaceExt, smartAppendFileSync } from '../shared/fsUtils'
import { writeFileSync, readFileSync, removeSync, writeFile } from 'fs-extra'
import { parse, resolve } from 'path'
import type { BabelFileResult } from '@babel/core'

export const IMPORT_VUE_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+)\.vue(\s*['"`]);?(?!\s*['"`])/g
export const IMPORT_TS_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+)\.ts(\s*['"`]);?(?!\s*['"`])/g
export const IMPORT_JSX_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+)\.jsx(\s*['"`]);?(?!\s*['"`])/g
export const IMPORT_TSX_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+)\.tsx(\s*['"`]);?(?!\s*['"`])/g
export const IMPORT_CSS_RE = /(?<!['"`])import\s+['"](.+\.css)['"]\s*;?(?!\s*['"`])/g
export const IMPORT_LESS_RE = /(?<!['"`])import\s+['"](.+\.less)['"]\s*;?(?!\s*['"`])/g

const scriptReplacer = (_: any, p1: string, p2: string): string => `${p1}.js${p2}`

export const replaceVueExt = (script: string): string => script.replace(IMPORT_VUE_PATH_RE, scriptReplacer)

export const replaceTSExt = (script: string): string => script.replace(IMPORT_TS_PATH_RE, scriptReplacer)

export const replaceJSXExt = (script: string): string => script.replace(IMPORT_JSX_PATH_RE, scriptReplacer)

export const replaceTSXExt = (script: string): string => script.replace(IMPORT_TSX_PATH_RE, scriptReplacer)

export function normalizeStyleDependency(styleImport: string, styleReg: RegExp) {
  let relativePath = styleImport.replace(styleReg, '$1')
  relativePath = relativePath.replace(/(.less)|(\.css)/, '')

  if (relativePath.startsWith('./')) {
    return '.' + relativePath
  }

  return '../' + relativePath
}

export function extractStyleDependencies(file: string, code: string, expect: 'css' | 'less') {
  const { dir } = parse(file)
  const reg = expect === 'css' ? IMPORT_CSS_RE : IMPORT_LESS_RE
  const styleImports = code.match(reg) ?? []
  const cssFile = resolve(dir, './style/index.js')
  const lessFile = resolve(dir, './style/less.js')

  styleImports.forEach((styleImport: string) => {
    const normalizedPath = normalizeStyleDependency(styleImport, reg)
    smartAppendFileSync(cssFile, `import '${normalizedPath}.css'\n`)
    smartAppendFileSync(lessFile, `import '${normalizedPath}.${expect}'\n`)
  })

  return code.replace(reg, '')
}

export async function compileScript(script: string, file: string) {
  let { code } = (await transformAsync(script, {
    filename: file,
  })) as BabelFileResult
  code = extractStyleDependencies(file, code as string, 'css')
  code = extractStyleDependencies(file, code as string, 'less')
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

export async function compileLibraryEntry(dir: string, publicDirs: string[]) {
  const imports: string[] = []
  const plugins: string[] = []
  const constInternalComponents: string[] = []
  const internalComponents: string[] = []
  const cssImports: string[] = []
  const lessImports: string[] = []
  const publicComponents: string[] = []

  publicDirs.forEach((dirname: string) => {
    const publicComponent = bigCamelize(dirname)

    publicComponents.push(publicComponent)
    imports.push(`import ${publicComponent}, * as ${publicComponent}Module from './${dirname}'`)
    constInternalComponents.push(
      `export const _${publicComponent}Component = ${publicComponent}Module._${publicComponent}Component || {}`
    )
    internalComponents.push(`_${publicComponent}Component`)
    plugins.push(`${publicComponent}.install && app.use(${publicComponent})`)
    cssImports.push(`import './${dirname}/style'`)
    lessImports.push(`import './${dirname}/style/less'`)
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

  const lessTemplate = `\
${lessImports.join('\n')}
`
  await Promise.all([
    writeFile(resolve(dir, 'index.js'), indexTemplate, 'utf-8'),
    writeFile(resolve(dir, 'umdIndex.js'), umdTemplate, 'utf-8'),
    writeFile(resolve(dir, 'style.js'), styleTemplate, 'utf-8'),
    writeFile(resolve(dir, 'less.js'), lessTemplate, 'utf-8'),
  ])
}
