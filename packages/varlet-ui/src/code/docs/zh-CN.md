# 代码块

### 介绍

代码块组件，用于显示代码块并突出显示代码语法。

### 注意事项

- 由于包体积原因，varlet 不内置代码着色器，如果你需要使用代码块组件，请确保使用 HighlighterProvider 组件进行着色器定制。
- 通过 HighlighterProvider 组件可以为不同的代码块设置不同的着色器。推荐使用 [Shiki](https://shiki.tmrs.site/) 作为着色器，因为它本身就实现了 `codeToHtml`，并且在语言和主题切换上也更加灵活。

### 基本使用

```html
<script setup>
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
    <var-code code="console.log('varlet')" language="javascript" theme='monokai' />
    <var-code code="console.log('varlet')" language="javascript" theme='one-dark-pro' />
  </var-highlighter-provider>
</template>
```

## API

### 属性

#### Code Props

| 参数              | 说明                                                         | 类型            | 默认值            |
|------------------|-------------------------------------------------------------|-----------------|------------------|
| `code`           | 代码片段                                                      | _string_       | `-`              |
| `language`       | 语言                                                         | _string_       | `-`              |
| `theme`          | 主题                                                         | _string_       | `-`              |

#### HighlighterProvider Props

| 参数              | 说明                                                        | 类型            | 默认值            |
|------------------|--------------------------------------------------------------|----------------|------------------|
| `highlighter`    | 着色器                                                       | `Highlighter`   | `-`              |
| `theme`          | 主题                                                         | _string_       | `-`              |
| `tag`            | 自定义标签名                                                  | _string_       | `div`              |

#### Highlighter

| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| `codeToHtml` | 当内容、主题、语言发生改变时回调该函数，并指定 lang 和 theme 选项，它将返回一个 HTML 字符串 | `(code: string, options: CodeToHtmlOptions) => Promise<string>` | `-`

#### CodeToHtmlOptions

| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| `lang` | 语言 | _string_ | `-` |
| `theme` | 主题 | _string_ | `-` |

### 插槽

#### HighlighterProvider Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 组件内容 | `-` |


### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--code-border-radius` | `4px` |
| `--code-content-padding` | `16px` |
