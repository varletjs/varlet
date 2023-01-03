# List

### Intro

Unlimited scroll load list, touch bottom load, support manual check position load.
Support custom loading state, error state, data loading completed state.

### Basic Use

The `load` event is emitted when a scroll container is detected scrolling to the bottom，and will be set `loading` to `true`,
you need to manually set `loading` to `false` at the end of loading, that's the end of the load.

```html
<script setup>
import { ref } from 'vue'

const loading = ref(false)
const finished = ref(false)
const list = ref([])
    
const load = () => {
  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      list.value.push(list.value.length + 1)
    }

    loading.value = false

    if (list.value.length >= 60) {
      finished.value = true
    }
  }, 1000)
}
</script>

<template>
  <var-list
    :finished="finished"
    v-model:loading="loading"
    @load="load"
  >
    <var-cell :key="item" v-for="item in list">
      List Item: {{ item }}
    </var-cell>
  </var-list>
</template>
```

### Load Fail

You can manually set the error status using `v-model:error`, an error message is displayed.
Clicking on the error message will help you set the `error` to `false` and trigger the `load` event again.

```html
<script setup>
import { ref } from 'vue'

const loading = ref(false)
const error = ref(false)
const list = ref([])
    
const load = () => {
  setTimeout(() => {
    if (list.value.length === 40) {
      error.value = true
      loading.value = false
      return
    }

    for (let i = 0; i < 20; i++) {
      list.value.push(list.value.length + 1)
    }

    loading.value = false
  }, 1000)
}
</script>

<template>
  <var-list
    v-model:error="error"
    v-model:loading="loading"
    @load="load"
  >
    <var-cell :key="item" v-for="item in list">
      List Item: {{ item }}
    </var-cell>
  </var-list>
</template>
```

### Tip Text

```html
<script setup>
import { ref } from 'vue'

const loading = ref(false)
const finished = ref(false)
const list = ref([])

const load = () => {
  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      list.value.push(list.value.length + 1)
    }

    loading.value = false

    if (list.value.length >= 60) {
      finished.value = true
    }
  }, 1000)
}
</script>

<template>
  <var-list 
    loading-text="loading QAQ" 
    finished-text="finished ORZ" 
    error-text="error TNT" 
    :finished="finished" 
    v-model:loading="loading" 
    @load="load"
  >
    <var-cell :key="item" v-for="item in list">
      List Item: {{ item }}
    </var-cell>
  </var-list>
</template>
```

### Combine

Combined with the `PullRefresh` component to implement the function of pull-up loading and pull-down refresh, ensuring the height of the `PullRefresh` is not `0`.

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

### Be Careful

We detect bottoming by listening for the scroll event of the scroll container and perform the load.
A scroll container is the nearest element that `overflow-y='auto'` or `scroll`
When you set an element's `overflow-x` to a value other than `visible`, The browser will fix your `overflow-y` to `auto` in order to maintain a `BFC` structure.
This can be mistaken for a scroll container, so avoid it.

## API

### Props

| Prop              | Description                                                               | Type               | Default     |
| ----------------- | ------------------------------------------------------------------------- | ------------------ | ----------- |
| `v-model:loading` | loading state                                                             | _boolean_          | `false`     |
| `v-model:error`   | error state                                                               | _boolean_          | `false`     |
| `immediate-check` | Whether the location is detected immediately when the List is initialized | _boolean_          | `true`      |
| `finished`        | Whether the load is complete                                              | _boolean_          | `false`     |
| `offset`          | Trigger distance from the bottom                                          | _string \| number_ | `0`         |
| `loading-text`    | Loading text                                                              | _string_           | `Loading`   |
| `finished-text`   | Finished text                                                             | _string_           | `No more`   |
| `error-text`      | Error text                                                                | _string_           | `Load fail` |

### Methods

| Method  | Description                                             | Arguments | Return |
| ------- | ------------------------------------------------------- | --------- | --- |
| `check` | Trigger position check, touch bottom trigger load event | `-`       | `-` |

### Events

| Event  | Description                  | Arguments |
| ------ | ---------------------------- | --------- |
| `load` | Triggered when it hit bottom | `-`       |

### Slots

| Name | Description | SlotProps |
| ---------- | ---------------- | --------- |
| `default`  | List content     | `-`       |
| `loading`  | Loading content  | `-`       |
| `error`    | Error content    | `-`       |
| `finished` | Finished content | `-`       |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable                    | Default               |
| --------------------------- | --------------------- |
| `--list-loading-height`     | `50px`                |
| `--list-finished-height`    | `50px`                |
| `--list-error-height`       | `50px`                |
| `--list-loading-color`      | `#888`                |
| `--list-finished-color`     | `#888`                |
| `--list-error-color`        | `#888`                |
| `--list-loading-font-size`  | `var(--font-size-md)` |
| `--list-finished-font-size` | `var(--font-size-md)` |
| `--list-error-font-size`    | `var(--font-size-md)` |
