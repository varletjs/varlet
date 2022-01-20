# 图片懒加载

### 介绍

在图片可见时进行加载

####

### 引入

```js
import { createApp } from 'vue'
import { Lazy } from '@varlet/ui'

createApp().use(Lazy)
```

### 基本用法

```html
<img v-lazy="'https://varlet.gitee.io/varlet-ui/cat.jpg'">
```

### 背景图懒加载
```html
<div v-lazy:background-image="'https://varlet.gitee.io/varlet-ui/cat.jpg'"></div>
```

### 内联属性
可以通过内联属性修改 `loading`、 `error` 图片和`加载失败时尝试重新加载的次数`。

```html
<img
  v-lazy="'https://varlet.gitee.io/varlet-ui/cat.jpg'"
  lazy-loading="https://xxx.cn/loading.png"
  lazy-error="https://xxx.cn/error.png"
  lazy-attempt="3"
>
```

### 插件

`Lazy` 提供了在插件注册时传入的选项，可以设置默认的懒加载选项。

```js
import { createApp } from 'vue'
import { Lazy } from '@varlet/ui'

createApp().use(Lazy, {
  loading: 'https://xxx.cn/loading.png',
  error: 'https://xxx.cn/error.png',
  attempt: 3,
  throttleWait: 300,
  events: [
    'scroll',
    'wheel',
    'mousewheel',
    'resize',
    'animationend',
    'transitionend',
    'touchmove'
  ],
  filter(lazy) {
    // 可以访问 lazy 上下文的所有属性,执行一些属性拦截,
    // 比如简单修改所有的图片地址 http -> https
    lazy.src.replace('http://', 'https://')
  }
})
```

## API

### 插件选项

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `loading` | 加载中的图片，尽可能选择加载速度很快的图片 | _string_ | `1像素透明图片` |
| `error` | 加载失败显示的图片 | _string_ | `1像素透明图片` |
| `attempt` | 加载失败时尝试重新加载的次数 | _number_ | `3` |
| `throttleWait` | 节流时间，数值越大事件触发频率越低 | _number_ | `300` |
| `events` | 触发可见性检测注册的事件列表 | _string[]_ | `['scroll'...]` |
| `filter` | 属性拦截函数 | _(lazy: Lazy) => void_ | `() => void` |
