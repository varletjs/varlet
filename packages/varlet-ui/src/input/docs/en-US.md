# Input

### Intro

The behavior of the input box is consistent with the basic content, and the user can always get a string that conforms to the `type` rule when inputting.

### Standard Variant

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const standardValue = ref('')
const standardValue2 = ref('')
const standardValue3 = ref('')
const standardValue4 = ref('')
const standardValue5 = ref('')
const standardValue6 = ref('')
const standardValue7 = ref('')
const standardValue8 = ref('')
const standardValue9 = ref('')
const standardValue10 = ref('')
const standardValue11 = ref('')
const standardValue12 = ref('')
const standardValue13 = ref('')
</script>

<template>
  <var-space direction="column" size="large">
    <var-input v-model="standardValue" placeholder="Please enter text" />
    <var-input v-model="standardValue2" placeholder="Please enter number" type="number" />
    <var-input v-model="standardValue3" placeholder="Readonly" readonly />
    <var-input v-model="standardValue4" placeholder="Disabled" disabled />
    <var-input v-model="standardValue5" placeholder="Clearable" clearable />
    <var-input v-model="standardValue6" placeholder="Use the clear icon slot" clearable>
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-input>
    <var-input v-model="standardValue7" placeholder="Validate" :rules="(v) => v.length > 6 || 'Text length must be greater than 6'" />
    <var-input v-model="standardValue8" placeholder="Validate With Zod" :rules="z.string().min(7, 'Text length must be greater than 6')" />
    <var-input v-model="standardValue9" placeholder="Display Icon">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>
    <var-input v-model="standardValue10" placeholder="Maxlength" :maxlength="10" />
    <var-input v-model="standardValue11" placeholder="Textarea" textarea />
    <var-input v-model="standardValue12" placeholder="Small Size" size="small" />
    <var-input v-model.trim="standardValue13" placeholder="Removes whitespace from both ends of this string" />
  </var-space>
</template>

<style>
.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}
</style>
```

### Outlined Variant

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const outlinedValue = ref('')
const outlinedValue2 = ref('')
const outlinedValue3 = ref('')
const outlinedValue4 = ref('')
const outlinedValue5 = ref('')
const outlinedValue6 = ref('')
const outlinedValue7 = ref('')
const outlinedValue8 = ref('')
const outlinedValue9 = ref('')
const outlinedValue10 = ref('')
const outlinedValue11 = ref('')
const outlinedValue12 = ref('')
const outlinedValue13 = ref('')
</script>

<template>
  <var-space direction="column" size="large">
    <var-input v-model="outlinedValue" variant="outlined" placeholder="Please enter text" />
    <var-input v-model="outlinedValue2" variant="outlined" placeholder="Please enter number" type="number" />
    <var-input v-model="outlinedValue3" variant="outlined" placeholder="Readonly" readonly />
    <var-input v-model="outlinedValue4" variant="outlined" placeholder="Disabled" disabled />
    <var-input v-model="outlinedValue5" variant="outlined" placeholder="Clearable" clearable />
    <var-input v-model="outlinedValue6" variant="outlined" placeholder="Use the clear icon slot" clearable>
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-input>
    <var-input v-model="outlinedValue7" variant="outlined" placeholder="Validate" :rules="(v) => v.length > 6 || 'Text length must be greater than 6'" />
    <var-input v-model="outlinedValue8" variant="outlined" placeholder="Validate With Zod" :rules="z.string().min(7, 'Text length must be greater than 6')" />
    <var-input v-model="outlinedValue9" variant="outlined" placeholder="Display Icon">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>
    <var-input v-model="outlinedValue10" variant="outlined" placeholder="Maxlength" :maxlength="10" />
    <var-input v-model="outlinedValue11" variant="outlined" placeholder="Textarea" textarea />
    <var-input v-model="outlinedValue12" variant="outlined" placeholder="Small Size" size="small" />
    <var-input v-model.trim="outlinedValue13" variant="outlined" placeholder="Removes whitespace from both ends of this string" />
  </var-space>
</template>

<style>
.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}
</style>
```

### Filled Variant

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const filledValue = ref('')
const filledValue2 = ref('')
const filledValue3 = ref('')
const filledValue4 = ref('')
const filledValue5 = ref('')
const filledValue6 = ref('')
const filledValue7 = ref('')
const filledValue8 = ref('')
const filledValue9 = ref('')
const filledValue10 = ref('')
const filledValue11 = ref('')
const filledValue12 = ref('')
const filledValue13 = ref('')
</script>

