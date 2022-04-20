# Swipe

### Basic Usage

```html
<template>
  <var-swipe class="swipe-example">
    <var-swipe-item>
      <img class="swipe-item-example" src="https://varlet-varletjs.vercel.app/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item-example" src="https://varlet-varletjs.vercel.app/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item-example" src="https://varlet-varletjs.vercel.app/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>

<style>
.swipe-example {
  height: 160px;
}

.swipe-item-example {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
```

### Forbid Loop

```html
<template>
  <var-swipe class="swipe-example-loop" :loop="false">
    <var-swipe-item>
      <img class="swipe-item-example-loop" src="https://varlet-varletjs.vercel.app/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item-example-loop" src="https://varlet-varletjs.vercel.app/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item-example-loop" src="https://varlet-varletjs.vercel.app/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>

<style>
.swipe-example-loop {
  height: 160px;
}

.swipe-item-example-loop {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
```

### Autoplay

```html
<template>
  <var-swipe class="swipe-example-autoplay" :autoplay="2000">
    <var-swipe-item>
      <img class="swipe-item-example-autoplay" src="https://varlet-varletjs.vercel.app/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item-example-autoplay" src="https://varlet-varletjs.vercel.app/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item-example-autoplay" src="https://varlet-varletjs.vercel.app/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>

<style>
.swipe-example-autoplay {
  height: 160px;
}

.swipe-item-example-autoplay {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
```

### Vertical Swipe

```html
<template>
  <var-swipe class="swipe-example-vertical" vertical>
    <var-swipe-item>
      <img class="swipe-item-example-vertical" src="https://varlet-varletjs.vercel.app/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item-example-vertical" src="https://varlet-varletjs.vercel.app/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item-example-vertical" src="https://varlet-varletjs.vercel.app/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>
<style>
.swipe-example-vertical {
  height: 160px;
}

.swipe-item-example-vertical {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
```

### Handle Change

```html
<script setup>
import { Snackbar } from '@varlet/ui'
</script>

<template>
  <var-swipe class="swipe-example-handle" @change="Snackbar">
    <var-swipe-item>
      <img class="swipe-item-example-handle" src="https://varlet-varletjs.vercel.app/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item-example-handle" src="https://varlet-varletjs.vercel.app/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item-example-handle" src="https://varlet-varletjs.vercel.app/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>

<style>
.swipe-example-handle {
  height: 160px;
}

.swipe-item-example-handle {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
```

### Custom Indicator

```html
<template>
  <var-swipe class="swipe-example-indicators ">
    <template #default>
      <var-swipe-item>
        <img class="swipe-item-example-indicators " src="https://varlet-varletjs.vercel.app/cat.jpg">
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-item-example-indicators " src="https://varlet-varletjs.vercel.app/cat2.jpg">
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-item-example-indicators " src="https://varlet-varletjs.vercel.app/cat3.jpg">
      </var-swipe-item>
    </template>

    <template #indicator="{ index, length }">
      <div class="indicators">
        {{ index + 1 }} / {{ length }}
      </div>
    </template>
  </var-swipe>
</template>

<style>
.swipe-example-indicators  {
  height: 160px;
}

.swipe-item-example-indicators {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swipe-example-indicators>.indicators {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 4px 0;
  color: #fff;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.6);
}
</style>
```

## API

### Props

| Prop              | Description                      | Type               | Default |
| ----------------- | -------------------------------- | ------------------ | ------- |
| `loop`            | Whether to swipe the loop        | _boolean_          | `true`  |
| `autoplay`        | Auto play interval time(ms)      | _string \| number_ | `-`     |
| `duration`        | Transition time                  | _string \| number_ | `300`   |
| `initial-index`   | Initializes the index displayed  | _string \| number_ | `0`     |
| `indicator`       | Whether to display the indicator | _boolean_          | `true`  |
| `indicator-color` | Indicator color                  | _string_           | `-`     |
| `vertical`        | Whether to enable vertical swipe | _boolean_          | `false` |
| `touchable`       | Whether to enable touch          | _boolean_          | `true`  |

### Methods

| Method   | Description                                                          | Arguments       | Return |
| -------- | -------------------------------------------------------------------- | --------------- | ------ |
| `resize` | You can call this method to redraw when a tabs changes position size | `-`             | `-`    |
| `prev`   | Previous page                                                        | `-`             | `-`    |
| `next`   | Next page                                                            | `-`             | `-`    |
| `to`     | To index page                                                        | `index: number` | `-`    |

### Events

| Event    | Description                 | Arguments                   |
| -------- | --------------------------- | --------------------------- |
| `change` | Triggered when change swipe | `index: number` swipe index |

### Slots

| Slot        | Description             | Arguments                             |
| ----------- | ----------------------- | ------------------------------------- |
| `default`   | Swipe content           | `-`                                   |
| `indicator` | Swipe indicator content | `index: number` <br> `length: number` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable                    | Default |
| --------------------------- | ------- |
| `--swipe-indicator-color`   | `#fff`  |
| `--swipe-indicators-offset` | `10px`  |
| `--swipe-indicator-offset`  | `4px`   |