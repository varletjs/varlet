import hash from 'hash-sum'
import { readFile, writeFileSync } from 'fs-extra'
import { parse, compileTemplate, compileStyle } from '@vue/compiler-sfc'
import { replaceExt } from '../shared/fsUtils'
import { compileScript } from './compileScript'
import { clearEmptyLine, compileLess, extractStyleDependencies, STYLE_IMPORT_RE } from './compileStyle'
import type { SFCStyleBlock } from '@vue/compiler-sfc'

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
  const { descriptor } = parse(sources, { sourceMap: false })
  const { script, template, styles } = descriptor
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
      const file = replaceExt(sfc, `Sfc${index || ''}.${style.lang}`)
      let { code } = compileStyle({
        source: style.content,
        filename: file,
        id: scopeId,
        scoped: style.scoped,
      })
      code = extractStyleDependencies(file, code, STYLE_IMPORT_RE, style.lang as 'css' | 'less', true)
      writeFileSync(file, clearEmptyLine(code), 'utf-8')
      style.lang === 'less' && (await compileLess(file))
    }
  }
}
