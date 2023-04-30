import markdownIt from 'markdown-it'
import hljs from 'highlight.js'
import { kebabCase } from '@varlet/shared'
import type { Plugin } from 'vite'

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

export interface MarkdownOptions {
  style?: string
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
  }
}
