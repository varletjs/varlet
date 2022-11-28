# Overlay

### Intro

Create a mask layer to emphasize specific page elements.


### Basic use

```html
<script setup>
import { ref } from 'vue'
  
const baseOverlay = ref(false)
</script>

<template>
  <var-space>
    <var-button @click="baseOverlay = true">Basic use</var-button>
  </var-space>

  <var-overlay v-model:show="baseOverlay" />
</template>

```

### Embedded Content

```html
<script setup>
import { ref } from 'vue'

const contentOverlay = ref(false)
</script>

<template>
  <var-space>
    <var-button @click="contentOverlay = true">Embedded Content</var-button>
  </var-space>

  <var-overlay v-model:show="contentOverlay">
    <div class="popup-example-block" @click.stop>
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    </div>
  </var-overlay>
</template>

<style>
.popup-example-block {
  padding: 20px 24px;
  width: 250px;
  background: #fff;
  border-radius: 5px;
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
      Overlay class
    </var-button>
    <var-button type="primary" block @click="overlayStyle = true">
      Overlay style
    </var-button>
  </var-space>
  
  <var-overlay 
    v-model:show="overlayClass"
    class="popup-example-custom-overlay"
  />

  <var-overlay
    v-model:show="overlayStyle"
    :style="{backgroundColor: 'rgba(0, 0, 0, 0.3)'}"
  />
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

### Event
```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const clickOverlay = ref(false)
</script>

<template>
  <var-button type="primary" block @click="event = true">
    Event
  </var-button>

  <var-overlay
    v-model:show="event"
    @click-overlay="()=> Snackbar.success('click')"
  />
</template>

```

## API

### Props

| Prop           | Description                        | 	Type                 | Default |
|----------------|------------------------------------|-----------------------|---------|
| `v-model:show` | Whether to display the Overlay     | _boolean_             | `false` |
| `class`        | Custom class                       | _string_              | `-`     |
| `style`        | Custom style                       | _object_              | `-`     |
| `teleport`     | The location of the Popup to mount | _TeleportProps['to']_ | `-`     |
### Events

| Event           | Description                         | Arguments |
|-----------------|-------------------------------------|-----------|
| `click-overlay` | Triggered when you click on overlay | `-`       |

### Slots

| Name      | Description  | SlotProps |
|-----------|--------------|-----------|
| `default` | Default slot | `-`       |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable                           | Default             |
|------------------------------------|---------------------|
| `--popup-overlay-background-color` | `rgba(0, 0, 0, .6)` |
