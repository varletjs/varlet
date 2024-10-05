# Code

### Intro

Code component, used to display code blocks and highlight code syntax.

### Notes

Due to package size considerations, Varlet does not include a built-in code highlighter. If you need to use the code block component, please ensure you use the [HighlighterProvider component](#/en-US/highlighter-provider) to customize the highlighter.

### Toggle Language

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
### Toggle Theme

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

### Props

| Prop              | Description                                                | Type            | Default            |
|------------------|--------------------------------------------------------------|----------------|------------------|
| `code`           | Code Snippet                                                 | _string_       | `-`              |
| `language`       | Language                                                    | _string_       | `-`              |
| `theme`          | Theme                                                        | _string_       | `-`              |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--code-margin` | `16px 0` |
| `--code-border-radius` | `4px` |
| `--code-content-padding` | `16px` |
