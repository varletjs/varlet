# Overlay

### Intro

Create a mask layer to emphasize specific page elements.


### Basic Usage

```html
<script setup>
import { ref } from 'vue'
  
const show = ref(false)
</script>

<template>
  <var-button type="primary" block @click="show = true">Show Overlay</var-button>
  <var-overlay v-model:show="show" />
</template>
```

### Overlay Content

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <var-button type="primary" block @click="show = true">Overlay Content</var-button>
  <var-overlay v-model:show="show">
    <div class="overlay-content" @click.stop>
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    </div>
  </var-overlay>
</template>

<style>
.overlay-content {
  padding: 20px 24px;
  width: 250px;
  background: var(--button-default-color);
}
</style>
```

### Event

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const show = ref(false)
</script>

<template>
  <var-button type="primary" block @click="show = true">Click Overlay</var-button>
  <var-overlay
    v-model:show="show"
    @click="Snackbar.success('click')"
  />
</template>
```

## API

### Props

| Prop           | Description                                                                                                     | 	Type                 | Default |
|----------------|-----------------------------------------------------------------------------------------------------------------|-----------------------|---------|
| `v-model:show` | Whether to display the Overlay                                                                                  | _boolean_             | `false` |
| `lock-scroll`  | Whether to disable scrolling penetration, scrolling the Overlay when disabled will not cause the body to scroll | _boolean_             | `true`  |
| `teleport`     | The location of the Overlay to mount                                                                            | _TeleportProps['to']_ | `-`     |

### Events

| Event   | Description                         | Arguments |
|---------|-------------------------------------|-----------|
| `click` | Triggered when you click on overlay | `-`       |

### Slots

| Name      | Description  | SlotProps |
|-----------|--------------|-----------|
| `default` | Default slot | `-`       |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable                     | Default             |
|------------------------------|---------------------|
| `--overlay-background-color` | `rgba(0, 0, 0, .6)` |
