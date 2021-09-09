# 按钮

### 引入

```js
import { createApp } from 'vue'
import { Button } from 'basic-ui'

createApp().use(Button)
```

### 基本使用
```html
<b-button>组件库从我开始</b-button>
```

### 主题色按钮
```html
<b-button color="#009688">组件库从我开始</b-button>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `color` | 按钮颜色 | _string_ | `default` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发 | `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 按钮内容 | `-` |