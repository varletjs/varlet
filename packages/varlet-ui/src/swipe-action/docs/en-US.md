# SwipeAction

### Intro

Swipe a list item to reveal actions on either side, such as deleting, editing, or marking an item as read.

### Basic Usage

Set `right-actions` to reveal buttons when swiping left. Action buttons use the existing `Button` types and colors.

```html
<script setup>
import { Snackbar } from '@varlet/ui'

const rightActions = [{ key: 'delete', text: 'Delete', type: 'danger' }]

function handleAction(action, side) {
  Snackbar(action.text)
}
</script>

<template>
  <var-swipe-action :right-actions="rightActions" @action="handleAction">
    <var-cell title="Swipe left to reveal actions" />
  </var-swipe-action>
</template>
```

### Actions On Both Sides

Set `left-actions` to reveal buttons when swiping right. Both sides support multiple buttons.

```html
<script setup>
const leftActions = [{ key: 'read', text: 'Read', type: 'primary' }]
const rightActions = [
  { key: 'edit', text: 'Edit', type: 'info' },
  { key: 'delete', text: 'Delete', type: 'danger' },
]
</script>

<template>
  <var-swipe-action :left-actions="leftActions" :right-actions="rightActions">
    <var-cell title="Swipe left or right" />
  </var-swipe-action>
</template>
```

### Disabled

`disabled` disables swiping and configured action buttons, and closes any open action area. Set an item's `disabled` property to disable a single button.

```html
<script setup>
const rightActions = [{ key: 'delete', text: 'Delete', type: 'danger' }]
</script>

<template>
  <var-swipe-action disabled :right-actions="rightActions">
    <var-cell title="Swiping is disabled" />
  </var-swipe-action>
</template>
```

### Keep Actions Open

Actions close automatically after clicking a button. Set `close-on-click-action` to `false` to keep them open, for example until an operation finishes and you call `close()`.
Clicking or touching outside the component also closes the actions by default. Set `close-on-click-outside` to `false` to disable this behavior.
Clicking the content while actions are open closes them without activating click handlers within the content.

```html
<script setup>
const rightActions = [{ key: 'read', text: 'Read', type: 'primary' }]
</script>

<template>
  <var-swipe-action :right-actions="rightActions" :close-on-click-action="false">
    <var-cell title="Actions stay open after clicking a button" />
  </var-swipe-action>
</template>
```

### Custom Actions

The `left` and `right` slots replace the buttons on the corresponding side. The component opens to the measured width of the action area. Both slots provide a `close` method.
Style and disable custom buttons within the slot content.

```html
<template>
  <var-swipe-action>
    <var-cell title="Customize actions with slots" />
    <template #right="{ close }">
      <var-button type="danger" :elevation="false" style="height: 100%; border-radius: 0" @click="close">
        Delete
      </var-button>
    </template>
  </var-swipe-action>
</template>
```

### Instance Methods

Call `open(side)` to reveal actions. The default side is `right`. Call `close()` to close them.
The component updates action widths when mounted, when the window resizes, and when an action area changes size. You can also call `resize()` after changing the layout manually.

```html
<script setup>
import { ref } from 'vue'

const swipeAction = ref(null)
const leftActions = [{ key: 'read', text: 'Read', type: 'primary' }]
const rightActions = [{ key: 'delete', text: 'Delete', type: 'danger' }]
</script>

<template>
  <var-swipe-action ref="swipeAction" :left-actions="leftActions" :right-actions="rightActions">
    <var-cell title="Control actions with instance methods" />
  </var-swipe-action>
  <div style="margin-top: 16px">
    <var-space>
      <var-button type="primary" @click="swipeAction.open('left')">Open Left</var-button>
      <var-button type="primary" @click="swipeAction.open()">Open Right</var-button>
      <var-button @click="swipeAction.close()">Close</var-button>
    </var-space>
  </div>
</template>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `left-actions` | Action buttons on the left | _SwipeActionItem[]_ | `[]` |
| `right-actions` | Action buttons on the right | _SwipeActionItem[]_ | `[]` |
| `disabled` | Disable swiping and configured action buttons | _boolean_ | `false` |
| `duration` | Opening and closing animation duration in milliseconds | _string \| number_ | `300` |
| `close-on-click-action` | Close after clicking the action area | _boolean_ | `true` |
| `close-on-click-outside` | Close when clicking, touching, or moving focus outside the component | _boolean_ | `true` |

### SwipeActionItem

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `key` | Unique identifier, required | _string \| number_ | `-` |
| `text` | Button text, required | _string_ | `-` |
| `type` | Button type: `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `color` | Button background color | _string_ | `-` |
| `textColor` | Button text color | _string_ | `-` |
| `disabled` | Disable this button | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `open` | Emitted when actions start opening or switch sides; opening the same side again does not emit it | `side: 'left' \| 'right'` |
| `close` | Emitted when an open action area starts closing | `-` |
| `action` | Emitted when a configured action button is clicked | `action: SwipeActionItem, side: 'left' \| 'right', event: Event` |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `open` | Open a side; does not open while disabled or when the side has no action content | `side?: 'left' \| 'right'`, defaults to `right` | `-` |
| `close` | Close the actions | `-` | `-` |
| `resize` | Update action widths | `-` | `-` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | List item content | `-` |
| `left` | Custom left action area | `close: () => void` |
| `right` | Custom right action area | `close: () => void` |

### Style Variables

| Variable | Default |
| --- | --- |
| `--swipe-action-background` | `var(--color-surface-container-low)` |
| `--swipe-action-action-padding` | `0 20px` |
| `--swipe-action-action-font-size` | `var(--font-size-md)` |
