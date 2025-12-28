# Select

### Intro

Display and select the content through the drop-down menu.

### Standard Variant

```html
<script setup>
import { ref, computed } from 'vue'
import { z } from 'zod'

const standardValue = ref()
const standardValue2 = ref()
const standardValue3 = ref()
const standardValue4 = ref()
const standardValue5 = ref()
const standardValue6 = ref()
const standardValue7 = ref()
const standardValue8 = ref([])
const standardValue9 = ref([])
const standardValue10 = ref()
const standardValue11 = ref([])
const standardValue12 = ref()
const standardValue13 = ref()
const standardValue14 = ref()
const standardValue15 = ref()
const standardValue16 = ref([])

const options = computed(() => [
  { label: 'Eat', value: 1 },
  { label: 'Sleep', value: 2 },
  { label: 'Play game', value: 3, disabled: true },
])

const keyOptions = computed(() => [
  { name: 'Eat', id: 1 },
  { name: 'Sleep', id: 2 },
  { name: 'Play game', id: 3, disabled: true },
])
</script>

<template>
  <var-space direction="column" size="large">
    <var-select v-model="standardValue" placeholder="Please select one the options">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select v-model="standardValue2" placeholder="Label relation value">
      <var-option label="Eat" :value="1" />
      <var-option label="Sleep" :value="2" />
    </var-select>
    <div class="relation">The current selection is: {{ standardValue2 }}</div>
    <var-select v-model="standardValue3" placeholder="Readonly" readonly>
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select v-model="standardValue4" placeholder="Disabled" disabled>
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select v-model="standardValue5" placeholder="Clearable" clearable>
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select v-model="standardValue6" placeholder="Use the clear icon slot" clearable>
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>
    <var-select v-model="standardValue7" placeholder="Custom Icon">
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
        <var-icon class="selected-icon" :name="standardValue7 === 'Eat' ? 'cake-variant' : 'weather-night'" />
        <span>{{ standardValue7 }}</span>
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
    <var-select v-model="standardValue8" placeholder="Multiple Selection" multiple>
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select v-model="standardValue9" placeholder="Multiple choice of paper style" chip multiple>
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select
      v-model="standardValue10"
      placeholder="Validate"
      :rules="v => v === 'Rest' || 'You must choose to rest'"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Rest" />
    </var-select>
    <var-select
      v-model="standardValue11"
      multiple
      placeholder="Multiple Validate"
      :rules="v => v.length >= 2 || 'You select at least two options'"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select
      v-model="standardValue12"
      placeholder="Validate With Zod"
      :rules="z.string().refine(v => v === 'Rest', 'You must choose to rest')"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Rest" />
    </var-select>
    <var-select v-model="standardValue13" placeholder="Options API" :options="options" />
    <var-select
      v-model="standardValue14"
      placeholder="Custom Fields"
      :options="keyOptions"
      label-key="name"
      value-key="id"
    />
    <var-select v-model="standardValue15" placeholder="Small Size" size="small">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select
      v-model="standardValue16"
      placeholder="Multiple Validate With Zod"
      multiple
      :rules="z.array(z.string()).min(2, 'You select at least two options')"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
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
import { ref, computed } from 'vue'
import { z } from 'zod'

const outlinedValue = ref()
const outlinedValue2 = ref()
const outlinedValue3 = ref()
const outlinedValue4 = ref()
const outlinedValue5 = ref()
const outlinedValue6 = ref()
const outlinedValue7 = ref()
const outlinedValue8 = ref([])
const outlinedValue9 = ref([])
const outlinedValue10 = ref()
const outlinedValue11 = ref([])
const outlinedValue12 = ref()
const outlinedValue13 = ref()
const outlinedValue14 = ref()
const outlinedValue15 = ref()
const outlinedValue16 = ref([])

const options = computed(() => [
  { label: 'Eat', value: 1 },
  { label: 'Sleep', value: 2 },
  { label: 'Play game', value: 3, disabled: true },
])

const keyOptions = computed(() => [
  { name: 'Eat', id: 1 },
  { name: 'Sleep', id: 2 },
  { name: 'Play game', id: 3, disabled: true },
])
</script>

<template>
  <var-space direction="column" size="large">
    <var-select v-model="outlinedValue" variant="outlined" placeholder="Please select one the options">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select v-model="outlinedValue2" variant="outlined" placeholder="Label relation value">
      <var-option label="Eat" :value="1" />
      <var-option label="Sleep" :value="2" />
    </var-select>
    <div class="relation">The current selection is: {{ outlinedValue2 }}</div>
    <var-select v-model="outlinedValue3" variant="outlined" placeholder="Readonly" readonly>
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select v-model="outlinedValue4" variant="outlined" placeholder="Disabled" disabled>
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select v-model="outlinedValue5" variant="outlined" placeholder="Clearable" clearable>
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select v-model="outlinedValue6" variant="outlined" placeholder="Use the clear icon slot" clearable>
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>
    <var-select v-model="outlinedValue7" variant="outlined" placeholder="Custom Icon">
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
        <var-icon class="selected-icon" :name="outlinedValue7 === 'Eat' ? 'cake-variant' : 'weather-night'" />
        <span>{{ outlinedValue7 }}</span>
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
    <var-select v-model="outlinedValue8" variant="outlined" placeholder="Multiple Selection" multiple>
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select v-model="outlinedValue9" variant="outlined" placeholder="Multiple choice of paper style" chip multiple>
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select
      v-model="outlinedValue10"
      variant="outlined"
      placeholder="Validate"
      :rules="v => v === 'Rest' || 'You must choose to rest'"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Rest" />
    </var-select>
    <var-select
      v-model="outlinedValue11"
      variant="outlined"
      multiple
      placeholder="Multiple Validate"
      :rules="v => v.length >= 2 || 'You select at least two options'"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select
      v-model="outlinedValue12"
      variant="outlined"
      placeholder="Validate With Zod"
      :rules="z.string().refine(v => v === 'Rest', 'You must choose to rest')"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Rest" />
    </var-select>
    <var-select v-model="outlinedValue13" variant="outlined" placeholder="Options API" :options="options" />
    <var-select
      v-model="outlinedValue14"
      variant="outlined"
      placeholder="Custom Fields"
      :options="keyOptions"
      label-key="name"
      value-key="id"
    />
    <var-select v-model="outlinedValue15" variant="outlined" placeholder="Small Size" size="small">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select
      v-model="outlinedValue16"
      variant="outlined"
      placeholder="Multiple Validate With Zod"
      multiple
      :rules="z.array(z.string()).min(2, 'You select at least two options')"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
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
### Filled Variant

```html
<script setup>
import { ref, computed } from 'vue'
import { z } from 'zod'

