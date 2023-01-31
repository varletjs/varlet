import fse from 'fs-extra'
import hash from 'hash-sum'
import { parse, resolve } from 'path'
import { parse as parseSFC, compileTemplate, compileStyle, compileScript as compileScriptSFC } from '@vue/compiler-sfc'
import { replaceExt, smartAppendFileSync } from '../shared/fsUtils.js'
import { compileScript, getScriptExtname } from './compileScript.js'
import {
  clearEmptyLine,
  compileLess,
  extractStyleDependencies,
  normalizeStyleDependency,
  STYLE_IMPORT_RE,
} from './compileStyle.js'
import type { SFCStyleBlock } from '@vue/compiler-sfc'

const { readFile, writeFileSync } = fse

const EXPORT = 'export default'
const SFC = '__sfc__'
const SFC_DECLARE = `const ${SFC} = `
const RENDER = '__render__'

export function replaceExportToDeclare(script: string) {
  return script.replace(EXPORT, SFC_DECLARE)
}

export function injectExport(script: string) {
  script += `\n${EXPORT} ${SFC}`

  return script
}

export function injectScopeId(script: string, scopeId: string) {
  script += `\n${SFC}.__scopeId = '${scopeId}'`

  return script
}

export function injectRender(script: string, render: string): string {
  script = script.trim()
  render = render.replace('export function render', `function ${RENDER}`)
  script = script.replace(SFC_DECLARE, `${render}\n${SFC_DECLARE}`)
  script += `\n${SFC}.render = ${RENDER}`

  return script
}

export async function compileSFC(sfc: string) {
  const sources: string = await readFile(sfc, 'utf-8')
  const id = hash(sources)
  const { descriptor } = parseSFC(sources, { sourceMap: false })
  const { script, scriptSetup, template, styles } = descriptor

  if (script || scriptSetup) {
    let scriptContent: string
    let bindingMetadata

    if (scriptSetup) {
      const { content, bindings } = compileScriptSFC(descriptor, { id })
      scriptContent = content
      bindingMetadata = bindings
    } else {
      // script only
      scriptContent = script!.content
    }

    scriptContent = replaceExportToDeclare(scriptContent)

    // scoped
    const hasScope = styles.some((style) => style.scoped)
    const scopeId = hasScope ? `data-v-${id}` : ''

    if (template) {
      const render = compileTemplate({
        id,
        source: template.content,
        filename: sfc,
        compilerOptions: {
          scopeId,
          bindingMetadata,
        },
      }).code

      scriptContent = injectRender(scriptContent, render)
    }

    if (scopeId) {
      scriptContent = injectScopeId(scriptContent, scopeId)
    }

    scriptContent = injectExport(scriptContent)
    await compileScript(scriptContent, sfc)

    // style
    for (let index = 0; index < styles.length; index++) {
      const style: SFCStyleBlock = styles[index]
      const file = replaceExt(sfc, `Sfc${index || ''}.${style.lang || 'css'}`)
      const { base, dir } = parse(file)
      const dependencyPath = normalizeStyleDependency(base, STYLE_IMPORT_RE)
      const cssFile = resolve(dir, `./style/index${getScriptExtname()}`)

      let { code } = compileStyle({
        source: style.content,
        filename: file,
        id: scopeId,
        scoped: style.scoped,
      })

      code = extractStyleDependencies(file, code, STYLE_IMPORT_RE)
      writeFileSync(file, clearEmptyLine(code), 'utf-8')
      smartAppendFileSync(cssFile, `import '${dependencyPath}.css'\n`)

      if (style.lang === 'less') {
        await compileLess(file)
      }
    }
  }
}
