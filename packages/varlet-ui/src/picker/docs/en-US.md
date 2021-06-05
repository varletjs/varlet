# Picker

### Intro
Provides two kinds of function and component call mode support cascading mode at the same time, can handle multilevel linkage.

### Install

```js
import { createApp } from 'vue'
import { Picker } from '@varlet/ui'

createApp().use(Picker)
```

### Scoped Install

```js

import { Picker } from '@varlet/ui'

export default {
  components: {
    [Picker.Component.name]: Picker
  }
}
```

### Function Call

### Multi-column Picker

A two-dimensional array is passed in, and each entry of the array is the contents of each column.
Returns the user triggered status, selected text, and selected index.

```js
const columns = [
  Array.from({ length: 20 }).map((_, index) => index),
  Array.from({ length: 20 }).map((_, index) => index),
  Array.from({ length: 20 }).map((_, index) => index)
]
const { state, texts, indexes } = await Picker(columns)
```

### Cascade Picker

Passing in a `cascade` attribute starts cascading.
Built-in component library provides a three-level linkage between provinces and municipalities, import `area.json`.

```js
import columns from '@varlet/ui/json/area.json'

const { state, texts, indexes } = await Picker({
  cascade: true,
  columns
})
```

### Component Call

### Multi-column Picker

```html
<var-picker :columns="columns" />
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const columns = ref([
      Array.from({ length: 20 }).map((_, index) => index),
      Array.from({ length: 20 }).map((_, index) => index),
      Array.from({ length: 20 }).map((_, index) => index),
    ])

    return { columns }
  }
}
```

### Cascade Picker

```html
<var-picker cascade :columns="columns" />
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const columns = ref([
      {
        text: '北京市',
        children: [
          {
            text: '市辖区'
          }
        ]
      },
      {
        text: '河北省',
        children: [
          {
            text: '石家庄市'
          }
        ]
      }
    ])

    return { columns }
  }
}
```

### The three-level linkage between the provincial and municipal levels
The component library provides complete provincial information and can be used directly.

```js
import { ref } from 'vue'
import area from '@varlet/ui/json/area.json'

export default {
  setup() {
    const columns = ref(area)

    return { columns }
  }
}
```

## API

### Props

### Picker Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `columns` | Column content | _NormalColumn[] \| CascadeColumn[] \| Texts_ | `[]` |
| `title` | title | _string_ | `Pick it` |
| `text-key` | The attribute key of the text | _string_ | `text` |
| `toolbar` | Whether to display the top toolbar | _string_ | `true` |
| `cascade` | Whether to enable cascading mode | _boolean_ | `true` |
| `option-height` | Option height(px rem) | _string \| number_ | `44` |
| `option-count` | Number of options visible | _string \| number_ | `6` |
| `confirm-button-text` | Confirm button text | _string_ | `Confirm` |
| `cancel-button-text` | Cancel button text | _string_ | `Cancel` |
| `confirm-button-text-color` | Confirm the button text color | _string_ | `-` |
| `cancel-button-text-color` | Cancel button text color | _string_ | `-` |

### Picker Options

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `columns` | Column content | _NormalColumn[] \| CascadeColumn[] \| Texts_ | `[]` |
| `title` | title | _string_ | `Pick it` |
| `textKey` | The attribute key of the text | _string_ | `text` |
| `toolbar` | Whether to display the top toolbar | _string_ | `true` |
| `cascade` | Whether to enable cascading mode | _boolean_ | `true` |
| `optionHeight` | Option height | _string \| number_ | `44` |
| `optionCount` | Number of options visible | _string \| number_ | `6` |
| `confirmButtonText` | Confirm button text | _string_ | `Confirm` |
| `cancelButtonText` | Cancel button text | _string_ | `Cancel` |
| `confirmButtonTextColor` | Confirm the button text color | _string_ | `-` |
| `cancelButtonTextColor` | Cancel button text color | _string_ | `-` |
| `onOpen` | Popup open callback | _() => void_ | `-` |
| `onOpened` | Popup open-animation ends callback  | _() => void_ | `-` |
| `onClose` | Popup close callback | _() => void_ | `-` |
| `onClosed` | Close pop-up layer callback when animation ends | _(texts: Texts, indexes: number[]) => void_ | `() => void` |
| `onChange` | Pick callbacks when content changes | _(texts: Texts, indexes: number[]) => void_ | `() => void` |
| `onConfirm` | Pick callbacks when confirm | _(texts: Texts, indexes: number[]) => void_ | `() => void` |
| `onCancel` | Pick callbacks when cancel | _(texts: Texts, indexes: number[]) => void_ | `() => void` |

### Picker NormalColumn

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `texts` | Text array | _Texts_ | `-` |
| `initialIndex` | Initialize index | _number_ | `0` |

### Picker CascadeColumn

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `text` | Each line of text | _any_ | `-` |
| `children` | children tree | _CascadeColumn[]_ | `-` |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `confirm` | Immediately stop scrolling and trigger the `confirm` event | `-` | `-` |
| `cancel` | Immediately stop scrolling and trigger the `cancel` event | `-` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `change` | Triggered when the pick content changes | `texts: Texts(Text array), indexes: number[](picked index array)` |
| `cancel` | Triggered when you click the cancel button | `texts: Texts(Text array), indexes: number[](picked index array)` |
| `confirm` | Triggered when you click the confirm button | `texts: Texts(Text array), indexes: number[](picked index array)` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `cancel` | cancel button content | `-` |
| `title` | title content | `-` |
| `confirm` | confirm button content | `-` |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@picker-background` | `#fff` |
| `@picker-toolbar-height` | `44px` |
| `@picker-confirm-button-text-color` | `@color-primary` |
| `@picker-cancel-button-text-color` | `#888` |
| `@picker-picked-border` | `1px solid #eee` |
| `@picker-title-font-size` | `16px` |
| `@picker-toolbar-padding` | `0 4px` |
| `@picker-mask-background-image` | `linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))` |