const filledValue = ref()
const filledValue2 = ref()
const filledValue3 = ref()
const filledValue4 = ref()
const filledValue5 = ref()
const filledValue6 = ref()
const filledValue7 = ref()
const filledValue8 = ref([])
const filledValue9 = ref([])
const filledValue10 = ref()
const filledValue11 = ref([])
const filledValue12 = ref()
const filledValue13 = ref()
const filledValue14 = ref()
const filledValue15 = ref()
const filledValue16 = ref([])

const options = computed(() => [
  { label: 'Eat', value: 1 },
  { label: 'Sleep', value: 2 },
  { label: 'Play game', value: 3, disabled: true },
])

const keyOptions = computed(() => [
  { name: 'Eat', id: 1 },
  { name: 'Sleep', id: 2 },
  { name: 'Play game', id: 3, disabled: true },
])
</script>

<template>
  <var-space direction="column" size="large">
    <var-select v-model="filledValue" variant="filled" placeholder="Please select one the options">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select v-model="filledValue2" variant="filled" placeholder="Label relation value">
      <var-option label="Eat" :value="1" />
      <var-option label="Sleep" :value="2" />
    </var-select>
    <div class="relation">The current selection is: {{ filledValue2 }}</div>
    <var-select v-model="filledValue3" variant="filled" placeholder="Readonly" readonly>
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select v-model="filledValue4" variant="filled" placeholder="Disabled" disabled>
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select v-model="filledValue5" variant="filled" placeholder="Clearable" clearable>
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select v-model="filledValue6" variant="filled" placeholder="Use the clear icon slot" clearable>
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>
    <var-select v-model="filledValue7" variant="filled" placeholder="Custom Icon">
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
        <var-icon class="selected-icon" :name="filledValue7 === 'Eat' ? 'cake-variant' : 'weather-night'" />
        <span>{{ filledValue7 }}</span>
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
    <var-select v-model="filledValue8" variant="filled" placeholder="Multiple Selection" multiple>
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select v-model="filledValue9" variant="filled" placeholder="Multiple choice of paper style" chip multiple>
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select
      v-model="filledValue10"
      variant="filled"
      placeholder="Validate"
      :rules="v => v === 'Rest' || 'You must choose to rest'"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Rest" />
    </var-select>
    <var-select
      v-model="filledValue11"
      variant="filled"
      multiple
      placeholder="Multiple Validate"
      :rules="v => v.length >= 2 || 'You select at least two options'"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
    <var-select
      v-model="filledValue12"
      variant="filled"
      placeholder="Validate With Zod"
      :rules="z.string().refine(v => v === 'Rest', 'You must choose to rest')"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Rest" />
    </var-select>
    <var-select v-model="filledValue13" variant="filled" placeholder="Options API" :options="options" />
    <var-select
      v-model="filledValue14"
      variant="filled"
      placeholder="Custom Fields"
      :options="keyOptions"
      label-key="name"
      value-key="id"
    />
    <var-select v-model="filledValue15" variant="filled" placeholder="Small Size" size="small">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-select
      v-model="filledValue16"
      variant="filled"
      placeholder="Multiple Validate With Zod"
      multiple
      :rules="z.array(z.string()).min(2, 'You select at least two options')"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
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
| `size` | Select size, The optional value is `normal` `small`                | _string_ | `normal` |
| `variant` | Select variant, The optional value is `standard` `outlined` `filled` | _string_ | `standard` |
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
| `rules` | Validation rules, return `true` to indicate verification passes, other types of values ​​will be converted into text as user prompts. [Zod validation](#/en-US/zodValidation) is supported since `3.5.0` | _((v: any) => any) \| ZodType \| Array<((v: any) => any) \| ZodType>_ | `-` |
| `tabindex` ***3.12.1*** | Consistent with the tabindex property of native select  | _string_ | `-` |

#### SelectOption

| Prop | Description | Type | Default |
| ------- | --- |----------------|-----------|
| `label`    |   The text of option    | _string \| VNode \| (option: SelectOption, selected: boolean) => VNodeChild_      | `-`   |
| `value`  |    The value of option    | _any_      | `-`   |
| `disabled`    |    Whether to disable option   | _boolean_      | `-`   |
| `ripple` ***3.3.0***  | Whether to enable ripple | _boolean_ | `true` |

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
| `--select-scroller-background` | `var(--color-surface-container-high)` |
| `--select-scroller-padding` | `6px 0` |
| `--select-scroller-max-height` | `278px` |
| `--select-scroller-border-radius` | `2px` |
| `--select-label-font-size` | `16px` |
| `--select-chips-margin` | `-5px 0 0 0` |
| `--select-chips-padding` | `2px 0` |
| `--select-chip-margin` | `5px 5px 0 0` |
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
