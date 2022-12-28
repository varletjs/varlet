# Tooltip

### Intro
Displays a tooltip when the element is clicked, 
and changes the display position of the tooltip by controlling the placement and offset.

### Basic Usage

```html
<template>
  <var-tooltip content="Basic Usage">
    <var-button type="primary">Basic Usage</var-button>
  </var-tooltip>
  <var-tooltip>
    <var-button type="primary">Slot Tooltip</var-button>
    <template #tooltip>
      <var-icon name="star" />
    </template>
  </var-tooltip>
</template>
```

### Placement

```html
<script setup>
import { ref } from 'vue'

const placement = ref('top')
const placementOptions = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
]
</script>

<template>
  <var-select :hint="false" v-model="placement">
    <var-option 
      v-for="(item, index) in placementOptions" 
      :key="index"
      :label="item" 
    />
  </var-select>
  
  <div class="placement-container">
    <var-tooltip content="Tooltip" :placement="placement">
      <var-button type="primary">
        <var-icon name="star" />
      </var-button>
    </var-tooltip>
  </div>
</template>

<style>
.placement-container {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

### Theme Color Tooltip

```html
<template>
  <var-space :size="[10, 10]">
    <var-tooltip content="Tooltip" type="default">
      <var-button type="default">Default</var-button>
    </var-tooltip>
    <var-tooltip content="Tooltip" type="primary">
      <var-button type="primary">Primary</var-button>
    </var-tooltip>
    <var-tooltip content="Tooltip" type="info">
      <var-button type="info">Info</var-button>
    </var-tooltip>
    <var-tooltip content="Tooltip" type="success">
      <var-button type="success">Success</var-button>
    </var-tooltip>
    <var-tooltip content="Tooltip" type="warning">
      <var-button type="warning">Warning</var-button>
    </var-tooltip>
    <var-tooltip content="Tooltip" type="danger">
      <var-button type="danger">Danger</var-button>
    </var-tooltip>
  </var-space>
</template>
```
### Custom Color

```html
<template>
  <var-tooltip content="Tooltip" color="#69dbaa">
    <var-button type="primary">Custom Color</var-button>
  </var-tooltip>
</template>
```

### Offset

The offset of the Tooltip popup can be set with `offset-x` and `offset-y`

```html
<template>
  <var-tooltip content="Tooltip" offset-x="36px" offset-y="18px">
    <var-button type="primary">Offset</var-button>
  </var-tooltip>
</template>
```

### Trigger

Use `trigger` to change the trigger method of tooltip display, 
the optional values are `click` and `hover`

```html
<template>
  <var-tooltip content="Tooltip" trigger="hover">
    <var-button type="primary">Trigger</var-button>
  </var-tooltip>
</template>
```

### Events

```html
<script setup>
import { Snackbar } from '@varlet/ui'

const open = () => Snackbar.info('open')
const opened = () => Snackbar.info('opened')
const close = () => Snackbar.info('close')
const closed = () => Snackbar.info('closed')
</script>

<template>
  <var-tooltip
    content="Tooltip"
    @open="open"
    @opened="opened"
    @close="close"
    @closed="closed"
  >
    <var-button type="primary">Events</var-button>
  </var-tooltip>
</template>
```

### Disabled

In the `disabled` state, the tooltip will no longer be opened.

```html
<template>
  <var-tooltip disabled content="Tooltip">
    <var-button type="primary" disabled>Disabled</var-button>
  </var-tooltip>
</template>
```

### Two-way binding

Two-way binding control tooltip show and hide via `v-model:show`

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
const closeTooltip = () => { setTimeout(() => { show.value = false }, 4000) }
</script>

<template>
  <var-tooltip v-model:show="show" content="Tooltip" @opened="() => closeTooltip()">
    <var-button type="primary">Two-way binding</var-button>
  </var-tooltip>
</template>
```

## API

### Props

| Prop              | Description                                                 | Type              | Default |
| ------- |-------------------------------------------------------------|----------------------| --- |
| `v-model:show` | whether to show the tooltip                                    | _string_             | `default` |
| `content` | display content | _string_              | `-` |
| `color`          | Tooltip background color                                                            | _string_  | `-`            |
| `type`           | Tooltip type, Can be set to `default` `primary` `info` `success` `warning` `danger` | _string_  | `default`      |
| `placement` | Tooltip popup placement                                        | _Placement_          | `top` |
| `offset-x` | The x-axis offset, relative to the tooltip-aligned position    | _number \| string_ | `0` |
| `offset-y` | The y-axis offset, relative to the tooltip-aligned position    | _number \| string_ | `0` |
| `teleport` | The location of the tooltip mount                                                     | _TeleportProps['to']_ | `body` |
| `disabled` | whether to disable the tooltip                                                      | _boolean_            | `false` |
| `trigger` | Tooltip trigger method, optional value is `click` `hover`, `click` is triggered when clicked, `hover` is triggered when hovered | _string_  | `click` |
| `default-style` | Whether to enable default styles  | _boolean_ | `true` |

### Placement

| Prop | Description                             |
| ------- |-----------------------------------------|
| `top` | top center position                     |
| `top-start` | top left position                       |
| `top-end` | top right position                      |
| `bottom` | bottom center position                  |
| `bottom-start` | bottom left position                    |
| `bottom-end` | bottom right position                   |
| `right` | right center position                   |
| `right-start` | top right position                      |
| `right-end` | bottom right position                   |
| `left` | left center position                    |
| `left-start` | top left position                       |
| `left-end` | bottom left position                    |

### Methods
| Method   | Description                     | Arguments | Return |
| --- |---------------------------------| --- | --- |
| `open` | Open Tooltip                       | `-` | `-` |
| `close` | Close Tooltip                      | `-` | `-` |
| `resize` | This method can be called to redraw when the default slot element of Tooltip changes its position and size | `-` | `-` |

### Events

| Event    | Description | Arguments |
| --- | --- | --- |
| `open` | Triggered when the tooltip is opened | `-` |
| `opened` | Triggered when the open tooltip animation ends | `-` |
| `close` | Triggered when the tooltip is closed | `-` |
| `closed` | Triggered when the closing tooltip animation ends | `-` |

### Slots

| Name | Description | SlotProps |
| --- |----------------------| --- |
| `default` | Tooltip trigger element | `-` |
| `tooltip` | Tooltip content         | `-` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--tooltip-background-color` | `rgba(97, 97, 97, 0.9)` |
| `--tooltip-primary-color` | `var(--color-primary)` |
| `--tooltip-info-color` | `var(--color-info)` |
| `--tooltip-success-color` | `var(--color-success)` |
| `--tooltip-warning-color` | `var(--color-warning)` |
| `--tooltip-danger-color` | `var(--color-danger)` |