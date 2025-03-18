# Signature

### Intro

A component for electronic signature that allows users to sign on the screen.

### Basic Usage

Bind signature value through `v-model`.

```html
<script setup>
import { ref } from 'vue'

const signature = ref('')

const reset = () => {
  signature.value = ''
}

const confirm = () => {
  console.log('Signature data:', signature.value)
}
</script>

<template>
  <var-signature v-model="signature" />
  
  <var-space>
    <var-button type="primary" @click="confirm">Confirm</var-button>
    <var-button @click="reset">Reset</var-button>
  </var-space>
  
  <img v-if="signature" :src="signature" alt="Signature Preview" style="margin-top: 10px" />
</template>
```

### Custom Style

Customize signature style through properties like `stroke-style`, `line-width`, etc.

```html
<script setup>
import { ref } from 'vue'

const signature = ref('')
</script>

<template>
  <var-signature
    v-model="signature"
    stroke-style="#2979ff"
    :line-width="3"
  />
</template>
```

### Specify Image Format

Specify the generated image format through `data-url-type`.

```html
<template>
  <var-signature
    v-model="signature"
    data-url-type="jpg"
  />
</template>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `v-model` | Signature value (base64 format) | _string_ | `''` |
| `stroke-style` | Pen color, supports `currentColor` | _string_ | `#000` |
| `line-width` | Line width | _string \| number_ | `2` |
| `data-url-type` | Generated image format | _'png' \| 'jpg'_ | `'png'` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `start` | Triggered when starting to sign | `event: TouchEvent` |
| `signing` | Triggered during signing | `{ x: number, y: number, clientX: number, clientY: number }` |
| `end` | Triggered when ending signature | `event: Event` |

### Methods

| Method | Description | Parameters | Return |
| --- | --- | --- | --- |
| `reset` | Clear signature and end current path | `-` | `void` |
| `confirm` | Save signature, returns base64 format image data. Returns empty string if canvas is empty | `-` | `string` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--signature-height` | `200px` |
| `--signature-border-color` | `var(--color-surface-container-highest)` |
| `--signature-stroke-color` | `#fff` |

### Example

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const signature = ref('')

const handleConfirm = async () => {
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
      stroke-style="#2979ff"
      :line-width="3"
    />
    
    <template #footer>
      <var-space>
        <var-button type="primary" @click="handleConfirm">
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

1. Signature data is stored in base64 format, which may occupy large space. It's recommended to compress before uploading to server
2. When using on mobile devices, it's recommended to set appropriate canvas size for better signature experience
3. Canvas border, border radius and other styles can be customized through CSS
4. The component automatically adapts to container width and adjusts canvas size when window size changes
5. When `stroke-style` is set to `'currentColor'`, it will inherit the text color of the parent element
6. You can choose to generate PNG or JPG format signature images through the `data-url-type` property
