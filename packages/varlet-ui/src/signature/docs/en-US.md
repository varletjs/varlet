# Signature

### Intro

A component for electronic signature that allows users to sign on the screen.

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const signature = ref('')
</script>

<template>
  <var-signature v-model="signature" />
</template>


### Custom Line Width

```html
<script setup>
import { ref } from 'vue'

const signature = ref('')
</script>

<template>
  <var-signature v-model="signature" :line-width="4" />
</template>

### Custom Stroke Style

```html
<script setup>
import { ref } from 'vue'

const signature = ref('')
</script>

<template>
  <var-signature v-model="signature" stroke-style="#f44336" />
</template>

### Custom Height
```html

<script setup>
import { ref } from 'vue'

const signature = ref('')
</script>

<template>
  <var-signature v-model="signature" :height="300" />
</template>

###Custom Output Type
```html
<script setup>
import { ref } from 'vue'

const signature = ref('')
</script>

<template>
  <var-signature v-model="signature" type="jpg" />
</template>

### Form Validation
```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const signature = ref('')

const onSubmit = () => {
  Snackbar.success('Submit Success')
}
</script>

<template>
  <var-form @submit="onSubmit">
    <var-signature
      v-model="signature"
      :rules="[v => !!v || 'Signature is required']"
    />
    <var-button type="primary" native-type="submit">Submit</var-button>
  </var-form>
</template>

## API
### Props Prop Description Type Default v-model

Signature data URL

string

'' line-width

Line width of the signature

number

2 stroke-style

Stroke style of the signature

string

'#000' type

Output image type

'png' | 'jpg'

'png' unsupport-text

Text displayed when canvas is not supported

string

- custom-class

Custom class name

string

'' height

Height of the signature area

number | string

200 validate-trigger

Trigger method for validation

ValidateTriggers[]

['onChange'] rules

Validation rules

Array | Object

-
### Events Event Description Arguments start

Triggered when starting to sign

- signing

Triggered during signing

event: TouchEvent | MouseEvent end

Triggered when ending the signature

- confirm

Triggered when confirming the signature

canvas: HTMLCanvasElement, dataUrl: string clear

Triggered when clearing the signature

- update:model-value

Triggered when the signature value changes

value: string
### Slots Name Description SlotProps default

Custom content

-
### Style Variables
Here are the CSS variables used by the component. Styles can be customized using StyleProvider .
 Variable Default --signature-background-color

#fff --signature-border-color

#e0e0e0 --signature-border-radius

4px --signature-actions-padding

10px --signature-button-margin

0 4px --signature-inner-height

200px