# Select

### Intro

Display and select the content through the drop-down menu.

### Standard Variant

```html
<script setup>
import { ref } from 'vue'

const value = ref()
const value2 = ref()
const value3 = ref()
const value4 = ref()
const value5 = ref()
const value6 = ref()
const value7 = ref([])
const value8 = ref([])
const value9 = ref()
const value10 = ref([])
const value11 = ref()
</script>

<template>
  <var-space direction="column" size="large">
    <var-select placeholder="Please select one the options" v-model="value">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select placeholder="Label relation value" v-model="value2">
      <var-option label="Eat" :value="1" />
      <var-option label="Sleep" :value="2" />
    </var-select>
    <div class="relation">The current selection is: {{ value2 }}</div>
    <var-select placeholder="Readonly" readonly v-model="value3">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select placeholder="Disabled" disabled v-model="value4">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select placeholder="Clearable" clearable v-model="value5">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select placeholder="Custom Icon" v-model="value6">
      <template #default>
        <var-option label="Eat">
          <var-icon class="selected-icon" name="cake-variant" />
          <span>Eat</span>
        </var-option>
        <var-option label="Sleep">
          <var-icon class="selected-icon" name="weather-night" />
          <span>Sleep</span>
        </var-option>
      </template>
      <template #selected>
        <var-icon class="selected-icon" :name="value6 === 'Eat' ? 'cake-variant' : 'weather-night'" />
        <span>{{ value6 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>
    <var-select placeholder="Multiple Selection" multiple v-model="value7">
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select placeholder="Multiple choice of paper style" chip multiple v-model="value8">
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select
      placeholder="Validate"
      :rules="[(v) => v === 'Rest' || 'You must choose to rest']"
      v-model="value9"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Rest" />
    </var-select>
    <var-select
      multiple
      placeholder="Multiple Validate"
      :rules="[(v) => v.length >= 2 || 'You select at least two options']"
      v-model="value10"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select size="small" placeholder="Small Size" v-model="value11">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
  </var-space>
</template>

<style>
.selected-icon {
  margin-right: 6px;
}

.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}

.arrow-icon-rotate {
  transform: rotate(180deg);
}
</style>
```

### Outlined Variant

```html
<script setup>
import { ref } from 'vue'

const value = ref()
const value2 = ref()
const value3 = ref()
const value4 = ref()
const value5 = ref()
const value6 = ref()
const value7 = ref([])
const value8 = ref([])
const value9 = ref()
const value10 = ref([])
const value11 = ref()
</script>

<template>
  <var-space direction="column" size="large">
    <var-select variant="outlined" placeholder="Please select one the options" v-model="value">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select variant="outlined" placeholder="Label relation value" v-model="value2">
      <var-option label="Eat" :value="1" />
      <var-option label="Sleep" :value="2" />
    </var-select>
    <div class="relation">The current selection is: {{ value2 }}</div>
    <var-select variant="outlined" placeholder="Readonly" readonly v-model="value3">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select variant="outlined" placeholder="Disabled" disabled v-model="value4">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select variant="outlined" placeholder="Clearable" clearable v-model="value5">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select variant="outlined" placeholder="Custom Icon" v-model="value6">
      <template #default>
        <var-option label="Eat">
          <var-icon class="selected-icon" name="cake-variant" />
          <span>Eat</span>
        </var-option>
        <var-option label="Sleep">
          <var-icon class="selected-icon" name="weather-night" />
          <span>Sleep</span>
        </var-option>
      </template>
      <template #selected>
        <var-icon class="selected-icon" :name="value6 === 'Eat' ? 'cake-variant' : 'weather-night'" />
        <span>{{ value6 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>
    <var-select variant="outlined" placeholder="Multiple Selection" multiple v-model="value7">
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select variant="outlined" placeholder="Multiple choice of paper style" chip multiple v-model="value8">
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select
      variant="outlined"
      placeholder="Validate"
      :rules="[(v) => v === 'Rest' || 'You must choose to rest']"
      v-model="value9"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Rest" />
    </var-select>
    <var-select
      variant="outlined"
      multiple
      placeholder="Multiple Validate"
      :rules="[(v) => v.length >= 2 || 'You select at least two options']"
      v-model="value10"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select variant="outlined" size="small" placeholder="Small Size" v-model="value11">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
  </var-space>
</template>

<style>
.selected-icon {
  margin-right: 6px;
}

.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}

.arrow-icon-rotate {
  transform: rotate(180deg);
}
</style>
```

