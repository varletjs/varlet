# Elevation

### Intro
The component library provides a shadow elevation effect based on the `Material`
specification to represent the dimensionality of an element.

### Basic Usage
Shadows are divided into `0-24` levels, and the higher the level, the higher the altitude.

```html
<template>
  <var-space class="elevation-demo">
    <div class="elevation-demo__item" :class="`var-elevation--${e}`" v-for="e in 24" :key="e">
      {{ e }}
    </div>
  </var-space>
</template>

<style>
.elevation-demo .elevation-demo__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 25vw;
  transition: 0.25s background-color;
}
</style>
```
