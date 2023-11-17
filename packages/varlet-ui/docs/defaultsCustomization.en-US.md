# Defaults Customization

### Intro

The component library provides the ability to customize the default values of component props.

### Basic Usage

Customize the component's property definition through the static method `setPropsDefaults` provided by the component. It should be noted that attribute customization only takes effect for declarative components, and the customized behavior should be before the component is initialized.

```js
// playground-ignore
// main.ts
import { Button } from '@varlet/ui'

Button.setPropsDefaults({
  type: 'primary',
  elevation: 10
})
```

After customization, the following two writing methods will be equivalent.

```html
<!-- playground-ignore -->
<!-- App.vue -->
<template>
  <var-button>Hello</var-button>
</template>
```

```html
<!-- playground-ignore -->
<!-- App.vue -->
<template>
  <var-button type="primary" :elevation="10">Hello</var-button>
</template>
```