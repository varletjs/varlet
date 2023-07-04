import markdownIt from 'markdown-it'
import hljs from 'highlight.js'
import { kebabCase } from '@varlet/shared'
import type { Plugin } from 'vite'

import { findComponentDocs, findRootDocs } from '@varlet/cli/lib/node/compiler/compileSiteEntry.js'
import Segment from 'segment'
import fse from 'fs-extra'
import MiniSearch from 'minisearch'

const { readFileSync } = fse

const segment = new Segment()
segment.useDefault()

const LOCAL_SEARCH_INDEX_ID = '@localSearchIndex'
const LOCAL_SEARCH_INDEX_REQUEST_PATH = '/' + LOCAL_SEARCH_INDEX_ID

type Section = {
  level: string
  anchor: string
  title: string
  content: string
  words: string
  cmp: string
  name: string
  id: string
}

let localeSections: {
  [locale: string]: MiniSearch<Section>
} = {}

function htmlWrapper(html: string) {
  const matches = html.matchAll(/<h3>(.*?)<\/h3>/g)
  const hGroup = html
    .replace(/<h3>/g, () => {
      const content = matches.next().value[1]

      return `:::<h3 id="${content}"><router-link to="#${content}">#</router-link>`
    })
    .replace(/<h2/g, ':::<h2')
    .split(':::')

  const cardGroup = hGroup
    .map((fragment) => (fragment.includes('<h3') ? `<div class="card">${fragment}</div>` : fragment))
    .join('')

  return cardGroup.replace(/<code>/g, '<code v-pre>')
}

