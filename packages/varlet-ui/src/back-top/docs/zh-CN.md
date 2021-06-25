# BackTop 回到顶部

### 介绍

返回页面顶部的操作按钮。

### 引入

```js
import { createApp } from 'vue'
import { BackTop } from '@varlet/ui'

createApp().use(BackTop)
```

### 基本使用

```html
<div>
  <var-cell v-for="list in lists" :key="list">Scroll to bottom {{ list }}</var-cell>
  <var-back-top :duration="300" />
</div>
```
```javascript
const lists = [...Array(100).keys()]

export default {
  setup() {
    return {
      lists
    }
  }
}
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `target` | 触发滚动的对象	| _string_ | `-` |
| `visibility-height` | 滚动高度达到此参数值才出现| _string \| number_ | `200` |
| `duration` | 回到顶部所需时间（ms） | _number_ | `300` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `click` | 点击按钮触发的事件 | `event: Event` |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | 自定义按钮内容 | `-` |

### 样式变量
以下为组件使用的css变量,可以使用[StyleProvider组件](#/zh-CN/style-provider)进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--back-top-right` | `40px` |
| `--back-top-bottom` | `40px` |
| `--back-top-button-size` | `40px` |
