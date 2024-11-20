# 数字动画

### 介绍

用于展示起始数值到目标数值的数字动画。

### 基本使用

通过 `from` 和 `to` 属性可以指定起始数值和目标数值。

```html
<template>
  <var-count-to :from="0" :to="123456" />
</template>
```

### 自定义时长

通过 `duration` 属性可以指定动画时长（单位为毫秒）。

```html
<template>
  <var-count-to :from="0" :to="123456" :duration="100000" />
</template>
```

### 自定义样式

默认作用域插槽暴露了 `state` 和 `value` 两个属性，可以通过插槽自定义样式。

```html
<template>
  <var-count-to :from="0" :to="123456">
    <template #default="{ state, value }">
      <i>{{ state }}: {{ value.toLocaleString() }}</i>
    </template>
  </var-count-to>
</template>
```

### 自定义动画曲线

通过 `timing-function` 属性可以指定动画曲线。

```html
<template>
  <var-count-to :from="0" :to="123456" :timing-function="(t) => 1 - Math.pow(1 - t, 2)" />
</template>
```

### 手动控制

通过 ref 获取到组件实例后，可以调用 `start`、`pause`、`reset` 方法。

```html
<script setup>
  import { ref } from 'vue'

  const countToRef = ref()
</script>

<template>
  <var-count-to :from="0" :to="123456" ref="countToRef" :auto-start="false" />
  <var-row style="margin-top: 10px">
    <var-button-group>
      <var-button @click="countToRef.start()">{{ t('startText') }}</var-button>
      <var-button @click="countToRef.pause()">{{ t('pauseText') }}</var-button>
      <var-button @click="countToRef.reset()">{{ t('resetText') }} </var-button>
    </var-button-group>
  </var-row>
</template>
```

## API

### 属性

| 参数         | 说明                       | 类型               | 默认值  |
| ------------ | -------------------------- | ------------------ | ------- |
| `from`       | 起始值                     | _number \| string_ | `0`     |
| `to`         | 目标值                     | _number \| string_ | `0`     |
| `duration`   | 动画持续时间（单位：毫秒） | _number \| string_ | `30000` |
| `auto-start` | 是否自动开始播放动画       | _boolean_          | `true`  |

### 事件

| 事件名     | 说明           | 回调参数 |
| ---------- | -------------- | -------- |
| `finished` | 动画结束时触发 | `-`      |

### 插槽

| 插槽名    | 说明       | 参数                     |
| --------- | ---------- | ------------------------ |
| `default` | 自定义内容 | `numberData: NumberData` |

### NumberData 格式

| 名称    | 说明         | 类型                                               |
| ------- | ------------ | -------------------------------------------------- |
| `value` | 当前数值     | `number`                                           |
| `state` | 当前播放状态 | `'running' \| 'paused' \| 'pending' \| 'finished'` |

### 方法

通过 ref 可以获取到 CountDown 实例并调用实例方法.

| 方法名  | 说明                                                      | 参数 | 返回值 |
| ------- | --------------------------------------------------------- | ---- | ------ |
| `start` | 开始倒计时                                                | `-`  | `-`    |
| `pause` | 暂停倒计时                                                | `-`  | `-`    |
| `reset` | 重设动画，若 `auto-start` 为 `true`，重设后会自动开始播放 | `-`  | `-`    |