## API

### Props

#### Select Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model` | The value of the binding | _any \| any[]_ | `-` |
| `placeholder` | placeholder | _string_ | `-` |
| `multiple` | Whether to enable multiple selection | _boolean_ | `false` |
| `offset-y` | The vertical offset of the drop-down menu | _string \| number_ | `0` |
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
| `rules` | The validation rules，Returns `true` to indicate that the validation passed，The remaining values are converted to text as user prompts | _Array<(v: any \| any[]) => any>_ | `-` |

#### Option Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `label` | The text that the option displays | _any_ | `-` |
| `value` | The value of the option binding | _any_ | `-` |

### Methods

#### Select Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `focus` | Focus | `-` | `-` |
| `blur` | Blur | `-` | `-` |
| `validate` | Trigger validate | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clearing validate messages | `-` | `-` |
| `reset` | Clear the value of the binding (single set to 'undefined', multiple set to '[]') and the validation messages | `-` | `-` |

### Events

#### Select Events

| Event | Description | Arguments |
| --- | --- | --- |
| `focus` | Trigger while focusing | `event: Event` |
| `blur` | Triggered when out of focus | `event: Event` |
| `click` | Triggered on click | `event: Event` |
| `clear` | Triggered on clearance | `value: any \| any[]` |
| `close` | Triggered on close | `value: any \| any[]` |
| `change` | Triggered when change | `value: any \| any[]` |

### Slots

#### Select Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `selected` | Select the contents of the area | `-` |
| `prepend-icon` | Prepend icon | `-` |
| `append-icon` | Append icon | `-` |
| `arrow-icon` | Arrow icon | `focus: boolean` Whether to focus |

#### Option Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Options to display the content | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

#### Select Variables

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
| `--field-decorator-disabled-color` | `var(--color-text-disabled)` |
| `--field-decorator-standard-normal-padding-top` | `22px` |
| `--field-decorator-standard-normal-padding-bottom` | `4px` |
| `--field-decorator-standard-normal-icon-padding` | `22px 0 4px` |
| `--field-decorator-standard-normal-placeholder-translate-y` | `var(--field-decorator-standard-normal-padding-top)` |
| `--field-decorator-standard-small-padding-top` | `18px` |
| `--field-decorator-standard-small-padding-bottom` | `2px` |
| `--field-decorator-standard-small-icon-padding` | `18px 0 2px` |
| `--field-decorator-standard-small-placeholder-translate-y` | `var(--field-decorator-standard-small-padding-top)` |
| `--field-decorator-outlined-normal-padding-top` | `16px` |
| `--field-decorator-outlined-normal-padding-bottom` | `16px` |
| `--field-decorator-outlined-normal-padding-left` | `16px` |
| `--field-decorator-outlined-normal-padding-right` | `16px` |
| `--field-decorator-outlined-normal-placeholder-space` | `4px` |
| `--field-decorator-outlined-normal-icon-padding` | `16px 0 16px` |
| `--field-decorator-outlined-normal-placeholder-translate-y` | `var(--field-decorator-outlined-normal-padding-top)` |
| `--field-decorator-outlined-small-padding-top` | `8px` |
| `--field-decorator-outlined-small-padding-bottom` | `8px` |
| `--field-decorator-outlined-small-padding-left` | `12px` |
| `--field-decorator-outlined-small-padding-right` | `12px` |
| `--field-decorator-outlined-small-placeholder-space` | `2px` |
| `--field-decorator-outlined-small-icon-padding` | `8px 0 8px` |
| `--field-decorator-outlined-small-placeholder-translate-y` | `var(--field-decorator-outlined-small-padding-top)` |
| `--select-scroller-background` | `#fff` |
| `--select-scroller-padding` | `6px 0` |
| `--select-scroller-max-height` | `278px` |
| `--select-chip-margin` | `5px 5px 0` |
| `--select-arrow-size` | `20px` |
| `--select-standard-scroller-margin` | `calc(var(--input-decorator-placeholder-size) * 0.75 + 8px) 0 0 0` |
| `--select-outlined-scroller-margin` | `0` |

#### Option Variables

| Variable | Default |
| --- | --- |
| `--option-height` | `38px` |
| `--option-padding` | `0 12px` |
| `--option-selected-background` | `var(--input-decorator-focus-color)` |
