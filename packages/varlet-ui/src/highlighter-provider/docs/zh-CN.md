# 着色器定制

### 介绍

通过 HighlighterProvider 组件可以为不同的代码块设置不同的着色器。推荐使用 [Shiki](https://shiki.tmrs.site/) 作为着色器，因为它本身就实现了 `codeToHtml`，并且在语言和主题切换上也更加灵活。

### 使用 Shiki

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

### 使用 highlighter.js

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

### 属性

| 参数              | 说明                                                        | 类型            | 默认值            |
|------------------|--------------------------------------------------------------|----------------|------------------|
| `highlighter`    | 着色器                                                       | `Highlighter`   | `null`              |
| `theme`          | 主题                                                         | _string_       | `-`              |
| `tag`            | 自定义标签名                                                  | _string_       | `div`              |

### Highlighter

| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| `codeToHtml` | 当内容、主题、语言发生改变时回调该函数，并指定 lang 和 theme 选项，它将返回一个 HTML 字符串 | `(code: string, options: CodeToHtmlOptions) => Promise<string>` | `-`

### CodeToHtmlOptions

| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| `lang` | 语言 | _string_ | `-` |
| `theme` | 主题 | _string_ | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 组件内容 | `-` |
