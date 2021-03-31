# Select

### Install

```js
import { createApp } from 'vue';
import { Select, Option } from '@varlet/ui';

createApp().use(Select).use(Option)
```

### Basic Usage

```html
The component uses the option's label as the displayed text.
The component uses the value of the option first as the value of the option, followed by the label.
```

```js
export default {
  setup() {
    const value = ref('')

    return { value }
  },
}
```

```html
<var-select placeholder="Please select one the options" v-model="value">
  <var-option label="Eat" />
  <var-option label="Sleep" />
</var-select>
```

### Plain Mode

```html
If you only need the basic functionality of the component, you can remove some of the styles through attributes.
```

```html
<var-select 
  :hint="false" 
  :line="false"
  placeholder="Please select one the options" 
  v-model="value"
>
  <var-option label="Eat" />
  <var-option label="Sleep" />
</var-select>
```

### Label relation value

```html
<var-select placeholder="Please select one the options" v-model="value">
  <var-option label="Eat" :value="1" />
  <var-option label="Sleep" :value="2" />
</var-select>
```

### Disabled

```html
<var-select 
  placeholder="Please select one the options" 
  disabled
  v-model="value"
>
  <var-option label="Eat" />
  <var-option label="Sleep" />
</var-select>
```

### Readonly

```html
<var-select 
  placeholder="Please select one the options"
  readonly 
  v-model="value"
>
  <var-option label="Eat" />
  <var-option label="Sleep" />
</var-select>
```

### Clearable

```html
<var-select
  placeholder="Please select one the options" 
  clearable
  v-model="value"
>
  <var-option label="Eat" />
  <var-option label="Sleep" />
</var-select>
```

### Display Icon
```js
import { createApp } from 'vue'
import { Icon } from '@varlet/ui'

createApp().use(Icon)
```

```html
<var-select placeholder="Please select one the options" v-model="value">
  <template #prepend-icon>
    <var-icon name="plus"/>
  </template>
  <template #append-icon>
    <var-icon name="minus"/>
  </template>
  <template #default>
    <var-option label="Eat" />
    <var-option label="Sleep" />
  </template>
</var-select>
```

### Multiple Selection

```js
export default {
  setup() {
    const value = ref([])

    return { value }
  },
}
```

```html
<var-select 
  placeholder="Please select multiple options" 
  multiple
  v-model="value"
>
  <var-option label="Eat" />
  <var-option label="Sleep" />
  <var-option label="Play game" />
  <var-option label="Coding" />
</var-select>
```

### Multiple choice of paper style

```html
<var-select 
  placeholder="Please select multiple options"
  chip
  multiple
  v-model="value"
>
  <var-option label="Eat" />
  <var-option label="Sleep" />
  <var-option label="Play game" />
  <var-option label="Coding" />
</var-select>
```

### Validate

```html
<var-select 
  placeholder="Please select one the options" 
  :rules="[(v) => v === 'Rest' || 'You must choose to rest']"
  v-model="value"
>
  <var-option label="Eat" />
  <var-option label="Sleep" />
  <var-option label="Rest" />
</var-select>
```

### Multiple Validate

```html
<var-select
  placeholder="Please select multiple options"
  multiple
  :rules="[(v) => v.length >= 2 || 'You select at least two options']"
  v-model="value"
>
  <var-option label="Eat" />
  <var-option label="Sleep" />
  <var-option label="Play game" />
  <var-option label="Coding" />
</var-select>
```

## API

### Props

### Select Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `v-model` | The value of the binding | _any \| any[]_ | `-` |
| `placeholder` | placeholder | _string_ | `-` |
| `multiple` | Whether to enable multiple selection | _boolean_ | `false` |  
| `chip` | Whether to use chip style (multiple choices only) | _boolean_ | `false` |  
| `line` | Whether to display a dividing line | _boolean_ | `true` |
| `hint` | Whether to use placeholders as prompts | _boolean_ | `true` |
| `text-color` | Text color | _string_ | `-` |
| `focus-color` | The primary color in focus | _string_ | `-` |
| `blur-color` | The primary color in blur | _string_ | `-` |
| `readonly` | Whether the readonly | _boolean_ | `false` |
| `disabled` | Whether the disabled | _boolean_ | `false` |
| `clearable` | Whether the clearable | _boolean_ | `false` |
| `validate-trigger` | Timing to trigger validation， Optional value is `onFocus` `onBlur` `onChange` `onClick` `onClear` `onClose` | _ValidateTriggers[]_ | `['onChange', 'onClear', 'onClose']` |
| `rules` | The validation rules，Returns `true` to indicate that the validation passed，The remaining values are converted to text as user prompts | _Array<(v: any | any[]) => any>_ | `-` |

### Option Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `label` | The text that the option displays | _any_ | `-` |
| `value` | The value of the option binding | _any_ | `-` |

### Methods

### Select Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `focus` | Focus | `-` | `-` |
| `blur` | Blur | `-` | `-` |
| `validate` | Trigger validate | `-` | `-` |
| `resetValidation` | Clearing validate messages | `-` | `-` |
| `reset` | Clear the value of the binding (single set to 'undefined', multiple set to '[]') and the validation messages | `-` | `-` |

### Events

### Select Events

| Event | Description | Arguments |
| --- | --- | --- |
| `focus` | Trigger while focusing | `event: Event` |
| `blur` | Triggered when out of focus | `event: Event` |
| `click` | Triggered on click | `event: Event` |
| `clear` | Triggered on clearance | `value: any \| any[]` |
| `close` | Triggered on close | `value: any \| any[]` |
| `change` | Triggered when change | `value: any \| any[]` |

### Slots

### Select Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `prepend-icon` | Prepend icon | `-` |
| `append-icon` | Append icon | `-` |

### Option Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Options to display the content | `-` |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

### Select Variables

| Variable | Default |
| --- | --- |
| `@select-select-text-color` | `#555` |
| `@select-select-padding` | `5px 0` |
| `@select-error-color` | `@color-danger` |
| `@select-blur-color` | `#888` |
| `@select-focus-color` | `@color-primary` |
| `@select-scroller-background` | `#fff` |
| `@select-scroller-padding` | `6px 0` |
| `@select-scroller-max-height` | `278px` |
| `@select-placeholder-size` | `16px` |
| `@select-placeholder-offset-top` | `4px` |
| `@select-icon-padding` | `@select-placeholder-size 0 0` |
| `@select-icon-size` | `20px` |
| `@select-select-text-color` | `#555` |
| `@select-chip-margin` | `5px 5px 5px 0` |
| `@select-line-size` | `1px` |
| `@select-line-spread-size` | `2px` |
| `@select-arrow-size` | `20px` |
| `@select-disabled-color` | `#aaa` |

### Option Variables

| Variable | Default |
| --- | --- |
| `@option-height` | `38px` |
| `@option-padding` | `0 12px` |
| `@option-selected-background` | `@select-focus-color` |