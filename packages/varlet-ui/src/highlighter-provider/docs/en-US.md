# Highlighter Provider

## API

### Props

| Prop             | Description                                                  | Type           | Default       |
|------------------|--------------------------------------------------------------|----------------|------------------|
| `highlighter`    | Shader                                                       | `Highlighter`  | `-`              |
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
