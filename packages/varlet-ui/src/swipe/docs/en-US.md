# Swipe

### Basic Usage

```html
<template>
  <var-swipe class="swipe-example">
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>

<style>
.swipe-example {
  height: 160px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### Forbid Loop

```html
<template>
  <var-swipe class="swipe-example" :loop="false">
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>

<style>
.swipe-example {
  height: 160px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### Autoplay

```html
<template>
  <var-swipe class="swipe-example" :autoplay="2000">
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>

<style>
.swipe-example {
  height: 160px;
}

.swipe-example-image {   
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### Vertical Swipe

```html
<template>
  <var-swipe class="swipe-example" vertical>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>

<style>
.swipe-example {
  height: 160px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### Handle Change

```html
<script setup>
import { Snackbar } from '@varlet/ui'

</script>

<template>
  <var-swipe class="swipe-example" @change="(index) => Snackbar(String(index))">
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>
  </var-swipe>
</template>

<style>
.swipe-example {
  height: 160px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
```

### Custom Indicator

```html
<script setup>
import { ref } from 'vue'

const swipeRef = ref(null)
</script>

<template>
  <var-swipe ref="swipeRef" class="swipe-example">
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>
    <template #indicator="{ index, length }">
      <div class="swipe-example-indicators">
        <div 
          class="swipe-example-indicator" 
          :class="index === idx ? 'swipe-example-active-indicator' : ''" 
          v-for="(l, idx) in length" 
          :key="l"
          @click="swipeRef.to(idx)">
        </div>
      </div>
    </template>
  </var-swipe>
</template>

<style>
.swipe-example {
  height: 160px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.swipe-example-indicators {
  position: absolute;
  display: flex;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.swipe-example-indicator {
  width: 8px;
  height: 8px;
  background: #fff;
  opacity: 0.3;
  margin: 0 4px;
  transition: opacity 0.3s;
}

.swipe-example-active-indicator {
  opacity: 1;
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
| `resize` | You can call this method to redraw when a swipe changes position size | `-`             | `-`    |
| `prev`   | Previous page                                                        | `options?: SwipeToOptions`             | `-`    |
| `next`   | Next page                                                            | `options?: SwipeToOptions`             | `-`    |
| `to`     | To index page                                                        | `index: number, options?: SwipeToOptions` | `-`    |

#### SwipeToOptions

| Option              | Description                      | Type               | Default |
| --- | --- | --- | --- |
| `event` | prevent `change` emit event when `false` | _boolean_ | `-` |

### Events

| Event    | Description                 | Arguments                   |
| -------- | --------------------------- | --------------------------- |
| `change` | Triggered when change swipe | `index: number` swipe index |

### Slots

#### Swipe Slots

| Prop              | Description                      | Type               | Default |
| ----------------- | -------------------------------- | ------------------ | ------- |
| `default`   | Swipe content           | `-`                                   |
| `indicator` | Swipe indicator content | `index: number` <br> `length: number` |

#### SwipeItem Slots

| Name | Description | SlotProps |
| --- |--------------------| --- |
| `default` | Swipe item content | `-` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable                    | Default |
| --------------------------- | ------- |
| `--swipe-indicator-color`   | `#fff`  |
| `--swipe-indicators-offset` | `10px`  |
| `--swipe-indicator-offset`  | `4px`   |
