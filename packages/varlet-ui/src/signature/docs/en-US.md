# Signature

### Intro

Signature component based on `Canvas`.

### Basic Usage

Get the data url of the canvas through the component method `confirm`. When the canvas is empty, you will get the `empty string`.

```html
<script setup>
import { ref } from 'vue'

const signature = ref('')
const signatureRef = ref()

function confirmSignature() {
  signature.value = signatureRef.value.confirm()
}

function resetSignature() {
  signature.value = ''
  signatureRef.value.reset()
}
</script>

<template>
  <var-signature ref="signatureRef" />
  <var-space style="margin-top: 10px">
    <var-button type="primary" @click="confirmSignature">Confirm</var-button>
    <var-button type="primary" @click="resetSignature">Reset</var-button>
  </var-space>
  <img v-if="signature" :src="signature" style="margin-top: 10px" />
</template>
```

### Custom Style

You can customize the signature style through `stroke-style` and `line-width`. The default `stroke-style` is `currentColor`, which will inherit the text color, so you can also set the color through `css color`.

```html
<script setup>
import { ref } from 'vue'

const signature = ref('')
const signatureRef = ref()

function confirmSignature() {
  signature.value = signatureRef.value.confirm()
}

function resetSignature() {
  signature.value = ''
  signatureRef.value.reset()
}
</script>

<template>
  <var-signature ref="signatureRef" style="color: var(--color-primary)" :line-width="4" />
  <var-space style="margin-top: 10px">
    <var-button type="primary" @click="confirmSignature">Confirm</var-button>
    <var-button type="primary" @click="resetSignature">Reset</var-button>
  </var-space>
  <img v-if="signature" :src="signature" style="margin-top: 10px" />
</template>
```

## API

### Props

| Prop | Description  | Type | Default |
| --- | --- | --- | --- |
| `stroke-style` | Canvas stroke style | _string_ | `currentColor` |
| `line-width` | Canvas line width | _string \| number_ | `2` |
| `data-url-type` | Data url type for generating image | _'png' \| 'jpg'_ | `'png'` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `start` | Triggered when signing begins | `-` |
| `signing` | Triggered during signature | `-` |
| `end` | Triggered when ending signature | `-` |

### Methods

| Method | Description | Arguments | Return |
| --- | --- | --- | --- |
| `reset` | Reset canvas | `-` | `-` |
| `confirm` | Confirm the signature and return image data in data url format. Returns an empty string when the canvas is empty | `-` | `string` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--signature-height` | `200px` |
| `--signature-background-color` | `var(--color-surface-container-highest)` |
| `--signature-stroke-color` | `#333` |
| `--signature-border-radius` | `4px` |