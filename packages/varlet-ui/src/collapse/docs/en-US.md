# Collapse

### Intro

A content area which can be collapsed and expanded.

### Install

```js
import { createApp } from 'vue'
import { Collapse, CollapseItem } from '@varlet/ui'

createApp().use(Collapse).use(CollapseItem)
```

### Basic Usage

Use `v-model` to control the name of active panels. `value` is an Array.

```html
<var-collapse v-model="value" @change="changeHandle">
  <var-collapse-item title="Title" name="1">Hello World</var-collapse-item>
  <var-collapse-item title="Title" name="2">Hello World</var-collapse-item>
</var-collapse>
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const value = ref(['1'])

    const changeHandle = (val) => {
      console.log(val)
    }
    
    return {
      value,
      changeHandle
    }
  }
}
```

### Hide The Margin

Use `offset` prop to hide the margin.

```html
<var-collapse v-model="value" :offset="false">
  <var-collapse-item title="Title" name="1">Hello World</var-collapse-item>
  <var-collapse-item title="Title" name="2">Hello World</var-collapse-item>
</var-collapse>
```

### Accordion Mode

Use `accordion` prop to open accordion mode, In this case `value` is a String.

```html
<var-collapse v-model="value" accordion :offset="false">
  <var-collapse-item title="Title" name="1">Hello World</var-collapse-item>
  <var-collapse-item title="Title" name="2">Hello World</var-collapse-item>
</var-collapse>
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const value = ref('')
    
    return {
      value
    }
  }
}
```

### Disabled

Use the `disabled` prop to disable CollapseItem.

```html
<var-button @click="disabled = !disabled" style="margin-bottom: 8px">
  {{ disabled ? 'enable' : 'disable' }}
</var-button>
<var-collapse v-model="value">
  <var-collapse-item title="Title" :name="1" :disabled="disabled">
    Hello World
  </var-collapse-item>
  <var-collapse-item title="Title" :name="2" :disabled="disabled">
    Hello World
  </var-collapse-item>
</var-collapse>
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const value = ref([1])
    const disabled = ref(false)

    return {
      value,
      disabled
    }
  }
}
```

### Custom Content

```html
<var-collapse v-model="value">
  <var-collapse-item title="This is a Title" name="1" icon="account-circle">
    Hello World
  </var-collapse-item>
  <var-collapse-item name="2">
    <template #title>This is a Title</template>
    <template #icon>^_^</template>
    This is a content
  </var-collapse-item>
</var-collapse>
```

## API

### Props

### Collapse Props

| Prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `v-model` | Names of current active panels | accordion mode： _string \| number_ <br> non-accordion mode：_string[] \| number[]_ | `-` |
| `accordion` | Whether to be accordion mode | _boolean_ | `false` |
| `offset` | Whether to show margin | _boolean_ | `true` |

### CollapseItem Props

| Prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `name` | Name | _string \| number_ | `index` |
| `title` | Title | _string \| number_ | `-` |
| `icon` | Icon name | _string_ | `chevron-down` |
| `disabled` | Whether to disabled collapse	 | _boolean_ | `false` |

### Events

### Collapse Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `change` | Emitted when active index changed | `value` |

### Slots

### CollapseItem Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Content | `-` |
| `title` | Title | `-` |
| `icon` | Custom right icon | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--collapse-background` | `#fff` |
| `--collapse-text-color` | `#232222` |
| `--collapse-header-font-size` | `var(--font-size-lg)` |
| `--collapse-header-padding` | `10px 16px` |
| `--collapse-content-font-size` | `var(--font-size-md)` |
| `--collapse-content-padding` | `0 12px 10px` |
| `--collapse-item-margin-top` | `16px` |
| `--collapse-disable-color` | `#bdbdbd` |
| `--collapse-border-top` | `thin solid rgba(0, 0, 0, 0.12)` |
