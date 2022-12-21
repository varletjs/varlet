# Breadcrumb

### Introduce

Displays the location of the current page, making it easier to browser back.

### Basic Usage

In `var-breadcrumbs` , each `var-breadcrumb` is a tag that stands for every level starting from homepage.

```html
<template>
  <var-breadcrumbs>
    <var-breadcrumb :to="{ path: '/'}">Homepage</var-breadcrumb>
    <var-breadcrumb>Second Level</var-breadcrumb>
    <var-breadcrumb>Third Level</var-breadcrumb>
  </var-breadcrumbs>
</template>
```

### Separator

This component has a `String` attribute `separator`, and it determines the separator. Its default value is `/`.

```html
<template>
  <var-breadcrumbs separator="\">
    <var-breadcrumb :to="{ path: '/' }">Homepage</var-breadcrumb>
    <var-breadcrumb>Second Level</var-breadcrumb>
    <var-breadcrumb>Third Level</var-breadcrumb>
  </var-breadcrumbs>
</template>
```

### Each Level Separator

Each level separator can be set separately，`var-breadcrumb` has a `String` attribute `separator`, and it determines the separator. Its default value is `separator` in `var-breadcrumbs`.

```html
<template>
  <var-breadcrumbs separator="\">
    <var-breadcrumb :to="{ path: '/' }">Homepage</var-breadcrumb>
    <var-breadcrumb separator="~">Second Level</var-breadcrumb>
    <var-breadcrumb>Third Level</var-breadcrumb>
  </var-breadcrumbs>
</template>
```

### Separator Slot

Set the slot to use custom content as the separator, it will cover `separator`.

```html
<var-breadcrumbs>
  <var-breadcrumb :to="{ path: '/' }">
    <template #separator>
      <var-icon name="chevron-right" />
    </template>
    Homepage
  </var-breadcrumb>
  <var-breadcrumb>
    <template #separator>
      <var-icon name="chevron-right" />
    </template>
    Second Level
  </var-breadcrumb>
  <var-breadcrumb>
    <template #separator>
      <var-icon name="chevron-right" />
    </template>
    Third Level
  </var-breadcrumb>
</var-breadcrumbs>
```

## API

### Props

#### Breadcrumbs Props

| Prop        | Description         | Type     | Default |
| ----------- | ------------------- | -------- | ------- |
| `separator` | separator character | _string_ | `/`     |

#### breadcrumb Props

| Prop        | Description                                            | Type                          | Default |
| ----------- | ------------------------------------------------------ | ----------------------------- | ------- |
| `separator` | separator character                                    | _string_                      | `/`     |
| `to`        | target route of the link, same as `to` of `vue-router` | _string_ / _RouteLocationRow_ | `''`    |

### Slots

#### Breadcrumbs Slots

| Name      | Description               | SlotProps |
| --------- | ------------------------- | --------- |
| `default` | customize default content | `-`       |

#### breadcrumb Slots

| Name        | Description                 | SlotProps |
| ----------- | --------------------------- | --------- |
| `default`   | customize default content   | `-`       |
| `separator` | customize separator content | `-`       |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

#### breadcrumb Variables

| Variable                            | Default                |
| ----------------------------------- | ---------------------- |
| `--breadcrumb-active-color`         | `var(--color-primary)` |
| `--breadcrumb-active-hover-color`   | `#233dd2`              |
| `--breadcrumb-text-color`           | `#888`                 |
| `--breadcrumb-separator-margin`     | `0 6px`                |
| `---breadcrumb-separator-font-size` | `14px`                 |
