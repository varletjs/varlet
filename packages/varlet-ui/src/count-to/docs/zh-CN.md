# 数字动画

### 介绍

展示起始数值到目标数值的数字动画。

### 基本使用

通过 `from` 和 `to` 属性指定起始数值和目标数值。

```html
<template>
  <var-count-to :to="123456" />
</template>
```

### 精度

通过 `precision` 控制数值精度

```html
<template>
  <var-count-to :to="123456" :precision="2" />
</template>
```

### 自定义时长

通过 `duration` 属性指定动画时长（单位为毫秒）。

```html
<template>
  <var-count-to :to="123456" :duration="100000" />
</template>
```

### 自定义样式

```html
<template>
  <var-count-to :to="123456">
    <template #default="{ value }">
      {{ value.toLocaleString() }}
    </template>
  </var-count-to>
</template>
```

### 自定义动画曲线

通过 `timing-function` 属性指定动画曲线。

```html
<template>
  <var-count-to :to="123456" :timing-function="(v) => 1 - Math.pow(1 - v, 3)" />
</template>
```

### 手动控制

调用 `start`、`pause`、`reset` 方法，手动控制动画的开始、暂停、重置。

```html
<script setup>
import { ref } from 'vue'
  
const countTo = ref()
</script>

<template>
  <var-count-to ref="countTo" :to="123456" :auto-start="false" />
  <var-button @click="countTo.start()">开始</var-button>
  <var-button @click="countTo.pause()">暂停</var-button>
  <var-button @click="countTo.reset()">重置</var-button>
</template>
```

## API

### 属性

| 参数         | 说明                       | 类型               | 默认值  |
| ------------ | -------------------------- | ------------------ | ------- |
| `from`       | 起始值                     | _number \| string_ | `0`     |
| `to`         | 目标值                     | _number \| string_ | `0`     |
| `duration`   | 动画持续时间（单位：毫秒） | _number \| string_ | `2000` |
| `precision`   | 精度 | _number \| string_ | `2` |
| `auto-start` | 是否自动开始播放动画       | _boolean_          | `true`  |
| `timing-function` | 动画曲线函数       | _(v: number) => number_          | `v => v`  |

### 事件

| 事件名     | 说明           | 回调参数 |
| ---------- | -------------- | -------- |
| `end` | 动画结束时触发 | `-`      |

### 插槽

| 插槽名    | 说明       | 参数                     |
| --------- | ---------- | ------------------------ |
| `default` | 自定义内容 | `value: number` |

### 方法

| 方法名  | 说明                                                      | 参数 | 返回值 |
| ------- | --------------------------------------------------------- | ---- | ------ |
| `start` | 开始动画                                                | `-`  | `-`    |
| `pause` | 暂停动画                                                | `-`  | `-`    |
| `reset` | 重置动画，若 `auto-start` 为 `true`，重置后会自动开始播放 | `-`  | `-`    |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                         | 默认值 |
|-----------------------------| --- |
| `--count-to-text-color`     | `var(--color-text)`  |
| `--count-to-text-font-size` | `var(--font-size-lg)` |
