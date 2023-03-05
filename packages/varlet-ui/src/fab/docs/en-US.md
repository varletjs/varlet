# Floating Action Button

### Intro

Floating action button component for context menu.


### Theme color action buttons

```html
<script setup>
import { ref } from 'vue'

const themeColorOptions = ref([
  'default',
  'primary',
  'info',
  'success',
  'warning',
  'danger'
])
const themeColorValue = ref('primary')
</script>

<template>
  <var-select :hint="false" v-model="themeColorValue">
    <var-option v-for="(item, index) in themeColorOptions" :key="index" :label="item" />
  </var-select>
  <var-fab :type="themeColorValue" />
</template>
```

### Animation on display

Through the `activator` slot, customize the trigger.

```html
<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <var-fab>
    <template #activator>
      <var-button type="primary" v-show="show" round>
        <var-icon name="plus" />
      </var-button>
    </template>
  </var-fab>
</template>
```

### Trigger position

```html
<script setup>
import { ref } from 'vue'

const position = ref('right-bottom')
</script>

<template>
  <var-radio-group v-model="position">
    <var-radio checked-value="left-top">left-top</var-radio>
    <var-radio checked-value="right-top">right-top</var-radio>
    <var-radio checked-value="left-bottom">left-bottom</var-radio>
    <var-radio checked-value="right-bottom">right-bottom</var-radio>
  </var-radio-group>
  <var-fab :position="position" />
</template>
```

### Trigger mode

The contents of the menu are the default slots.

```html
<script setup>
import { ref } from 'vue'

const trigger = ref('click')
</script>

<template>
  <var-radio-group v-model="trigger">
    <var-radio checked-value="click">click</var-radio>
    <var-radio checked-value="hover">hover</var-radio>
  </var-radio-group>
  <var-fab :trigger="trigger">
    <var-tooltip content="Tooltip" placement="left">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    </var-tooltip>
    <var-button type="danger" round>
      <var-icon name="check" />
    </var-button>
  </var-fab>
</template>
```

### Action menu pop up direction

```html
<script setup>
import { ref } from 'vue'

const direction = ref('top')
</script>

<template>
  <var-radio-group v-model="direction">
    <var-radio checked-value="top">top</var-radio>
    <var-radio checked-value="right">right</var-radio>
    <var-radio checked-value="bottom">bottom</var-radio>
    <var-radio checked-value="left">left</var-radio>
  </var-radio-group>
  <var-fab :direction="direction">
    <var-tooltip content="Tooltip" placement="left">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    </var-tooltip>
    <var-button type="danger" round>
      <var-icon name="check" />
    </var-button>
  </var-fab>
</template>
```

### v-model

Two-way binding via `v-model` controls whether the action menu is expanded and closed.

```html
<script setup>
import { ref } from 'vue'

const unfold = ref(false)
function handleUnfold() {
  unfold.value = !unfold.value
}
</script>

<template>
  <var-fab v-model="unfold">
    <template #activator>
      <var-button type="success" round @click.stop="handleUnfold">
        <var-icon v-if="!unfold" name="cog-outline" />
        <var-icon v-else name="window-close" />
      </var-button>
    </template>

    <var-tooltip content="camera" placement="left">
      <var-button type="warning" round>
        <var-icon name="camera-outline" />
      </var-button>
    </var-tooltip>
    <var-button type="primary" round>
      <var-icon name="phone-outline" />
    </var-button>
  </var-fab>
</template>
```

## API

### Props

#### Fab Props

| Prop              | Description                                                               | Type     | Default        |
|------------------|-----------------------------------------------------------------   |----------|----------------|
| `v-model`        | Active state                                                       | _boolean_ | `false`        |
| `type`           | Same as the `Button` component, optional value is `default` `primary` `info` `success` `warning` `danger` | _string_ | `primary`    |
| `color`          | Background color                                                   | _string_ | `-`           |
| `text-color`     | Text color                                                         | _string_ | `-`          |
| `icon`           | Same as `Icon` component, icon name                                | _string_ | `-`           |
| `icon-size`      | Same as `Icon` component, icon size                                | _string \| number_  | `24px`  |
| `trigger`        | Trigger mode; optional value is `click` `hover`                    | _string_ | `click`         |
| `direction`      | Action menu pop up direction; optional value is `top` `right` `bottom` `left`    | _string_ | `top`           |
| `position`       | Trigger position; optional value is `left-top` `right-top` `right-bottom` `left-bottom` | _string_ | `right-bottom` |

### Slots

#### Fab Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Menu content | `-` |
| `activator` | Trigger | `-` |


### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

#### Fab Variables

| Variable | Default |
| --- | --- |
| `--fab-padding` | `10px` |
| `--fab-button-margin` | `6px`|
| `--fab-z-index` |  `1`|
| `--fab-button-size` |  `56px`|
| `--fab-button-item-size` |  `40px`|
| `--fab-vertical-spacing` | `80px`|
| `--fab-horizontal-spacing` | `32px`|
| `--fab-transition-standard-easing` | `cubic-bezier(0.4, 0, 0.2, 1)`|
| `--fab-transition-decelerated-easing` | `cubic-bezier(0, 0, 0.2, 1)`|
| `--fab-transition-accelerated-easing` | `cubic-bezier(0.4, 0, 1, 1)`|