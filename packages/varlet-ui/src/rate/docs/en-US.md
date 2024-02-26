# Rate

### Intro

Used to rate things.

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate v-model="score"/>
  <var-rate v-model="score" icon="thumb-up" empty-icon="thumb-up-outline"/>
</template>
```

### Customize Total Rating

Set the total rating through the `count` attribute.

```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate v-model="score" :count="8"/>
</template>
```

### Customize Rating Icon Style

Set the selected and unselected icons through the `icon` and `empty-icon` properties.
Set the selected and unselected colors through the `color` and `empty-color` properties.

```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate
    icon="heart" 
    empty-icon="heart-outline" 
    color="red" 
    empty-color="red"
    v-model="score"
  />
</template>
```

### Customize Rating Icon Size And Gap

Use the `size` property to set the size of the score icon.
Set the interval between scores via the `gap` property.

```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate v-model="score" :size="28" :gap="8"/>
</template>
```

### Allow Half Rating

The `half` attribute is used to set the rating to semi selective, and the `half-icon` attribute is used to set the style of semi selective.

```html
<script setup>
import { ref } from 'vue'

const score = ref(3.5)
</script>

<template>
  <var-rate half :count="8" v-model="score" />
  <var-rate
    half
    icon="heart"
    half-icon="heart-half-full"
    empty-icon="heart-outline"
    color="red"
    :count="8"
    v-model="score"
  />
</template>
```

### Disabled And Readonly

The `disabled` property sets the score to the no-click state, and `disabled-color` sets the icon color when disabled.
The score is set to read-only via the `readonly` property.

```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
<var-rate v-model="score" disabled/>
<var-rate v-model="score" readonly/>
</template>
```

### Can Be Cleared

The `clearable` property allows users to clear score.

```html
<script setup>
import { ref } from 'vue'

const score = ref(3.5)
</script>

<template>
  <var-rate v-model="score" clearable half/>
</template>
```

### Listen Event

Other interaction logic is completed by calling the `change` event.

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const score = ref(3)

function handleChange(score) {
  Snackbar({
    content: `click ${score}`,
    position: 'top'
  })
}
</script>

<template>
  <var-rate v-model="score" @change="handleChange"/>
</template>
```

### Validate

The values are validated by passing in an array of validators. If the validator returns `true`, the validation passes.
Other values are converted to text as a user prompt.


```html
<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate :rules="[(v) => v >= 3 || 'It has to be greater than 2']" v-model='score'/>
</template>
```

## API

### props

| Prop             | Description | Type | Default | 
|------------------| ---- | ---- | ---- |
| `v-model`        | The current rating  | _number_ | `0` |
| `count`          | Total rating  | _number \| string_ | `5` |
| `color`          | The color of the icon when selected  | _string_ | `-` |
| `icon`           | The icon style when the entire icon is selected  | _string_ | `star` |
| `empty-color`    | The color of the icon when unchecked | _string_ | `#bdbdbd` |
| `empty-icon`     | Style of the icon when unchecked | _string_ | `star-outline` |
| `size`           | Icon size, default unit is `px` | _number \| string_ | `-` |
| `gap`            | Icon spacing, default unit is `px` | _number \| string_ | `-` |
| `half`           | Whether half selection is allowed | _boolean_ | `false` |
| `half-icon`      | The half-selected icon style only works if `half` is `true` | _string_ | `star-half-full` |
| `namespace`      | Icon namespace |  _string_ | `var-icon` |
| `empty-icon-namespace`      | Empty icon namespace |  _string_ | `var-icon` |
| `half-icon-namespace`      | Half icon namespace |  _string_ | `var-icon` |
| `disabled`       | Whether to disable rating | _boolean_ | `false` |
| `disabled-color` | The color of the icon when disabling grading is only effective when `disabled` is `true` and has higher priority than `color` and `empty-color` | _string_ | `-` |
| `readonly`       | Whether it is in readonly status. The rating cannot be modified in readonly status. | _boolean_ | `false` |
| `clearable`      | whether to allow to clear | _boolean_ | `false` |
| `ripple`         | Whether to use water ripple | _boolean_ | `true` |
| `rules`          | The validation rules, returns `true` to indicate that the validation passed. The remaining values are converted to text as user prompts | _Array<(v: number) => any>_ | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `change` | Triggered when the rating changes | `value: number` |

### Style Variables
Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default                      |
| --- |------------------------------|
| `--rate-color` | `var(--color-text)`          |
| `--rate-size` | `24px` |
| `--rate-primary-color` | `var(--color-primary)`       |
| `--rate-disabled-color` | `var(--color-text-disabled)` |
| `--rate-error-color` | `var(--color-danger)`        |
| `--rate-action-padding` | `4px`                        |