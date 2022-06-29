# Popup

### Intro
Create a container that can pop up from top, bottom, left, right and center. `teleport` inserts into the end of the `body` by default.

### Popup Position

```html
<script setup>
import { ref } from 'vue'

const center = ref(false)
const top = ref(false)
const bottom = ref(false)
const left = ref(false)
const right = ref(false)
</script>

<template>
  <var-space direction="column" :size="[10, 0]">
    <var-button type="primary" block @click="center = true">
      Center Popup
    </var-button>
    <var-button type="primary" block @click="bottom = true">
      Below Popup
    </var-button>
    <var-button type="primary" block @click="top = true">
      Above Popup
    </var-button>
    <var-button type="primary" block @click="left = true">
      Left Popup
    </var-button>
    <var-button type="primary" block @click="right = true">
      Right Popup
    </var-button>
  </var-space>
  
  <var-popup v-model:show="center">
    <div class="popup-example-block">
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    </div>
  </var-popup>
  
  <var-popup position="bottom" v-model:show="bottom">
    <div class="popup-example-block">
      As he came into the window. 
      It was the sound of a crescendo. 
      He came into her apartment. 
      He left the bloodstains on the carpet.
    </div>
  </var-popup>
  
  <var-popup position="top" v-model:show="top">
    <div class="popup-example-block">
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    </div>
  </var-popup>
  
  <var-popup position="left" v-model:show="left">
    <div class="popup-example-block">
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    </div>
  </var-popup>
  
  <var-popup position="right" v-model:show="right">
    <div class="popup-example-block">
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    </div>
  </var-popup>
</template>

<style>
.popup-example-block {
  padding: 20px 24px;
  width: 250px;
}
</style>
```

### Overlay Style

```html
<script setup>
import { ref } from 'vue'
  
const overlayClass = ref(false)
const overlayStyle = ref(false)
</script>

<template>
  <var-space direction="column" :size="[10, 0]">
    <var-button type="primary" block @click="overlayClass = true">
      Overlay Class
    </var-button>
    <var-button type="primary" block @click="overlayStyle = true">
      Overlay Style
    </var-button>
  </var-space>
  
  <var-popup
    overlay-class="popup-example-custom-overlay"
    v-model:show="overlayClass"
  >
    <div class="popup-example-block">
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    </div>
  </var-popup>
  
  <var-popup
    :overlay-style="{backgroundColor: 'rgba(0, 0, 0, 0.3)'}"
    v-model:show="overlayStyle"
  >
    <div class="popup-example-block">
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    </div>
  </var-popup>
</template>

<style>
.popup-example-custom-overlay {
  background: rgba(0, 0, 0, 0.3) !important;
}

.popup-example-block {
  padding: 20px 24px;
  width: 250px;
}
</style>
```

### Events

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'
  
const event = ref(false)
</script>

<template>
  <var-button type="primary" block @click="event = true">
    Event
  </var-button>

  <var-popup
    v-model:show="event"
    @open="() => Snackbar.info('open')"
    @opened="() => Snackbar.success('opened')"
    @close="() => Snackbar.warning('close')"
    @closed="() => Snackbar.error('closed')"
  >
    <div class="popup-example-block">
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    </div>
  </var-popup>
</template>

<style>
.popup-example-block {
  padding: 20px 24px;
  width: 250px;
}
</style>
```

## API

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `v-model:show` | Whether to display the Popup | _boolean_ | `false` |
| `position` | Popup position with optional value of `top` `bottom` `right` `left` `center` | _string_ | `center` |
| `overlay` | Whether to display the overlay | _boolean_ | `true` |  
| `overlay-class` | Custom overlay class | _string_ | `-` |
| `overlay-style` | Custom overlay style | _object_ | `-` |
| `transition` | Transition animation name | _string_ | `-` |
| `lock-scroll` | Whether to disable scrolling penetration, scrolling the Popup when disabled will not cause the body to scroll | _boolean_ | `true` |
| `close-on-click-overlay` | Whether to click the overlay to close the Popup | _boolean_ | `true` | 
| `teleport` | The location of the Popup to mount | _TeleportProps['to']_ | `-` |

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

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--popup-overlay-background-color` | `rgba(0, 0, 0, .6)` |
| `--popup-content-background-color` | `#fff` |