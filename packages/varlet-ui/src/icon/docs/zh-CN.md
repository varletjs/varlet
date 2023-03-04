# 图标

### 介绍

基于字体的图标库，也支持网络图片。
字体图标来自 [Material Design Icon](https://materialdesignicons.com/)

### 图标尺寸

```html
<template>
  <var-icon name="checkbox-marked-circle" />
  <var-icon name="checkbox-marked-circle" :size="26"/>
</template>
```

### 图标颜色

```html
<template>
  <var-icon name="checkbox-marked-circle" color="#2979ff" />
  <var-icon name="checkbox-marked-circle" color="#2979ff" :size="26"/>
</template>
```

### 使用图片

当传入的 `name` 是一个网络地址时,将会使用 `img` 标签以 `cover` 模式显示。`size` 为图片的宽高。

```html
<template>
  <var-icon name="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="32" />
</template>
```

### 注册事件

```html
<script setup>
import { Snackbar } from '@varlet/ui'
</script>

<template>
  <var-icon 
    name="checkbox-marked-circle"
    color="#2979ff"
    @click="() => Snackbar.success('点击成功')"
  />
</template>
```

### 图标切换动画

当设置了 `transition(ms)` 并通过图标的 `name` 切换图标时，可以触发切换动画。

```html
<script setup>
import { ref } from 'vue'

const name = ref('information')

function toggle() {
  name.value = name.value === 'information' 
    ? 'checkbox-marked-circle' 
    : 'information'
}
</script>

<template>
  <var-icon 
    color="#2979ff" 
    :name="name" 
    :transition="300" 
    :size="30" 
    @click="toggle"
  />
</template>
<var-icon
  color="#2979ff"
  animation-class="fade"
  :name="iconName"
  :transition="300"
  :size="30"
  @click="toggle"
/>

<style>
  .fade {
    opacity: 0;
    transition-property: opacity;
  }
</style>
```

### 自定义图标库

首先您需要设置您自己的字体，并引入到您的项目。
这里假设扩展一个名为 `my-icons` 的字体。

```css
/* playground-ignore */
/* 设置字体 */
@font-face {
  font-family: "my-icons";
  src: url("https://xxx.my-icons.ttf") format("truetype");
}

/* 设置命名空间 */
.my-icon {
  font-family: "my-icons";
}
/* 或 */
.my-icon--set {
  font-family: "my-icons";
}
/* 设置命名空间结束 */

/* 字体名称映射码点 */
.my-icon-hot::before {
  content: "\F000";
}
```

到这里你就成功的扩展了自己的图标库，`my-icon` 就是你的字体 `命名空间(namespace)`，您可以这样使用。

```html
<!-- playground-ignore -->
<template>
  <var-icon namespace="my-icon" name="hot" />
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 图标名称 | _string_ | `-` |
| `size` | 尺寸 | _string \| number_ | `-` |
| `color` | 图标颜色, 只适用于字体图标 | _string_ | `-` |
| `namespace` | 图标的命名空间, 可扩展自定义图标库 |  _string_ | `var-icon` |
| `animation-class` | 过渡动画类名 |  _string_ | `var-icon--shrinking` |
| `transition` | 过渡动画时间（ms） |  _string \| number_ | `0` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击图标时触发 | `event: Event` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--icon-size` | `20px` |
