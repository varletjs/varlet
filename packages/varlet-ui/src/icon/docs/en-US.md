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
  <var-icon name="checkbox-marked-circle" color="var(--color-primary)" />
  <var-icon name="checkbox-marked-circle" color="var(--color-primary)" :size="26"/>
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

### Event

```html
<script setup>
import { Snackbar } from '@varlet/ui'
</script>

<template>
  <var-icon 
    name="checkbox-marked-circle"
    color="var(--color-primary)"
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

function toggle() {
  name.value = name.value === 'information' 
    ? 'checkbox-marked-circle' 
    : 'information'
}
</script>

<template>
  <var-icon 
    color="var(--color-primary)" 
    :name="name" 
    :transition="300" 
    :size="30" 
    @click="toggle"
  />

  <var-icon
    color="var(--color-primary)"
    animation-class="fade"
    :name="iconName"
    :transition="300"
    :size="30"
    @click="toggle"
  />
</template>

<style>
.fade {
  opacity: 0;
  transition-property: opacity;
}
</style>
```

### Custom Icons

First you need to set up your own font and install it into your project.
Let's assume that we extend a font named `my-icons`.

```css
/* playground-ignore */
/* Set the font */
@font-face {
  font-family: "my-icons";
  src: url("https://xxx.my-icons.ttf") format("truetype");
}

/* Set namespace */
.my-icon {
  font-family: "my-icons";
}
/* OR */
.my-icon--set {
  font-family: "my-icons";
}
/* Set namespace end */

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
| `animation-class` | Name of the transition animation class |  _string_ | `-` |
| `transition` | Transition animation time(ms)                  | _string \| number_ | `0`        |

### Events

| Event   | Description                          | Arguments      |
| ------- | ------------------------------------ | -------------- |
| `click` | Triggered when you click on the icon | `event: Event` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable      | Default |
| ------------- | ------- |
| `--icon-size` | `20px`  |
