# DatePicker

### Intro
Used to select a date or date range.

### Install

```js
import { DatePicker } from '@varlet/ui'

createApp().use(DatePicker)
```

### Basic Usage

```html
<var-date-picker v-model="date" />
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const date = ref()
    
    return {
      date
    }
  }
}
```

### Month Picker

Use `type` prop to change the type of the picker. The default value of `type` is `date`.

```html
<var-date-picker type="month" v-model="date" shadow />
```

### Multiple

Use `multiple` prop to select multiple dates, at this time, `date` is an array.

```html
<var-date-picker v-model="date" multiple />
```

### Range

Use `range` prop to select date range, at this time, `date` is `[startDate, endDate]`.

```html
<var-date-picker type="date" v-model="date" range>
```

### Date Limit

Use `min` and `max` prop to allow the maximum and minimum date, and use `allowed-dates` prop to limit the dates that can be selected.

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

### Custom

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
    <span>{{ year }}</span>
  </template>
  <template #month="{ year, month }">
    <span>{{ year }}-{{ month }}</span>
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

### Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `v-model / model-value` | Selected date（ISO 8601 format, `YYYY-MM-DD` or `YYYY-MM`）| _string[]_ ｜ _string_ | `-` |
| `type` | Picker type, optional values `date｜month` | _string_ | `date` |
| `allowed-dates` | Restricts which dates can be selected | _function_ | `-` |
| `color` | Picker color | _string_ | `#2979ff` |
| `header-color` | Color of picker header. If not specified it will use the color defined by color prop or the default picker color. | _string_ | `#2979ff` |
| `shadow` | Whether to add a shadow | _boolean_ | `false` |
| `first-day-of-week` | Sets the first day of the week, starting with 0 for Sunday. | _string_ ｜ _number_ | `0` |
| `min` | Minimum allowed date/month (ISO 8601 format) | _string_ | `-` |
| `max` | Maximum allowed date/month (ISO 8601 format) | _string_ | `-` |
| `show-current` | Whether to display the current date | _boolean_ | `true` |
| `readonly` | readonly | _boolean_ | `false` |
| `multiple` | Allow the selection of multiple dates | _boolean_ | `false` |
| `range` | Allow the selection of date range | _boolean_ | `false` |

### Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `change` | Emitted after date changed | `value: string ｜ string[]` |

### Slots

`weekIndex` means the nth day of the week, starting with `0` for Sunday.

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `year` | Custom the year in the title | `year: YYYY` |
| `month` | Custom the month in the title | `year: YYYY`<br>`month: MM` |
| `date` | Custom the date in the title | `year: YYYY`<br>`month: MM`<br>`date: DD`<br>`week: weekIndex` |
| `range` | Custom the range in the title | `choose: [startData, endDate]` |
| `multiple` | Custom the multiple in the title  | `choose: ['YYYY-MM-DD' ｜ 'YYYY-MM']` |