<template>
  <var-space direction="column" size="large">
    <var-input v-model="filledValue" variant="filled" placeholder="Please enter text" />
    <var-input v-model="filledValue2" variant="filled" placeholder="Please enter number" type="number" />
    <var-input v-model="filledValue3" variant="filled" placeholder="Readonly" readonly />
    <var-input v-model="filledValue4" variant="filled" placeholder="Disabled" disabled />
    <var-input v-model="filledValue5" variant="filled" placeholder="Clearable" clearable />
    <var-input v-model="filledValue6" variant="filled" placeholder="Use the clear icon slot" clearable>
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-input>
    <var-input v-model="filledValue7" variant="filled" placeholder="Validate" :rules="(v) => v.length > 6 || 'Text length must be greater than 6'" />
    <var-input v-model="filledValue8" variant="filled" placeholder="Validate With Zod" :rules="z.string().min(7, 'Text length must be greater than 6')" />
    <var-input v-model="filledValue9" variant="filled" placeholder="Display Icon">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>
    <var-input v-model="filledValue10" variant="filled" placeholder="Maxlength" :maxlength="10" />
    <var-input v-model="filledValue11" variant="filled" placeholder="Textarea" textarea />
    <var-input v-model="filledValue12" variant="filled" placeholder="Small Size" size="small" />
    <var-input v-model.trim="filledValue13" variant="filled" placeholder="Removes whitespace from both ends of this string" />
  </var-space>
</template>

