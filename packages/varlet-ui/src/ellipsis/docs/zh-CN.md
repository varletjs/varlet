# 文本省略

### 介绍

主要用于省略单行文字和多行文字。

### 单行省略

```html
<template>
  <var-ellipsis style="max-width: 170px">
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  </var-ellipsis>
</template>
```

### 多行省略

```html
<template>
  <var-ellipsis style="max-width: 170px" :line-clamp="3">
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  </var-ellipsis>
</template>
```

### 双向绑定

```html
<script setup>
import { ref } from 'vue'

const expand = ref(false)
</script>

<template>
  <var-space direction="column" size="large">
    <var-button type="primary" @click="expand = !expand">切换</var-button>
    <var-ellipsis style="max-width: 170px" v-model:expand="expand">
      其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
    </var-ellipsis>
  </var-space>
</template>
```

### 点击文字展开

```html
<template>
  <var-ellipsis 
    style="max-width: 170px" 
    expand-trigger="click" 
    :line-clamp="3" 
    :tooltip="false"
  >
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  </var-ellipsis>
</template>
```

### 溢出检测

开启 `expandable-on-overflow` 后，内容被省略时可点击展开。开启 `tooltip-on-overflow` 后，Tooltip 仅在内容被省略时显示。

```html
<script setup>
import { ref } from 'vue'

const narrow = ref(true)
</script>

<template>
  <var-button type="primary" @click="narrow = !narrow">切换文本容器尺寸</var-button>

  <div style="margin-top: 12px; color: var(--color-on-surface-variant); font-size: 12px">单行省略</div>
  <var-ellipsis
    expand-trigger="click"
    expandable-on-overflow
    tooltip-on-overflow
    :style="{ maxWidth: narrow ? '170px' : '340px' }"
  >
    文本溢出时才可以点击展开。
  </var-ellipsis>

  <div style="margin-top: 12px; color: var(--color-on-surface-variant); font-size: 12px">多行省略</div>
  <var-ellipsis
    expand-trigger="click"
    expandable-on-overflow
    tooltip-on-overflow
    :line-clamp="2"
    :style="{ maxWidth: narrow ? '170px' : '340px' }"
  >
    只有文本被截断时才可以点击展开，展开后可以查看完整内容并再次收起。
  </var-ellipsis>
</template>
```

### 自定义 Tooltip

```html
<template>
  <var-ellipsis style="max-width: 170px" :tooltip="{ type: 'primary', sameWidth: false }">
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。

    <template #tooltip-content>
      <var-icon name="github" />
    </template>
  </var-ellipsis>
</template>
```

## API

### 属性

| 参数  | 说明   | 类型  | 默认值 |
|-------|------|----|----|
| `v-model:expand` | 是否展开 | _boolean_  | `false` |
| `expand-trigger` | 展开触发方式，可选值 `click` | _string_  | `-` |
| `expandable-on-overflow` ***3.20.7*** | 仅在文本被省略时允许展开 | _boolean_  | `false` |
| `line-clamp` | 最大显示行数，兼容性见 [line-clamp](https://caniuse.com/?search=line-clamp) | _string_  | `-` |
| `tooltip-on-overflow` ***3.20.7*** | 仅在文本被省略时显示 Tooltip | _boolean_ | `false` |
| `tooltip` | Tooltip 组件配置，用于深度定制。为了更方便使用，`sameWidth` 在这里默认为 `true` | _boolean \| TooltipProps_  | `true` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 文字内容 | `-` |
| `tooltip-content` | Tooltip 的内容 | `-` |
