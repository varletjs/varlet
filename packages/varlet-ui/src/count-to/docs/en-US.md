# Number Animation

### Introduction

Display a number animation transitioning from a start value to a target value.

### Basic Usage

The `from` and `to` attributes specify the start and target values.

```html
<template>
  <var-count-to :from="0" :to="123456" />
</template>
```

### Custom Duration

The `duration` attribute specifies the animation duration in milliseconds.

```html
<template>
  <var-count-to :from="0" :to="123456" :duration="100000" />
</template>
```

### Custom Styles

The default scoped slot exposes the `state` and `value` properties, allowing you to customize styles through the slot.

```html
<template>
  <var-count-to :from="0" :to="123456">
    <template #default="{ state, value }">
      <i>{{ state }}: {{ value.toLocaleString() }}</i>
    </template>
  </var-count-to>
</template>
```

### Custom Animation Curve

The `timing-function` attribute specifies the animation curve.

```html
<template>
  <var-count-to :from="0" :to="123456" :timing-function="(t) => 1 - Math.pow(1 - t, 2)" />
</template>
```

### Manual Control

Use `ref` to get countTo instance, you can call the `start`, `pause`, and `reset` methods.

```html
<script setup>
  import { ref } from 'vue'

  const countToRef = ref()
</script>

<template>
  <var-count-to :from="0" :to="123456" ref="countToRef" :auto-start="false" />
  <var-row style="margin-top: 10px">
    <var-button-group>
      <var-button @click="countToRef.start()">{{ t('startText') }}</var-button>
      <var-button @click="countToRef.pause()">{{ t('pauseText') }}</var-button>
      <var-button @click="countToRef.reset()">{{ t('resetText') }}</var-button>
    </var-button-group>
  </var-row>
</template>
```

## API

### Properties

| Property     | Description                              | Type               | Default | --- |
| ------------ | ---------------------------------------- | ------------------ | ------- | --- |
| `from`       | Start value                              | _number \| string_ | `0`     |
| `to`         | Target value                             | _number \| string_ | `0`     |
| `duration`   | Animation duration (ms)                  | _number \| string_ | `30000` |
| `auto-start` | Whether to start animation automatically | _boolean_          | `true`  |

### Events

| Event Name | Description                   | Callback Parameters |
| ---------- | ----------------------------- | ------------------- |
| `finished` | Triggered when animation ends | `-`                 |

### Slots

| Slot Name | Description    | Parameters               |
| --------- | -------------- | ------------------------ |
| `default` | Custom content | `numberData: NumberData` |

### NumberData Format

| Name    | Description            | Type                                               |
| ------- | ---------------------- | -------------------------------------------------- |
| `value` | Current value          | `number`                                           |
| `state` | Current playing state | `'running' \| 'paused' \| 'pending' \| 'finished'` |

### Methods

Use ref to get CountTo instance and call instance methods.

| Method  | Description                                                                          | arguments | Return |
| ------- | ------------------------------------------------------------------------------------ | --------- | ------ |
| `start` | Start the animation                                                                  | `-`       | `-`    |
| `pause` | Pause the animation                                                                  | `-`       | `-`    |
| `reset` | Reset the animation. If `auto-start` is `true`, the animation will restart automatically | `-`       | `-`    |
