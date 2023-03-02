# Floating Action Button

### Intro

Floating action button component for context menu.

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const fab = ref(false)
const trigger = ref('click')
const position = ref('right-bottom')
const direction = ref('top')
const transition = ref('slide-y-reverse-transition')

</script>
<template>
  <var-fab
    v-model="fab"
    :trigger="trigger"
    :position="position"
    :direction="direction"
    :transition="transition"
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
  </var-fab>
</template>
```

## API

### Props

#### Fab Props

| Prop              | Description                                                               | Type     | Default        |
|------------------|-----------------------------------------------------------------   |----------|----------------|
| `v-model`        | Active state                                                       | _boolean_ | `false`        |
| `trigger`        | Trigger type; optional value is `click` `hover`                    | _string_ | `click`         |
| `direction`      | Direction type; optional value is `top` `right` `bottom` `left`    | _string_ | `top`           |
| `position`       | Position type; optional value is `left-top` `right-top` `right-bottom` `left-bottom` | _string_ | `right-bottom` |
| `transition`     | Built-in animation, optional value `slide-y-reverse-transition` `slide-y-transition` `slide-x-reverse-transition` `slide-x-transition` `scale-transition`                    | _string_ | `slide-y-reverse-transition`    |

### Slots

#### Fab Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `activator` | Button content | `-` |


### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

#### Fab Variables

| Variable | Default |
| --- | --- |
| `--fab-padding` | `10px` |
| `--fab-button-margin` | `6px`|
| `--fab-z-index` |  `1`|
| `--fab-vertical-spacing` | `80px`|
| `--fab-horizontal-spacing` | `32px`|