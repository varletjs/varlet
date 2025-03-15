# Signature

### Intro

A component for electronic signature that allows users to sign on the screen.

### Basic Usage

Bind signature value through `v-model`.

```html
<script setup>
import { ref } from 'vue'

const signature = ref('')

const clear = () => {
  signature.value = ''
}

const save = () => {
  console.log('Signature data:', signature.value)
}
</script>

<template>
  <var-signature v-model="signature" />
  
  <var-space>
    <var-button type="primary" @click="save">Save</var-button>
    <var-button @click="clear">Clear</var-button>
  </var-space>
  
  <img v-if="signature" :src="signature" alt="Signature Preview" style="margin-top: 10px" />
</template>
```

### Custom Style

Customize signature style through properties like `color`, `lineWidth`, etc.

```html
<script setup>
import { ref } from 'vue'

const signature = ref('')
</script>

<template>
  <var-signature
    v-model="signature"
    color="#2979ff"
    line-width="3"
    background="#f5f5f5"
  />
</template>
```

### Disabled State

Set disabled state through the `disabled` property.

```html
<template>
  <var-signature v-model="signature" disabled />
</template>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model` | Signature value (base64 format) | _string_ | `''` |
| `color` | Pen color | _string_ | `#000` |
| `line-width` | Line width | _string \| number_ | `2` |
| `background` | Canvas background color | _string_ | `#fff` |
| `width` | Canvas width | _string \| number_ | `100%` |
| `height` | Canvas height | _string \| number_ | `200` |
| `disabled` | Whether to disable signature | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `start` | Triggered when starting to sign | `event: TouchEvent` |
| `signing` | Triggered during signing | `event: TouchEvent` |
| `end` | Triggered when ending signature | `event: TouchEvent` |
| `change` | Triggered when signature content changes | `value: string` |

### Methods

| Method | Description | Parameters |
| --- | --- | --- |
| `clear` | Clear signature | `-` |
| `save` | Save signature, returns base64 format image data | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--signature-background` | `#fff` |
| `--signature-border-color` | `#e0e0e0` |
| `--signature-border-radius` | `4px` |

### Example

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const signature = ref('')

const handleSave = async () => {
  if (!signature.value) {
    Snackbar.warning('Please sign first')
    return
  }
  
  // Here you can upload signature data to server
  console.log('Signature data:', signature.value)
  Snackbar.success('Save successful')
}
</script>

<template>
  <var-card>
    <template #title>
      Please sign below
    </template>
    
    <var-signature
      v-model="signature"
      height="300"
      color="#2979ff"
      line-width="3"
    />
    
    <template #footer>
      <var-space>
        <var-button type="primary" @click="handleSave">
          Confirm
        </var-button>
        <var-button @click="signature = ''">
          Reset
        </var-button>
      </var-space>
    </template>
  </var-card>
  
  <var-paper :elevation="2" style="margin-top: 16px" v-if="signature">
    <img :src="signature" alt="Signature Preview" style="width: 100%" />
  </var-paper>
</template>
```

## Notes

1. Signature data is stored in base64 format, which may occupy large space. It's recommended to compress before uploading to server.
2. When using on mobile devices, it's recommended to set appropriate canvas size for better signature experience.
3. Canvas border, border radius and other styles can be customized through CSS.