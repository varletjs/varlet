# Code

### Intro

Code component, used to display code blocks and highlight code syntax.

### Notes

- Due to package size considerations, Varlet does not include a built-in code highlighter. If you need to use the code block component, please ensure you use the HighlighterProvider component to customize the highlighter.
- Using the HighlighterProvider component, you can set different highlighters for different code blocks. It is recommended to use [Shiki](https://shiki.style/) as the highlighter, as it has built-in support for `codeToHtml` and offers more flexibility in switching languages and themes.

### Basic Usage

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
    <var-code code="console.log('varlet')" language="javascript" theme='one-dark' />
    <var-code code="console.log('varlet')" language="javascript" theme='one-dark-pro' />
  </var-highlighter-provider>
</template>
```

## API

### Props

#### Code Props

| Prop              | Description                                                | Type            | Default            |
|------------------|--------------------------------------------------------------|----------------|------------------|
| `code`           | Code Snippet                                                 | _string_       | `-`              |
| `language`       | Language                                                    | _string_       | `-`              |
| `theme`          | Theme                                                        | _string_       | `-`              |

#### HighlighterProvider Props

| Prop             | Description                                                  | Type           | Default       |
|------------------|--------------------------------------------------------------|----------------|------------------|
| `highlighter`    | Shader                                                       | `Highlighter`  | `-`              |
| `theme`          | Theme                                                        | _string_       | `-`              |
| `tag`            | Tag name                                                     | _string_       | `div`              |


#### Highlighter

| Prop | Description | Type | Default |
| ------ | ------ | ------ | ------ |
| `codeToHtml` | Callback this function when the content, theme, or language changes, and specify the lang and theme options. It will return an HTML string. | `(code: string, options: CodeToHtmlOptions) => Promise<string>` | `-`

#### CodeToHtmlOptions

| Prop | Description | Type | Default |
| ------ | ------ | ------ | ------ |
| `lang` | language | _string_ | `-` |
| `theme` | theme | _string_ | `-` |

### Slots

#### HighlighterProvider Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Component content | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--code-border-radius` | `4px` |
| `--code-content-padding` | `16px` |
