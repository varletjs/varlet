# DatePicker 日期选择器

### 介绍

用于选择日期或日期范围。

### 引入

```js
import { DatePicker } from '@varlet/ui'

createApp().use(DatePicker)
```

### 基本使用

```html
<var-date-picker v-model="date" />
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const date = ref('2021-04-08')
    
    return {
      date
    }
  }
}
```

### 月份选择器

使用 `type` 属性切换选择器的类型，`type` 默认值为 `date`

```html
<var-date-picker type="month" v-model="date" shadow />
```

### 多选

通过 `multiple` 属性选择多个日期，此时 `date` 为一个数组。

```html
<var-date-picker v-model="date" multiple />
```

### 选择范围

通过 `range` 属性选择一个日期范围，此时 `date` 为 `[startDate, endDate]`。

```html
<var-date-picker type="date" v-model="date" range>
```

### 日期限制

通过 `min` 和 `max` 属性来控制可选择的日期范围，使用 `allowed-dates` 属性限制可以选择的日期。

```html
<var-date-picker 
  v-model="date" 
  min="2020-10-15"
  max="2021-01-15" 
  :allowed-dates="allowedDates"
/>
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const date = ref('2020-11-11')

    const allowedDates = (val) => {
      return parseInt(val.split('-')[2], 10) % 2 === 1
    }
    
    return {
      date,
      allowedDates,
    }
  }
}
```

### 自定义

```html
<var-date-picker
  shadow
  type="month"
  v-model="date"
  min="2016-07"
  max="2022-01"
  header-color="purple"
  color="#7bb872"
  first-day-of-week="1"
  :allowed-dates="allowedDates"
  @change="change"
>
  <template #year="{ year }">
    <span>{{ year }}年</span>
  </template>
  <template #month="{ year, month }">
    <span>{{ year }}年{{ month }}月</span>
  </template>
</var-date-picker>
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const date = ref('2021-02')

    const allowedDates = (val) => {
      return parseInt(val.split('-')[1], 10) % 2 === 1
    }

    const change = (date) => {
      console.log(date)
    }
    
    return {
      date,
      change,
      allowedDates,
    }
  }
}
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `v-model` | 被选择的日期（ISO 8601 格式，`YYYY-MM-DD` 或 `YYYY-MM`）| _string[]_ \| _string_ | `-` |
| `type` | 选择器类型，可选值为`date\|month` | _string_ | `date` |
| `allowed-dates` | 限制可以选择的日期 | _function_ | `-` |
| `color` | 选择器的颜色 | _string_ | `#2979ff` |
| `header-color` | 标题背景色。如果未指定，将使用由 color 属性或默认颜色。 | _string_ | `#2979ff` |
| `shadow` | 是否添加阴影 | _boolean_ | `false` |
| `first-day-of-week` | 设置一周的第一天，从周日的 0 开始。 | _string_ \| _number_ | `0` |
| `min` | 允许的最小日期/月份（ISO 8601格式） | _string_ | `-` |
| `max` | 允许的最大日期/月份（ISO 8601格式） | _string_ | `-` |
| `show-current` | 是否显示当前日期 | _boolean_ | `true` |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `multiple` | 是否支持选择多个日期 | _boolean_ | `false` |
| `range` | 是否支持选择一个范围 | _boolean_ | `false` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `change` | 日期变化时触发 | `value: string \| string[]` |

### 插槽
`weekIndex` 表示一周的第n天，从周末的`0`开始

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `year` | 自定义标题中的年 | `year: YYYY` |
| `month` | 自定义标题中的月 | `year: YYYY`<br>`month: MM` |
| `date` | 自定义标题中的日期 | `year: YYYY`<br>`month: MM`<br>`date: DD`<br>`week: weekIndex` |
| `range` | 自定义标题中的范围 | `choose: [startData, endDate]` |
| `multiple` | 自定义标题中的多选 | `choose: ['YYYY-MM-DD' \| 'YYYY-MM']` |

### 主题变量
#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

**date-picker**

| 变量名 | 默认值 |
| --- | --- |
| `@date-picker-border-radius` | `4px` |
| `@date-picker-font-size` | `@font-size-md` |
| `@date-picker-min-width` | `290px` |
| `@date-picker-height` | `385px` |
| `@date-picker-title-padding` | `16px` |
| `@date-picker-title-background` | `@color-primary` |
| `@date-picker-title-color` | `#fff` |
| `@date-picker-title-year-font-size` | `@font-size-md` |
| `@date-picker-title-year-font-weight` | `500` |
| `@date-picker-title-year-margin-bottom` | `8px` |
| `@date-picker-title-date-height` | `48px` |
| `@date-picker-title-date-font-size` | `34px` |
| `@date-picker-title-date-font-weight` | `500` |
| `@date-picker-title-date-range-font-size` | `20px` |

**picker-header**

| 变量名 | 默认值 |
| --- | --- |
| `@picker-header-padding` | `4px 16px` |

**month-picker**

| 变量名 | 默认值 |
| --- | --- |
| `@month-picker-padding` | `0 12px` |
| `@month-picker-item-width` | `33%` |
| `@month-picker-item-height` | `56px` |
| `@month-picker-item-button-max-width` | `140px` |

**year-picker**

| 变量名 | 默认值 |
| --- | --- |
| `@year-picker-font-weight` | `400` |
| `@year-picker-item-padding` | `8px 0` |
| `@year-picker-item-active-font-size` | `26px` |
| `@year-picker-item-active-font-weight` | `500` |
| `@year-picker-item-active-font-padding` | `10px 0` |
| `@year-picker-item-active-color` | `@color-primary` |

**day-picker**

| 变量名 | 默认值 |
| --- | --- |
| `@day-picker-content-item-width` | `14.28%` |
| `@day-picker-content-item-font-size` | `@font-size-sm` |
| `@day-picker-content-item-padding` | `2px 0` |
| `@day-picker-content-item-button-width` | `32px` |
| `@day-picker-content-item-button-height` | `32px` |
| `@day-picker-content-item-button-font-size` | `@font-size-sm` |
| `@day-picker-head-item-color` | `rgba(0, 0, 0, 0.38)` |
| `@day-picker-head-item-padding` | `8px 0` |
| `@day-picker-head-item-font-weight` | `600` |

