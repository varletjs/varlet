# Floating Action Button

### Intro

Floating action button component for context menu.

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const fab = ref(false)
const trigger = ref('click')
const direction = ref('top')
const transition = ref('slide-y-reverse-transition')
const top = ref(false)
const right = ref(true)
const bottom = ref(true)
const left = ref(false)
</script>
<template>
  <var-speed-dial
    v-model="fab"
    absolute
    :bottom="bottom"
    :right="right"
    :top="top"
    :left="left"
    :direction="direction"
    :transition="transition"
    :trigger="trigger"
  >
    <template #activator>
      <var-button type="primary" round size="large">
        <var-icon v-if="!fab" name="plus" />
        <var-icon v-else name="window-close" />
      </var-button>
    </template>
    <var-tooltip content="Tooltip" placement="left">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    </var-tooltip>
    <var-button type="primary" round>
      <var-icon name="check" />
    </var-button>
  </var-speed-dial>
</template>
```

## API

### Props

#### SpeedDial Props

| Prop              | Description                                                               | Type     | Default        |
|------------------|-----------------------------------------------------------------   |----------|----------------|
| `v-model`        | Active state                                                       | _boolean_ | `false`        |
| `trigger`        | Trigger type; optional value is `click` `hover`                    | _string_ | `click`         |
| `direction`      | Direction type; optional value is `top` `right` `bottom` `left`    | _string_ | `top`           |
| `position`       | This attribute is composite and must be filled in `absolute`, `fixed` optional `top` `right` `bottom` `left` | _boolean_ | `-` |
| `transition`     | Built-in animation, optional value `slide-y-reverse-transition` `slide-y-transition` `slide-x-reverse-transition` `slide-x-transition` `scale-transition`                    | _string_ | `slide-y-reverse-transition`    |

### Slots

#### SpeedDial Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `activator` | Button content | `-` |


### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

#### SpeedDial Variables

| Variable | Default |
| --- | --- |
| `--speed-dial-padding` | `10px` |
| `--speed-dial-button-margin` | `6px`|
| `--speed-dial-z-index` |  `1`|
| `--speed-dial-size` | `16px`|