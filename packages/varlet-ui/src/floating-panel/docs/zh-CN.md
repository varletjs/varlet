# 浮动面板

### 介绍
浮动在页面底部的面板，常用于提供额外的功能或信息，用户可灵活上下滑动浏览内容。

### 基本使用
FloatingPanel 的默认高度为 `100px`，允许拖动来展开或者收缩面板，默认展开的最大高度为屏幕的 `60%`。

```html
<template>
  <var-floating-panel>
    <var-cell v-for="i in 26" :key="i" :title="String.fromCharCode(i + 64)" border /> 
  </var-floating-panel>
</template>
```

### 自定义锚点
可以通过 `anchors` 属性来设置 FloatingPanel 的锚点位置，并通过 `v-model:anchor` 来控制当前面板的所在锚点。

例如，使面板的高度在 100px、40% 屏幕高度和 80% 屏幕高度三个位置停靠：

```html
<script setup>
const anchors = ref([100, window.innerHeight * 0.4, window.innerHeight * 0.8])
const anchor = ref(100)
</script>

<template>
  <var-floating-panel v-model:anchor="anchor" :anchors="anchors">
    <div style="text-align: center; padding: 15px">
      <p>面板锚点高度为 {{ Math.floor(anchor) }} px</p>
    </div>
  </var-floating-panel>
</template>
```

### 仅头部拖拽
默认情况下，FloatingPanel 的头部区域和内容区域都可以被拖动。如果想禁用内容区域的拖拽，可设置 `content-draggable` 属性为 `false`。

```html
<template>
  <var-floating-panel :content-draggable="false">
    <var-cell v-for="i in 26" :key="i" :title="String.fromCharCode(i + 64)" border /> 
  </var-floating-panel>
</template>
```


## API

### 属性

| 参数              | 说明                                                             | 类型     | 默认值        |
|------------------|----------------------------------------------------------------- |----------|----------------|
| `v-model:anchor`    | 面板初始显示锚点，如果不传则为 `anchors` 属性的第一个值 | _number_ | `-`  |
| `anchors`           | 自定义锚点，单位为 `px` | _number[]_ | `[100, window.innerHeight * 0.6]`  |
| `content-draggable` | 是否允许拖拽面板内容       | _boolean_ | `true`  |
| `duration`          | 动画时长，单位为 `ms`          | _number \| string_ | `300`  |
| `elevation`         | 海拔高度，可选值为 `true`、`false` 和 `0-24` 的等级                                                            | _string \| number \| boolean_ | `true`            |
| `teleport`          | 弹出层挂载的位置              | _TeleportProps['to'] \| false_ | `body`  |
| `safe-area`         | 是否开启底部安全区适配        | _boolean_ | `false`  |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `anchor-change` | 移动到某个锚点后触发 | `height: number` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 自定义面板内容 |  `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--floating-panel-z-index` | `999` |
| `--floating-panel-border-top` | `none` |
| `--floating-panel-border-radius` | `0` |
| `--floating-panel-background` | `var(--color-surface-container-high)` |
| `--floating-panel-header-height` | `40px` |
| `--floating-panel-toolbar-width` | `20px` |
| `--floating-panel-toolbar-height` | `3px` |
| `--floating-panel-toolbar-border-radius` | `10px` |
| `--floating-panel-toolbar-background` | `#ddd` |
| `--floating-panel-transition-timing-function` | `cubic-bezier(0.18, 0.89, 0.32, 1.28)` |