import hash from 'hash-sum'
import { readFile, remove, writeFileSync } from 'fs-extra'
import { parse, compileTemplate, compileStyle } from '@vue/compiler-sfc'
import { replaceExt, smartAppendFileSync } from '../shared/fsUtils'
import { compileScript } from './compileScript'
import { clearEmptyLine, compileLess } from './compileStyle'
import { resolve, parse as parsePath } from 'path'
import type { SFCStyleBlock } from '@vue/compiler-sfc'

const NORMAL_EXPORT_START_RE = /export\s+default\s+{/
const DEFINE_EXPORT_START_RE = /export\s+default\s+defineComponent\s*\(\s*{/
const STYLE_IMPORT_RE = /@import\s+['"](.+)['"]\s*;/g

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

export function normalizeStyleBlockDependency(styleImport: string) {
  let relativePath = styleImport.replace(STYLE_IMPORT_RE, '$1')
  relativePath = relativePath.replace(/(.less)|(\.css)/, '')

  if (relativePath.startsWith('./')) {
    return '.' + relativePath
  }

  return '../' + relativePath
}

export function extractStyleBlockDependencies(file: string, code: string) {
  const { ext, dir, base } = parsePath(file)
  const styleImports = code.match(STYLE_IMPORT_RE) ?? []
  const cssFile = resolve(dir, './style/index.js')
  const lessFile = resolve(dir, './style/less.js')

  styleImports.forEach((styleImport: string) => {
    const normalizedPath = normalizeStyleBlockDependency(styleImport)
    smartAppendFileSync(cssFile, `import '${normalizedPath}.css'\n`)
    if (ext === '.less') {
      smartAppendFileSync(lessFile, `import '${normalizedPath}.less'\n`)
    }
  })

  smartAppendFileSync(cssFile, `import '${normalizeStyleBlockDependency(base)}.css'\n`)
  ext === '.less' && smartAppendFileSync(lessFile, `import '${normalizeStyleBlockDependency(base)}.less'\n`)

  return code.replace(STYLE_IMPORT_RE, '')
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
      const file = replaceExt(sfc, `Sfc${index === 0 ? '' : index}.${style.lang}`)
      let { code } = compileStyle({
        source: style.content,
        filename: file,
        id: scopeId,
        scoped: style.scoped,
      })
      code = extractStyleBlockDependencies(file, code)
      writeFileSync(file, clearEmptyLine(code), 'utf-8')
      style.lang === 'less' && (await compileLess(file))
    }

    await remove(sfc)
  }
}
