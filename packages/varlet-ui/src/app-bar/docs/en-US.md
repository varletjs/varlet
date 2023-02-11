# AppBar

### Basic Usage

Set the title of the app bar through the `title` prop.

```html
<template>
   <var-app-bar title="title" />
</template>
```

### Add Slots At Title

```html
<template>
   <var-app-bar>Add Slots At Title</var-app-bar>
</template>
```

### Add Left And Right Slot

```html
<template>
  <var-app-bar title="Title">
    <template #left>
      <var-button
        color="transparent"
        text-color="#fff"
        round
        text
      >
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-menu>
        <var-button
          color="transparent"
          text-color="#fff"
          round
          text
        >
          <var-icon name="menu" :size="24" />
        </var-button>

        <template #menu>
          <var-cell ripple>OPTION</var-cell>
          <var-cell ripple>OPTION</var-cell>
          <var-cell ripple>OPTION</var-cell>
        </template>
      </var-menu>
    </template>
  </var-app-bar>
</template>
```

### Use Border Radius

Turn on rounded border with the `round` prop.

```html
<template>
   <var-app-bar title="Use Border Radius" title-position="center" round />
</template>
```

### Custom Background Color

```html
<template>
   <var-app-bar
     title="title"
     title-position="center"
     color="linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)"
   />
</template>
```

### Custom Content

```html
<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-app-bar
    round
    image="https://varlet.gitee.io/varlet-ui/tree.jpeg"
    image-linear-gradient="to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%"
  >
    Title
    <template #left>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="menu" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="map-marker-radius" :size="24" />
      </var-button>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="star" :size="24" />
      </var-button>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="heart" :size="24" />
      </var-button>
    </template>

    <template #content>
      <var-tabs
        style="margin-top: 20vw"
        color="transparent"
        active-color="#fff"
        inactive-color="#ddd"
        v-model:active="active"
      >
        <var-tab>OPTION</var-tab>
        <var-tab>OPTION</var-tab>
        <var-tab>OPTION</var-tab>
      </var-tabs>
    </template>
  </var-app-bar>
</template>
```

## API

### Props

| Prop             | Description                                          | Type | Default |
|------------------|------------------------------------------------------| --- |---------|
| `color`          | Background                                           | _string_ | `-`     |
| `text-color`     | Text color                                           | _string_ | `-`     |
| `title`          | Title                                                | _string_ | -       |
| `title-position` | Title location,Can be set to `left`,`center`,`right` | _string_ | `left`  |
| `elevation`      | Whether to use elevation                             | _boolean_ | `true`  |
| `round`          | Whether to use rounded border                        | _boolean_ | `false` |
| `image`          | Background image                            | _string_ | `-` |
| `image-linear-gradient` | Background image linear gradient | _string_ | `-` |

### Slots

| Name | Description                                                 | SlotProps |
| --- |-------------------------------------------------------------| --- |
| `default` | Customize the title content to override the `title` content | `-` |
| `left` | Insert the content to the left of the app bar               | `-` |
| `right` | Insert the content to the right of the app bar              | `-` |
| `content` | Insert the content to the extra content of the app bar   | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--app-bar-color` | `var(--color-primary)` |
| `--app-bar-text-color` | `#fff` |
| `--app-bar-height` | `54px` |
| `--app-bar-title-padding` | `0 12px` |
| `--app-bar-title-font-size` | `var(--font-size-lg)` |
| `--app-bar-left-gap` | `6px` |
| `--app-bar-right-gap` | `6px` |
| `--app-bar-border-radius` | `4px` |
