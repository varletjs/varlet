import fse from 'fs-extra'
import hash from 'hash-sum'
import { parse, resolve } from 'path'
import { parse as parseSFC, compileTemplate, compileStyle } from '@vue/compiler-sfc'
import { replaceExt, smartAppendFileSync } from '../shared/fsUtils.js'
import { compileScript } from './compileScript.js'
import {
  clearEmptyLine,
  compileLess,
  extractStyleDependencies,
  normalizeStyleDependency,
  STYLE_IMPORT_RE,
} from './compileStyle.js'
import type { SFCStyleBlock } from '@vue/compiler-sfc'
import logger from '../shared/logger.js'

const { readFile, writeFileSync } = fse

const NORMAL_EXPORT_START_RE = /export\s+default\s+{/
const DEFINE_EXPORT_START_RE = /export\s+default\s+defineComponent\s*\(\s*{/

export function injectRender(script: string, render: string): string {
  if (DEFINE_EXPORT_START_RE.test(script.trim())) {
    return script.trim().replace(
      DEFINE_EXPORT_START_RE,
      `${render}\nexport default defineComponent({
  render,\
    `
    )
  }
  if (NORMAL_EXPORT_START_RE.test(script.trim())) {
    return script.trim().replace(
      NORMAL_EXPORT_START_RE,
      `${render}\nexport default {
  render,\
    `
    )
  }
  return script
}

export async function compileSFC(sfc: string) {
  const sources: string = await readFile(sfc, 'utf-8')
  const { descriptor } = parseSFC(sources, { sourceMap: false })
  const { script, scriptSetup, template, styles } = descriptor
  if (scriptSetup) {
    logger.warning(
      `\n Varlet Cli does not support compiling script setup syntax\
       \n  The error in ${sfc}`
    )
    return
  }
  // scoped
  const hasScope = styles.some((style) => style.scoped)
  const id = hash(sources)
  const scopeId = hasScope ? `data-v-${id}` : ''
  if (script) {
    // template
    const render =
      template &&
      compileTemplate({
        id,
        source: template.content,
        filename: sfc,
        compilerOptions: {
          scopeId,
        },
      })

    let { content } = script
    if (render) {
      const { code } = render
      content = injectRender(content, code)
    }
    // script
    await compileScript(content, sfc)
    // style
    for (let index = 0; index < styles.length; index++) {
      const style: SFCStyleBlock = styles[index]
      const file = replaceExt(sfc, `Sfc${index || ''}.${style.lang || 'css'}`)
      const { base, dir } = parse(file)
      const dependencyPath = normalizeStyleDependency(base, STYLE_IMPORT_RE)
      const cssFile = resolve(dir, './style/index.js')

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
