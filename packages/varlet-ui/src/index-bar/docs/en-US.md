# IndexBar

### Intro

Hyperlinks to scroll on one page.

### Basic Usage

When you click the index bar, it will automatically jump to the corresponding `IndexAnchor` anchor position.

```html
<script setup>
import { ref, onMounted } from 'vue'

const list = ref([])

function change(value) {
  console.log(value)
}

onMounted(() => {
  for (let i = 0; i < 26; i++) {
    list.value.push(String.fromCharCode(65 + i))
  }
})
</script>

<template>
  <var-index-bar duration="300" @change="change">
    <div v-for="item in list" :key="item">
      <var-index-anchor :index="item" class="var-index-anchor__example">
        Title {{ item }}
      </var-index-anchor>

      <var-cell>{{ item }} Text</var-cell>
      <var-cell>{{ item }} Text</var-cell>
    </div>
  </var-index-bar>
</template>

<style>
.var-index-anchor__example {
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  transition: all 0.25s;
  background: var(--color-primary);
  color: #fff;
}
</style>
```

## API

### Props

#### IndexBar Props

| Prop | Description | Type | Default |
| ----- | -------------- | -------- | --------- |
| `sticky` | Whether to enable anchor sticky top | _boolean_ | `true` |
| `sticky-offset-top` | Anchor offset top when sticky | _number \| string_ | `0` |
| `hide-list` | Whether to hide anchor list | _boolean_ | `false` |
| `css-mode` | Enable native `css sticky` mode | _boolean_ | `false` |
| `z-index` | z-index | _string \| number_ | `1` |
| `highlight-color` | Index character highlight color | _string_ | `#ee0a24` |
| `duration` | Animation duration | _string \| number_ | `0` |

#### IndexAnchor Props

| Prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `index` | Index | _string \| number_ | `-` |

### Events

#### IndexBar Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `click` | Emitted when an index is clicked | `index: number \| string` |
| `change` | Emitted when active index changed	| `index: number \| string` |

### Slots

#### IndexBar Slots

| Name | Description          | SlotProps |
| --- |----------------------| --- |
| `default` | Content of index bar | `-` |

#### IndexAnchor Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Custom index character | `-` |

### Methods
Use ref to get IndexBar instance and call instance methods.

| Method | Description	 | arguments | Return |
| ---- | ------- | -------- |---- |
| `scrollTo` | scroll to target element	 | `index: number \| string, options?: IndexBarScrollToOptions` | `-` |

#### IndexBarScrollToOptions

| Option              | Description                      | Type               | Default |
| --- | --- | --- | --- |
| `event` | prevent `change` emit event when `false` | _boolean_ | `-` |


### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--index-bar-list-item-font-size` | `var(--font-size-xs)` |
| `--index-bar-list-item-color` | `var(--color-primary)` |
| `--index-bar-list-item-active-color` | `var(--color-danger)` |
| `--index-bar-list-item-height` | `14px` |
| `--index-bar-list-item-padding` | `0 10px` |
