# IndexBar

### Intro

Hyperlinks to scroll on one page.

### Install

```js
import { createApp } from 'vue'
import { IndexBar, IndexAnchor } from '@varlet/ui'

createApp().use(IndexBar).use(IndexAnchor)
```

### Basic Usage

When you click the index bar, it will automatically jump to the corresponding `IndexAnchor` anchor position.

```html
<var-index-bar @change="change" duration="300">
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
import { ref, onMounted } from 'vue'

  export default {
    setup() {
      const list = ref([])

      onMounted(() => {
        for (let i = 0; i < 26; i++) {
          list.value.push(String.fromCharCode(65 + i))
        }
      })

      const change = (value) => {
        console.log(value)
      }

      return {
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
| `sticky` | Whether to enable anchor sticky top | _boolean_ | `true` |
| `sticky-offset-top` | Anchor offset top when sticky | _number_ | `0` |
| `hide-list` | Whether to hide anchor list | _boolean_ | `false` |
| `css-mode` | Enable native `css sticky` mode | _boolean_ | `false` |
| `z-index` | z-index | _string \| number_ | `1` |
| `highlight-color` | Index character highlight color | _string_ | `#ee0a24` |
| `duration` | Animation duration | _string \| number_ | `0` |

### IndexAnchor Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `index` | Index | _string \| number_ | `-` |

### Events

### IndexBar Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `click` | Emitted when an index is clicked | `index: number \| string` |
| `change` | Emitted when active index changed	| `index: number \| string` |

### Slots

### IndexAnchor Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Custom index character | `-` |

### Methods
Use ref to get IndexBar instance and call instance methods.

| Name | Description	 | arguments |
| ---- | ------- | -------- |
| `scrollTo` | scroll to target element	 | `index: number \| string` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--index-bar-list-item-font-size` | `var(--font-size-xs)` |
| `--index-bar-list-item-color` | `var(--color-primary)` |
| `--index-bar-list-item-active-color` | `var(--color-danger)` |
| `--index-bar-list-item-height` | `14px` |
| `--index-bar-list-item-padding` | `0 10px` |
