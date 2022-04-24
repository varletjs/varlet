# 步骤条

### 介绍

引导用户按照流程完成任务的导航条。

### 基本使用

通过 `active` 属性控制当前步骤条的进度，值为当前 `step` 的索引，从 `0` 起计。

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)

const next = () => {
  active.value = (active.value + 1) % 4
}
</script>

<template>
  <var-steps :active="active">
    <var-step>步骤1</var-step>
    <var-step>步骤2</var-step>
    <var-step>步骤3</var-step>
    <var-step>步骤4</var-step>
  </var-steps>
  <var-button type="primary" block @click="next">下一步</var-button>
</template>
```

### 自定义样式

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-steps
    :active="active"
    active-color="#f44336"
    inactive-color="#e99eb4"
  >
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">
      步骤1
    </var-step>
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">
      步骤2
    </var-step>
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">
      步骤3
    </var-step>
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">
      步骤4
    </var-step>
  </var-steps>
</template>
```

### 垂直模式

通过 `direction` 属性改变步骤条的显示方向。

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-steps direction="vertical" :active="active">
    <var-step>步骤1</var-step>
    <var-step>步骤2</var-step>
    <var-step>步骤3</var-step>
    <var-step>步骤4</var-step>
  </var-steps>
</template>
```

## API

### 属性

#### Steps Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `active` | 当前步骤 | _string \| number_ | `0` |
| `direction` | 显示方向，可选值为 `vertical` | _string_ | `horizontal` |
| `active-color` | 激活状态颜色 | _string_ | `#2979ff` |
| `inactive-color` | 未激活状态颜色 | _string_ | `#9e9e9e` |

#### Step Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `active-icon` | 激活状态图标  | _string_ | `check` |
| `current-icon` | 当前步骤时的图标 | _string_ | `-` |
| `inactive-icon` | 未激活状态图标 | _string_ | `-` |

### 事件

#### Steps Events

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `click-step` | 点击步骤的标题或图标时触发| `index: number` |

### 插槽

#### Step Slots

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | step 的内容 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--step-tag-size` | `20px` |
| `--step-tag-background` | `#9e9e9e` |
| `--step-tag-font-size` | `var(--font-size-md)` |
| `--step-tag-color` | `#fff` |
| `--step-tag-active-color` | `var(--color-primary)` |
| `--step-tag-margin` | `4px 0` |
| `--step-tag-icon-size` | `var(--font-size-lg)` |
| `--step-content-font-size` | `var(--font-size-md)` |
| `--step-content-color` | `rgba(0, 0, 0, 0.38)` |
| `--step-content-active-color` | `#000` |
| `--step-line-background` | `#000` |
| `--step-vertical-min-height` | `30px` |
| `--step-vertical-tag-margin` | `0 4px` |
| `--step-vertical-line-height` | `calc(100% - 30px)` |
| `--step-vertical-line-min-height` | `20px` |
