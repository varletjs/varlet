# Breadcrumbs

### Intro

Used to display information hierarchically.

### Basic usage

```html
<template>
   <var-breadcrumbs>
     <var-breadcrumb>Home</var-breadcrumb>
     <var-breadcrumb>Link 1</var-breadcrumb>
     <var-breadcrumb>Link 2</var-breadcrumb>
   </var-breadcrumbs>
</template>
```

### Separator

```html
<template>
   <var-breadcrumbs separator="\">
     <var-breadcrumb>Home</var-breadcrumb>
     <var-breadcrumb>Link 1</var-breadcrumb>
     <var-breadcrumb>Link 2</var-breadcrumb>
   </var-breadcrumbs>
</template>
```

### Child Separator

```html
<template>
   <var-breadcrumbs>
     <var-breadcrumb>Home</var-breadcrumb>
     <var-breadcrumb separator="~">Link 1</var-breadcrumb>
     <var-breadcrumb>Link 2</var-breadcrumb>
   </var-breadcrumbs>
</template>
```

### Separator Slot

Custom content can be used as separator by setting slot.

```html
<var-breadcrumbs>
   <var-breadcrumb>
     Home
     <template #separator>
       <var-icon name="menu-right" style="margin: 0 4px" />
     </template>
   </var-breadcrumb>
   <var-breadcrumb>
     Link 1
     <template #separator>
       <var-icon name="menu-right" style="margin: 0 4px" />
     </template>
   </var-breadcrumb>
   <var-breadcrumb>Link 2</var-breadcrumb>
</var-breadcrumbs>
```

## API

### Attributes

#### Breadcrumbs Props

| Prop               | Description          | Type               | Default      |
| ----------- | ------ | -------- | ------ |
| `separator` | separator | _string_ | `/` |

#### Breadcrumb Props

| Prop       | Description            | Type               | Default |
| ----------- | -------------- | ----------------------------- |-----|
| `separator` | separator | _string_ | `-` |

### Events

#### Breadcrumb Events

| Event    | Description   | Arguments                 |
| ------- |-----------------------------------------| ---------------------- |
| `click` | Triggered when a breadcrumb is clicked | `event: Event` |

### Slots

#### Breadcrumbs Slots

| Name | Description | SlotProps |
| --------- | -------------- | ---- |
| `default` | Customize the default content | `-` |

#### Breadcrumb Slots

| Name | Description | SlotProps |
| ----------- |------------------------------| ---- |
| `default` | Customize the default content | `-` |
| `separator` | Customize separator content  | `-` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).
#### Breadcrumb Variables

| Variable                        | Default                |
| -------------------------------------- | ---------------------- |
| `--breadcrumb-active-color` | `var(--color-primary)` |
| `--breadcrumb-inactive-color` | `#888` |
| `--breadcrumb-separator-margin` | `0 10px` |
| `--breadcrumb-separator-font-size` | `14px` |