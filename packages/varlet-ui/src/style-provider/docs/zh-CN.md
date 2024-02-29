# 样式定制

### 介绍

通过 StyleProvider 组件可以很容易的挂载样式变量，组件提供了 `组件式调用` 和 `函数式调用` 两种调用方式。

### 组件式调用

组件式调用范围性的定制组件样式，需要注意是有些使用 `teleport` 传送到  `StyleProvider` 外的元素将不会生效。

```html
<script setup>
import { ref, reactive } from 'vue'

const state = reactive({
  score: 5,
  license: true,
})

const successTheme = {
  '--rate-primary-color': 'var(--color-success)',
  '--button-primary-color': 'var(--color-success)',
  '--switch-handle-active-background': 'var(--color-success)',
  '--switch-track-active-background': 'var(--color-success)',
}

const styleVars = ref(null)

function toggleTheme() {
  styleVars.value = styleVars.value ? null : successTheme
}
</script>

<template>
  <var-style-provider :style-vars="styleVars">
    <var-rate v-model="state.score" />
    <var-switch v-model="state.license" />
    <var-button
      style="margin-top: 10px"
      type="primary"
      block
      @click="toggleTheme"
    >
      切换样式变量
    </var-button>
  </var-style-provider>
</template>
```

### 函数式调用

函数式的调用直接更新 `:root` 上的变量，适合需要全局更新样式的情况。

```html
<script setup>
import { StyleProvider } from '@varlet/ui'

let rootStyleVars = null

const darkTheme = {
  '--color-primary': 'var(--color-info)'
}

function toggleRootTheme() {
  rootStyleVars = rootStyleVars ? null : darkTheme
  StyleProvider(rootStyleVars)
}
</script>

<template>
  <var-button type="primary" block @click="toggleRootTheme">切换根节点样式变量</var-button>
</template>
```

## API

### 属性

| 参数         | 说明   | 类型                     | 默认值 | 
|--------------|---------------|--------------------------|---------| 
| `style-vars` | CSS 变量 | _Record<string, string>_ | `{}`    |
| `tag`        | 自定义标签名      | _string_                 | `div`   |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 组件内容 | `-` |