# 骨架屏

### 介绍
显示一些带过渡效果的占位元素，优化加载过程。

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const loading = ref(true)
</script>

<template>
  <var-skeleton :loading="loading">加载的数据</var-skeleton>
</template>
```

### 显示标题

```html
<script setup>
import { ref } from 'vue'
  
const loading = ref(true)
</script>

<template>
  <var-skeleton title :loading="loading">加载的数据</var-skeleton>
</template>
```

### 自定义段落高度

```html
<script setup>
import { ref } from 'vue'

const loading = ref(true)
</script>

<template>
  <var-skeleton
    title
    :rows="3"
    :loading="loading"
    :rows-width="['200px', '100px', '50px']"
  >
    加载的数据
  </var-skeleton>
</template>
```

### 显示头像

```html
<script setup>
import { ref } from 'vue'

const loading = ref(true)
</script>

<template>
  <var-skeleton
    title
    avatar
    :rows="3"
    :loading="loading"
  >
    加载的数据
  </var-skeleton>
</template>
```

### 显示卡片

```html
<script setup>
import { ref } from 'vue'

const loading = ref(true)
</script>

<template>
  <var-skeleton
    title
    avatar
    card
    :rows="3"
    :loading="loading"
  >
    加载的数据
  </var-skeleton>
</template>
```

### 全屏模式

```html
<script setup>
import { ref } from 'vue'

const loading = ref(false)

function fullscreen() {
  loading.value = true

  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <var-button type="danger" @click="fullscreen">切换全屏模式</var-button>
  <var-skeleton fullscreen :loading="loading" />
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `loading` | 加载状态，设置为 `true` 开启骨架屏 | _boolean_ | `true` |
| `title` | 是否显示标题 | _boolean_ | `false` |
| `card` | 是否显示卡片 | _boolean_ | `false` |
| `avatar` | 是否显示头像 | _boolean_ | `false` |
| `fullscreen` | 是否开启全屏模式 | _boolean_ | `false` |
| `fullscreen-z-index` | 全屏模式的层级 | _string \| number_ | `100` |
| `title-width` | 标题宽度 | _string \| number_ | `50%` |
| `card-height` | 卡片高度 | _string \| number_ | `160px` |
| `avatar-size` | 头像尺寸 | _string \| number_ | `34px` |
| `rows` | 段落行数 | _string \| number_ | `3` |
| `rows-width` | 段落每一行的宽度 | _number[] \| string[]_ | `['12px', '12px', '12px']` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- |--| --- |
| `default` | 非加载状态下的内容 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--skeleton-content-padding` | `16px` |
| `--skeleton-card-height` | `160px` |
| `--skeleton-card-border-radius` | `4px` |
| `--skeleton-card-margin-bottom` | `16px` |
| `--skeleton-card-background-color` | `rgba(0, 0, 0, 0.12)` |
| `--skeleton-animation-background` | `linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))` |
| `--skeleton-avatar-size` | `34px` |
| `--skeleton-avatar-border-radius` | `50%` |
| `--skeleton-avatar-margin-right` | `16px` |
| `--skeleton-avatar-background-color` | `rgba(0, 0, 0, 0.12)` |
| `--skeleton-title-width` | `50%` |
| `--skeleton-title-border-radius` | `10px` |
| `--skeleton-title-background-color` | `rgba(0, 0, 0, 0.12)` |
| `--skeleton-row-height` | `12px` |
| `--skeleton-row-border-radius` | `10px` |
| `--skeleton-row-margin-top` | `10px` |
