# 代码块

### 介绍

代码块组件，用于显示代码块并突出显示代码语法。

### 注意事项

由于包体积原因，varlet 不内置代码着色器，如果你需要使用代码块组件，请确保使用 [HighlighterProvider 组件](#/zh-CN/highlighter-provider) 进行着色器定制。

### 切换语言

```html
<script setup>
  import { ref } from 'vue'
  import { codeToHtml } from 'shiki'

  const jsCode = `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const theOther = target - nums[i];
        if (map.has(theOther)) {
            return [map.get(theOther), i];
        }
        map.set(nums[i], i);
    }
  };`
  const javaCode = `class Solution {
    public int[] twoSum(int[] nums, int target) {
      Map<Integer, Integer> map = new HashMap<>();
      for (int i = 0; i < nums.length; i++) {
        int theOther = target - nums[i];
        if (map.containsKey(theOther)) {
          return new int[] { map.get(theOther), i };
        }
        map.put(nums[i], i);
      }
      throw new IllegalArgumentException("No two sum solution");
    }
  }`

  const language = ref('javascript');

  function createHighlighter() {
    return {
      codeToHtml,
    }
  }
</script>

<template>
  <var-highlighter-provider :highlighter="createHighlighter()">
    <var-select :hint="false" v-model="language">
      <var-option label="javascript" value="javascript" />
      <var-option label="java" value="java" />
    </var-select>
    <var-code :code="language === 'javascript' ? jsCode : javaCode" language="javascript" theme="monokai" />
  </var-highlighter-provider>
</template>
```
### 切换主题

```html
<script setup>
  import { ref } from 'vue'
  import { codeToHtml } from 'shiki'

  const code = `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const theOther = target - nums[i];
        if (map.has(theOther)) {
            return [map.get(theOther), i];
        }
        map.set(nums[i], i);
    }
  };`
 
  const theme = ref('monokai');

  function createHighlighter() {
    return {
      codeToHtml,
    }
  }
</script>

<template>
  <var-highlighter-provider :highlighter="createHighlighter()">
    <var-select :hint="false" v-model="theme">
      <var-option label="monokai" value="monokai" />
      <var-option label="nord" value="nord" />
    </var-select>
    <var-code :code="code" language="javascript" :theme="theme" />
  </var-highlighter-provider>
</template>
```

## API

### 属性

| 参数              | 说明                                                        | 类型            | 默认值            |
|------------------|--------------------------------------------------------------|----------------|------------------|
| `code`           | 代码片段                                                      | _string_       | `-`              |
| `language`       | 语言                                                         | _string_       | `-`              |
| `theme`          | 主题                                                         | _string_       | `-`              |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--code-margin` | `16px 0` |
| `--code-border-radius` | `4px` |
| `--code-content-padding` | `16px` |
