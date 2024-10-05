# Highlighter Provider

### Intro

Using the HighlighterProvider component, you can set different highlighters for different code blocks. It is recommended to use [Shiki](https://shiki.style/) as the highlighter, as it has built-in support for `codeToHtml` and offers more flexibility in switching languages and themes.

### Use Shiki

```html
<script>
  import { codeToHtml } from 'shiki'

  function createHighlighter() {
    return {
      codeToHtml,
    }
  }
</script>

<template>
  <var-highlighter-provider :highlighter="createHighlighter()" theme="nord">
    <var-code code="console.log('varlet')" language="javascript" />
    <var-code code="console.log('varlet')" language="javascript" theme='one-dark' />
    <var-code code="console.log('varlet')" language="javascript" theme='one-dark-pro' />
  </var-highlighter-provider>
</template>
```

### Use highlighter.js

```html
<script setup>
  import hljs from 'highlight.js'
  import javascript from 'highlight.js/lib/languages/javascript'

  hljs.registerLanguage('javascript', javascript)

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
</script>

<template>
  <var-highlighter-provider :highlighter="createHighlighter()"  theme="nord">
    <var-code code="console.log('varlet')" language="javascript" />
    <var-code code="console.log('varlet')" language="javascript" theme="monokai" />
    <var-code code="console.log('varlet')" language="javascript" theme="atom-one-dark" />
  </var-highlighter-provider>
</template>
```

## API

### Props

| Prop             | Description                                                  | Type           | Default       |
|------------------|--------------------------------------------------------------|----------------|------------------|
| `highlighter`    | Shader                                                       | `Highlighter`  | `null`              |
| `theme`          | Theme                                                        | _string_       | `-`              |
| `tag`            | Tag name                                                     | _string_       | `div`              |

### Highlighter

| Prop | Description | Type | Default |
| ------ | ------ | ------ | ------ |
| `codeToHtml` | Callback this function when the content, theme, or language changes, and specify the lang and theme options. It will return an HTML string. | `(code: string, options: CodeToHtmlOptions) => Promise<string>` | `-`

### CodeToHtmlOptions

| Prop | Description | Type | Default |
| ------ | ------ | ------ | ------ |
| `lang` | language | _string_ | `-` |
| `theme` | theme | _string_ | `-` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Component content | `-` |
