<script setup>
import { t, use } from './locale'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { codeToHtml } from 'shiki'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('javascript', javascript)

function createShikiHighlighter() {
  return {
    codeToHtml,
  }
}

function createHljsHighlighter() {
  const loadedThemes = new Set()

  return {
    codeToHtml: async (code, { lang, theme }) => {
      if (!loadedThemes.has(loadedThemes)) {
        const response = await fetch(
          `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/${theme}.min.css`
        )
        const cssText = await response.text()
        const modifiedCss = cssText.replace(/[^{.*?}]+(?=\{)|(?<=\})[^{}]+/g, (s) => `.${theme} ${s}`)
        const style = document.createElement('style')
        style.textContent = modifiedCss
        document.head.appendChild(style)
        loadedThemes.add(theme)
      }

      const highlightedCode = hljs.highlight(code, { language: lang }).value
      return `
        <div class="${theme}">
          <pre class="hljs"><code>${highlightedCode}</code></pre>
        </div>
      `
    },
  }
}

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('shiki') }}</app-type>
  <var-highlighter-provider :highlighter="createShikiHighlighter()" theme="nord">
    <var-code code="console.log('varlet')" language="javascript" />
    <var-code code="console.log('varlet')" language="javascript" theme="monokai" />
    <var-code code="console.log('varlet')" language="javascript" theme="one-dark-pro" />
  </var-highlighter-provider>

  <app-type>{{ t('hljs') }}</app-type>
  <var-highlighter-provider :highlighter="createHljsHighlighter()" theme="nord">
    <var-code code="console.log('varlet')" language="javascript" />
    <var-code code="console.log('varlet')" language="javascript" theme="monokai" />
    <var-code code="console.log('varlet')" language="javascript" theme="atom-one-dark" />
  </var-highlighter-provider>
</template>
