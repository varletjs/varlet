# Slider

### Intro

Used to take values within a given range.

### Install

```js
import { Slider } from '@varlet/ui'

createApp().use(Slider)
```

### Basic Usage

```html
<var-slider v-model="value" />
```

```javascript
export default {
  setup() {
    const value = ref(3)

    return {
      value
    }
  }
}
```

### Step size

Use `step` to set step increment.

```html
<var-slider v-model="value" step="10" />
```

### Dual thumb

Use `range` to open dual thumb mode. Make sure the `value` is an **array**.

```html
<var-slider v-model="value" range @change="handleChange" />
```

```javascript
export default {
  setup() {
    const value = ref([3, 50])

    const handleChange = (value) => {
      console.log(value)
    }

    return {
      value
    }
  }
}
```

### Disable

```html
<var-slider v-model="value" disabled />
```

### Readonly

```html
<var-slider v-model="value" readonly />
```

### Slider size

Use `track-height`, `thumb-size` to set the slider size.

```html
<var-slider v-model="value" track-height="6" thumb-size="20" range />
```

### Custom style

```html
<var-slider
  v-model="value"
  label-color="purple"
  active-color="#e0732c"
  track-color="#3a68b4"
  thumb-color="#e25241"
  label-text-color="#ededed"
/>
```

### Show label
Use `label-visible` to set the visible of label.

```html
<var-slider v-model="value" label-visible="never" />
<var-slider v-model="value1" />
<var-slider v-model="value2" label-visible="always" />
```

### Validate value

Use `rules` to validate the value

<span style="font-size: 12px">`rules` is an array that accepts `functions`, `boolean`, and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`.</span>

```html
<var-slider 
  v-model="value" 
  :rules="[(v) => v > 35 || 'error message']" 
/>
```

## API

### Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `model-value / v-model` | The value of slider | _number_ \| _[number, number]_ | `0` |
| `step`| Step size. The value is an integer between `1 ~ 100` | _number_ \| _string_ | `1` |
| `range`| Whether open the dual thumb mode | _boolean_ | `false` |
| `label-visible` | Whether show the label. The value is one of `always, normal, never` | _string_ | `normal` |
| `label-text-color` | Color of label text | _string_ | `#fff` |
| `track-height` | Height of slider | _number_ \| _string_ | `2` |
| `thumb-size` | Size of thumb | _number_ \| _string_ | `12` |
| `disabled`| 	Whether to disable slider  | _boolean_  | `false` |
| `readonly`| 	Whether to readonly slider | _boolean_  | `false` |
| `rules`| Validation rules | _array_  | - |


### Events

| Event | Description | arguments |
| ----- | -------- | -------- |
| `change` | 	Emitted after slider changed | value: current value |
| `start` | Emitted when start dragged | - |
| `end` | Emitted when end dragged | value: current value |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@slider-error-color` | `@color-danger` |
| `@slider-track-background` | `#bdbdbd` |
| `@slider-track-fill-background` | `@color-primary` |
| `@slider-thumb-block-background` | `@color-primary` |
| `@slider-thumb-ripple-background` | `@color-primary` |
| `@slider-thumb-label-background` | `@color-primary` |
| `@slider-thumb-label-font-size` | `@font-size-sm` |