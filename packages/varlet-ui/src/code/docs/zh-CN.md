# 代码块

### 介绍

代码块组件，用于显示代码块并突出显示代码语法。

### 基本使用

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

### 属性

| 参数               | 说明                                                        | 类型            | 默认值            |
|------------------|--------------------------------------------------------------|----------------|------------------|
| `content`        | 代码片段                                                      | _string_       | `-`              |
| `lang`           | 语言                                                         | `CodeLanguage` | `javascript`     |
| `theme`          | 主题                                                         | `CodeTheme`    | `material-theme` |

### CodeTheme

查看所有支持的[主题](https://shiki.style/themes)

### CodeLanguage

查看所有支持的[语言](https://shiki.style/languages)

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

#### Button Variables

| 变量名 | 默认值 |
| --- | --- |
| `--code-margin` | `16px 0` |
| `--code-border-radius` | `4px` |
| `--code-content-padding` | `16px` |
