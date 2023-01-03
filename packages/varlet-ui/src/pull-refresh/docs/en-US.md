# PullRefresh

### Intro

Provides a drop-down refresh interaction.

### Basic Usage

The refresh event will be Emitted when pull refresh, you should set `v-model` to `true` at the beginning of the event
indicates that loading is under way, and setting `v-model` to `false` after completion indicates that loading is over.

```html
<script setup>
import { ref } from 'vue'

const data1 = Array(10).fill('List Item')
const data2 = Array(10).fill('This is new List Item')

const isRefresh = ref(false)
const data = ref(data1)

const refresh = () => {
  setTimeout(() => {
    data.value = data.value[0] === 'List Item' ? data2 : data1
    isRefresh.value = false
  }, 2000)
}
</script>

<template>
  <var-pull-refresh v-model="isRefresh" @refresh="refresh">
    <var-cell
      v-for="(item, index) in data"
      :key="index"
      border
    >
      {{ item + ' ' + (index + 1) }}
    </var-cell>
  </var-pull-refresh>
</template>
```

### Combine

Combined with the `List` component to implement the function of pull-up loading and pull-down refresh, ensuring the height of the `PullRefresh` is not `0` .

```html
<script setup>
import { ref } from 'vue'

const refreshing = ref(false)
const loading = ref(false)
const list = ref([])

const refresh = () => {
  setTimeout(() => {
    console.log('refresh')
    refreshing.value = false
  }, 2000)
}

const load = () => {
  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      list.value.push(list.value.length + 1)
    }
    
    loading.value = false
  }, 1000)
}
</script>

<template>
  <var-pull-refresh v-model="refreshing" @refresh="refresh">
    <var-list v-model:loading="loading" @load="load">
      <var-cell :key="d" v-for="d in list">ListItem {{ d }}</var-cell>
    </var-list>
  </var-pull-refresh>
</template>
```

### Attention

When the height of the `PullRefresh` is `0`, it will be unavailable, so you need to ensure that the height of its child elements is **not** `0` or set height for the `PullRefresh`:

```html
<!-- playground-ignore -->
<template>
  <var-pull-refresh>
    <div style="height: 200px"></div>
  </var-pull-refresh>

  <!-- or -->
  
  <var-pull-refresh style="height: 200px">
    <div></div>
  </var-pull-refresh>
</template>
```

## API

### Props

| Prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `v-model` | Loading status | _boolean_ | `-` |
| `disabled` | Whether to disable pull refresh | _boolean_ | `false` |
| `animation-duration` | The duration of the animation to return to the initial position after loading(ms) | _string \| number_ | `300` |
| `success-duration` | Success text display duration(ms) | _string \| number_ | `2000` |
| `bg-color` | BackgroundColor of control | _string_ | `#005CAF` |
| `color` | color of control | _string_ | `#ffffff` |
| `success-bg-color` | BackgroundColor of control when the status is success | _string_ | `#4CAF50` |
| `success-color` | color of control when the status is success | _string_ | `ffffff` |

### Events

| Event | Description | arguments |
| ----- | -------------- | -------- | 
| `refresh` | Emitted after pulling refresh | `-` |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- | 
| `default` | Default slot | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--pull-refresh-size` | `40px` |
| `--pull-refresh-background` | `#fff` |
| `--pull-refresh-color` | `var(--color-primary)` |
| `--pull-refresh-success-color` | `var(--color-success)` |
| `--pull-refresh-icon-size` | `25px` |
