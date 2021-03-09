# 按钮

### 引入

```js
import { createApp } from 'vue';
import { Button } from '@varlet/ui';

createApp().use(Button)
```

### 主题色按钮

```html
<var-button>默认按钮</var-button>
<var-button type="primary">主要按钮</var-button>
<var-button type="info">信息按钮</var-button>
<var-button type="success">成功按钮</var-button>
<var-button type="warning">警告按钮</var-button>
<var-button type="danger">危险按钮</var-button>
```

### 文字按钮

```html
<var-button text outline type="primary">外边框按钮</var-button>
<var-button text type="primary">纯文字按钮</var-button>
```

### 禁用状态

```html
<var-button disabled>禁用状态</var-button>
<var-button disabled text outline>禁用状态</var-button>
<var-button disabled text>禁用状态</var-button>
```

### 加载状态

```html
<var-button loading type="primary">
  加载状态
</var-button>
<var-button loading type="info" loading-type="rect">
  加载状态
</var-button>
<var-button loading type="success" loading-type="disappear">
  加载状态
</var-button>
<var-button loading type="danger" loading-type="cube">
  加载状态
</var-button>
<var-button loading type="warning" loading-type="wave">
  加载状态
</var-button>
```

### 按钮尺寸

```html
<var-button type="primary">常规按钮</var-button>
<var-button type="success" size="small">小型按钮</var-button>
<var-button type="warning" size="mini">迷你按钮</var-button>
<var-button type="danger" size="large">大型按钮</var-button>
```

### 块级按钮

```html
<var-button block type="primary">块级按钮</var-button>
```

### 自定义颜色

```html
<var-button text-color="#e91e63">文字颜色</var-button>
<var-button color="#e91e63" text-color="#fff">背景颜色</var-button>
<var-button 
  color="linear-gradient(to right, #e91e63, #880e4f)"
  text-color="#fff"
>
  渐变颜色
</var-button>
```

### 圆形按钮

```html
<var-button round>
  <var-icon name="plus"/>
</var-button>
```

### 注册事件

```html
<var-button type="danger" @click="handleClick">点击</var-button>
<var-button type="danger" @touchstart="handleTouchstart">触摸</var-button>
```

```js
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const handleClick = () => {
      Snackbar.success('点击成功')
    }

    const handleTouchstart = () => {
      Snackbar.success('触摸成功')
    }

    return {
      handleClick,
      handleTouchstart
    }
  }
}
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `type` | 类型, 可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `size` | 尺寸, 可选值为 `normal` `mini` `small` `large` | _string_ | `normal` |
| `loading` | 加载状态 | _boolean_ | `false` |  
| `loading-radius` | loading的半径, 只作用于 `loading-type="circle"` 时 | _number \| string_ | `12` |
| `loading-type` | loading的类型，可选值为 `circle` `wave` `cube` `rect` `disappear` | _string_ | `circle` |
| `loading-size` | loading的尺寸，可选值为 `large` `normal` `small` `mini` 不作用于 `loading-type="circle"` 时 | _string_ | `normal` |
| `round` | 是否是圆形按钮 | _boolean_ | `false` | 
| `block` | 是否是块级元素 | _boolean_ | `false` | 
| `text` | 是否是文字按钮 | _boolean_ | `false` |
| `outline` | 是否使用外边框 | _boolean_ | `false` |
| `disabled` | 禁用状态 | _boolean_ | `false` |
| `ripple` | 是否使用水波纹 | _boolean_ | `true` |
| `text-color` | 文字颜色 | _string_ | `-` |
| `color` | 背景颜色 | _string_ | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发, 在 `loading` 或 `disabled` 状态为 `true` 时不触发 | `event: Event` |
| `touchstart` | 触摸手指压下按钮时触发, 在 `loading` 或 `disabled` 状态为 `true` 时不触发 | `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 按钮内容 | `-` |

### 主题变量
#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

| 变量名 | 默认值 |
| --- | --- |
| `@button-default-color` | `#f5f5f5` |
| `@button-primary-color` | `@color-primary`|
| `@button-danger-color` |  `@color-danger`|
| `@button-success-color` | `@color-success`|
| `@button-warning-color` |  `@color-warning`|
| `@button-info-color` | `@color-info`|
| `@button-disabled-color` | `@color-disabled`|
| `@button-disabled-text-color` | `#bdbdbd` |
| `@button-border-radius` | `4px` |
| `@button-mini-padding` | `0 9px` |
| `@button-small-padding` | `0 11px` |
| `@button-normal-padding` | `0 15px` |
| `@button-large-padding` | `0 22px` |
| `@button-round-padding` | `6px` |
| `@button-mini-height` | `20px` |
| `@button-small-height` | `28px` |
| `@button-normal-height` | `36px` |
| `@button-large-height:` | `44px` |