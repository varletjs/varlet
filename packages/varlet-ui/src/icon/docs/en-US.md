# Icon

### Intro
Font based icon library, also support web images.
Font icons are from [Material Design Icon](https://materialdesignicons.com/).

### Icon Size

```html
<template>
  <var-icon name="checkbox-marked-circle" />
  <var-icon name="checkbox-marked-circle" :size="26"/>
</template>
```

### Icon Color

```html
<template>
  <var-icon name="checkbox-marked-circle" color="#2979ff" />
  <var-icon name="checkbox-marked-circle" color="#2979ff" :size="26"/>
</template>
```

### Use Image

When the name passed in is a URL the `img` tag is displayed in `cover` mode.
`size` is the width and height of the image.

```html
<template>
  <var-icon name="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="32" />
</template>
```

### Events

```html
<script setup>
import { Snackbar } from '@varlet/ui'
</script>

<template>
  <var-icon 
    name="checkbox-marked-circle"
    color="#2979ff"
    @click="() => Snackbar.success('Click success')"
  />
</template>
```

### Icon Animation

When `transition (ms)` is set, and the icon is toggled by its `name`, trigger a toggle animation.

```html
<script setup>
import { ref } from 'vue'
const name = ref('information')
const toggle = () => {
  name.value = name.value === 'information' 
    ? 'checkbox-marked-circle' 
    : 'information'
}
</script>

<template>
  <var-icon 
    color="#2979ff" 
    :name="name" 
    :transition="300" 
    :size="30" 
    @click="toggle"
  />
</template>
```

### Custom Icons

First you need to set up your own font and install it into your project.
Let's assume that we extend a font named `my-icons`.

```css
/* playground-ignore */
/* Set the font */
@font-face {
  font-family: "my-icons";
  src: url("https://xxx.my-icons.eot");
  src: url("https://xxx.my-icons.eot") format("embedded-opentype"), 
    url("https://xxx.my-icons.woff2") format("woff2"), 
    url("https://xxx.my-icons.woff") format("woff"), 
    url("https://xxx.my-icons.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

/* Font style */
.my-icon--set,
.my-icon--set::before {
  position: relative;
  display: inline-block;
  font: normal normal normal 14px/1 "my-icons";
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

/* Font names map code points */
.my-icon-hot::before {
  content: "\F000";
}
```

Here you have successfully extended your icon library.
So `my-icon` is your font `namespace`.
You can use it this way:

```html
<!-- playground-ignore -->
<template>
  <var-icon namespace="my-icon" name="hot" />
</template>
```

## API

### Props

| Prop         | Description                                    | Type               | Default    |
| ------------ | ---------------------------------------------- | ------------------ | ---------- |
| `name`       | icon name                                      | _string_           | `-`        |
| `size`       | icon size                                      | _string \| number_ | `-`        |
| `color`      | icon color, Only applies to font icons         | _string_           | `-`        |
| `namespace`  | Icon namespace, extensible custom icon library | _string_           | `var-icon` |
| `transition` | Transition animation time(ms)                  | _string \| number_ | `0`        |

### Events

| Event   | Description                          | Arguments      |
| ------- | ------------------------------------ | -------------- |
| `click` | Triggered when you click on the icon | `event: Event` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable      | Default |
| ------------- | ------- |
| `--icon-size` | `20px`  |