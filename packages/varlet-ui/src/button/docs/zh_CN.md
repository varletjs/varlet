# 按钮

## 使用演示

### 引入

```js
import { Button } from '@varlet/ui'

export default defineComponent({
  components: { 
    [Button.name]: Button,
  }
})
```

### 主题色按钮

```html
<var-button type="primary">主要按钮</var-button>
<var-button type="success">成功按钮</var-button>
<var-button type="danger">危险按钮</var-button>
<var-button type="warning">警告按钮</var-button>
<var-button type="info">信息按钮</var-button>
<var-button>默认按钮</var-button>
```

### 朴素按钮

```html
<var-button type="primary" plain outline>边框按钮</var-button>
<var-button type="primary" plain>文字按钮</var-button>
```

### 禁用状态

```html
<var-button :disabled="true">禁用状态</var-button>
<var-button type="primary" :disabled="true" plain outline>禁用状态</var-button>
<var-button type="primary" :disabled="true" plain>禁用状态</var-button>
```

### 加载状态

```html
<var-button type="primary" :loading="true">加载状态</var-button>
<var-button type="primary" :loading="true" plain outline>加载状态</var-button>
```

### 加载类型

```html
<var-button type="primary" :loading="true">加载状态</var-button>
<var-button type="primary" loading-type="rect" :loading="true">加载状态</var-button>
<var-button type="primary" loading-type="disappear" :loading="true">加载状态</var-button>
<var-button type="primary" loading-type="cube" :loading="true">加载状态</var-button>
```

### 按钮尺寸

```html
<var-button type="primary">常规按钮</var-button>
<var-button type="primary" size="small">小型按钮</var-button>
<var-button type="primary" size="mini">迷你按钮</var-button>
<var-button type="primary" size="large">大型按钮</var-button>
```

### 块级flex

```html
<var-button type="primary" block>块级按钮</var-button>
```

### 自定义颜色
```html
<var-button color="#005caf">文字颜色</var-button>
<var-button background="#9c27b0" color="#fff">紫色按钮</var-button>
<var-button background="linear-gradient(to right, #f44336, #005caf)" color="#fff">渐变按钮</var-button>
```

### 圆形按钮

```html
<var-button round>
  <img style="width: 30px; height: 30px" src="https://img.yzcdn.cn/vant/logo.png"/>
</var-button>
```

### 注册事件

```html
<var-button @click="handleClick">click</var-button>
<var-button @touchstart="handleTouchstart">触摸开始(移动端)</var-button>
```
```js
import { defineComponent } from 'vue'
import { Button, Snackbar } from '@varlet/ui'

export default defineComponent({
  components: {
    [Button.name]: Button,
  },
  setup() {
    const handleClick = () => {
      Snackbar.success('click success!')
    }

    const handleTouchstart = () => {
      Snackbar.success('touchstart success!')
    }

    return {
      handleClick,
      handleTouchstart
    }
  }
})
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ---- | --- | ---- | ----- |
| type | 类型, 可选值为 `default`, `primary`, `info`, `success`, `warning`, `danger` | _string_ | `default` |
| size | 尺寸, 可选值为 `normal`, `mini`, `small`, `large` | _string_ | `normal` |
| loading | 加载状态 | _boolean_ | `false` |
| loading-type | 加载动画类型, 可选值同[Loading组件的type属性](#/zh-CN/loading) | _string_ | `wave` |
| loading-size | 加载动画尺寸, 可选值同[Loading组件的size属性](#/zh-CN/loading) | _string_ | `normal` |
| round | 圆形按钮 | _boolean_ | `false` |
| block | 块级元素 | _boolean_ | `false` |
| plain | 朴素按钮 | _boolean_ | `false` |
| outline | 外边框 | _boolean_ | `false` |
| disabled | 禁用状态 | __boolean | `false` |
| color | 文字颜色 | _string_ | `-` |
| background | 背景 | _string_ | `-` |

### 事件

| 事件名 | 说明 | 回调参数 | 默认值 |
| ---- | --- | ---- | -----  |
| click | 点击按钮时触发, 但loading或disabled状态为true时不触发 | event: Event |
| touchstart | 触摸手指压下按钮时触发, , 但loading或disabled状态为true时不触发 | event: TouchEvent |
