# Sticky

### Intro
A sticky layout is implemented by default using `position: sticky`,
Browsers that do not support this property automatically revert to the traditional way of listening for `scroll` events.

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
| `offset-top` | Sticky offset top (px, rem) | _string \| number_ | `0` |
| `z-index` | Sticky z-index | _string \| number_ | `0` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `scroll` | Triggered when the scroll container rolls | `offsetTop: number` `isFixed: boolean` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Sticky content | `-` |