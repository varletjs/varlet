# Slider

### Intro

Used to take values within a given range.

### Install

```js
import { createApp } from 'vue'
import { Slider } from '@varlet/ui'

createApp().use(Slider)
```

### Basic Usage

```html
<var-slider v-model="value" />
```

```javascript
import { ref } from 'vue'

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

Set step increment by `step`.

```html
<var-slider v-model="value" step="10" />
```

### Dual thumb

Open the double slider mode through the `range` attribute. Make sure the `value` is an **array**.

```html
<var-slider v-model="value" range @change="handleChange" />
```

```javascript
import { ref } from 'vue'

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

Control the size of slider through `track-height` and `thumb-size`.

```html
<var-slider v-model="value" track-height="4" thumb-size="8" range />
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
### Custom Button

The props such as `label-visible`, `label-text-color`, `thumb-size` are invalid when using slot custom buttons.

```html
<var-slider v-model="value" range active-color="#52af77">
  <template #button="currentValue">
    <div class="slider-example_block">{{ currentValue }}</div>
  </template>
</var-slider>
```
```css
.slider-example_block {
  width: 25px;
  border: 1px solid #52af77;
  color: #52af77;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: #ebebeb 0 2px 2px;
  border-radius: 50%;
  font-size: 12px;
  background-color: #fff;
}
```


### Show label
Control the display of labels through the `label-visible` attribute.

```html
<var-slider v-model="value" label-visible="never" />
<var-slider v-model="value1" />
<var-slider v-model="value2" label-visible="always" />
```

### Validate value

Verify the value through the `rules` attribute.

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
| `v-model` | The value of slider | _number \| [number, number]_ | `0` |
| `step`| Step size. The value is an integer between `1 ~ 100` | _string \| number_ | `1` |
| `range`| Whether open the dual thumb mode | _boolean_ | `false` |
| `label-visible` | Whether to display labels, the optional value is `always, normal, never` | _string_ | `normal` |
| `label-text-color` | Color of label text | _string_ | `#fff` |
| `track-height` | Height of slider | _string \| number_ | `2` |
| `thumb-size` | Size of thumb | _string \| number_ | `12` |
| `disabled`| 	Whether to disable slider  | _boolean_  | `false` |
| `readonly`| 	Whether to readonly slider | _boolean_  | `false` |
| `rules`| Validation rules | _array_  | `-` |


### Events

| Event | Description | arguments |
| ----- | -------- | -------- |
| `change` | 	Emitted after slider changed | value: current value |
| `start` | Emitted when start dragged | `-` |
| `end` | Emitted when end dragged | value: current value |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `button` | Custom button | `currentValue`: current value |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--slider-error-color` | `var(--color-danger)` |
| `--slider-track-background` | `#bdbdbd` |
| `--slider-track-fill-background` | `var(--color-primary)` |
| `--slider-thumb-block-background` | `var(--color-primary)` |
| `--slider-thumb-ripple-background` | `var(--color-primary)` |
| `--slider-thumb-label-background` | `var(--color-primary)` |
| `--slider-thumb-label-font-size` | `var(--font-size-sm)` |