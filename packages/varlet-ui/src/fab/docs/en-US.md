# Floating Action Button

### Intro

Floating action button component for context menu.


### Animation on display

```html
<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <var-fab>
    <var-button type="primary" round v-show="show">
      <var-icon  name="plus" />
    </var-button>
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
  <var-fab :position="position">
    <var-button type="primary" round>
      <var-icon name="plus" />
    </var-button>
  </var-fab>
</template>
```

### Trigger mode

The `actions` slot allows you to customize the contents of the pop-up menu items.

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
    <var-icon name="plus" />
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
    <var-icon name="plus" />
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


### v-model
Two-way binding through `v-model` is used to control whether the action menu popup is expanded and folded.

```html
<script setup>
import { ref } from 'vue'

const unfold = ref(false)
</script>

<template>
  <var-fab v-model="unfold">
    <var-button type="primary" round>
      <var-icon v-if="!unfold" name="plus" />
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