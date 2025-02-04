# Pagination

### Intro

You may need it when you need to process large amounts of data.

## Simple Mode

### Intro

A default display mode, recommended for small-screen devices.

### Basic Use

```html
<template>
  <var-pagination :current="1" :total="20" />
</template>
```

### Hide Size Changer

Use `show-size-changer` to control the display and hiding of the `size` controller.

```html
<template>
  <var-pagination :current="1" :total="20" :show-size-changer="false" />
</template>
```

### Show Total

Use the `showTotal` prop to customize the total display.

```html
<template>
  <var-pagination
    :current="1"
    :total="20"
    :show-size-changer="false"
    :show-total="total => `${total} items`"
  />
</template>
```

### Disabled

```html
<template>
  <var-pagination :current="1" :total="20" disabled />
</template>
```

## Basic Mode

### Intro

When the `simple` property is `false`, we can enable the paging style designed specifically for wide screens.

### Basic Use

```html
<template>
  <var-pagination :simple="false" :current="1" :total="20" />
</template>
```

### Hide Size Changer

Use `show-size-changer` to control the display and hiding of the `size` controller.

```html
<template>
  <var-pagination :current="1" :total="20" :simple="false" :show-size-changer="false" />
</template>
```

### Show Total

Use the `showTotal` prop to customize the total display.

```html
<template>
  <var-pagination
    :current="1"
    :total="20"
    :simple="false"
    :show-size-changer="false"
    :show-total="total => `${total} items`"
  />
</template>
```

### Disabled

```html
<template>
  <var-pagination :simple="false" :current="1" :total="20" disabled />
</template>
```

### Quick Jumper

Use the `show-quick-jumper` property to enable quick page jumps.

```html
<template>
  <var-pagination 
    :simple="false" 
    :current="1" 
    :total="20" 
    :show-size-changer="false" 
    show-quick-jumper
  />
</template>
```

## API

### Props

| Prop                | Description                                                                     | Type | Default |
|---------------------|---------------------------------------------------------------------------------| -------- | ---------- |
| `v-model:current`  | Current page number                                                             | _string \| number_ | `1` |
| `v-model:size`     | Number of data items per page                                                   | _string \| number_ | `10` |
| `total`             | Total number of data items                                                      | _string \| number_ | `0` |
| `simple`            | Whether to use simple mode                                                      | _boolean_ | `true` |
| `elevation`         | Elevation level, options `true` `false` and level of `0-24`, not in simple mode | _string \| number \| boolean_|   `true`    |
| `disabled`          | Disable pagination                                                              | _boolean_ | `false` |
| `show-size-changer` | Whether to show `size` select                                                   | _boolean_ | `true` |
| `show-quick-jumper` | Whether you can jump to pages directly	                                         | _boolean_ | `false` |
| `max-pager-count`   | Number of buttons displayed between ellipses	                                   | _number_ | `3` |
| `size-option`       | Specify the sizeChanger options	                                                | _number[]_ | `[10, 20, 50, 100]` |
| `show-total`        | Show page item's title	                                                         | _function(total, range)_ | `-` |

### Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `change` | Callback after `current` or `size` changes | `current: number` <br>`size: number`  |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `prev` | Content of previous button | `-` |
| `next` | Content of next button | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--pagination-text-color` | `#555` |
| `--pagination-font-size` | `var(--font-size-md)` |
| `--pagination-active-color` | `var(--color-on-primary)` |
| `--pagination-active-bg-color` | `var(--color-primary)` |
| `--pagination-hover-bg-color` | `rgba(85, 85, 85, 0.15)` |
| `--pagination-total-margin` | `0 10px` |
| `--pagination-total-line-height` | `24px` |
| `--pagination-item-width` | `32px` |
| `--pagination-item-height` | `32px` |
| `--pagination-item-margin` | `0 6px` |
| `--pagination-item-border-radius` | `4px` |
| `--pagination-item-background` | `#fff` |
| `--pagination-item-border-radius` | `4px` |
| `--pagination-item-simple-border-radius` | `50%` |
| `--pagination-input-width` | `32px` |
| `--pagination-disabled-color` | `var(--color-text-disabled)` |
| `--pagination-bg-disabled-color` | `var(--color-disabled)` |
| `--pagination-size-line-height` | `24px` |
| `--pagination-size-padding` | `0 4px` |
| `--pagination-quick-jumper-margin` | `0 10px` |