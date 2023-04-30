# 图片

### 介绍

组件提供了更方便的尺寸，填充模式，圆角的设置方式，水波效果增强图片点击交互体验。
支持 `懒加载`、 `loading 图片`、 `error 图片`、应用 `Lazy` 指令的默认设置。

### 基本使用

```html
<template>
  <var-image src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
</template>
```

### 填充模式

```html
<template>
  <var-space :size="[20, 20]">
    <var-image 
      width="85px" 
      height="85px" 
      src="https://varlet.gitee.io/varlet-ui/cat.jpg" 
    />

    <var-image 
      width="85px" 
      height="85px"
      fit="cover" 
      src="https://varlet.gitee.io/varlet-ui/cat.jpg" 
    />

    <var-image 
      width="85px"
      height="85px" 
      fit="contain"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg" 
    />

    <var-image 
      width="85px"
      height="85px"
      fit="none"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    />

    <var-image 
      width="85px"
      height="85px" 
      fit="scale-down"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg" 
    />
  </var-space>
</template>
```

### 设置圆角

```html
<template>
  <var-space :size="[20, 20]">
    <var-image
      width="85px"
      height="85px"
      fit="cover"
      :radius="10"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    />

    <var-image
      width="85px"
      height="85px"
      fit="cover"
      radius="50%"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    />
  </var-space>
</template>
```

### 开启水波

```html
<template>
  <var-image 
    width="85px" 
    height="85px"
    ripple
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  />
</template>
```

### 开启懒加载

```html
<template>
  <var-image 
    width="85px"
    height="85px"  
    lazy 
    src="https://varlet.gitee.io/varlet-ui/cat.jpg" 
  />
</template>
```

### 设置懒加载状态图片

```html
<!-- playground-ignore -->
<template>
  <var-image 
    lazy
    width="85px" 
    height="85px"
    loading="https://xxx.xxx/loading.png"
    error="https://xxx.xxx/error.png"
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  />
</template>
```

### 使用本地路径

在 `.vue` 文件中，`Vue组件` 不会如同原生 img 一样被构建工具自动处理模块请求，所以需要手动导入图片资源。
下面是不同构建工具的使用方式。

#### Vite

推荐使用 [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue#asset-url-handling) 进行路径预处理。

```ts
// playground-ignore
// vite.config.js
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          'var-image': ['src']
        }
      }
    })
  ],
})
```

```html
<!-- playground-ignore -->
<template>
  <var-image src="../../assets/logo.png"/>
</template>
```

或者单独导入

```html
<!-- playground-ignore -->
<script setup>
import logo from '../../assets/logo.png'
</script>

<template>
  <var-image :src="logo"/>
</template>
```

#### Webpack

```html
<!-- playground-ignore -->
<template>
  <var-image :src="require('../../assets/logo.png')"/>
</template>
```

## API

### 属性

| 参数        | 说明                                              | 类型 | 默认值 |
|-----------|-------------------------------------------------| --- | --- |
| `src`     | 图片地址                                            | _string_ | `-` |
| `fit`     | 填充模式, 可选值为 `fill contain cover none scale-down` | _string_ | `fill` |
| `alt`     | 替代文本，和 `img` 标签原生属性一致                           | _string_ | `-` |
| `title`   | 图片描述性文字，和 `img` 标签原生属性一致             | _string_ | `-` |
| `width`   | 图片宽度                                            | _string \| number_ | `-` |
| `height`  | 图片高度                                            | _string \| number_ | `-` |
| `radius`  | 图片圆角                                            | _string \| number_ | `-` |
| `lazy`    | 是否开启懒加载                                         | _boolean_ | `false` |
| `loading` | 当开启懒加载时, 加载中显示的图片                               | _string_ | `-` |
| `error`   | 当开启懒加载时, 加载失败显示的图片                              | _string_ | `-` |
| `ripple`  | 是否开启水波                                          | _boolean_ | `false` |
| `block`   | 是否是块级元素                                         | _boolean_ | `true` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击图片时触发 | `event: Event` |
| `load` | 图片成功加载时触发(懒加载模式下失败时会多次尝试加载图片，只会在成功加载时触发) | `event: Event` |
| `error` | 图片失败加载时触发(懒加载模式下失败时会多次尝试加载图片，只会在尝试次数结束时触发) | `event: Event` |
