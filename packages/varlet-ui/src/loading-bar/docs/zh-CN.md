# 加载条

### 介绍

页面顶部显示加载进度。

### 基本使用

```html
<script setup>
import ref from 'vue'
import { LoadingBar, Snackbar } from '@varlet/ui'

const isClear = ref(false)

LoadingBar.mergeConfig({
  top: '48px'
})

const setStyle = () => {
  LoadingBar.mergeConfig({
    errorColor: isClear.value ? undefined : '#ff8800',
    color: isClear.value ? undefined : '#10afef',
    height: isClear.value ? undefined : '5px'
  })

  isClear.value = !isClear.value

  Snackbar.success('success')
}
</script>

<template>
  <var-button type="primary" block @click="LoadingBar.start()">开始</var-button>
  <var-button type="primary" block @click="LoadingBar.finish()">结束</var-button>
  <var-button type="primary" block @click="LoadingBar.error()">错误</var-button>
  <var-button type="primary" block @click="setStyle">
    {{ isClear ? '清除样式' : '设置样式' }}
  </var-button>
</template>

<style scoped lang="less">
  .var-button {
    margin-bottom: 11px;
  }
</style>
```

## API

### 方法

| 方法名                 | 说明       | 参数 | 返回值     |
|---------------------|----------|--|---------|
| `LoadingBar.mergeConfig` | 设置加载条的样式 | _options: Options_ | `-`  |
| `LoadingBar.start`  | 开始加载  | `-` | `-` |
| `LoadingBar.finish` | 结束加载  | `-` | `-` |
| `LoadingBar.error`  | 加载失败  | `-` | `-` |

### LoadingBar Options

| 参数           | 说明           | 类型        | 默认值    |
|--------------|--------------|-----------|--------|
| `color`      | 加载条颜色        | _string_  | `-`    |
| `errorColor` | 加载失败时的颜色     | _string_  | `-`    |
| `height`     | 加载条的高度       | _string\|number_ | `-` |
| `top`        | 加载条距离页面顶部的距离 | _string\|number_ | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值                    |
| --- |------------------------|
| `--loading-bar-color` | `var(--color-primary)` |
| `--loading-bar-error-color` | `var(--color-danger)`  |
| `--loading-bar-height` | `3px`                  |
