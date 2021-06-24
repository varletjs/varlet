# ImagePreview 图片预览

### 介绍

图片放大预览，支持函数调用和组件调用两种方式。

### 引入

```js
import { createApp } from 'vue'
import { ImagePreview } from '@varlet/ui'

// 全局注册
createApp().use(ImagePreview)

// 局部注册
export default {
  components: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
}
```

## 组件使用

### 基本使用

```html
<var-button type="warning" block @click="show = true">基本使用</var-button>
<var-image-preview :images="images" v-model:show="show" />

<var-button type="info" block @click="currentShow = true">指定初始位置</var-button>
<var-image-preview :images="images" v-model:show="currentShow" current="https://varlet.gitee.io/varlet-ui/cat2.jpg" />

<var-button type="success" block @click="closeShow = true">展示关闭按钮</var-button>
<var-image-preview :images="images" v-model:show="closeShow" :closeable="true" />

<var-button block @click="closeEventShow = true">监听关闭事件</var-button>
<var-image-preview :images="images" v-model:show="closeEventShow" @close="handleCloseEvent" />
```

```javascript
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const images = [
      'https://varlet.gitee.io/varlet-ui/cat.jpg',
      'https://varlet.gitee.io/varlet-ui/cat2.jpg',
      'https://img01.yzcdn.cn/vant/apple-4.jpg',
    ]

    const handleCloseEvent = () => {
      Snackbar({
        content: '触发了关闭事件。',
        duration: 1000,
      })
    }
    return {
      show: ref(false),
      currentShow: ref(false),
      closeShow: ref(false),
      closeEventShow: ref(false),
      images: ref(images),
      handleCloseEvent,
    }
  },
}
```

### 函数调用

```html
<var-button type="primary" block @click="preview"> 预览 </var-button>
```

```js
import { ImagePreview } from '@varlet/ui'

export default {
  setup() {
    const image = ['https://varlet.gitee.io/varlet-ui/cat.jpg']
    return {
      preview() {
        ImagePreview(image)
      },
    }
  },
}
```

## API

### 属性

### ImagePreview 属性

| 参数         | 说明                                                                                                       | 类型                            | 默认值                                        |
| ------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------- | --------------------------------------------- |
| `show`       | 是否显示                                                                                                   | _boolean_                       | `false`                                       |
| `images`     | 需要预览的图片 URL 数组， 或者单个图片，在函数调用中传入 URL 数组和单个图片 URL 都可以，组件只支持数组格式                | _string[] \| string(函数独有)_ | `[]`                                          |
| `current`    | 图片预览起始的 URL                                                                                         | _string_                        | `'https://varlet.gitee.io/varlet-ui/cat.jpg'` |
| `zoom`       | 双击放大倍数                                                                                               | _string \| number_             | `2`                                           |
| `closeable`  | 是否显示关闭按钮                                                                                           | _boolean_                       | `false`                                       |
| `loop`       | 是否开启循环播放                                                                                           | _boolean_                       | `true`                                        |
| `indicator`  | 是否显示分页                                                                                               | _boolean_                       | `true`                                        |
| `lockScroll` | 锁定滚动                                                                                                   | _boolean_                       | `true`                                        |
| `teleport`   | 弹出层挂载的位置                                                                                           | _string_                        | `-`                                           |

### 事件

### ImagePreview 事件

| 事件名     | 说明                                     | 回调参数                   |
| ---------- | ---------------------------------------- | -------------------------- |
| `onChange` | 切换图片时的回调函数，回调参数为当前索引 | ` index: number(轮播索引)` |
| `onOpen`   | 打开时候的回调                           | `-`                        |
| `onOpened` | 打开以后的回调                           | `-`                        |
| `onClose`  | 关闭时候的回调                           | `-`                        |
| `onClosed` | 关闭以后的回调                           | `-`                        |

### 主题变量

#### 以下 less 变量可通过构建时进行变量覆盖从而修改主题样式

| 变量名                                       | 默认值   |
| -------------------------------------------- | -------- |
| `@image-preview-swipe-indicators-text-color` | ` #ddd`  |
| `@image-preview-swipe-indicators-padding`    | `16px 0` |
| `@image-preview-zoom-container-background`   | ` #000`  |
| `@image-preview-close-icon-top`              | `13px`   |
| `@image-preview-close-icon-right`            | ` 14px`  |
| `@image-preview-close-icon-size`             | `22px`   |
| `@image-preview-close-icon-color`            | `#fff`   |
