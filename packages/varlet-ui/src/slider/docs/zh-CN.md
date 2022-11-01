# 滑块

### 介绍

用于在给定范围内取值。

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const value = ref(3)
</script>

<template>
  <var-slider v-model="value" />
</template>
```

### 指定步长

通过 `step` 属性来设置步进增量。

```html
<script setup>
import { ref } from 'vue'

const value = ref(25)
</script>

<template>
  <var-slider v-model="value" step="10" />
</template>
```

### 双滑块

通过 `range` 属性开启双滑块模式，确保 `value` 的值是一个**数组**。

```html
<script setup>
import { ref } from 'vue'

const value = ref([24, 50])

const handleChange = (value) => {
  console.log(value)
}
</script>

<template>
  <var-slider v-model="value" range @change="handleChange" />
</template>
```

### 选择范围

```html
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-slider v-model="value" max="210" min="-50" label-visible="always" />
</template>
```

### 禁用

```html
<script setup>
import { ref } from 'vue'

const value = ref(40)
</script>

<template>
  <var-slider v-model="value" disabled />
</template>
```

### 只读

```html
<script setup>
import { ref } from 'vue'

const value = ref(40)
</script>

<template>
  <var-slider v-model="value" readonly />
</template>
```

### 不同大小

通过 `track-height` 和 `thumb-size` 控制slider的大小。

```html
<script setup>
import { ref } from 'vue'

const value = ref([7, 64])
</script>

<template>
  <var-slider v-model="value" track-height="4" thumb-size="8" range />
</template>
```

### 自定义样式

```html
<script setup>
import { ref } from 'vue'

const value = ref(20)
</script>

<template>
  <var-slider
    v-model="value"
    label-color="purple"
    active-color="#e0732c"
    track-color="#3a68b4"
    thumb-color="#e25241"
    label-text-color="#ededed"
  />
</template>
```

### 自定义按钮

使用插槽自定义按钮时，`label-visible`、`label-text-color`、`thumb-size` 等属性均无效。

```html
<script setup>
import { ref } from 'vue'

const value = ref([5, 38])
</script>

<template>
  <var-slider v-model="value" range active-color="#52af77">
    <template #button="{ currentValue }">
      <div class="slider-example__block">{{ currentValue }}</div>
    </template>
  </var-slider>
</template>

<style>
.slider-example__block {
  width: 24px;
  border: 1px solid #52af77;
  color: #52af77;
  height: 24px;
  margin: 0 -12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: #ebebeb 0 2px 2px;
  border-radius: 50%;
  font-size: 12px;
  background-color: #fff;
}
</style>
```

### 显示标签
通过 `label-visible` 属性控制标签的显示。

```html
<script setup>
import { ref } from 'vue'

const value = ref(20)
const value1 = ref(70)
const value2 = ref(50)
</script>

<template>
  <var-slider v-model="value" label-visible="never" />
  <var-slider v-model="value1" />
  <var-slider v-model="value2" label-visible="always" />
</template>
```

### 值的校验

通过 `rules` 属性对值进行校验。

<span style="font-size: 12px"> `rules` 是一个可以接受 `function`、`boolean` 和 `string` 的数组。 函数传递输入值作为参数，必须返回 `true` / `false` 或包含错误消息的 `string`，如果函数返回 (或数组包含的任何值) `false` 或 `string`，输入字段将输入错误状态。</span>

```html
<script setup>
import { ref } from 'vue'

const value = ref(20)
</script>

<template>
  <var-slider v-model="value" :rules="[(v) => v > 35 || 'error message']" />
</template>
```

## API

### 属性

| 参数                 | 说明                               | 类型 | 默认值               |
|--------------------|----------------------------------| ------ |-------------------|
| `v-model`          | 当前进度值                            | _number \| [number, number]_ | `0` |
| `step`             | 步长，取值必须大于 0                      | _string \| number_           | `1` |
| `range`            | 是否启用双滑块                          | _boolean_ | `false`           |
| `max`              | 最大值                              | _string \| number_ | `100`           |
| `min`              | 最小值                              | _string \| number_ | `0`           |
| `label-visible`    | 是否显示标签，可选值为 `always normal never` | _string_ | `normal`          |
| `label-text-color` | 标签文字颜色                           | _string_ | `#fff`            |
| `label-color`      | 标签颜色                             | _string_ | `-`               |
| `active-color`     | 已激活的轨道背景颜色                       | _string_ | `-`               |
| `track-color`      | 轨道背景颜色                           | _string_ | `-`               |
| `track-height`     | 轨道的高度                            | _string \| number_           | `2` |
| `thumb-size`       | 滑块的大小                            | _string \| number_           | `12` |
| `thumb-color`      | 滑块的背景颜色                          | _string_ | `-`               |
| `disabled`         | 是否禁用                             | _boolean_ | `false`           |
| `readonly`         | 是否只读                             | _boolean_ | `false`           |
| `rules`            | 校验规则                             | _array_ | `-`               |


### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------- | -------- |
| `change` | 	值改变时触发| value: 当前进度|
| `start` | 开始拖动时触发 | `-` |
| `end` | 结束拖动时触发 | value: 当前进度 |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `button` | 自定义滑动按钮 | `currentValue`: 当前进度 |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--slider-error-color` | `var(--color-danger)` |
| `--slider-track-background` | `#bdbdbd` |
| `--slider-track-fill-background` | `var(--color-primary)` |
| `--slider-thumb-block-background` | `var(--color-primary)` |
| `--slider-thumb-ripple-background` | `var(--color-primary)` |
| `--slider-thumb-label-background` | `var(--color-primary)` |
| `--slider-thumb-label-font-size` | `var(--font-size-sm)` |
