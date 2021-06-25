# Swipe

### Install

```js
import { createApp } from 'vue'
import { Swipe, SwipeItem } from '@varlet/ui'

createApp().use(Swipe).use(SwipeItem)
```

### Basic Usage

```html
<var-swipe class="swipe">
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
  </var-swipe-item>
</var-swipe>
```

```css
.swipe {
  height: 160px;
}

.swipe-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Forbid Loop

```html
 <var-swipe class="swipe" :loop="false">
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
  </var-swipe-item>
</var-swipe>
```

### Autoplay

```html
<var-swipe class="swipe" :autoplay="2000">
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
  </var-swipe-item>
</var-swipe>
```

### Vertical Swipe

```html
<var-swipe class="swipe" vertical>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
  </var-swipe-item>
</var-swipe>
```

### Handle Change

```html
<var-swipe class="swipe" @change="Snackbar">
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
  </var-swipe-item>
  <var-swipe-item>
    <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
  </var-swipe-item>
</var-swipe>
```

```js
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    return { Snackbar }
  }
}
```

### Custom Indicator

```html
<var-swipe class="swipe">
  <template #default>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
    </var-swipe-item>
  </template>

  <template #indicator="{ index, length }">
    <div class="indicators">
      {{ index + 1 }} / {{ length }}
    </div>
  </template>
</var-swipe>
```

```css
.swipe {
  height: 160px;
}

.swipe-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.indicators {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 4px 0;
  color: #fff;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.6);
}
```

## API

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `loop` | Whether to swipe the loop | _boolean_ | `true` |
| `autoplay` | Auto play interval time(ms) | _string \| number_ | `-` |
| `duration` | Transition time | _string \| number_ | `300` |
| `initial-index` | Initializes the index displayed | _string \| number_ | `0` |
| `indicator` | Whether to display the indicator | _boolean_ | `true` |
| `indicator-color` | Indicator color | _string_ | `-` |
| `vertical` | Whether to enable vertical swipe | _boolean_ | `false` |
| `touchable` |  Whether to enable touch | _boolean_ | `true` |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `resize` | You can call this method to redraw when a tabs changes position size | `-` | `-` |
| `prev` | Previous page  | `-` | `-` |
| `next` | Next page | `-` | `-` |
| `to` | To index page | `index: number` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `change` | Triggered when change swipe | `index: number(swipe index)` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Swipe content | `-` |
| `indicator` | Swipe indicator content | `index: number, length: number` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--swipe-indicator-color` | `#fff` |
| `--swipe-indicators-offset` | `10px` |
| `--swipe-indicator-offset` | `4px` |