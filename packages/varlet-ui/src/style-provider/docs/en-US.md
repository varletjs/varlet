# Style Provider

### Intro

Style variables can be easily mounted through the StyleProvider component. The component provides two calling methods: `component calling` and `functional calling`.

### Component Call

Component calls can have a scope of custom component styles, Scope contamination is avoided.
Note that some elements sent outside the StyleProvider using the `teleport` will not work.

```html
<script setup>
import { ref, reactive } from 'vue'

const state = reactive({
  score: 5,
  license: true,
})

const successTheme = {
  '--rate-primary-color': 'var(--color-success)',
  '--button-primary-color': 'var(--color-success)',
  '--switch-handle-active-background': 'var(--color-success)',
  '--switch-track-active-background': 'var(--color-success)',
}

const styleVars = ref(null)

function toggleTheme() {
  styleVars.value = styleVars.value ? null : successTheme
}
</script>

<template>
  <var-style-provider :style-vars="styleVars">
    <var-rate v-model="state.score" />
    <var-switch v-model="state.license" />
    <var-button 
      style="margin-top: 10px" 
      type="primary"
      block
      @click="toggleTheme"
    >
      Toggle Theme
    </var-button>
  </var-style-provider>
</template>
```

### Function Call

A functional call is to update variables directly on `:root`, which is suitable for situations where a global update style is required.

```html
<script setup>
import { StyleProvider } from '@varlet/ui'

let rootStyleVars = null

const darkTheme = {
  '--color-primary': 'var(--color-info)'
}

function toggleRootTheme() {
  rootStyleVars = rootStyleVars ? null : darkTheme
  StyleProvider(rootStyleVars)
}
</script>

<template>
  <var-button type="primary" block @click="toggleRootTheme">Toggle Root Theme</var-button>
</template>
```

## API

### Props

| Prop         | Description   | Type                     | Default | 
|--------------|---------------|--------------------------|---------| 
| `style-vars` | CSS variables | _Record<string, string>_ | `{}`    |
| `tag`        | Tag name      | _string_                 | `div`   |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Component content | `-` |