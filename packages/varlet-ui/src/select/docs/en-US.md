# Select

### Intro

Display and select the content through the drop-down menu.

### Standard Variant

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const value = ref()
const value2 = ref()
const value3 = ref()
const value4 = ref()
const value5 = ref()
const value6 = ref()
const value7 = ref()
const value8 = ref()
const value9 = ref([])
const value10 = ref([])
const value11 = ref()
const value12 = ref([])
const value13 = ref()
const value14 = ref()
const value15 = ref([])
const value16 = ref()
const value17 = ref()
const value18 = ref([])

const options = ref([
  {
    label: 'Eat',
    value: 1,
  },
  {
    label: 'Sleep',
    value: 2,
  },
  {
    label: 'Play game',
    value: 3,
    disabled: true,
  },
])

const keyOptions = ref([
  {
    name: 'Eat',
    id: 1,
  },
  {
    name: 'Sleep',
    id: 2,
  },
  {
    name: 'Play game',
    id: 3,
    disabled: true,
  },
])
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
    <var-select placeholder="Use the clear icon slot" clearable v-model="value6">
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>

    <var-select placeholder="Custom Icon" v-model="value7">
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
        <var-icon class="selected-icon" :name="value7 === 'Eat' ? 'cake-variant' : 'weather-night'" />
        <span>{{ value7 }}</span>
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
    <var-select placeholder="Custom Icon Size" v-model="value8">
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
        <var-icon class="selected-icon" :size="28" :name="value8 === 'Eat' ? 'cake-variant' : 'weather-night'" />
        <span>{{ value8 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" :size="28" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" :size="42" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>

    <var-select placeholder="Multiple Selection" multiple v-model="value9">
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select placeholder="Multiple choice of paper style" chip multiple v-model="value10">
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select
      placeholder="Validate"
      :rules="v => v === 'Rest' || 'You must choose to rest'"
      v-model="value11"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Rest" />
    </var-select>
    <var-select
      placeholder="Validate With Zod"
      :rules="z.string().refine(v => v === 'Rest', 'You must choose to rest')"
      v-model="value17"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Rest" />
    </var-select>
    <var-select
      multiple
      placeholder="Multiple Validate"
      :rules="v => v.length >= 2 || 'You select at least two options'"
      v-model="value12"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select
      multiple
      placeholder="Multiple Validate With Zod"
      :rules="z.array(z.string()).min(2, 'You select at least two options')"
      v-model="value18"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select size="small" placeholder="Small Size" v-model="value13">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select placeholder="Options API" v-model="value14" :options="options" />
    <var-select placeholder="Options API" v-model="value15" :options="options" multiple />
    <var-select placeholder="Custom Fields" v-model="value16" :options="keyOptions" label-key="name" value-key="id" />
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
import { z } from 'zod'

const value = ref()
const value2 = ref()
const value3 = ref()
const value4 = ref()
const value5 = ref()
const value6 = ref()
const value7 = ref()
const value8 = ref()
const value9 = ref([])
const value10 = ref([])
const value11 = ref()
const value12 = ref([])
const value13 = ref()
const value14 = ref()
const value15 = ref([])
const value16 = ref()
const value17 = ref()
const value18 = ref([])

const options = ref([
  {
    label: 'Eat',
    value: 1,
  },
  {
    label: 'Sleep',
    value: 2,
  },
  {
    label: 'Play game',
    value: 3,
    disabled: true,
  },
])

const keyOptions = ref([
  {
    name: 'Eat',
    id: 1,
  },
  {
    name: 'Sleep',
    id: 2,
  },
  {
    name: 'Play game',
    id: 3,
    disabled: true,
  },
])
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
    <var-select variant="outlined" placeholder="Use the clear icon slot" clearable v-model="value6">
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>

    <var-select variant="outlined" placeholder="Custom Icon" v-model="value7">
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
        <var-icon class="selected-icon" :name="value7 === 'Eat' ? 'cake-variant' : 'weather-night'" />
        <span>{{ value7 }}</span>
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
    <var-select variant="outlined" placeholder="Custom Icon Size" v-model="value8">
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
        <var-icon class="selected-icon" :size="28" :name="value8 === 'Eat' ? 'cake-variant' : 'weather-night'" />
        <span>{{ value8 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" :size="28" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" :size="42" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>

    <var-select variant="outlined" placeholder="Multiple Selection" multiple v-model="value9">
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select variant="outlined" placeholder="Multiple choice of paper style" chip multiple v-model="value10">
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select
      variant="outlined"
      placeholder="Validate"
      :rules="v => v === 'Rest' || 'You must choose to rest'"
      v-model="value11"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Rest" />
    </var-select>
    <var-select
      variant="outlined"
      placeholder="Validate With Zod"
      :rules="z.string().refine(v => v === 'Rest', 'You must choose to rest')"
      v-model="value17"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Rest" />
    </var-select>
    <var-select
      variant="outlined"
      multiple
      placeholder="Multiple Validate"
      :rules="v => v.length >= 2 || 'You select at least two options'"
      v-model="value12"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select
      variant="outlined"
      multiple
      placeholder="Multiple Validate With Zod"
      :rules="z.array(z.string()).min(2, 'You select at least two options')"
      v-model="value18"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select variant="outlined" size="small" placeholder="Small Size" v-model="value13">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select variant="outlined" placeholder="Options API" v-model="value14" :options="options" />
    <var-select variant="outlined" placeholder="Options API" v-model="value15" :options="options" multiple />
    <var-select variant="outlined" placeholder="Custom Fields" v-model="value16" :options="keyOptions" label-key="name" value-key="id" />
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
| `size` | Select size, The optional value is `normal` `small`                | _string_ | `normal` |
| `variant` | Select variant, The optional value is `standard` `outlined` | _string_ | `standard` |
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
| `options` ***3.3.4*** | Specifies options | _SelectOption[]_ | `[]` |
| `label-key` ***3.3.4*** | As the key that uniquely identifies label | _string_ | `label` |
| `value-key` ***3.3.4*** | As the key that uniquely identifies value | _string_ | `value` |
| `validate-trigger` | Timing to trigger validation, optional value is `onFocus` `onBlur` `onChange` `onClick` `onClear` `onClose` | _SelectValidateTrigger[]_ | `['onChange', 'onClear', 'onClose']` |
| `rules` | Validation rules, return `true` to indicate verification passes, other types of values ​​will be converted into text as user prompts. [Zod validation](#/en-US/zodValidation) is supported since `3.5.0` | _(v: any) => any \| ZodType \| Array<(v: any) => any \| ZodType>_ | `-` |

#### SelectOption

| Prop | Description | Type | Default |
| ------- | --- |----------------|-----------|
| `label`    |   The text of option    | _string \| VNode \| (option: SelectOption, selected: boolean) => VNodeChild_      | `-`   |
| `value`  |    The value of option    | _any_      | `-`   |
| `disabled`    |    Whether to disable option   | _boolean_      | `-`   |

#### Option Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `label` | The text that the option displays | _any_ | `-` |
| `value` | The value of the option binding | _any_ | `-` |
| `disabled` | Whether to disable | _boolean_ | `false` |

### Methods

#### Select Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `focus` | Focus | `-` | `-` |
| `blur` | Blur | `-` | `-` |
| `validate` | Trigger validate | `-` | `valid: Promise<boolean>` |
| `resetValidation` | Clear validate messages | `-` | `-` |
| `reset` | Clear the value of the binding (single set to 'undefined', multiple set to '[]') and the validation messages | `-` | `-` |

### Events

#### Select Events

| Event | Description | Arguments |
| --- | --- | --- |
| `focus` | Triggered when focusing | `event: Event` |
| `blur` | Triggered when out of focus | `event: Event` |
| `click` | Triggered on click | `event: Event` |
| `clear` | Triggered on clearance | `value: any \| any[]` |
| `close` | Triggered on close | `value: any[]` |
| `change` | Triggered when change | `value: any \| any[]` |

### Slots

#### Select Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `selected` | Select the contents of the area | `-` |
| `prepend-icon` | Prepend icon | `-` |
| `clear-icon` | Clear Icon | `clear: (e: Event) => void` clear function (can be used to clear select box contents when using slots) |
| `append-icon` | Append icon | `-` |
| `arrow-icon` | Arrow icon | `focus: boolean` Whether to focus, `menu-open: boolean` Whether menu opened |

#### Option Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Options to display the content | `selected: boolean` selected or not |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

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
| `--select-scroller-background` | `var(--color-surface-container-high)` |
| `--select-scroller-padding` | `6px 0` |
| `--select-scroller-max-height` | `278px` |
| `--select-scroller-border-radius` | `2px` |
| `--select-label-font-size` | `16px` |
| `--select-chip-margin` | `5px 5px 0` |
| `--select-arrow-size` | `20px` |
| `--select-standard-menu-margin` | `calc(var(--field-decorator-placeholder-size) * 0.75 + 14px) 0 0 0` |

#### Option Variables

| Variable | Default |
| --- | --- |
| `--option-height` | `38px` |
| `--option-padding` | `0 12px` |
| `--option-font-size` | `16px` |
| `--option-selected-background` | `var(--input-decorator-focus-color)` |
| `--option-text-color` | `#555` |
