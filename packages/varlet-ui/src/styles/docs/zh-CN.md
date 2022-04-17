# 海拔效果

### 介绍
组件库提供了基于 `Material` 规范的阴影海拔效果，用来表现元素的立体感。

### 基本使用
阴影程度划分为 `0-24` 个等级，等级越高海拔越高。

```html
<template>
  <var-space class="elevation-demo">
    <div class="elevation-demo__item" :class="`var-elevation--${e}`" :style="{ background }" v-for="e in 24" :key="e">
      {{ e }}
    </div>
  </var-space>
</template>

<style>
.elevation-demo .elevation-demo__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 25vw;
  color: var(--site-config-color-sub-text);
  transition: 0.25s background-color;
}
</style>
```
