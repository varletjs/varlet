# CountTo

### Introduction

Display a number animation transitioning from a start value to a target value.

### Basic Usage

The `from` and `to` attributes specify the start and target values.

```html
<template>
  <var-count-to :to="123456" />
</template>
```

### Precision

Controlling numerical precision with `precision`

```html
<template>
  <var-count-to :to="123456" />
</template>
```

### Custom Duration

The `duration` attribute specifies the animation duration in milliseconds.

```html
<template>
  <var-count-to :to="123456" :duration="100000" />
</template>
```

### Custom Styles

```html
<template>
  <var-count-to :to="123456">
    <template #default="{ value }">
      {{ value.toLocaleString() }}
    </template>
  </var-count-to>
</template>
```

### Custom Animation Curve

The `timing-function` attribute specifies the animation curve.

```html
<template>
  <var-count-to :to="123456" :timing-function="(v) => 1 - Math.pow(1 - v, 3)" />
</template>
```

### Manual Control

You can call the `start`, `pause`, and `reset` methods to manually control the start, pause, and reset of the animation.

```html
<script setup>
import { ref } from 'vue'

const countTo = ref()
</script>

<template>
  <var-count-to ref="countTo" :to="123456" :auto-start="false" />
  <var-button @click="countToRef.start()">Start</var-button>
  <var-button @click="countToRef.pause()">Pause</var-button>
  <var-button @click="countToRef.reset()">Reset</var-button>
</template>
```

## API

### Props

| Prop         | Description                      | Type               | Default        |
| ------------ | ---------------------------------------- | ------------------ | ------- |
| `from`       | Start value                              | _number \| string_ | `0`     |
| `to`         | Target value                             | _number \| string_ | `0`     |
| `duration`   | Animation duration (ms)                  | _number \| string_ | `2000` |
| `precision`   | Precision (ms)                  | _number \| string_ | `2` |
| `auto-start` | Whether to start animation automatically | _boolean_          | `true`  |
| `timing-function` | Animation curve      | _(v: number) => number_          | `v => v`  |

### Events

| Event    | Description                     | Arguments            |
| ---------- | ----------------------------- | ------------------- |
| `end` | Triggered when animation ends | `-`                 |

### Slots

| Name      | Description    | SlotProps            |
| --------- | -------------- | ------------------------ |
| `default` | Custom content | `value: number` |

### Methods

| Method | Description	 | Arguments | Return |
| ------- | ------------------------------------------------------------------------------------ | --------- | ------ |
| `start` | Start the animation                                                                  | `-`       | `-`    |
| `pause` | Pause the animation                                                                  | `-`       | `-`    |
| `reset` | Reset the animation. If `auto-start` is `true`, the animation will restart automatically | `-`       | `-`    |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--count-to-text-color`     | `var(--color-text)`   |
| `--count-to-text-font-size` | `var(--font-size-lg)` |
