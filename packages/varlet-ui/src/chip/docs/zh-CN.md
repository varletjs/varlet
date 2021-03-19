# 标签

### 引入

```js
import { createApp } from 'vue'
import { Chip } from '@varlet/ui'

createApp().use(Chip)
```

### 主题色标签

通过设置`type`属性定义标签的颜色

```html
<var-chip type="primary">主要标签</var-chip>
<var-chip type="success">成功标签</var-chip>
<var-chip type="danger">危险标签</var-chip>
<var-chip type="warning">警告标签</var-chip>
<var-chip type="info">信息标签</var-chip>
<var-chip>默认标签</var-chip>
```

### 空心样式标签

通过设置`plain`属性把标签设置成空心样式

```html
<var-chip plain type="primary">空心标签</var-chip>
```

### 非圆角标签

通过设置`round`属性为`false`来取消标签的圆角样式

```html
<var-chip :round="false" type="primary">非圆角标签</var-chip>
```

### 标签尺寸

通过设置`size`属性定义标签的大小

```html
<var-chip size="large">大标签</var-chip>
<var-chip>常规标签</var-chip>
<var-chip size="small">小标签</var-chip>
<var-chip size="mini">迷你标签</var-chip>
```

### 块级标签

```html
<var-chip type="primary" block>块级标签</var-chip>
```

### 可关闭标签

通过使用`closable`属性显示标签的关闭图标，使用`close-name`属性自定义关闭图标的样式（`close-name`必须在使用了`closeable`的情况下使用）

```html
<var-chip closable v-if="show" @close="show = false">可关闭标签</var-chip>
<var-chip
  closable
  icon-name="delete"
  v-if="show1"
  @close="show1 = false">
  自定义关闭图标</var-chip>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const show = ref(true)
    const show1= ref(true)

    return { 
      show, 
      show1 
    }
  }
}
```

### 自定义颜色标签

通过设置`color`和`text-color`属性自定义标签颜色

```html
<var-chip color="#009688">标签</var-chip>
<var-chip color="#009688" plain>标签</var-chip>
<var-chip color="#faecd8" text-color="#e6a23c" plain>标签</var-chip>
<var-chip color="#faecd8" text-color="#e6a23c">标签</var-chip>
```

### 添加左右插槽标签

自定义标签两侧插槽

```html
<var-chip type="primary" plain>
  左侧插槽

  <template #left>
    <var-icon name="star" />
  </template>
</var-chip>
<var-chip type="primary" plain>
  右侧插槽

  <template #right>
    <var-icon name="fire" />
  </template>
</var-chip>
<var-chip type="primary" plain>
  左右两侧插槽
  
  <template #left>
    <var-icon name="account-circle" />
  </template>

  <template #right>
    <var-icon name="cake-variant" />
  </template>
</var-chip>
```

## API

### 属性

|参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| `type` | 类型, 可选值为 `default`, `primary`, `info`, `success`, `warning`, `danger` | _string_ | `default` |
| `size` | 尺寸, 可选值为 `normal`, `mini`, `small`, `large` | _string_ | `normal` |
| `plain` | 是否为空心样式 | _boolean_ | `false` |
| `round` | 是否为圆角样式 | _boolean_ | `true` |
| `block` | 是否为块级样式 | _boolean_ | `false` |
| `closeable` | 是否为可关闭标签 | _boolean_ | `false` |
| `close-name` | 自定义可关闭标签的图标，必须在`closeable`为`true`的条件下才能用 | _string_ | `_` |
| `color` | 标签颜色 | _string_ | `_` |
| `text-color` | 文本颜色，优先级高于`color`属性 | _string_ | `_` |

### 插槽

| 名称 | 说明 | 参数 |
| ---- | ---- | ----|
| `default` | 标签内容 | `_` |
| `left` | 插入至标签左侧的内容 | `_` |
| `right` | 插入至标签右侧的内容 | `_` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| `close` | 点击关闭按钮时触发，只有在显示关闭按钮的时候才能使用| `event: Event`  |

### 主题变量

#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

| 变量名 | 默认值 |
| --- | --- |
| `@chip-default-color` | `#f5f5f5` |
| `@chip-primary-color` | `@color-primary`|
| `@chip-danger-color` |  `@color-danger`|
| `@chip-success-color` | `@color-success`|
| `@chip-warning-color` |  `@color-warning`|
| `@chip-info-color` | `@color-info`|
| `@chip-border-radius` | `2px` |
| `@chip-mini-height` | `16px` |
| `@chip-small-height` | `24px` |
| `@chip-normal-height` | `32px` |
| `@chip-large-height:` | `40px` |
| `@chip-round-radius:` | `100px` |
| `@chip-mini-padding` | `0 4px` |
| `@chip-small-padding` | `0 6px` |
| `@chip-normal-padding` | `0 10px` |
| `@chip-large-padding` | `0 17px` |
| `@chip-text-large-margin` | `0 5px` |
| `@chip-text-normal-margin` | `0 5px` |
| `@chip-text-small-margin` | `0 3px` |
| `@chip-text-mini-margin` | `0 2px` |




