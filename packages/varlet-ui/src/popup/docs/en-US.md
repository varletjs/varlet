# Popup

### Intro
Create a container that can pop up from top, bottom, left, right and center. `teleport` inserts into the end of the `body` by default

### Install

```js
import { createApp } from 'vue'
import { Popup } from '@varlet/ui'

createApp().use(Popup)
```

### Popup Position

```html
<var-button 
  class="mt-10"
  type="primary"
  block
  @click="center = true"
>
  Center Popup
</var-button>
<var-button
  class="mt-10"
  type="primary"
  block
  @click="bottom = true"
>
  Below Popup
</var-button>
<var-button
  class="mt-10"
  type="primary"
  block 
  @click="top = true"
>
  Above Popup
</var-button>
<var-button 
  class="mt-10" 
  type="primary"
  block
  @click="left = true"
>
  Left Popup
</var-button>
<var-button 
  class="mt-10" 
  type="primary"
  block 
  @click="right = true"
>
  Right Popup
</var-button>

// Center Popup
<var-popup v-model:show="center">
  <div class="block">
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  </div>
</var-popup>

// Below Popup
<var-popup position="bottom" v-model:show="bottom">
  <div class="block">
    As he came into the window. 
    It was the sound of a crescendo. 
    He came into her apartment. 
    He left the bloodstains on the carpet.
  </div>
</var-popup>

// Above Popup
<var-popup position="top" v-model:show="top">
  <div class="block">
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  </div>
</var-popup>

// Left Popup
<var-popup position="left" v-model:show="left">
  <div class="block">
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  </div>
</var-popup>

// Right Popup
<var-popup position="right" v-model:show="right">
  <div class="block">
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  </div>
</var-popup>
```

```js
export default {
  setup() {
    const center = ref(false)
    const top = ref(false)
    const bottom = ref(false)
    const left = ref(false)
    const right = ref(false)

    return {
      center,
      top,
      bottom,
      left,
      right
    }
  }
}
```

```css
.mt-10 {
  margin-top: 10px;
}

.block {
  padding: 20px 24px;
  width: 250px;
}
```

### Overlay Style

```html
<var-button
  class="mt-10"
  type="primary"
  block 
  @click="overlayClass = true"
>
  Overlay Style
</var-button>
<var-button 
  class="mt-10"
  type="primary"
  block 
  @click="overlayStyle = true"
>
  Overlay Style
</var-button>

// Overlay Class
<var-popup 
  overlay-class="custom-overlay" 
  v-model:show="overlayClass"
>
  <div class="block">
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  </div>
</var-popup>

// Overlay style
<var-popup 
  :overlay-style="{
    backgroundColor: 'rgba(0, 0, 0, 0.3)' 
  }"
  v-model:show="overlayStyle"
>
  <div class="block">
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  </div>
</var-popup>
```

```js
export default {
  setup() {
    const overlayClass = ref(false)
    const overlayStyle = ref(false)

    return {
      overlayClass,
      overlayStyle
    }
  }
}
```

```css
/* normal css */
.custom-overlay {
  background: rgba(0, 0, 0, 0.3);
}

/* scoped css */
.mt-10 {
  margin-top: 10px;
}

.block {
  padding: 20px 24px;
  width: 250px;
}
```

### Events

```html
<var-button
  class="mt-10"
  type="primary"
  block
  @click="event = true"
>
  Event
</var-button>

<var-popup
  v-model:show="event"
  @open="() => Snackbar.info('open')"
  @opened="() => Snackbar.success('opened')"
  @close="() => Snackbar.warning('close')"
  @closed="() => Snackbar.error('closed')"
>
  <div class="block">
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  </div>
</var-popup>
```

```js
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const event = ref(false)

    return {
      event,
      Snackbar
    }
  }
}
```

## API

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `v-model:show` | Whether to display the Popup | _boolean_ | `false` |
| `position` | Popup position with optional value of `top` `bottom` `right` `left` `center` | _string_ | `center` |
| `overlay` | Whether to display the overlay | _boolean_ | `true` |  
| `overlay-class` | Custom overlay class | _string_ | `-` |
| `overlay-style` | Custom overlay style | _string_ | `-` |
| `lock-scroll` | Whether to disable scrolling penetration, scrolling the Popup when disabled will not cause the body to scroll | _boolean_ | `true` |
| `close-on-click-overlay` | Whether to click the overlay to close the Popup | _boolean_ | `true` | 
| `teleport` | The location of the Popup to mount | _string_ | `body` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `open` | Triggered when the Popup is open | `-` |
| `opened` | Triggered when the Popup open-animation ends | `-` |
| `close` | Triggered when the Popup is close | `-` |
| `closed` | Triggered when the Popup close-animation ends | `-` |
| `click-overlay` | Triggered when you click on overlay | `-` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Popup content | `-` |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@popup-overlay-background-color` | `rgba(0, 0, 0, .6)` |
| `@popup-content-background-color` | `#fff` |