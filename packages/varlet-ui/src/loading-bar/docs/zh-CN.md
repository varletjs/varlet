# 加载条

### 介绍

页面顶部显示加载进度。

### 基本使用

```html
<script setup>
import { ref } from 'vue'
import { LoadingBar } from '@varlet/ui'

const hasCustomStyle = ref(false)

function setStyle() {
  if (hasCustomStyle.value) {
    LoadingBar.resetDefaultOptions()
  } else {
    LoadingBar.setDefaultOptions({
      errorColor: '#ff8800',
      color: '#10afef',
      height: '5px',
    })
  }

  hasCustomStyle.value = !hasCustomStyle.value
}

// 移动端案例设置了偏移
// LoadingBar.mergeConfig({
//   top: '48px'
// })
</script>

<template>
  <var-space direction="column" size="large">
    <var-button type="primary" block @click="LoadingBar.start()">开始</var-button>
    <var-button type="primary" block @click="LoadingBar.finish()">结束</var-button>
    <var-button type="primary" block @click="LoadingBar.error()">错误</var-button>
    <var-button type="primary" block @click="setStyle">
      {{ hasCustomStyle ? '清除样式' : '设置样式' }}
    </var-button>
  </var-space>
</template>
```

## API

### 方法

| 方法名                 | 说明       | 参数 | 返回值     |
|---------------------|----------|--|---------|
| `LoadingBar.mergeConfig` | 设置默认的选项配置（已废弃，使用`setDefaultOptions`替换） | _options: Options_ | `-`  |
| `LoadingBar.start`  | 开始加载  | `-` | `-` |
| `LoadingBar.finish` | 结束加载  | `-` | `-` |
| `LoadingBar.error`  | 加载失败  | `-` | `-` |
| `LoadingBar.setDefaultOptions` | 设置默认的选项配置 | _options: Options_ | `-` |
| `LoadingBar.resetDefaultOptions` | 重置默认的选项配置 | _-_ | `-` |

### LoadingBar Options

| 参数           | 说明           | 类型        | 默认值    |
|--------------|--------------|-----------|--------|
| `color`      | 加载条颜色        | _string_  | `-`    |
| `errorColor` | 加载失败时的颜色     | _string_  | `-`    |
| `height`     | 加载条的高度       | _string\|number_ | `-` |
| `top`        | 加载条距离页面顶部的距离 | _string\|number_ | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值                    |
| --- |------------------------|
| `--loading-bar-color` | `var(--color-primary)` |
| `--loading-bar-error-color` | `var(--color-danger)`  |
| `--loading-bar-height` | `3px`                  |
