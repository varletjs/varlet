# 索引栏

### 介绍

用于跳转到页面指定位置。

### 基本使用

点击索引栏时，会自动跳转到对应的 `IndexAnchor` 锚点位置。

```html
<script setup>
import { ref, onMounted } from 'vue'

const list = ref([])

const change = (value) => {
  console.log(value)
}

onMounted(() => {
  for (let i = 0; i < 26; i++) {
    list.value.push(String.fromCharCode(65 + i))
  }
})
</script>

<template>
  <var-index-bar duration="300" @change="change">
    <div v-for="item in list" :key="item">
      <var-index-anchor :index="item" class="var-index-anchor__example">
        标题 {{ item }}
      </var-index-anchor>
      <var-cell>{{ item }} 文本</var-cell>
      <var-cell>{{ item }} 文本</var-cell>
      <var-cell>{{ item }} 文本</var-cell>
    </div>
  </var-index-bar>
</template>

<style>
.var-index-anchor__example {
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  transition: all 0.25s;
  background: #e7edf7;
  color: #2e67ba;
}
</style>
```

## API

### 属性

#### IndexBar Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | --------- |
| `sticky` | 是否开启锚点吸顶 | _boolean_ | `true` |
| `sticky-offset-top` | 锚点吸顶时与顶部的距离 | _number \| string_ | `0` |
| `hide-list` | 是否隐藏锚点列表 | _boolean_ | `false` |
| `css-mode` | 开启原生 `css sticky` 模式 | _boolean_ | `false` |
| `z-index` | z-index 层级 | _number \| string_ | `1` |
| `highlight-color` | 索引字符高亮颜色 | _string_ | `#ee0a24` |
| `duration` | 动画持续时间 | _string \| number_ | `0` |

#### IndexAnchor Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `index` | 索引字符 | _number \| string_ |`-` |

### 事件

#### IndexBar Events

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `click` | 点击索引栏的字符时触发 | `index: number \| string` |
| `change` | 当前高亮的索引字符变化时触发| `index: number \| string` |

### 插槽

#### IndexAnchor Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 自定义索引字符 |`-` |

### 方法
通过 ref 可以获取到 IndexBar 实例并调用实例方法

| 方法名 | 说明 | 参数 |
| ---- | ------- | -------- |
| `scrollTo` | 滚动到指定锚点	 | `index: number \| string` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--index-bar-list-item-font-size` | `var(--font-size-xs)` |
| `--index-bar-list-item-color` | `var(--color-primary)` |
| `--index-bar-list-item-active-color` | `var(--color-danger)` |
| `--index-bar-list-item-height` | `14px` |
| `--index-bar-list-item-padding` | `0 10px` |
