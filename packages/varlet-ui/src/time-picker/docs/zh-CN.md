# 时间选择器

### 介绍

用于选择时间。

### 引入

```js
import { createApp } from 'vue'
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

使用 `format` 属性切换选择器的时间格式，`format` 默认值为 `ampm`。

```html
<var-time-picker v-model="date" format="24hr" shadow />
```

### 显示秒

使用 `use-seconds` 属性显示秒

```html
<var-time-picker v-model="date" format="24hr" use-seconds />
```

### 只读

```html
<var-time-picker v-model="date" readonly shadow />
```

### 时间限制

通过 `min`、`max` 和 `allowed-time` 属性来控制可选择的时间范围。

```html
<var-time-picker
  v-model="date"
  format="24hr"
  use-seconds
  min="2:28:38"
  max="19:40:22"
  :allowed-time="allowedTime"
/>
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const date = ref('07:10:12')

    const allowedTime = {
      hours(hour) {
        return hour % 2 === 0
      },
      minutes(minute) {
        return minute % 15 !== 0
      },
      seconds(second) {
        return second % 2 !== 0
      },
    }

    return {
      date,
      allowedTime
    }
  }
}
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
| `v-model` | 被选择的时间（ISO 8601 格式，`HH:mm` 或 `HH:mm:ss`）| _string_ | `-` |
| `format` | 选择器时间格式，可选值为 `ampm 24hr` | _string_ | `ampm` |
| `color` | 选择器的颜色 | _string_ | `#2979ff` |
| `header-color` | 标题背景色。如果未指定，将使用由 color 属性或默认颜色。 | _string_ | `#2979ff` |
| `shadow` | 是否添加阴影 | _boolean_ | `false` |
| `min` | 允许的最小时间（ISO 8601格式） | _string_ | `-` |
| `max` | 允许的最大时间（ISO 8601格式） | _string_ | `-` |
| `allowed-time` | 限制可以选择的时间 | _AllowedTime_ | `-` |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `use-seconds` | 是否显示秒 | _boolean_ | `false` |

### TimePicker AllowedTime

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `hours` | 限制可选的 `hour` | _Function: hour => boolean_ | `-` |
| `minutes` | 限制可选的 `minute` | _Function: minute => boolean_ | `-` |
| `seconds` | 限制可选的 `second` | _Function: second => boolean_ | `-` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `change` | 时间变化时触发 | `value: string` |


### 样式变量

以下为组件使用的 css 变量,可以使用 [StyleProvider 组件](#/zh-CN/style-provider)进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--time-picker-border-radius` | `4px` |
| `--time-picker-font-size` | `var(--font-size-md)` |
| `--time-picker-min-width` | `290px` |
| `--time-picker-height` | `385px` |
| `--time-picker-title-padding` | `16px` |
| `--time-picker-title-color` | `#fff` |
| `--time-picker-title-background` | `var(--color-primary)` |
| `--time-picker-title-time-font-size` | `50px` |
| `--time-picker-title-time-margin` | `0 5px` |
| `--time-picker-title-ampm-margin-left` | `5px` |
| `--time-picker-clock-left` | `27px` |
| `--time-picker-clock-right` | `27px` |
| `--time-picker-clock-top` | `27px` |
| `--time-picker-clock-bottom` | `27px` |
| `--time-picker-clock-container-width` | `270px` |
| `--time-picker-clock-container-height` | `270px` |
| `--time-picker-clock-container-background` | `#e0e0e0` |
| `--time-picker-clock-hand-height` | `calc(50% - 4px)` |
| `--time-picker-clock-hand-width` | `2px` |
| `--time-picker-clock-hand-bottom` | `50%` |
| `--time-picker-clock-hand-left` | `calc(50% - 1px)` |
| `--time-picker-clock-hand-background` | `var(--color-primary)` |
| `--time-picker-clock-hand-border-color` | `var(--color-primary)` |
| `--time-picker-clock-hand-before-width` | `10px` |
| `--time-picker-clock-hand-before-height` | `10px` |
| `--time-picker-clock-hand-before-border-width` | `2px` |
| `--time-picker-clock-hand-after-width` | `4px` |
| `--time-picker-clock-hand-after-height` | `4px` |
| `--time-picker-clock-item-height` | `32px` |
| `--time-picker-clock-item-width` | `32px` |
| `--time-picker-clock-item-active-background` | `var(--color-primary)` |
| `--time-picker-clock-item-active-color` | `#fff` |
| `--time-picker-clock-item-disable-color` | `rgba(0, 0, 0, 0.26)` |
| `--time-picker-inner-left` | `36px` |
| `--time-picker-inner-right` | `36px` |
| `--time-picker-inner-top` | `36px` |
| `--time-picker-inner-bottom` | `36px` |
| `--time-picker-body-background` | `#fff` |
