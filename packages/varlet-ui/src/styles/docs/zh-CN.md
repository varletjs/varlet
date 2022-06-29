# 海拔效果

### 介绍
组件库提供了基于 `Material` 规范的阴影海拔效果，用来表现元素的立体感。

### 引入样式

```js
// playground-ignore
// css
import '@varlet/ui/es/styles/elevation.css'
// less
import '@varlet/ui/es/styles/elevation.less'
```

### 基本使用
阴影程度划分为 `0-24` 个等级，等级越高海拔越高。

```html
<template>
  <var-space class="elevation-example-list" :size="[16, 16]">
    <div
      class="elevation-example-item"
      :class="`var-elevation--${e - 1}`"
      v-for="e in 25"
      :key="e"
    >
      {{ e - 1 }}
    </div>
  </var-space>
</template>

<style>
.elevation-example-list {
  margin-top: 8px !important;
}

.elevation-example-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 25vw;
}
</style>
```
