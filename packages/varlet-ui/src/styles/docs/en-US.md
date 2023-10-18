# Elevation

### Intro
The component library provides a shadow elevation effect based on the `Material`
specification to represent the dimensionality of an element.

### Import Style

```js
// playground-ignore
import '@varlet/ui/es/styles/elevation.css'
```

### Basic Usage
Shadows are divided into `0-24` levels, and the higher the level, the higher the altitude.

```html
<template>
  <var-space class="elevation-example-list" :size="[40, 0]" justify="space-between">
    <div
      class="elevation-example-item"
      :class="`var-elevation--${e - 1}`"
      v-for="e in 25"
      :key="e"
    >
      {{ e - 1 }}
    </div>
  </var-space>
</template>

<style>
.elevation-example-list {
  padding: 2vmin 4vmin;
}

.elevation-example-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24vmin;
  height: 24vmin;
  border-radius: 4px;
}
</style>
```
