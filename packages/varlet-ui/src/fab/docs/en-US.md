# Floating Action Button

### Intro

Floating action button component for context menu.


### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <var-fab>
    <var-button type="primary" round size="large" v-show="show">
      <var-icon  name="plus" />
    </var-button>
  </var-fab>
</template>
```

### Combined Usage

```html
<script setup>
import { ref } from 'vue'

const fab = ref(false)
const trigger = ref('click')
const position = ref('right-bottom')
const direction = ref('top')
</script>

<template>
  <var-fab 
    v-model="fab" 
    :position="position" 
    :direction="direction" 
    :trigger="trigger">
    <var-button type="primary" round size="large">
      <var-icon v-if="!fab" name="plus" />
      <var-icon v-else name="window-close" />
    </var-button>
    <template #actions>
      <var-tooltip content="Tooltip" placement="left">
        <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
      </var-tooltip>
      <var-button type="primary" round>
        <var-icon name="check" />
      </var-button>
    </template>
  </var-fab>
</template>
```

## API

### Props

#### Fab Props

| Prop              | Description                                                               | Type     | Default        |
|------------------|-----------------------------------------------------------------   |----------|----------------|
| `v-model`        | Active state                                                       | _boolean_ | `false`        |
| `trigger`        | Trigger mode; optional value is `click` `hover`                    | _string_ | `click`         |
| `direction`      | Action menu pop up direction; optional value is `top` `right` `bottom` `left`    | _string_ | `top`           |
| `position`       | Trigger position; optional value is `left-top` `right-top` `right-bottom` `left-bottom` | _string_ | `right-bottom` |

### Slots

#### Fab Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | trigger | `default` |
| `actions` | Menu content | `-` |


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
| `--fab-transition-standard-easing` | `cubic-bezier(0.4, 0, 0.2, 1)`|
| `--fab-transition-decelerated-easing` | `cubic-bezier(0, 0, 0.2, 1)`|
| `--fab-transition-accelerated-easing` | `cubic-bezier(0.4, 0, 1, 1)`|