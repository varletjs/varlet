# Swipe

### Intro

Displays a collection of items that can be scrolled and scrolled across the screen.

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

### Navigation

Navigation buttons can be enabled by setting `navigation`, when `navigation` is `hover`, the navigation buttons can be displayed when the pointer is hovering.

```html
<template>
  <var-swipe class="swipe-example" navigation>
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

  <var-swipe class="swipe-example" navigation="hover">
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
  margin-top: 14px;
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
    
    <template #indicator="{ index, length, to }">
      <div class="swipe-example-indicators">
        <div 
          class="swipe-example-indicator" 
          v-for="(l, idx) in length" 
          :key="l"
          :class="{'swipe-example-active-indicator': idx === index}" 
          @click="to(idx)"
        >
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
| `autoplay`        | Auto play interval time (ms)      | _string \| number_ | `-`     |
| `duration`        | Transition time (ms)                  | _string \| number_ | `300`   |
| `initial-index`   | Initializes the index displayed  | _string \| number_ | `0`     |
| `indicator`       | Whether to display the indicator | _boolean_          | `true`  |
| `indicator-color` | Indicator color                  | _string_           | `-`     |
| `vertical`        | Whether to enable vertical swipe | _boolean_          | `false` |
| `touchable`       | Whether to enable touch          | _boolean_          | `true`  |
| `navigation` | Whether to show navigation arrows | _boolean \| string_ | `false` |

### Methods

| Method   | Description                                                          | Arguments       | Return |
| -------- | -------------------------------------------------------------------- | --------------- | ------ |
| `resize` | Call this method to redraw when a swipe changes position size | `-`             | `-`    |
| `prev`   | Previous page                                                        | `options?: SwipeToOptions`             | `-`    |
| `next`   | Next page                                                            | `options?: SwipeToOptions`             | `-`    |
| `to`     | To index page                                                        | `index: number, options?: SwipeToOptions` | `-`    |

#### SwipeToOptions

| Option              | Description                      | Type               | Default |
| --- | --- | --- | --- |
| `event` | Prevent `change` emit event when `false` | _boolean_ | `-` |

### Events

| Event    | Description                 | Arguments                   |
| -------- | --------------------------- | --------------------------- |
| `change` | Triggered when change swipe | `index: number` swipe index |

### Slots

#### Swipe Slots

| Name | Description | SlotProps |
| --- |--------------------| --- |
| `default`   | Swipe content           | `-`                                   |
| `prev`   | Preview page button         | `index: number` <br> `length: number` <br> `hovering: boolean` Whether the pointer is hovering <br> `to`、`prev`、`next`: The type is consistent with the method of the same name |
| `next`   | Next page button         | `index: number` <br> `length: number` <br> `hovering: boolean` Whether the pointer is hovering <br> `to`、`prev`、`next`: The type is consistent with the method of the same name |
| `indicator` | Swipe indicator content | `index: number` <br> `length: number` <br> `hovering: boolean` Whether the pointer is hovering <br> `to`、`prev`、`next`: The type is consistent with the method of the same name |

#### SwipeItem Slots

| Name | Description | SlotProps |
| --- |--------------------| --- |
| `default` | Swipe item content | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable                    | Default |
| --------------------------- | ------- |
| `--swipe-indicator-color`   | `#fff`  |
| `--swipe-indicators-offset` | `10px`  |
| `--swipe-indicator-offset`  | `4px`   |
| `--swipe-navigation-z-index` | `9` |
| `--swipe-navigation-button-width` | `36px` |
| `--swipe-navigation-button-height` | `36px` |
| `--swipe-navigation-button-border-radius` | `50%` |
| `--swipe-navigation-icon-size` | `20px` |
| `--swipe-navigation-prev-left` | `8px`  |  
| `--swipe-navigation-next-right` | `8px` |
| `--swipe-navigation-prev-top` | `8px` |
| `--swipe-navigation-next-bottom` | `8px` |
