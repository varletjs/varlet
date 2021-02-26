# PullRefresh

### Introduce

Provides a drop-down refresh interaction。

### install

```js
import { PullRefresh } from '@varlet/ui'

export default defineComponent({
  components: {
    [PullRefresh.name]: PullRefresh,
  },
})
```

### Basic Usage

The refresh event will be Emitted when pull refresh, you should set `v-model` to `true` at the beginning of the event indicates that loading is under way, and setting `v-model` to `false` after completion indicates that loading is over.

```html
<var-pull-refresh v-model="isRefresh" @refresh="refresh">
  <ul class="pull-refresh__example">
    <li v-for="(item, index) in data" :key="index">{{ item + ' ' + (index + 1) }}</li>
  </ul>
</var-pull-refresh>
```
```javascript
import { defineComponent, ref } from 'vue'
import PullRefresh from '@varlet/ui'

const data1 = Array(10).fill('List Item')
const data2 = Array(10).fill('This is new List Item')

export default defineComponent({
  components: {
    [PullRefresh.name]: PullRefresh
  },
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
})
```

## API

### Props

| Attribute | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| v-model | Loading status | _boolean_ | - |
| disabled | Whether to disable pull refresh | _boolean_ | `false` |
| animation-duration | Animation duration(ms) | _number_ ｜ _string_ | `300` |
| success-duration | Success text display duration(ms) | _number_ ｜ _string_ | `2000` |
| bgColor | BackgroundColor of control | _string_ | `#005CAF` |
| color | color of control | _string_ | `#ffffff` |
| successBgColor | BackgroundColor of control when the status is success | _string_ | `#4CAF50` |
| successColor | color of control when the status is success | _string_ | `ffffff` |

### Events
| Event | Description | Parameters |
| ----- | -------------- | -------- | 
| refresh | Emitted after pulling refresh| - |

### Slots
| Name | Description | SlotProps |
| ----- | -------------- | -------- | 
| default | Default slot | - |
