# Sticky

### Intro

The sticky layout uses the `scroll` layout mode that listens to container scroll events by default. 
If necessary, you can switch to the `css sticky` layout mode to improve performance.

### Basic Use

```html
<template>
  <div class="sticky-example">
    <var-sticky :offset-top="54">
      <var-button type="primary">Basic Use</var-button>
    </var-sticky>
  </div>
</template>

<style>
.sticky-example {
  min-height: 200vh;
}
</style>
```

### Local Sticky

```html
<template>
  <div class="sticky-example">
    <div class="sticky-example-scroller">
      <var-sticky>
        <var-button type="success">Local Sticky</var-button>
      </var-sticky>
      <div class="sticky-example-block"></div>
    </div>
  </div>
</template>

<style>
.sticky-example {
  min-height: 200vh;
}

.sticky-example-scroller {
  height: 200px;
  overflow: auto;
  background: #2979ff;
}

.sticky-example-block {
  width: 100%;
  height: 600px;
  background: #2979ff;
  opacity: .5;
}
</style>
```

## API

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `offset-top` | Sticky offset top | _string \| number_ | `0` |
| `z-index` | Sticky z-index | _string \| number_ | `0` |
| `css-mode` | Enable native `css sticky` mode | _boolean_ | `false` |
| `disabled` | Disable sticky, when set to `true`, the element will return to the document flow | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `scroll` | Triggered when the scroll container rolls | `offsetTop: number` <br> `isFixed: boolean` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Sticky content | `-` |