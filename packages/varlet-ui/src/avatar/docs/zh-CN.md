# 头像

### 介绍

头像组件

### 头像尺寸

```html
<template>
  <var-space align="center">
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="small" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="large" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="78" />
  </var-space>
</template>
```

### 头像形状

```html
<template>
  <var-space>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" :round="false" />
  </var-space>
</template>
```

### 填充模式

```html
<template>
  <var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <span>cover</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="fill" />
      <span>fill</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="contain" />
      <span>contain</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="none" />
      <span>none</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="scale-down" />
      <span>scale-down</span>
    </var-space>
  </var-space>
</template>
```

### 文字自适应

```html
<script setup>
import { ref } from 'vue'

const text = ref('VARLET')
</script>

<template>
  <var-space direction="column">
    <var-space>
      <var-avatar>{{ text }}</var-avatar>
      <var-avatar :round="false">{{ text }}</var-avatar>
    </var-space>
    <var-input v-model="text" />
  </var-space>
</template>
```

### 背景颜色

```html
<template>
  <var-space>
    <var-avatar color="#4a79f5">
      <var-icon name="fire" />
    </var-avatar>
    <var-avatar :round="false" color="#eb5a3f">
      <var-icon name="fire" />
    </var-avatar>
  </var-space>
</template>
```

### 头像水平分组

```html
<template>
  <var-avatar-group>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat2.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat3.jpg" bordered />
    <var-avatar bordered>+2</var-avatar>
  </var-avatar-group>
</template>
```

### 头像垂直分组

```html
<template>
  <var-avatar-group vertical>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat2.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat3.jpg" bordered />
    <var-avatar bordered>+2</var-avatar>
  </var-avatar-group>
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
          'var-avatar': ['src']
        }
      }
    })
  ],
})
```

```html
<!-- playground-ignore -->
<template>
  <var-avatar src="../../assets/logo.png"/>
</template>
```

或者单独导入

```html
<!-- playground-ignore -->
<script setup>
import logo from '../../assets/logo.png'
</script>

<template>
  <var-avatar :src="logo"/>
</template>
```

#### Webpack

```html
<!-- playground-ignore -->
<template>
  <var-avatar :src="require('../../assets/logo.png')"/>
</template>
```


## API

### 属性

#### Avatar Props

| 参数                  | 说明                                        | 类型   | 默认值          |
|---------------------|-------------------------------------------|------|--------------|
| `round`       | 头像是否为圆形	| _boolean_ | `true` |
| `size`        | 头像的尺寸，可选值为 `mini small normal large` | _string \| number_ | `normal` |
| `color`       | 头像的背景颜色 | _string_      | `-` |
| `src`         | 头像的地址 | _string_ | `-` |
| `fit`         | 头像图片的填充模式，可选值 `fill contain cover none scale-down` | _string_ | `cover` |
| `bordered`    | 头像是否带边框	| _boolean_ | `false` |
| `border-color` | 头像边框颜色	| _string_ | `-` |
| `loading`     | 当开启懒加载时, 加载中显示的图片	| _string_ | `-` |
| `error`       | 当开启懒加载时, 加载失败显示的图片	| _string_ | `-` |
| `lazy`        | 是否开启懒加载	| _boolean_ | `false` |

#### AvatarGroup Props

| 参数                  | 说明                                        | 类型   | 默认值          |
|---------------------|-------------------------------------------|------|--------------|
| `offset`          | 头像组内的头像偏移量	| _number \| string_ | `-` |
| `vertical`        | 组内头像是否垂直排列 | _boolean_ | `false` |

### 事件

#### Avatar Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击头像时触发 | `event: Event` |
| `load`  | 头像图片成功加载时触发(懒加载模式下失败时会多次尝试加载头像图片，只会在成功加载时触发) | `event: Event` |
| `error` | 头像图片失败加载时触发(懒加载模式下失败时会多次尝试加载头像图片，只会在尝试次数结束时触发) | `event: Event` |

### 插槽

#### Avatar Slots

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | 头像内容 | `-` |

#### AvatarGroup Slots

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | 头像组内容 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

#### Avatar Variables

| 变量名 | 默认值 |
| --- | --- |
| `--avatar-text-color` |  `#f5f5f5`|
| `--avatar-border-radius` | `4px` |
| `--avatar-mini-size` | `28px`|
| `--avatar-small-size` |  `36px`|
| `--avatar-normal-size` |  `48px`|
| `--avatar-large-size` |  `64px`|
| `--avatar-border` |  `2px solid #fff`|
| `--avatar-background-color` | `#bebebe`|

#### AvatarGroup Variables

| 变量名 | 默认值 |
| --- | --- |
| `--avatar-group-offset` | `-10px` |