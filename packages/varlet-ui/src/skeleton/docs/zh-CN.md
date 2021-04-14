# 骨架屏

### 介绍
显示一些带过渡效果的占位元素，优化加载过程。

### 引入

```js
import { createApp } from 'vue'
import { Skeleton } from '@varlet/ui'

createApp().use(Skeleton)
```

### 基本使用

```html
<var-skeleton :loading="loading">加载的数据</var-skeleton>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const loading = ref(true)

    return { loading }
  }
}
```

### 显示标题

```html
 <var-skeleton title :loading="loading">加载的数据</var-skeleton>
```

### 自定义段落高度

```html
<var-skeleton
  title
  :rows="3"
  :loading="loading"
  :rows-width="['200px', '100px', '50px']"
>
  加载的数据
</var-skeleton>
```

### 显示头像

```html
<var-skeleton
  title
  avatar
  :rows="3"
  :loading="loading"
>
  加载的数据
</var-skeleton>
```

### 显示卡片

```html
<var-skeleton
  title
  avatar
  card
  :rows="3"
  :loading="loading"
>
  加载的数据
</var-skeleton>
```

### 全屏模式

```html
<var-button type="danger" @click="loading = !loading">
  切换全屏模式
</var-button>
<var-skeleton fullscreen :loading="loading" />
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `loading` | 加载状态，设置为 `true` 开启骨架屏 | _boolean_ | `true` |
| `title` | 是否显示标题 | _boolean_ | `false` |
| `card` | 是否显示卡片 | _boolean_ | `false` |
| `avatar` | 是否显示头像 | _boolean_ | `false` |
| `fullscreen` | 是否开启全屏模式 | _boolean_ | `false` |
| `title-width` | 标题宽度(px, rem, %) | _string \| number_ | `50%` |
| `card-height` | 卡片高度(px, rem, %) | _string \| number_ | `160px` |
| `avatar-size` | 头像尺寸(px, rem, %) | _string \| number_ | `34px` |
| `rows` | 段落行数 | _string \| number_ | `3` |
| `rows-width` | 段落每一行的宽度 | _number[] \| string[]_ | `['12px', '12px', '12px']` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 加载成功后显示的内容 | `-` |

### 主题变量
#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式
| 变量名 | 默认值 |
| --- | --- |
| `@skeleton-content-padding` | `16px` |
| `@skeleton-card-height` | `160px` |
| `@skeleton-card-border-radius` | `4px` |
| `@skeleton-card-margin-bottom` | `16px` |
| `@skeleton-card-background-color` | `rgba(0, 0, 0, 0.12)` |
| `@skeleton-animation-background` | `linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))` |
| `@skeleton-avatar-size` | `34px` |
| `@skeleton-avatar-margin-right` | `16px` |
| `@skeleton-avatar-background-color` | `rgba(0, 0, 0, 0.12)` |
| `@skeleton-title-width` | `50%` |
| `@skeleton-title-border-radius` | `10px` |
| `@skeleton-title-background-color` | `rgba(0, 0, 0, 0.12)` |
| `@skeleton-row-height` | `12px` |
| `@skeleton-row-border-radius` | `10px` |
| `@skeleton-row-margin-top` | `10px` |