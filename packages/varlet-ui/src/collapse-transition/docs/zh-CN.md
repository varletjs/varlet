# 折叠动效

### 介绍

折叠和展开的过渡动画。

### 基本使用

通过布尔值 `expand` 控制内容的折叠和展开。

```html
<script setup>
import { ref } from 'vue'

const expand = ref(true)
</script>

<template>
  <var-switch v-model="expand" />
  <var-divider />
  <var-collapse-transition :expand="expand">
    不要温和地走进那良夜，老年应当在日暮时燃烧咆哮；怒斥，怒斥光明的消逝。虽然智慧的人临终时懂得黑暗有理，因为他们的话没有迸发出闪电，他们 也并不温和地走进那个良夜。善良的人，当最后一浪过去，高呼他们脆弱的善行 可能曾会多么光辉地在绿色的海湾里舞蹈，怒斥，怒斥光明的消逝。
  </var-collapse-transition>
</template>
```

## API

### 属性

| 参数       | 说明                     | 类型        | 默认值    |
| ---------- | ------------------------ | ----------- | --------- |
| `expand` | 折叠或展开内容 | _boolean_ | `false` |

### 插槽

| 名称        | 说明       | 参数 |
| ----------- | ---------- | ---- |
| `default` | 折叠或展开的内容 | `-` |
