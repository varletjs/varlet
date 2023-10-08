# Drag

### Intro

Make the element draggable freely.

### Basic Use

```html
<template>
  <var-drag>
    <var-button type="primary">Basic Use</var-button>
  </var-drag>
</template>
```

### Direction

```html
<template>
  <var-drag direction="x">
    <var-button type="primary">Direction</var-button>
  </var-drag>
</template>
```

### Attraction Direction

```html
<template>
  <var-drag style="left: 0; top: 0" attraction="x">
    <var-button type="primary">X Attraction</var-button>
  </var-drag>
  <var-drag style="left: 100px; top: 0" attraction="y">
    <var-button type="primary">Y Attraction</var-button>
  </var-drag>
</template>
```

### Disabled

```html
<template>
  <var-drag disabled>
    <var-button type="primary" disabled>Disabled</var-button>
  </var-drag>
</template>
```

### Boundary

```html
<template>
  <var-drag style="top: 80px; left: 80px" :boundary="{ top: 80, bottom: 80, left: 80, right: 80 }">
    <var-button type="primary">Boundary</var-button>
  </var-drag>
</template>
```

### Reset Position

```html
<script setup>
import { ref } from 'vue'

const drag = ref(null)

function reset() {
  drag.value.reset()
}
</script>

<template>
  <var-drag ref="drag" style="top: 100px">
    <var-button type="primary">Drag Element</var-button>
  </var-drag>

  <var-button type="primary" @click="reset">Reset Position</var-button>
</template>
```

## API

### Props

| Prop | Description   | Type  | Default |
|---------------------|-------------|------|--------------|
| `direction`  | Drag direction, optional value is `x` `y` `xy`	 | _string_ | `xy` |
| `attraction`  | Attraction direction, optional value is `x` `y` `xy`	 | _string_ | `-` |
| `disabled`  | Whether to disable | _boolean_ | `false` |
| `boundary`  | Drag boundary | _{ top?: number \| string, bottom?: number \| string, left?: number \| string, right?: number \| string }_ | `{ top: 0, bottom: 0, left: 0, right: 0 }` |
| `z-index`  | Drag element z-index | _string \| number_ | `90` |
| `teleport`  | The location where the dragged element is mounted | _TeleportProps['to'] \| false_ | `body` |

### Events

| Event    | Description                 | Arguments                   |
| -------- | --------------------------- | --------------------------- |
| `click` | Triggered when clicking drag component  | `event: Event` |

### Methods

| Method   | Description                                                          | Arguments       | Return |
| -------- | -------------------------------------------------------------------- | --------------- | ------ |
| `resize` | You can call this method to redraw when a drag element changes position size | `-`             | `-`    |
| `reset` | Reset initialized position information | `-` | `-` |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Drag element's content | `-` |