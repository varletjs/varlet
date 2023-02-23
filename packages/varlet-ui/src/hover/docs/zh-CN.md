# 悬停指令

### 介绍

指针悬停在绑定元素上时进行样式绑定，也可以通过函数获得当前悬停的状态，支持在桌面端或移动端中选择性启用。

### 样式绑定

指针悬停在绑定元素上时进行样式绑定, 离开元素时取消样式绑定。

```html
<template>
  <var-paper
    class="paper"
    ripple
    :elevation="2"
    :width="100"
    :height="100"
    v-hover="{ color: '#fff', background: ' var(--color-primary)' }"
  >
    HOVER
  </var-paper>
</template>

<style>
.paper {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
```

### 函数绑定

指针悬停和离开时会触发函数，并携带当前的悬停状态。

```html
<script setup>
const translateY = ref('100%')

function handleHover(hovering) {
  translateY.value = hovering ? '0' : '100%'
}
</script>

<template>
  <div class="image-container" v-hover="handleHover">
    <var-image src="https://varlet.gitee.io/varlet-ui/tree.jpeg" />
    <div class="image-mask" :style="{ transform: `translateY(${translateY})` }">HOVER</div>
  </div>
</template>

<style>
.image-container {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
}

.image-mask {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  color: #fff;
  background-color: var(--color-primary);
  font-size: 50px;
}
</style>
```

### 针对不同设备选择性启用

考虑到在不同平台的 `hover` 效果的差异性，悬停指令可以只启用于特定的平台。

#### 只在桌面端启用

```html
// playground-ignore
<var-paper v-hover:desktop="{ color: '#fff' }"">HOVER</var-paper>
```

#### 只在移动端启用

```html
// playground-ignore
<var-paper v-hover:mobile="{ color: '#fff' }"">HOVER</var-paper>
```
