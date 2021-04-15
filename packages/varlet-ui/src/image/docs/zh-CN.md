# 图片

### 介绍

组件提供了更方便的尺寸，填充模式，圆角的设置方式，水波效果增强图片点击交互体验。
支持`懒加载`、`loading图片`、 `error图片`、应用`Lazy`指令的默认设置。

### 引入

```js
import { createApp } from 'vue'
import { Image } from '@varlet/ui'

createApp().use(Image)
```

### 基本使用

```html
<var-image src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
```

### 填充模式

```html
<var-image width="85px" height="85px" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />

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
```

### 设置圆角

```html
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
```

### 开启水波

```html
<var-image ripple src="https://varlet.gitee.io/varlet-ui/cat.jpg"/>
```

### 开启懒加载

```html
<var-image lazy src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
```

### 设置懒加载状态图片

```html
<var-image 
  lazy
  loading="https://xxx.xxx/loading.png"
  error="https://xxx.xxx/error.png"
  src="https://varlet.gitee.io/varlet-ui/cat.jpg"
/>
```

### 使用本地路径
在`.vue`文件中,`Vue组件`不会如同原生img一样被构建工具自动处理模块请求，所以需要手动导入图片资源。
下面是不同构建工具的使用方式。


#### Webpack

```html
<var-image :src="require('../../assets/logo.png')"/>
```

#### Vite
```html
<var-image :src="logo"/>
```

```js
import logo from '../../assets/logo.png'

export default {
  setup() {
    return { logo }
  }
}
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `src` | 图片地址 | _string_ | `-` |
| `fit` | 填充模式, 可选值为 `fill` `contain` `cover` `none` `scale-down` | _string_ | `fill` |
| `alt` | 替代文本 | _string_ | `-` |
| `width` | 图片宽度(px, %, rem) | _string \| number_ | `-` |
| `height` | 图片高度(px, %, rem) | _string \| number_ | `-` |
| `radius` | 图片圆角(px, %, rem) | _string \| number_ | `-` |
| `lazy` | 是否开启懒加载 | _boolean_ | `false` |
| `loading` | 当开启懒加载时, 加载中显示的图片 | _string_ | `-` |
| `error` | 当开启懒加载时, 加载失败显示的图片 | _string_ | `-` |
| `ripple` | 是否开启水波 | _string_ | `false` |
| `block` | 是否是块级元素 | _boolean_ | `true` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击图片时触发 | `event: Event` |
| `load` | 图片成功加载时触发(懒加载模式下失败时会多次尝试加载图片，只会在成功加载时触发) | `event: Event` |
| `error` | 图片失败加载时触发(懒加载模式下失败时会多次尝试加载图片，只会在尝试次数结束时触发) | `event: Event` |