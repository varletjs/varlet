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
        text-color="#ffffff"
        round
        text
      >
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-menu placement="bottom-start" :offset-y="12">
        <var-button
          color="transparent"
          text-color="#ffffff"
          round
          text
        >
          <var-icon name="menu" :size="24" />
        </var-button>

        <template #menu>
          <var-cell v-ripple>OPTION</var-cell>
          <var-cell v-ripple>OPTION</var-cell>
          <var-cell v-ripple>OPTION</var-cell>
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
     color="linear-gradient(var(--color-primary), var(--color-info))"
   />
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

### Slots

| Name | Description                                                 | SlotProps |
| --- |-------------------------------------------------------------| --- |
| `default` | Customize the title content to override the `title` content | `-` |
| `left` | Insert the content to the left of the app bar               | `-` |
| `right` | Insert the content to the right of the app bar              | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--app-bar-color` | `var(--color-primary)` |
| `--app-bar-text-color` | `#fff` |
| `--app-bar-height` | `54px` |
| `--app-bar-title-padding` | `0 12px` |
| `--app-bar-left-gap` | `6px` |
| `--app-bar-right-gap` | `6px` |
| `--app-bar-border-radius` | `4px` |
| `--app-bar-font-size` | `var(--font-size-md)` |
