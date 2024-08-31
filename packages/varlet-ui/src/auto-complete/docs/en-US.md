# AutoComplete

### Intro

Autocomplete function of input field.

### Standard Variant

```html
<script setup>
import { ref } from 'vue'

const { value, options } = useAutoComplete()
const { value: value2, options: options2 } = useAutoComplete()
const { value: value3, options: options3 } = useAutoComplete()
const { value: value4, options: options4 } = useAutoComplete()
const { value: value5, options: options5 } = useAutoComplete()
const { value: value6, options: options6 } = useAutoComplete()
const { value: value7, options: options7 } = useAutoComplete()
const { value: value8, options: options8 } = useAutoComplete()
const { value: value9, options: options9 } = useAutoComplete()
const { value: value10, options: options10 } = useAutoComplete()
const { value: value11, options: options11 } = useAutoComplete()

function useAutoComplete() {
  const value = ref('')
  const options = computed(() =>
    ['@qq.com', '@163.com', '@gmail.com'].map((suffix) => {
      const [prefix] = value.value.split('@')
      return {
        label: `${prefix}${suffix}`,
        value: `${prefix}${suffix}`,
      }
    })
  )

  return {
    value,
    options,
  }
}
</script>

<template>
  <var-space direction="column" size="large">
    <var-auto-complete placeholder="Please enter text" :options="options" v-model="value" />
    <var-auto-complete readonly placeholder="Readonly" :options="options2" v-model="value2" />
    <var-auto-complete disabled placeholder="Disabled" :options="options3" v-model="value3" />
    <var-auto-complete clearable placeholder="Clearable" :options="options4" v-model="value4" />
    <var-auto-complete clearable placeholder="Use the clear icon slot" :options="options5" v-model="value5">
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-auto-complete>
    <var-auto-complete
      placeholder="Validate"
      :options="options6"
      :rules="[(v) => v.length > 6 || 'Text length must be greater than 6']"
      v-model="value6"
    />
    <var-auto-complete placeholder="Display Icon" :options="options7" v-model="value7">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-auto-complete>  
    <var-auto-complete placeholder="Custom Icon Size" :options="options8" v-model="value8">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" :size="28" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" :size="42" />
      </template>
    </var-auto-complete>  
    <var-auto-complete
      placeholder="Maxlength"
      :maxlength="10"
      :options="options9"
      v-model="value9"
    />
    <var-auto-complete
      placeholder="Custom Menu Show Timing"
      :get-show="(value) => value.length > 3"
      :options="options10"
      v-model="value10"
    />  
    <var-auto-complete
      size="small"
      placeholder="Small Size"
      :options="options11"
      v-model="value11"
    />  
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

const { value, options } = useAutoComplete()
const { value: value2, options: options2 } = useAutoComplete()
const { value: value3, options: options3 } = useAutoComplete()
const { value: value4, options: options4 } = useAutoComplete()
const { value: value5, options: options5 } = useAutoComplete()
const { value: value6, options: options6 } = useAutoComplete()
const { value: value7, options: options7 } = useAutoComplete()
const { value: value8, options: options8 } = useAutoComplete()
const { value: value9, options: options9 } = useAutoComplete()
const { value: value10, options: options10 } = useAutoComplete()
const { value: value11, options: options11 } = useAutoComplete()

function useAutoComplete() {
  const value = ref('')
  const options = computed(() =>
    ['@qq.com', '@163.com', '@gmail.com'].map((suffix) => {
      const [prefix] = value.value.split('@')
      return {
        label: `${prefix}${suffix}`,
        value: `${prefix}${suffix}`,
      }
    })
  )

  return {
    value,
    options,
  }
}
</script>

<template>
  <var-space direction="column" size="large">
    <var-auto-complete variant="outlined" placeholder="Please enter text" :options="options" v-model="value" />
    <var-auto-complete variant="outlined" readonly placeholder="Readonly" :options="options2" v-model="value2" />
    <var-auto-complete variant="outlined" disabled placeholder="Disabled" :options="options3" v-model="value3" />
    <var-auto-complete variant="outlined" clearable placeholder="Clearable" :options="options4" v-model="value4" />
    <var-auto-complete variant="outlined" clearable placeholder="Use the clear icon slot" :options="options5" v-model="value5">
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-auto-complete>
    <var-auto-complete
      variant="outlined"
      placeholder="Validate"
      :options="options6"
      :rules="[(v) => v.length > 6 || 'Text length must be greater than 6']"
      v-model="value6"
    />
    <var-auto-complete variant="outlined" placeholder="Display Icon" :options="options7" v-model="value7">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-auto-complete>  
    <var-auto-complete variant="outlined" placeholder="Custom Icon Size" :options="options8" v-model="value8">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" :size="28" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" :size="42" />
      </template>
    </var-auto-complete>  
    <var-auto-complete
      variant="outlined"
      placeholder="Maxlength"
      :maxlength="10"
      :options="options9"
      v-model="value9"
    />
    <var-auto-complete
      variant="outlined"
      placeholder="Custom Menu Show Timing"
      :get-show="(value) => value.length > 3"
      :options="options10"
      v-model="value10"
    />  
    <var-auto-complete
      variant="outlined"
      size="small"
      placeholder="Small Size"
      :options="options11"
      v-model="value11"
    />  
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

#### AutoComplete Props

| Prop | Description | Type | Default |
| ------- | --- |----------------|-----------|
| `v-model` | The value of the binding                   | _string_ | `-` |
| `variant` | Input variants, The optional value is `standard` `outlined`    | _string_ | `standard` |
| `size` | Input size, The optional value is `normal` `small`     | _string_ | `normal` |
| `placeholder` | placeholder          | _string_ | `-` |
| `options`  | Specifies options | _AutoCompleteOption[]_ | `[]` |
| `label-key` | As the key that uniquely identifies label | _string_ | `label` |
| `value-key` | As the key that uniquely identifies value | _string_ | `value` |
| `maxlength` | Maxlength               | _string \| number_ | `-` |
| `readonly` | Whether the readonly          | _boolean_ | `false` |
| `disabled` | Whether the disabled             | _boolean_ | `false` |
| `validate-trigger` | Timing to trigger validation, The optional value is `onFocus` `onBlur` `onChange` `onClick` `onClear` `onInput`                        | _AutoCompleteValidateTrigger[]_ | `['onInput', 'onClear', 'onChange']` |
| `rules` | The validation rules, return `true` to indicate that the validation passed,The remaining values are converted to text as user prompts | _Array<(v: string) => any>_ | `-` |
| `enterkeyhint` | Customize the enter key style, See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) | _string_ | `-` |
| `clearable` | Whether the clearable       | _boolean_ | `false` |
| `line` | Whether to display a dividing line     | _boolean_ | `true` |
| `hint` | Whether to use placeholder as hint       | _boolean_ | `true` |
| `text-color` | Text color                     | _string_ | `-` |
| `focus-color` | The primary color in focus  | _string_ | `-` |
| `blur-color` | The primary color in blur      | _string_ | `-` |
| `get-show` | Determine whether the menu is displayed according to the input value | _(v: string) => boolean_ | `-` |

#### AutoCompleteOption 

| Prop | Description | Type | Default |
| ------- | --- |----------------|-----------|
| `label`    |   The text of option    | _string \| VNode \| (option: AutoCompleteOption, checked: boolean) => VNodeChild_      | `-`   |
| `value`  |    The value of option    | _any_      | `-`   |
| `disabled`    |    Whether to disable option   | _boolean_      | `-`   |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `focus` | Focus | `-` | `-` |
| `blur` | Blur | `-` | `-` |
| `validate` | Trigger validate | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clear validate messages | `-` | `-` |
| `reset` | Clear the value of the binding and validate messages | `-` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `focus` | Triggered while focusing | `-` |
| `blur` | Triggered when out of focus | `-` |
| `click` | Triggered on Click | `event: Event` |
| `clear` | Triggered on Clearance | `value: string` |
| `input` | Triggered on input | `value: string`, `event: Event` |
| `change` | Triggered on change | `value: string` |

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
| `--auto-complete-options-padding` | `6px 0`  |