# 代码块

### 介绍

代码块组件，用于代码着色

### 注意事项

- 由于包体积的原因，组件库不内置代码着色器，请使用 `HighlighterProvider` 组件正确设置着色器
- 组件库推荐使用 [Shiki](https://shiki.tmrs.site/) 作为着色器，[可用主题](https://shiki.tmrs.site/themes)及详细配置请参考其文档

### 安装 Shiki

```shell
# npm
npm install shiki -S
# yarn
yarn add shiki
# pnpm
pnpm add shiki
```

### 基本使用

```html
<script setup>
import { codeToHtml } from 'shiki'
</script>

<template>
  <var-highlighter-provider :highlighter="{ codeToHtml }" theme="vitesse-light">
    <var-space direction="column" size="large">
      <var-code code="console.log('Hello Varlet UI')" language="javascript" />
      <var-code code="print('Hello Varlet UI')" language="python" />
      <var-code code="console.log('Hello Varlet UI')" language="javascript" theme="github-light" />
    </var-space>
  </var-highlighter-provider>
</template>
```

### 自动换行

设置 `word-wrap` 支持在代码溢出时自动换行。

```html
<script setup>
import { codeToHtml } from 'shiki'
</script>

<template>
  <var-highlighter-provider :highlighter="{ codeToHtml }" theme="vitesse-light">
    <var-code code="console.log('Hello Varlet UI');console.log('Hello Varlet UI');" language="javascript" word-wrap />
  </var-highlighter-provider>
</template>
```


### 移除首尾空白字符

```html
<script setup>
import { codeToHtml } from 'shiki'
</script>

<template>
  <var-highlighter-provider :highlighter="{ codeToHtml }" theme="vitesse-light">
    <var-code code="   console.log('Hello Varlet UI');   " language="javascript" trim />
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
| `word-wrap`          |    是否开启在代码溢出时自动换行                                                    | _boolean_       | `false`              |
| `trim`           | 是否移除代码开头和结尾的空白字符                                        | _boolean_      | `true`           |

#### HighlighterProvider Props

| 参数              | 说明                                                        | 类型            | 默认值            |
|------------------|--------------------------------------------------------------|----------------|------------------|
| `highlighter`    | 着色器                                                       | `Highlighter`   | `-`              |
| `theme`          | 主题                                                         | _string_       | `-`              |
| `tag`            | 自定义标签名                                                  | _string_       | `div`              |

#### Highlighter

| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| `codeToHtml` | 着色函数，组件的着色器必须实现该函数 | `(code: string, options: CodeToHtmlOptions) => Promise<string>` | `-`

#### CodeToHtmlOptions

| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| `lang` | 语言 | _string_ | `-` |
| `theme` | 主题 | _string_ | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--code-line-height` | `1.7` |
| `--code-font-size` | `14px` |
