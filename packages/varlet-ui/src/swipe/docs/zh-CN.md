# 轮播

### 介绍

显示可以在屏幕上滚动和滚动的项目集合。

### 基本使用

```html
<template>
  <var-swipe class="swipe-example">
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>

<style>
.swipe-example {
  height: 160px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### 禁止循环轮播

```html
<template>
  <var-swipe class="swipe-example" :loop="false">
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>

<style>
.swipe-example {
  height: 160px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### 开启自动播放

```html
<template>
  <var-swipe class="swipe-example" :autoplay="2000">
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>

<style>
.swipe-example {
  height: 160px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### 垂直轮播

```html
<template>
  <var-swipe class="swipe-example" vertical>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>

<style>
.swipe-example {
  height: 160px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### 导航

通过设置 `navigation` 可开启导航按钮, 当 `navigation` 为 `hover` 时，可在指针悬浮时对导航按钮进行显示。

```html
<template>
  <var-swipe class="swipe-example" navigation>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>
  </var-swipe>

  <var-swipe class="swipe-example" navigation="hover">
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>

<style>
.swipe-example {
  height: 160px;
  margin-top: 14px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### 监听切换

```html
<script setup>
import { Snackbar } from '@varlet/ui'
</script>

<template>
  <var-swipe class="swipe-example" @change="(index) => Snackbar(String(index))">
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>

<style>
.swipe-example {
  height: 160px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### 自定义指示器

```html
<template>
  <var-swipe class="swipe-example">
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>

    <template #indicator="{ index, length, to }">
      <div class="swipe-example-indicators">
        <div 
          class="swipe-example-indicator" 
          v-for="(l, idx) in length" 
          :key="l"
          :class="{'swipe-example-active-indicator': idx === index}" 
          @click="to(idx)"
        >
        </div>
      </div>
    </template>
  </var-swipe>
</template>

<style>
.swipe-example {
  height: 160px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.swipe-example-indicators {
  position: absolute;
  display: flex;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.swipe-example-indicator {
  width: 8px;
  height: 8px;
  background: #fff;
  opacity: 0.3;
  margin: 0 4px;
  transition: opacity 0.3s;
}

.swipe-example-active-indicator {
  opacity: 1;
}
</style> 
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `loop` | 是否开启循环轮播 | _boolean_ | `true` |
| `autoplay` | 自动播放间隔时间 (ms) | _string \| number_ | `-` |
| `duration` | 切换过渡时间 (ms) | _string \| number_ | `300` |
| `initial-index` | 初始化显示的索引 | _string \| number_ | `0` |
| `indicator` | 是否显示指示器 | _boolean_ | `true` |
| `indicator-color` | 指示器颜色 | _string_ | `-` |
| `vertical` | 是否开启垂直轮播 | _boolean_ | `false` |
| `touchable` | 是否可以拖动 | _boolean_ | `true` |
| `navigation` | 是否显示导航箭头 | _boolean \| string_ | `false` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `resize` | 产生位置大小变化时可以调用此方法进行重绘 | `-` | `-` |
| `prev` | 上一页 | `options?: SwipeToOptions` | `-` |
| `next` | 下一页 | `options?: SwipeToOptions` | `-` |
| `to` | 跳转到指定下标 | `index: number, options?: SwipeToOptions` | `-` |

#### SwipeToOptions

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `event` | 值为 `false` 时阻止触发 `change` 事件 | _boolean_ | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `change` | 切换轮播时触发 | `index: number` 轮播索引 |

### 插槽

#### Swipe Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 轮播内容 | `-` |
| `prev` | 上一页按钮 | `index: number` 轮播索引 <br> `length: number` 轮播总数 <br> `hovering: boolean` 指针是否悬浮 <br> `to`、`prev`、`next`: 类型和同名方法一致 |
| `next` | 下一页按钮 | `index: number` 轮播索引 <br> `length: number` 轮播总数 <br> `hovering: boolean` 指针是否悬浮 <br> `to`、`prev`、`next`: 类型和同名方法一致 |
| `indicator` | 指示器内容 | `index: number` 轮播索引 <br> `length: number` 轮播总数 <br> `hovering: boolean` 指针是否悬浮 <br> `to`、`prev`、`next`: 类型和同名方法一致 |

#### SwipeItem Slots

| 插槽名 | 说明    | 参数 |
| --- |-------| --- |
| `default` | 轮播项内容 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--swipe-indicator-color` | `#fff` |
| `--swipe-indicators-offset` | `10px` |
| `--swipe-indicator-offset` | `4px` |
| `--swipe-navigation-z-index` | `9` |
| `--swipe-navigation-button-width` | `36px` |
| `--swipe-navigation-button-height` | `36px` |
| `--swipe-navigation-button-border-radius` | `50%` |
| `--swipe-navigation-icon-size` | `20px` |
| `--swipe-navigation-prev-left` | `8px`  |  
| `--swipe-navigation-next-right` | `8px` |
| `--swipe-navigation-prev-top` | `8px` |
| `--swipe-navigation-next-bottom` | `8px` |
