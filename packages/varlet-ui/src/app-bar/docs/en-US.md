# AppBar

### Intro

Provide navigation function for the page, often used at the top of the page.

### Basic Usage

```html
<template>
  <var-app-bar>
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
</template>
```

### Use Border Radius

Turn on rounded border with the `round` prop.

```html
<template>
  <var-app-bar round>
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
</template>
```

### Large Size

```html
<template>
  <var-app-bar size="large">
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
</template>
```

### Add Left And Right Slot

```html
<template>
  <var-app-bar>
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
</template>
```

### Surface App Bar

Use `type="surface"` for a low-emphasis surface appearance, suitable for desktop and admin pages.

```html
<template>
  <var-app-bar type="surface" :elevation="false" border>
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
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
    image="https://varletjs.org/tree.jpeg"
    image-linear-gradient="to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%"
  >
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>

    <template #content>
      <var-tabs
        style="margin-top: 100px"
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
| `type` ***3.18.0*** | AppBar type, can be set to `primary` `surface`       | _string_ | `primary` |
| `size` ***3.18.0*** | Size, can be set to `normal` `large`                | _string_ | `normal` |
| `title`          | Title                                                | _string_ | -       |
| `title-position` | Title location, can be set to `left`, `center`, `right` | _string_ | `left`  |
| `elevation` | Elevation level, options `true` `false` and level of `0-24` | _string \| number \| boolean_|   `true`    |
| `fixed`          | Whether to fixed to the top     | _boolean_ | `false` |
| `placeholder` ***3.2.14***  | Whether to generate placeholder elements of the same height at the top (`fixed` required)  | _boolean_ | `false` |
| `z-index`          | AppBar element z-index                            | _number \| string_ | `1` |
| `round`          | Whether to use rounded border                        | _boolean_ | `false` |
| `border` ***3.3.2***          | Whether to use bottom border                            | _boolean_ | `false` |
| `image`          | Background image                            | _string_ | `-` |
| `image-linear-gradient` | Background image linear gradient | _string_ | `-` |
| `safe-area-top` | Whether to enable top safe area adaptation | _boolean_ | `false` |

### Slots

| Name | Description                                                 | SlotProps |
| --- |-------------------------------------------------------------| --- |
| `default` | Customize the title content to override the `title` content | `-` |
| `left` | Insert the content to the left of the app bar               | `-` |
| `right` | Insert the content to the right of the app bar              | `-` |
| `content` | Insert the content to the extra content of the app bar   | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--app-bar-color` | `var(--color-primary)` |
| `--app-bar-text-color` | `#fff` |
| `--app-bar-height` | `54px` |
| `--app-bar-large-height` | `64px` |
| `--app-bar-surface-color` | `#fff` |
| `--app-bar-surface-text-color` | `rgba(0, 0, 0, 0.87)` |
| `--app-bar-surface-border-bottom` | `thin solid var(--color-outline)` |
| `--app-bar-title-padding` | `0 12px` |
| `--app-bar-title-font-size` | `var(--font-size-lg)` |
| `--app-bar-left-gap` | `6px` |
| `--app-bar-right-gap` | `6px` |
| `--app-bar-border-radius` | `4px` |
| `--app-bar-border-bottom` | `thin solid var(--color-outline)` |
