# 轮播

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
<script setup>
import { ref } from 'vue' 

const swipeRef = ref(null)
</script>

<template>
  <var-swipe ref="swipeRef" class="swipe-example">
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>
    <template #indicator="{ index, length }">
      <div class="swipe-example-indicators-left" :class="index === 0 ? 'swipe-example-active-indicator' : 'swipe-example-inactive-indicator'" @click="index !== 0 && swipeRef.prev()"><var-icon name="chevron-left" /></div>
      <div class="swipe-example-indicators-right" :class="index === length - 1 ? 'swipe-example-active-indicator' : 'swipe-example-inactive-indicator'" @click="index !== length - 1 && swipeRef.next()"><var-icon name="chevron-right" /></div>
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

.swipe-example-indicators-left {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  text-align: center;
  padding: 4px 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
}

.swipe-example-indicators-right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  padding: 4px 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
}

.swipe-example-active-indicator {
  color: #5d5d5d;
}

.swipe-example-inactive-indicator {
  color: #e5e5e5;
}
</style> 
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `loop` | 是否开启循环轮播 | _boolean_ | `true` |
| `autoplay` | 自动播放间隔时间 (ms) | _string \| number_ | `-` |
| `duration` | 切换过度时间 | _string \| number_ | `300` |
| `initial-index` | 初始化显示的索引 | _string \| number_ | `0` |
| `indicator` | 是否显示指示器 | _boolean_ | `true` |
| `indicator-color` | 指示器颜色 | _string_ | `-` |
| `vertical` | 是否开启垂直轮播 | _boolean_ | `false` |
| `touchable` | 是否可以拖动 | _boolean_ | `true` |

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
| `indicator` | 指示器内容 | `index: number` 轮播索引 <br> `length: number` 轮播总数 |

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
