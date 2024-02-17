# Menu

### Intro
Displays a menu when the element is clicked, 
and changes the display position of the menu by controlling the placement and offset.

### Basic Usage

```html
<template>
  <var-menu>
    <var-button type="primary">Basic Usage</var-button>
    
    <template #menu>
      <var-cell>Menu Option</var-cell>
      <var-cell>Menu Option</var-cell>
      <var-cell>Menu Option</var-cell>
    </template>
  </var-menu>
</template>
```

### Placement

```html
<script setup>
import { ref } from 'vue'

const placement = ref('cover-top-start')
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
  'cover-top',
  'cover-top-start',
  'cover-top-end',
  'cover-bottom',
  'cover-bottom-start',
  'cover-bottom-end',
  'cover-left',
  'cover-right',
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
    <var-menu :placement="placement">
      <var-button type="primary">
        <var-icon name="star" />
      </var-button>
      <template #menu>
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
        <var-cell>Menu Option</var-cell>
      </template>
    </var-menu>
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

### Offset

The offset of the Menu popup can be set with `offset-x` and `offset-y`.

```html
<template>
  <var-menu offset-x="36px" offset-y="18px">
    <var-button type="primary">Offset</var-button>
    
    <template #menu>
      <var-cell>Menu Option</var-cell>
      <var-cell>Menu Option</var-cell>
      <var-cell>Menu Option</var-cell>
    </template>
  </var-menu>
</template>
```

### Same Width As Trigger Element

Use `same-width` to make the popup menu and trigger the same width.

```html
<template>
  <var-menu same-width>
    <var-button type="primary">Same width as trigger element</var-button>
    
    <template #menu>
      <var-cell>Menu Option</var-cell>
      <var-cell>Menu Option</var-cell>
      <var-cell>Menu Option</var-cell>
    </template>
  </var-menu>
</template>
```

### Trigger

Use `trigger` to change the trigger method of menu display, 
the optional values are `click` and `hover`

```html
<template>
  <var-menu trigger="hover">
    <var-button type="primary">Trigger</var-button>
    
    <template #menu>
      <var-cell>Menu Option</var-cell>
      <var-cell>Menu Option</var-cell>
      <var-cell>Menu Option</var-cell>
    </template>
  </var-menu>
</template>
```

### Events

```html
<script setup>
import { Snackbar } from '@varlet/ui'
</script>

<template>
  <var-menu
    @open="Snackbar.info('open')"
    @opened="Snackbar.success('opened')"
    @close="Snackbar.warning('close')"
    @closed="Snackbar.error('closed')"
  >
    <var-button type="primary">Events</var-button>
    
    <template #menu>
      <var-cell>Menu Option</var-cell>
      <var-cell>Menu Option</var-cell>
      <var-cell>Menu Option</var-cell>
    </template>
  </var-menu>
</template>
```

### Disabled

In the `disabled` state, the menu will no longer be opened.

```html
<template>
  <var-menu disabled>
    <var-button type="primary" disabled>Disabled</var-button>
    
    <template #menu>
      <var-cell>Menu Option</var-cell>
      <var-cell>Menu Option</var-cell>
      <var-cell>Menu Option</var-cell>
    </template>
  </var-menu>
</template>
```

### Two-way Binding

Two-way binding control menu show and hide via `v-model:show`.

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)

function closeMenu() { 
  show.value = false 
}
</script>

<template>
  <var-menu v-model:show="show">
    <var-button type="primary">Two-way binding</var-button>

    <template #menu>
      <var-cell @click="closeMenu">Menu Option</var-cell>
      <var-cell @click="closeMenu">Menu Option</var-cell>
      <var-cell @click="closeMenu">Menu Option</var-cell>
    </template>
  </var-menu>
</template>
```

### Notice

Menu is an `inline-block` element that displays the menu when clicked through the default slot.
If you want the Menu to be on its own line, 
it is recommended to wrap a `block` element.

## API

### Props

| Prop            | Description                                                                                                                  | Type              | Default           |
|-----------------|------------------------------------------------------------------------------------------------------------------------------|----------------------|-------------------|
| `v-model:show`  | Whether to show the menu                                                                                                     | _boolean_             | `false`         |
| `placement`     | Menu popup placement                                                                                                         | _Placement_          | `cover-top-start` |
| `strategy`       | Menu position strategy, optional value is `absolute` `fixed` | _string_              | `absolute`           |
| `offset-x`      | The x-axis offset, relative to the menu-aligned position                                                                     | _number \| string_           | `0` |
| `offset-y`      | The y-axis offset, relative to the menu-aligned position                                                                     | _number \| string_           | `0` |
| `teleport`      | The location of the menu mount                                                                                               | _TeleportProps['to'] \| false_ | `body`            |
| `disabled`      | Whether to disable the menu                                                                                                  | _boolean_            | `false`           |
| `trigger`       | Menu trigger method, optional value is `click` `hover`, `click` is triggered when clicked, `hover` is triggered when hovered | _string_  | `click`           |
| `reference`       | The associated trigger element selector is used to specify specific child elements as trigger elements | _string_              | `-`           |
| `elevation` | Elevation level, options `true` `false` and level of `0-24` | _string \| number \| boolean_|   `true`    |
| `same-width`    | Whether to same width as trigger element                                                                                     | _boolean_ | `false`           |
| `default-style` | Whether to enable default styles                                                                                             | _boolean_ | `true`            |
| `popover-class` | Class of the popover                                                    | _string_             | `-`            |
| `close-on-click-reference` | Whether to close the menu when clicking the reference element | _boolean_ | `false` |

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
| `cover-top` | Top center position, overlay trigger    |
| `cover-top-start` | Top left position, overlay trigger      |
| `cover-top-end` | Top right position, overlay trigger     |
| `cover-bottom` | Bottom center position, overlay trigger |
| `cover-bottom-start` | Bottom left position, overlay trigger   |
| `cover-bottom-end` | Bottom right position, overlay trigger  |
| `cover-left` | Left center position, overlay trigger   |
| `cover-right` | Right center position, overlay trigger |

### Methods
| Method   | Description                     | Arguments | Return |
| --- |---------------------------------| --- | --- |
| `open` | Open Menu                       | `-` | `-` |
| `close` | Close Menu                      | `-` | `-` |
| `resize` | This method can be called to redraw when the default slot element of Menu changes its position and size | `-` | `-` |

### Events

| Event    | Description | Arguments |
| --- | --- | --- |
| `open` | Triggered when the menu is opened | `-` |
| `opened` | Triggered when the open menu animation ends | `-` |
| `close` | Triggered when the menu is closed | `-` |
| `closed` | Triggered when the closing menu animation ends | `-` |
| `click-outside` | Triggered when clicking outside the menu | `event: Event` |

### Slots

| Name | Description | SlotProps |
| --- |----------------------| --- |
| `default` | Menu trigger element | `-` |
| `menu` | Menu content         | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--menu-background-color` | `var(--color-surface-container-high)` |
| `--menu-border-radius` | `2px` |