<style>
.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}
</style>
```

## API

### Props

| Prop | Description                                                                                                                            | Type | Default |
| --- |----------------------------------------------------------------------------------------------------------------------------------------| --- | --- |
| `v-model` | The value of the binding                                                                                                               | _string_ | `-` |
| `placeholder` | placeholder                                                                                                                            | _string_ | `-` |
| `type` | Input type, The optional value is `text` `password` `number` `tel`                                                            | _string_ | `text` |
| `size` | Input size, The optional value is `normal` `small`                                                          | _string_ | `normal` |
| `variant` | Input variants, The optional value is `standard` `outlined` `filled`     | _string_ | `standard` |
| `maxlength` | Maxlength                                                                                                                              | _string \| number_ | `-` |
| `textarea` | Is it a textarea                                                                                                                       | _boolean_ | `false` |  
| `rows` | Number of lines to display in the textarea                                                                                             | _string \| number_ | `8` |  
| `line` | Whether to display a dividing line                                                                                                     | _boolean_ | `true` |
| `hint` | Whether to use placeholder as hint                                                                                                     | _boolean_ | `true` |
| `text-color` | Text color                                                                                                                             | _string_ | `-` |
| `focus-color` | The primary color in focus                                                                                                             | _string_ | `-` |
| `blur-color` | The primary color in blur                                                                                                              | _string_ | `-` |
| `readonly` | Whether the readonly                                                                                                                   | _boolean_ | `false` |
| `disabled` | Whether the disabled                                                                                                                   | _boolean_ | `false` |
| `clearable` | Whether the clearable                                                                                                                  | _boolean_ | `false` |
| `resize` | Whether textarea can be dragged to resize                                                                                              | _boolean_ | `false` |
| `autofocus` | Whether the autofocus                                                                                                                  | _boolean_ | `false` |
| `validate-trigger` | Timing to trigger validation, The optional value is `onFocus` `onBlur` `onChange` `onClick` `onClear` `onInput`                        | _InputValidateTrigger[]_ | `['onInput', 'onClear']` |
| `rules` | Validation rules, return `true` to indicate verification passes, other types of values ​​will be converted into text as user prompts. [Zod validation](#/en-US/zodValidation) is supported since `3.5.0` | _((v: string) => any) \| ZodType \| Array<((v: string) => any) \| ZodType>_ | `-` |
| `enterkeyhint` | Customize the enter key style, See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) | _string_ | `-` |
| `aria-label` ***3.8.4*** | See [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-label) | _string_ | `-` |
| `prevent-auto-fill` ***3.11.4***  | Prevent browser autofill behavior | _boolean_ | `true` |
| `inputmode` ***3.11.4*** | Consistent with the inputmode property of native input  | _string_ | `-` |
| `tabindex` ***3.12.1*** | Consistent with the tabindex property of native input  | _string_ | `-` |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `focus` | Focus | `-` | `-` |
| `blur` | Blur | `-` | `-` |
| `select` | Select all text in the input | `-` | `-` |
| `validate` | Trigger validate | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clear validate messages | `-` | `-` |
| `reset` | Clear the value of the binding and validate messages | `-` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `focus` | Triggered while focusing | `event: Event` |
| `blur` | Triggered when out of focus | `event: Event` |
| `click` | Triggered on Click | `event: Event` |
| `clear` | Triggered on Clearance | `value: string` |
| `input` | Triggered on input | `value: string`, `event: Event` |
| `change` | Triggered on change | `value: string`, `event: Event` |


### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `prepend-icon` | Prepend Icon | `-` |
| `append-icon` | Append Icon | `-` |
| `clear-icon` | Clear Icon | `clear: (e: Event) => void` clear function (can be used to clear input box contents when using slots) |
| `extra-message` | Extra message | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--field-decorator-text-color` | `#555` |
| `--field-decorator-error-color` | `var(--color-danger)` |
| `--field-decorator-blur-color` | `#888` |
| `--field-decorator-focus-color` | `var(--color-primary)` |
| `--field-decorator-placeholder-size` | `16px` |
| `--field-decorator-icon-size` | `20px` |
| `--field-decorator-line-size` | `1px` |
| `--field-decorator-line-focus-size` | `2px` |
| `--field-decorator-line-border-radius` | `4px` |
| `--field-decorator-disabled-color` | `var(--color-text-disabled)` |
| `--field-decorator-standard-normal-margin-top` | `22px` |
| `--field-decorator-standard-normal-margin-bottom` | `4px` |
| `--field-decorator-standard-normal-icon-margin-top` | `22px` |
| `--field-decorator-standard-normal-icon-margin-bottom` | `4px` |
| `--field-decorator-standard-normal-non-hint-margin-top` | `4px` |
| `--field-decorator-standard-small-margin-top` | `18px` |
| `--field-decorator-standard-small-margin-bottom` | `4px` |
| `--field-decorator-standard-small-icon-margin-top` | `18px` |
| `--field-decorator-standard-small-icon-margin-bottom` | `4px` |
| `--field-decorator-standard-small-non-hint-margin-top` | `2px` |
| `--field-decorator-outlined-normal-margin-top` | `16px` |
| `--field-decorator-outlined-normal-margin-bottom` | `16px` |
| `--field-decorator-outlined-normal-padding-left` | `16px` |
| `--field-decorator-outlined-normal-padding-right` | `16px` |
| `--field-decorator-outlined-normal-placeholder-space` | `4px` |
| `--field-decorator-outlined-normal-icon-margin-top` | `16px` |
| `--field-decorator-outlined-normal-icon-margin-bottom` | `16px` |
| `--field-decorator-outlined-small-margin-top` | `8px` |
| `--field-decorator-outlined-small-margin-bottom` | `8px` |
| `--field-decorator-outlined-small-padding-left` | `12px` |
| `--field-decorator-outlined-small-padding-right` | `12px` |
| `--field-decorator-outlined-small-placeholder-space` | `2px` |
| `--field-decorator-outlined-small-icon-margin-top` | `8px` |
| `--field-decorator-outlined-small-icon-margin-bottom` | `8px` |
| `--field-decorator-filled-background-color` | `rgb(246, 246, 246)` |
| `--field-decorator-filled-border-radius` | `4px` |
| `--field-decorator-filled-normal-placeholder-hint-top` | `4px` |
| `--field-decorator-filled-normal-margin-top` | `26px` |
| `--field-decorator-filled-normal-margin-bottom` | `6px` |
| `--field-decorator-filled-normal-hint-center-margin-top` | `16px` |
| `--field-decorator-filled-normal-hint-margin-top` | `16px` |
| `--field-decorator-filled-normal-non-hint-margin-top` | `16px` |
| `--field-decorator-filled-normal-non-hint-margin-bottom` | `16px` |
| `--field-decorator-filled-normal-padding-left` | `16px` |
| `--field-decorator-filled-normal-padding-right` | `16px` |
| `--field-decorator-filled-normal-placeholder-space` | `4px` |
| `--field-decorator-filled-normal-icon-margin-top` | `16px` |
| `--field-decorator-filled-normal-icon-margin-bottom` | `16px` |
| `--field-decorator-filled-small-placeholder-hint-top` | `2px` |
| `--field-decorator-filled-small-margin-top` | `18px` |
| `--field-decorator-filled-small-margin-bottom` | `2px` |
| `--field-decorator-filled-small-hint-center-margin-top` | `10px` |
| `--field-decorator-filled-small-hint-margin-top` | `10px` |
| `--field-decorator-filled-small-padding-left` | `12px` |
| `--field-decorator-filled-small-padding-right` | `12px` |
| `--field-decorator-filled-small-placeholder-space` | `2px` |
| `--field-decorator-filled-small-icon-margin-top` | `10px` |
| `--field-decorator-filled-small-icon-margin-bottom` | `10px` |
| `--field-decorator-filled-small-non-hint-margin-top` | `10px` |
| `--field-decorator-filled-small-non-hint-margin-bottom` | `10px` |
| `--input-input-height` | `24px` |
| `--input-input-font-size` | `16px` |
| `--input-textarea-height` | `auto` |
