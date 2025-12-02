# Input

### Intro

The behavior of the input box is consistent with the basic content, and the user can always get a string that conforms to the `type` rule when inputting.

### Standard Variant

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const value = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')
const value9 = ref('')
const value10 = ref('')
const value11 = ref('')
const value12 = ref('')
const value13 = ref('')
const value14 = ref('')
const value15 = ref('')
const inputRef = ref()

const selectAll = () => {
  inputRef.value?.select()
}
</script>

<template>
  <var-space direction="column" size="large">
    <var-input placeholder="Please enter text" v-model="value" />
    <var-input placeholder="Please enter number" type="number" v-model="value13" />
    <var-input placeholder="Readonly" readonly v-model="value2" />
    <var-input placeholder="Disabled" disabled v-model="value3" />
    <var-input placeholder="Clearable" clearable v-model="value4" />
    <var-input clearable placeholder="Use the clear icon slot" v-model="value5">
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-input>
    <var-input
      placeholder="Validate"
      :rules="(v) => v.length > 6 || 'Text length must be greater than 6'"
      v-model="value6"
    />
    <var-input
      placeholder="Validate With Zod"
      :rules="z.string().min(7, 'Text length must be greater than 6')"
      v-model="value14"
    />
    <var-input placeholder="Display Icon" v-model="value7">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>
    <var-input placeholder="Custom Icon Size" v-model="value8">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" :size="28" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" :size="42" />
      </template>
    </var-input>
    <var-input placeholder="Maxlength" :maxlength="10" v-model="value9" />
    <var-input placeholder="Textarea" textarea v-model="value10" />
    <var-input placeholder="Small Size" size="small" v-model="value11" />
    <var-input placeholder="Removes whitespace from both ends of this string" v-model.trim="value12" />
    <var-input 
      ref="inputRef"
      placeholder="Enter text and click the button to select all" 
      v-model="value15"
    />
    <var-button type="primary" @click="selectAll">Select All</var-button>
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

const value = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')
const value9 = ref('')
const value10 = ref('')
const value11 = ref('')
const value12 = ref('')
const value13 = ref('')
const value14 = ref('')
const value15 = ref('')
const inputRef = ref()

const selectAll = () => {
  inputRef.value?.select()
}
</script>

<template>
  <var-space direction="column" size="large">
    <var-input variant="outlined" placeholder="Please enter text" v-model="value" />
    <var-input variant="outlined" placeholder="Please enter number" type="number" v-model="value13" />
    <var-input variant="outlined" placeholder="Readonly" readonly v-model="value2" />
    <var-input variant="outlined" placeholder="Disabled" disabled v-model="value3" />
    <var-input variant="outlined" placeholder="Clearable" clearable v-model="value4" />
    <var-input variant="outlined" clearable placeholder="Use the clear icon slot" v-model="value5">
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-input>
    <var-input
      variant="outlined"
      placeholder="Validate"
      :rules="(v) => v.length > 6 || 'Text length must be greater than 6'"
      v-model="value6"
    />
    <var-input
      variant="outlined"
      placeholder="validate With Zod"
      :rules="z.string().min(7, 'Text length must be greater than 6')"
      v-model="value14"
    />
    <var-input variant="outlined" placeholder="Display Icon" v-model="value7">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>
    <var-input 
      variant="outlined" 
      placeholder="Custom Icon Size"
      v-model="value8"
    >
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" :size="28" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" :size="42" />
      </template>
    </var-input>
    <var-input variant="outlined" placeholder="Maxlength" :maxlength="10" v-model="value9" />
    <var-input variant="outlined" placeholder="Textarea" textarea v-model="value10" />
    <var-input variant="outlined" placeholder="Small Size" size="small" v-model="value11" />
    <var-input variant="outlined" placeholder="Removes whitespace from both ends of this string" v-model.trim="value12" />
    <var-input 
      ref="inputRef"
      variant="outlined"
      placeholder="Enter text and click the button to select all" 
      v-model="value15"
    />
    <var-button type="primary" @click="selectAll">Select All</var-button>
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
| `variant` | Input variants, The optional value is `standard` `outlined`                                      | _string_ | `standard` |
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
| `--input-input-height` | `24px` |
| `--input-input-font-size` | `16px` |
| `--input-textarea-height` | `auto` |