function extractComponents(source: string) {
  const componentRE = /import (.+) from ['"].+['"]/
  const importRE = /import .+ from ['"].+['"]/g
  const vueRE = /```vue((.|\r|\n)*?)```/g
  const imports: string[] = []
  const components: string[] = []

  source = source.replace(vueRE, (_, p1) => {
    const partImports = p1.match(importRE)

    const partComponents = partImports?.map((importer: string) => {
      importer = importer.replace(/(\n|\r)/g, '')
      const component = importer.replace(componentRE, '$1')
      !imports.includes(importer) && imports.push(importer)
      !components.includes(component) && components.push(component)

      return `<${kebabCase(component)} />`
    })

    return partComponents ? `<div class="varlet-component-preview">${partComponents.join('\n')}</div>` : ''
  })

  return {
    imports,
    components,
    source,
  }
}

function injectCodeExample(source: string) {
  const codeRE = /(<pre class="hljs">(.|\r|\n)*?<\/pre>)/g

  return source.replace(codeRE, (str) => {
    const flags = [
      '// playground-ignore\n',
      '<span class="hljs-meta">#</span><span class="bash"> playground-ignore</span>\n',
      '<span class="hljs-comment">// playground-ignore</span>\n',
      '<span class="hljs-comment">/* playground-ignore */</span>\n',
      '<span class="hljs-comment">&lt;!-- playground-ignore --&gt;</span>\n',
    ]

    const attr = flags.some((flag) => str.includes(flag)) ? 'playground-ignore' : ''

    str = flags.reduce((str, flag) => str.replace(flag, ''), str)

    return `<var-site-code-example ${attr}>${str}</var-site-code-example>`
  })
}

function highlight(str: string, lang: string, style?: string) {
  let link = ''

  if (style) {
    link = '<link class="hljs-style" rel="stylesheet" href="' + style + '"/>'
  }

  if (lang && hljs.getLanguage(lang)) {
    return (
      '<pre class="hljs"><code>' +
      link +
      hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
      '</code></pre>'
    )
  }

  return ''
}

function markdownToVue(source: string, options: MarkdownOptions) {
  const { source: vueSource, imports, components } = extractComponents(source)
  const md = markdownIt({
    html: true,
    highlight: (str, lang) => highlight(str, lang, options.style),
  })
  let templateString = htmlWrapper(md.render(vueSource))
  templateString = templateString.replace(/process.env/g, '<span>process.env</span>')
  templateString = injectCodeExample(templateString)

  return `
<template><div class="varlet-site-doc">${templateString}</div></template>

<script>
${imports.join('\n')}

export default {
  components: {
    ${components.join(',')}
  }
}
</script>
  `
}

interface Menu {
  text?: Record<'zh-CN' | 'en-US', string>
  doc?: string
  type?: number
}

export interface MarkdownOptions {
  style?: string
  menu?: Menu[]
}

function unescape(s: string) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
}

function processString(str: string): string {
  return unescape(str.replace(/<.*?>/g, ' ').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim())
}

function parsePageSectionsFromVueCode(vueCode: string, cmp: string, name: string): Section[] {
  const template = String(vueCode).match(/<template>(.*?)<\/template>/s)?.[1] || ''

  const list = template.split(/<h(\d).*?to="#(.*?)".*?link>(.*?)<\/h\1>/g)
  list.shift()

  const sections = list.reduce((acc: Section[], cur: string, i: number, arr: string[]) => {
    if (i % 4 !== 0) {
      return acc
    }
    const [level, anchor, title, content] = arr.slice(i, i + 4)
    const processedContent = processString(content)
    if (title && processedContent) {
      const section: Section = {
        level,
        anchor,
        title,
        content: processedContent,
        words: segment
          .doSegment(title + ' ' + processedContent, {
            simple: true,
          })
          .join(' '),
        cmp,
        name,
        id: cmp + i,
      }
      acc.push(section)
    }
    return acc
  }, [])
  return sections
}
function getDocsFromMenu(menu: Menu[]) {
  const LANG: ('zh-CN' | 'en-US')[] = ['zh-CN', 'en-US']

  const docs = menu
    .filter((it) => [2, 3].includes(it.type || 0))
    .flatMap((it) =>
      LANG.map((lang) => ({
        locale: lang,
        name: it.text?.[lang],
        cmp: it.doc,
        path: it.type === 2 || it.doc === 'locale' ? `src/${it.doc}/docs/${lang}.md` : `docs/${it.doc}.${lang}.md`,
      }))
    )
  return docs
}

async function scanDocs(options: MarkdownOptions) {
  localeSections = {}
  const docs = getDocsFromMenu(options.menu || [])

  docs.forEach((it) => {
    const md = readFileSync(it.path).toString()
    const vueCode = markdownToVue(md, options)
    const { cmp = '', locale = '', name = '' } = it
    if (!localeSections[locale]) {
      localeSections[locale] = new MiniSearch<Section>({
        fields: ['name', 'cmp', 'title', 'content', 'words'], // fields to index for full-text search
        storeFields: ['title', 'anchor', 'name', 'content', 'words', 'cmp'], // fields to return with search results
      })
    }
    localeSections[locale].addAllAsync(parsePageSectionsFromVueCode(vueCode, cmp, name))
  })
}

export function markdown(options: MarkdownOptions): Plugin {
  return {
    name: 'vite-plugin-varlet-markdown',

    enforce: 'pre',

    transform(source, id) {
      if (!/\.md$/.test(id)) {
        return
      }

      try {
        return markdownToVue(source, options)
      } catch (e: any) {
        this.error(e)
        return ''
      }
    },

    async handleHotUpdate(ctx) {
      if (!/\.md$/.test(ctx.file)) return

      const readSource = ctx.read
      ctx.read = async function () {
        return markdownToVue(await readSource(), options)
      }
    },

    async configureServer() {
      await scanDocs(options)
    },

    resolveId(id) {
      if (id.startsWith(LOCAL_SEARCH_INDEX_ID)) {
        return `/${id}`
      }
    },

    async load(id) {
      if (id === LOCAL_SEARCH_INDEX_REQUEST_PATH) {
        if (process.env.NODE_ENV === 'production') {
          await scanDocs(options)
        }
        const records: string[] = []
        Object.keys(localeSections).forEach((locale) => {
          records.push(`${JSON.stringify(locale)}: () => import('@localSearchIndex${locale}')`)
        })
        return `export default {${records.join(',')}}`
      }
      if (id.startsWith(LOCAL_SEARCH_INDEX_REQUEST_PATH)) {
        return `export default ${JSON.stringify(
          JSON.stringify(localeSections[id.replace(LOCAL_SEARCH_INDEX_REQUEST_PATH, '')] ?? {})
        )}`
      }
    },
  }
}
