import type { Plugin } from 'vite'

import Segment from 'segment'
import fse from 'fs-extra'
import MiniSearch from 'minisearch'
import markdownIt from 'markdown-it'

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
  cmp: string
  name: string
  id: string
}

let localeSections: {
  [locale: string]: MiniSearch<Section>
} = {}

interface Menu {
  text?: Record<'zh-CN' | 'en-US', string>
  doc?: string
  type?: number
}

export interface LocalSearchOptions {
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

function processContent(str: string): string {
  return unescape(str.replace(/<.*?>/g, ' ').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim())
}

function parsePageSectionsFromHtml(
  html: string,
  { cmp, name, locale }: { cmp?: string; name?: string; locale: 'zh-CN' | 'en-US' }
): Section[] {
  const list = html.split(/<h(\d).*?to="#(.*?)".*?link>(.*?)<\/h\1>/g)
  list.shift()
  const sections = list.reduce((acc: Section[], cur: string, i: number, arr: string[]) => {
    if (i % 4 !== 0) {
      return acc
    }

    const [level, anchor, title, content] = arr.slice(i, i + 4)
    const processedContent = processContent(content)

    if (title && processedContent) {
      const section: Section = {
        level,
        anchor,
        title,
        content:
          locale === 'zh-CN'
            ? segment
                .doSegment(title + ' ' + processedContent, {
                  simple: true,
                })
                .join(' ')
            : processedContent,
        cmp: cmp || '',
        name: name || '',
        id: (cmp || '') + i,
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

async function scanDocs(options: LocalSearchOptions) {
  localeSections = {}
  const docs = getDocsFromMenu(options.menu || [])

  const md = markdownIt({
    html: true,
  })

  docs.forEach((it) => {
    const mdContent = readFileSync(it.path).toString()
    const html = htmlWrapper(md.render(mdContent))
    const { locale = '' } = it
    if (!localeSections[locale]) {
      localeSections[locale] = new MiniSearch<Section>({
        fields: ['name', 'title', 'content'], // fields to index for full-text search
        storeFields: ['title', 'name', 'content', 'cmp', 'anchor'], // fields to return with search results
      })
    }
    localeSections[locale].addAllAsync(parsePageSectionsFromHtml(html, it))
  })
}

export function localSearch(options: LocalSearchOptions): Plugin {
  return {
    name: 'vite-plugin-varlet-markdown',

    enforce: 'pre',

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
