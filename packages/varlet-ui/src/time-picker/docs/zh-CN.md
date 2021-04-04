# TimePicker 时间选择器

### 介绍

用于选择一个时间。

### 引入

```js
import { TimePicker } from '@varlet/ui'

createApp().use(TimePicker)
```

### 基本使用

```html
<var-time-picker v-model="date" />
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const date = ref('11:20')
    
    return {
      date
    }
  }
}
```

### 24小时格式

使用 `format` 属性切换选择器的时间格式，`format` 默认值为 `ampm`

```html
<var-time-picker v-model="date" format="24hr" shadow />
```

### 只读

```html
<var-time-picker v-model="date" readonly shadow />
```

### 时间限制

通过 `min` 和 `max` 属性来控制可选择的时间范围。

```html
<var-time-picker v-model="date" format="24hr" min="2:28:38" max="19:40:22" />
```
### 自定义

```html
<var-time-picker
  v-model="date"
  header-color="purple"
  color="#7bb872"
  min="2:28:38"
  max="19:40:22"
  shadow
  @change="change"
/>
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const date = ref('05:10')

    const change = (time) => {
      console.log(time)
    }
    
    return {
      date,
      change
    }
  }
}
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `v-model / model-value` | 被选择的时间（ISO 8601 格式，`HH:mm` 或 `HH:mm:ss`）| _string_ | `-` |
| `format` | 选择器时间格式，可选值为`ampm\|24hr` | _string_ | `ampm` |
| `color` | 选择器的颜色 | _string_ | `#2979ff` |
| `header-color` | 标题背景色。如果未指定，将使用由 color 属性或默认颜色。 | _string_ | `#2979ff` |
| `shadow` | 是否添加阴影 | _boolean_ | `false` |
| `min` | 允许的最小时间（ISO 8601格式） | _string_ | `-` |
| `max` | 允许的最大时间（ISO 8601格式） | _string_ | `-` |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `use-seconds` | 是否显示秒 | _boolean_ | `false` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `change` | 时间变化时触发 | `value: string` |
