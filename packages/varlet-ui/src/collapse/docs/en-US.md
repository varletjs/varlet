# Collapse

### Intro

A content area which can be collapsed and expanded.

### Install

```js
import { Collapse, CollapseItem } from '@varlet/ui'

createApp().use(Collapse).use(CollapseItem)
```

### Basic Usage

Use `v-model` to control the name of active panels. `value` is an Array

```html
<var-collapse v-model="value" @change="changeHandle">
  <var-collapse-item title="Title" name="1">Hello World</var-collapse-item>
  <var-collapse-item title="Title" name="2">Hello World</var-collapse-item>
</var-collapse>
```
```javascript
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
export default {
  setup() {
    const value = ref('')
    
    return {
      value,
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
  <var-collapse-item title="Title" :name="2">Hello World</var-collapse-item>
</var-collapse>
```
```javascript
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
  <var-collapse-item title="Title" name="1" icon="account-circle">
    Hello World
  </var-collapse-item>
  <var-collapse-item name="2">
    <template #title>Title</template>
    <template #icon>^_^</template>
    Hello World
  </var-collapse-item>
</var-collapse>
```

## API

### Props

### Collapse Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `model-value / v-model` | Names of current active panels | accordion mode： _number_ \| _string_ <br> non-accordion mode：_number[]_ \| _string[]_ | - |
| `accordion` | Whether to be accordion mode | _boolean_ | `false` |
| `offset` | Whether to show margin | _boolean_ | `true` |

### CollapseItem Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `name` | Name | _number_ \| _string_ | `index` |
| `title` | Title | _number_ \| _string_ | - |
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
| `default` | Content | - |
| `title` | Title | - |
| `icon` | Custom right icon | - |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@collapse-background` | `#fff` |
| `@collapse-color` | `#232222` |
| `@collapse-header-font-size` | `@font-size-lg` |
| `@collapse-header-padding` | `10px 16px` |
| `@collapse-content-font-size` | `@font-size-md` |
| `@collapse-content-font-size` | `14px` |
| `@collapse-item-margin-top` | `16px` |
| `@collapse-disable-color` | `#bdbdbd` |
