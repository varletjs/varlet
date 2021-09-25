# Sticky

### Intro
The sticky layout uses the `scroll` layout mode that listens to container scroll events by default. 
If necessary, you can switch to the `css sticky` layout mode to improve performance.

### Install

```js
import { createApp } from 'vue'
import { Sticky } from '@varlet/ui'

createApp().use(Sticky)
```

### Basic Use

```html
<var-sticky :offset-top="50">
  <var-button type="primary">Basic Use</var-button>
</var-sticky>
```

### Local Sticky

```html
<div class="scroller">
  <var-sticky>
    <var-button type="success">Local Sticky</var-button>
  </var-sticky>
  <div class="block"></div>
</div>
```

```less
.scroller {
  height: 200px;
  overflow: auto;
  background: #2979ff;

  .block {
    width: 100%;
    height: 600px;
    background: #2979ff;
    opacity: .5;
  }
}
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