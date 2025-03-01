# Tooltip

### Intro

Displays a tooltip when the element is clicked or hovered, 
and changes the display position of the tooltip by controlling the placement and offset.

### Basic Usage

```html
<template>
  <var-tooltip content="Tooltip">
    <var-button type="primary">Basic Usage</var-button>
  </var-tooltip>
</template>
```

### Content Slot

```html
<template>
  <var-tooltip>
    <var-button type="primary">Content Slot</var-button>
    
    <template #content>
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

### Theme Color

```html
<template>
  <var-space :size="[54, 10]">
    <var-tooltip content="Tooltip">
      <var-button>Default</var-button>
    </var-tooltip>
    <var-tooltip type="primary" content="Tooltip">
      <var-button type="primary">Primary</var-button>
    </var-tooltip>
    <var-tooltip type="info" content="Tooltip">
      <var-button type="info">Info</var-button>
    </var-tooltip>
    <var-tooltip type="success" content="Tooltip">
      <var-button type="success">Success</var-button>
    </var-tooltip>
    <var-tooltip type="warning" content="Tooltip">
      <var-button type="warning">Warning</var-button>
    </var-tooltip>
    <var-tooltip type="danger" content="Tooltip">
      <var-button type="danger">Danger</var-button>
    </var-tooltip>
  </var-space>
</template>
```
### Custom Color

```html
<template>
  <var-tooltip content="Tooltip" color="#d81b60" text-color="#fff">
    <var-button type="primary">Custom Color</var-button>
  </var-tooltip>
</template>
```

### Offset

The offset of the Tooltip can be set with `offset-x` and `offset-y`.

```html
<template>
  <var-tooltip content="Tooltip" :offset-x="64" :offset-y="-10">
    <var-button type="primary">Offset</var-button>
  </var-tooltip>
</template>
```

### Trigger

Use `trigger` to change the trigger method of tooltip display,
the optional values are `click` and `hover`.

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
</script>

<template>
  <var-tooltip
    content="Tooltip"
    @open="Snackbar.info('open')"
    @opened="Snackbar.success('opened')"
    @close="Snackbar.warning('close')"
    @closed="Snackbar.error('closed')"
  >
    <var-button type="primary">Events</var-button>
  </var-tooltip>
</template>
```

### Disabled

In the `disabled` state, the tooltip will not be opened.

```html
<template>
  <var-tooltip content="Tooltip" disabled>
    <var-button type="primary">Disabled</var-button>
  </var-tooltip>
</template>
```

## API

### Props

| Prop              | Description                                                 | Type              | Default   |
| ------- |-------------------------------------------------------------|----------------------|-----------|
| `v-model:show` | Whether to show the tooltip                                    | _boolean_             | `false`   |
| `content` | Display content | _string_              | `-`       |
| `color`          | Tooltip background color                                                            | _string_  | `-`       |
| `text-color`  ***3.5.0***   | Tooltip text color                                                                  | _string_  | `-`       |
| `type`           | Tooltip type, can be set to `default` `primary` `info` `success` `warning` `danger` | _string_  | `default` |
| `placement` | Tooltip popup placement                                        | _Placement_          | `bottom`     |
| `strategy`       | Tooltip position strategy, optional value is `absolute` `fixed` | _string_              | `absolute`           |
| `offset-x` | The x-axis offset, relative to the tooltip-aligned position    | _number \| string_   | `0` |
| `offset-y` | The y-axis offset, relative to the tooltip-aligned position    | _number \| string_   | `0` |
| `teleport` | The location of the tooltip mount                                                     | _TeleportProps['to'] \| false_ | `body`    |
| `same-width`    | Whether to same width as trigger element                   | _boolean_ | `false`           |
| `disabled` | Whether to disable the tooltip                                                      | _boolean_            | `false`   |
| `trigger` | Tooltip trigger method, optional value is `click` `hover` `manual` | _string_  | `hover`   |
| `reference` | The trigger element associated with the tooltip, the `string` type is the descendant element selector of the menu component, the `HTMLElement` type is any specified element node | _string \| HTMLElement_ | `-` |
| `close-on-click-reference` | Whether to close the menu when clicking the reference element | _boolean_ | `false` |
| `close-on-key-escape` | Whether to support keyboard ESC to close the tooltip | _boolean_ | `true`  |

### Placement

| Prop | Description                             |
| ------- |-----------------------------------------|
| `top` | Top center position                     |
| `top-start` | Top left position                       |
| `top-end` | Top right position                      |
| `bottom` | Bottom center position                  |
| `bottom-start` | Bottom left position                    |
| `bottom-end` | Bottom right position                   |
| `right` | Right center position                   |
| `right-start` | Top right position                      |
| `right-end` | Bottom right position                   |
| `left` | Left center position                    |
| `left-start` | Top left position                       |
| `left-end` | Bottom left position                    |

### Methods

| Method   | Description     | Arguments | Return |
| --- |---------------------------------| --- | --- |
| `open` | Open `Tooltip`                       | `-` | `-` |
| `close` | Close `Tooltip`                      | `-` | `-` |
| `resize` | This method can be called to redraw when the default slot element of `Tooltip` changes its position and size | `-` | `-` |
| `setReference` ***3.7.2*** | Set the trigger element associated with the `Tooltip` | `reference: consistent with the reference of the component attribute` | `-` |

### Events

| Event    | Description                                         | Arguments |
| --- |-----------------------------------------------------| --- |
| `open` | Triggered when the `Tooltip` is opened              | `-` |
| `opened` | Triggered when the open `Tooltip` animation ends    | `-` |
| `close` | Triggered when the `Tooltip` is closed              | `-` |
| `closed` | Triggered when the closing `Tooltip` animation ends | `-` |
| `click-outside` | Triggered when clicking outside the tooltip | `event: Event` |

### Slots

| Name | Description | SlotProps |
| --- |----------------------| --- |
| `default` | Tooltip trigger element | `-` |
| `content` | Tooltip content         | `-` |
| `click-outside` | Triggered when clicking outside the menu | `event: Event` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--tooltip-opacity` | `0.9` |
| `--tooltip-border-radius` | `4px` |
| `--tooltip-font-size` | `14px` |
| `--tooltip-padding` | `8px 16px` |
| `--tooltip-offset` | `10px` |
| `--tooltip-default-color` | `#616161` |
| `--tooltip-primary-color` | `var(--color-primary)` |
| `--tooltip-info-color` | `var(--color-info)` |
| `--tooltip-success-color` | `var(--color-success)` |
| `--tooltip-warning-color` | `var(--color-warning)` |
| `--tooltip-danger-color` | `var(--color-danger)` |
| `--tooltip-default-text-color` | `#fff` |
| `--tooltip-primary-text-color` | `var(--color-on-primary)` |
| `--tooltip-info-text-color` | `var(--color-on-info)` |
| `--tooltip-success-text-color` | `var(--color-on-success)` |
| `--tooltip-warning-text-color` | `var(--color-on-warning)` |
| `--tooltip-danger-text-color` | `var(--color-on-danger)` |
