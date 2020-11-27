import hash from 'hash-sum'
import { readFile, remove, writeFileSync } from 'fs-extra'
import { parse, compileTemplate, compileStyle, SFCStyleBlock } from '@vue/compiler-sfc'
import { replaceExt } from '../shared/fsUtils'
import { compileScript } from './compileScript'
import { clearEmptyLine, compileLess, emitStyleEntry } from './compileStyle'

const NORMAL_EXPORT_START_RE = /export\s+default\s+{/
const DEFINE_EXPORT_START_RE = /export\s+default\s+defineComponent\s*\(\s*{/

export function injectRender(script: string, render: string): string {
  if (DEFINE_EXPORT_START_RE.test(script.trim())) {
    return script.trim().replace(DEFINE_EXPORT_START_RE, `${render}\nexport default defineComponent({
  render,\
    `)
  }
  if (NORMAL_EXPORT_START_RE.test(script.trim())) {
    return script.trim().replace(NORMAL_EXPORT_START_RE, `${render}\nexport default {
  render,\
    `)
  }
  return script
}

export async function compileSFC(path: string, modules: string | boolean = false) {
  const sources: string = await readFile(path, 'utf-8')
  const { descriptor } = parse(sources, { sourceMap: false })
  const { script, template, styles } = descriptor
  // scoped
  const hasScope = styles.some(style => style.scoped)
  const scopeId = hasScope ? `data-v-${hash(sources)}` : ''
  if (script) {
    // template
    const render = template && compileTemplate({
      source: template.content,
      filename: path,
      compilerOptions: {
        scopeId
      }
    })
    let { content } = script
    if (render) {
      const { code } = render
      content = injectRender(content, code)
      // script
      await compileScript(content, replaceExt(path, 'Sfc.ts'), modules)

      // style
      styles.forEach((style: SFCStyleBlock, index: number) => {
        const stylePath = replaceExt(path, `Sfc${index === 0 ? '' : index}.${style.lang}`)
        const { code } = compileStyle({
          source: style.content,
          filename: stylePath,
          id: scopeId,
          scoped: style.scoped
        })
        // less
        writeFileSync(stylePath, clearEmptyLine(code), 'utf-8')
        emitStyleEntry(stylePath, modules)
        // less -> css
        if (style.lang === 'less') {
          compileLess(stylePath).then(() => emitStyleEntry(replaceExt(stylePath, '.css'), modules))
        }
      })
    }

    await remove(path)
  }
}
