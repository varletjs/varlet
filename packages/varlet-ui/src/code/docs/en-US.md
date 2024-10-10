# Code

### Intro

Code Block component, used for code highlighted

### Notes

- Due to the size of the package, the component library does not have a built-in code highlighter. Please make sure to use the `HighlighterProvider` component to correctly set the highlighter
- The component library recommends using [Shiki](https://shiki.tmrs.site/) as the highlighter. For the [themes](https://shiki.tmrs.site/themes) and detailed configuration, please refer to the documentation

### Install Shiki

```shell
# npm
npm install shiki -S
# yarn
yarn add shiki
# pnpm
pnpm add shiki
```

### Basic Usage

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

### Word Wrap

Set `word-wrap` to support automatic line wrapping when code overflows.

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

### Trim

```html
<script setup>
import { codeToHtml } from 'shiki'
</script>

<template>
  <var-highlighter-provider :highlighter="{ codeToHtml }" theme="vitesse-light">
    <var-code code="   console.log('Hello Varlet UI');   " language="javascript" />
  </var-highlighter-provider>
</template>
```

## API

### Props

#### Code Props

| Prop | Description | Type | Default |
|------------------|-------------------------------------------------------------|-----------------|------------------|
| `code`           | Code Snippet                                                      | _string_       | `-`              |
| `language`       | Code Language                                                         | _string_       | `-`              |
| `theme`          | Code Theme                                                         | _string_       | `-`              |
| `word-wrap`          | Whether to support automatic line wrapping when code overflows                                                         | _boolean_       | `false`              |
| `trim`           | Whether to remove the blank characters at the beginning and end of the code    | _boolean_      | `true`           |

#### HighlighterProvider Props

| Prop | Description | Type | Default |
|------------------|--------------------------------------------------------------|----------------|------------------|
| `highlighter`    | Code Highlighter                                                       | `Highlighter`   | `-`              |
| `theme`          | Code Theme                                                         | _string_       | `-`              |
| `tag`            | Custom tag name                                                  | _string_       | `div`              |

#### Highlighter

| Prop | Description | Type | Default |
| ------ | ------ | ------ | ------ |
| `codeToHtml` | Highlighter function, component highlighter must implement this function | `(code: string, options: CodeToHtmlOptions) => Promise<string>` | `-`

#### CodeToHtmlOptions

| Prop | Description | Type | Default |
| ------ | ------ | ------ | ------ |
| `lang` | Code Language | _string_ | `-` |
| `theme` | Code Theme | _string_ | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--code-line-height` | `1.7` |
| `--code-font-size` | `14px` |
