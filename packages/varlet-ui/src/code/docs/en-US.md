# Code

### Intro

Code component, used to display code blocks and highlight code syntax.

### Basic Usage

```html
<script setup>
  const code = `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const theOther = target - num;
        if (map.has(theOther)) {
            return [map.get(theOther), i];
        }
        map.set(num, i);
    }
  };`
</script>

<template>
  <var-code :content="code" theme="material-theme" lang="javascript" />
</template>
```

## API

### Props

| Prop             | Description                                                     | Type           | Default          |
|------------------|-----------------------------------------------------------------|----------------|------------------|
| `content`        | Code snippet                                                    | _string_       | `-`              |
| `lang`           | language                                                        | `CodeLanguage` | `javascript`     |
| `theme`          | Theme                                                           | `CodeTheme`    | `material-theme` |

### CodeTheme

View all supported [themes](https://shiki.style/themes)

### CodeLanguage

View all supported [languages](https://shiki.style/languages)

### Style Variables
Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable                            | Default               |
|-------------------------------------|-----------------------|
| `--code-margin`                     | `16px 0`              |
| `--code-border-radius`              | `4px`                 |
| `--code-content-padding`            | `16px`                |
