import hash from 'hash-sum'
import { readFile, remove, writeFileSync } from 'fs-extra'
import { parse, compileTemplate, compileStyle, SFCStyleBlock } from '@vue/compiler-sfc'
import { appendContent, replaceExt } from '../shared/fsUtils'
import { compileScript } from './compileScript'
import { clearEmptyLine, compileLess } from './compileStyle'
import { resolve, parse as parsePath } from 'path'

const NORMAL_EXPORT_START_RE = /export\s+default\s+{/
const DEFINE_EXPORT_START_RE = /export\s+default\s+defineComponent\s*\(\s*{/
const LESS_IMPORT_RE = /@import\s+['"](.+)['"]\s*;/g

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

export function normalizeStyleDependency(styleImport: string) {
  let relativePath = styleImport.replace(LESS_IMPORT_RE, '$1')
  relativePath = relativePath.replace(/(.less)|(\.css)/, '')

  if (relativePath.startsWith('./')) {
    return '../' + relativePath.slice(2)
  }

  return '../' + relativePath
}

export function extractStyleDependencies(file: string, code: string) {
  const { ext, dir, base } = parsePath(file)
  const styleImports = code.match(LESS_IMPORT_RE) ?? []
  const cssFile = resolve(dir, './style/index.js')
  const lessFile = resolve(dir, './style/less.js')

  styleImports.forEach((styleImport: string) => {
    const normalizedPath = normalizeStyleDependency(styleImport)
    appendContent(cssFile, `import '${normalizedPath}.css'\n`)
    ext === '.less' && appendContent(lessFile, `import '${normalizedPath}.less'\n`)
  })

  appendContent(cssFile, `import '${normalizeStyleDependency(base)}.css'\n`)
  ext === '.less' && appendContent(lessFile, `import '${normalizeStyleDependency(base)}.less'\n`)

  return code.replace(LESS_IMPORT_RE, '')
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
      code = extractStyleDependencies(file, code)
      writeFileSync(file, clearEmptyLine(code), 'utf-8')
      style.lang === 'less' && (await compileLess(file))
    }

    await remove(sfc)
  }
}
