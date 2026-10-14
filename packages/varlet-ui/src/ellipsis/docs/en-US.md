# Ellipsis

### Intro

Mainly used to omit single-line text and multi-line text.

### Single Line Ellipsis

```html
<template>
  <var-ellipsis style="max-width: 170px">
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!
  </var-ellipsis>
</template>
```

### Multiple Line Ellipsis

```html
<template>
  <var-ellipsis style="max-width: 170px" :line-clamp="3">
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!
  </var-ellipsis>
</template>
```

### Two-way Binding

```html
<script setup>
import { ref } from 'vue'

const expand = ref(false)
</script>

<template>
  <var-space direction="column" size="large">
    <var-button type="primary" @click="expand = !expand">Toggle</var-button>
    <var-ellipsis style="max-width: 170px" v-model:expand="expand">
      I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!
    </var-ellipsis>
  </var-space>
</template>
```

### Click On Text To Expand

```html
<template>
  <var-ellipsis 
    style="max-width: 170px" 
    expand-trigger="click" 
    :line-clamp="3" 
    :tooltip="false"
  >
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!
  </var-ellipsis>
</template>
```

### Overflow Detection

When `expandable-on-overflow` is enabled, truncated content can be expanded on click. When `tooltip-on-overflow` is enabled, the tooltip is shown only for truncated content.

```html
<script setup>
import { ref } from 'vue'

const narrow = ref(true)
</script>

<template>
  <var-button type="primary" @click="narrow = !narrow">Toggle Text Container Size</var-button>

  <div style="margin-top: 12px; color: var(--color-on-surface-variant); font-size: 12px">Single Line Ellipsis</div>
  <var-ellipsis
    expand-trigger="click"
    expandable-on-overflow
    tooltip-on-overflow
    :style="{ maxWidth: narrow ? '170px' : '340px' }"
  >
    Click to expand only when this text overflows.
  </var-ellipsis>

  <div style="margin-top: 12px; color: var(--color-on-surface-variant); font-size: 12px">Multiple Line Ellipsis</div>
  <var-ellipsis
    expand-trigger="click"
    expandable-on-overflow
    tooltip-on-overflow
    :line-clamp="2"
    :style="{ maxWidth: narrow ? '170px' : '340px' }"
  >
    Only truncated text can be expanded. Click it to view the full content, then click it again to collapse.
  </var-ellipsis>
</template>
```

### Custom Tooltip

```html
<template>
  <var-ellipsis style="max-width: 50vw" :tooltip="{ type: 'primary', sameWidth: false }">
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!

    <template #tooltip-content>
      <var-icon name="github" />
    </template>
  </var-ellipsis>
</template>
```

## API

### Props

| Prop   | Description  | Type  | Default  |
| ----- | ------ | ---- | ---- |
| `v-model:expand` | Whether to expand | _boolean_  | `false` |
| `expand-trigger` | Expand trigger method, optional value `click` | _string_ | `-` |
| `expandable-on-overflow` ***3.20.7*** | Allow expansion only if the text is overflowed | _boolean_ | `false` |
| `line-clamp` | Maximum number of display lines, see [line-clamp](https://caniuse.com/?search=line-clamp) for compatibility | _string_ | `-` |
| `tooltip-on-overflow` ***3.20.7*** | Show the tooltip only when the text is truncated | _boolean_ | `false` |
| `tooltip` | Tooltip component props, for deep customization. For more convenience, `sameWidth` defaults to `true` here | _boolean \| TooltipProps_ | `true` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Text content | `-` |
| `tooltip-content` | Tooltip content | `-` |
