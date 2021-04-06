# PullRefresh

### Intro

Provides a drop-down refresh interaction

### install

  ```js
import { PullRefresh } from '@varlet/ui'

createApp().use(PullRefresh)
```

### Basic Usage

The refresh event will be Emitted when pull refresh, you should set `v-model` to `true` at the beginning of the event
indicates that loading is under way, and setting `v-model` to `false` after completion indicates that loading is over.

```html
<var-pull-refresh v-model='isRefresh' @refresh='refresh'>
  <var-cell
    v-for="(item, index) in data"
    :key="index"
    border
  >
    {{ item + ' ' + (index + 1) }}
  </var-cell>
</var-pull-refresh>
```

```javascript
const data1 = Array(10).fill('List Item')
const data2 = Array(10).fill('This is new List Item')

export default {
  setup() {
    const isRefresh = ref(true)
    const data = ref(data1)

    const refresh = () => {
      isRefresh.value = true
      setTimeout(() => {
        data.value = data.value[0] === 'List Item' ? data2 : data1
        isRefresh.value = false
      }, 2000)
    }

    return {
      refresh,
      isRefresh,
      data
    }
  }
}
```

## API

### Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `v-model` | Loading status | _boolean_ | - |
| `disabled` | Whether to disable pull refresh | _boolean_ | `false` |
| `animation-duration` | Animation duration(ms) | _number \| string_ | `300` |
| `success-duration` | Success text display duration(ms) | _number \| string_ | `2000` |
| `bgColor` | BackgroundColor of control | _string_ | `#005CAF` |
| `color` | color of control | _string_ | `#ffffff` |
| `successBgColor` | BackgroundColor of control when the status is success | _string_ | `#4CAF50` |
| `successColor` | color of control when the status is success | _string_ | `ffffff` |

### Events

| Event | Description | arguments |
| ----- | -------------- | -------- | 
| `refresh` | Emitted after pulling refresh | - |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- | 
| `default` | Default slot | - |


### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@pull-refresh-size` | `40px` |
| `@pull-refresh-background` | `#fff` |
| `@pull-refresh-color` | `@color-primary` |
| `@pull-refresh-success-color` | `@color-success` |
| `@pull-refresh-icon-size` | `25px` |
