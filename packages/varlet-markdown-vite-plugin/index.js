const markdown = require('markdown-it')
const hljs = require('highlight.js')

function kebabCase(key) {
  const ret = key.replace(/([A-Z])/g, ' $1').trim()
  return ret.split(' ').join('-').toLowerCase()
}

function htmlWrapper(html) {
  const hGroup = html.replace(/<h3/g, ':::<h3').replace(/<h2/g, ':::<h2').split(':::')
  const cardGroup = hGroup
    .map((fragment) => (fragment.includes('<h3') ? `<div class="card">${fragment}</div>` : fragment))
    .join('')
  return cardGroup.replace(/<code>/g, '<code v-pre>')
}

function extractComponents(source) {
  const componentRE = /import (.+) from ['"].+['"]/
  const importRE = /import .+ from ['"].+['"]/g
  const vueRE = /```vue((.|\r|\n)*?)```/g
  const imports = []
  const components = []

  source = source.replace(vueRE, (_, p1) => {
    const partImports = p1.match(importRE)

    const partComponents = partImports?.map((importer) => {
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

function highlight(str, lang, style) {
  if (lang && hljs.getLanguage(lang)) {
    return (
      '<pre class="hljs"><code>' +
      '<link rel="stylesheet" href="' +
      style +
      '"/>' +
      hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
      '</code></pre>'
    )
  }

  return ''
}

function markdownToVue(source, options) {
  const style = options.style || '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/ir-black.min.css'
  const { source: vueSource, imports, components } = extractComponents(source)
  const md = markdown({
    html: true,
    typographer: true,
    highlight: (str, lang) => highlight(str, lang, style),
  })
  let templateString = htmlWrapper(md.render(vueSource))
  templateString = templateString.replace(/process.env/g, '<span>process.env</span>')

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

function VarletMarkdownVitePlugin(options) {
  return {
    name: 'varlet-markdown-vite-plugin',
    enforce: 'pre',
    transform(source, id) {
      if (!/\.md$/.test(id)) {
        return
      }

      try {
        return markdownToVue(source, options)
      } catch (e) {
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

module.exports = VarletMarkdownVitePlugin
