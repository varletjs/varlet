# IndexBar

### Intro

Hyperlinks to scroll on one page.

### Install

```js
import { IndexBar, IndexAnchor } from '@varlet/ui'

createApp().use(IndexBar).use(IndexAnchor)
```

### Basic Usage

When you click the index bar, it will automatically jump to the corresponding `IndexAnchor` anchor position.

```html
<var-index-bar v-model:active="active" @change="change">
  <div v-for="item in list" :key="item">
    <var-index-anchor 
      :index="item" 
      class="var-index-anchor__example"
    > 
      Title {{ item }} 
    </var-index-anchor>
    <var-cell>{{ item }} Text</var-cell>
    <var-cell>{{ item }} Text</var-cell>
    <var-cell>{{ item }} Text</var-cell>
  </div>
</var-index-bar>
```
```javascript
  export default {
    setup() {
      const active = ref('A')
      const list = ref([])

      onBeforeMount(() => {
        for (let i = 0; i < 26; i++) {
          list.value.push(String.fromCharCode(65 + i))
        }
      })

      const change = (value) => {
        console.log(value)
      }

      return {
        active,
        list,
        change
      }
    }
  }
```

## API

### Props

### IndexBar Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `v-model:active` | The currently active anchor | _number_ ｜ _string_ | - |
| `sticky` | Whether to enable anchor sticky top | _boolean_ | `true` |
| `sticky-offset-top` | Anchor offset top when sticky | _number_ | `0` |
| `z-index` | z-index | _number_ ｜ _string_ | `1` |
| `highlight-color` | Index character highlight color | _string_ | `#ee0a24` |

### IndexAnchor Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `index` | Index | _number_ ｜ _string_ | - |

### Events

### IndexBar Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `click` | Emitted when an index is clicked | `index: number ｜ string` |
| `change` | Emitted when active index changed	| `index: number ｜ string` |

### Slots

### IndexAnchor Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Custom index character | - |

### Methods
Use ref to get IndexBar instance and call instance methods.

| Name | Description	 | arguments |
| ---- | ------- | -------- |
| `scrollTo` | scroll to target element	 | `index: number ｜ string` |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@index-bar-list-item-font-size` | `@font-size-xs` |
| `@index-bar-list-item-color` | `@color-primary` |
| `@index-bar-list-item-active-color` | `@color-danger` |
| `@index-bar-list-item-height` | `14px` |
| `@index-bar-list-item-padding` | `0 10px` |
