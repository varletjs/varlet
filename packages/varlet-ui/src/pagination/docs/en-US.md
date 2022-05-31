# Pagination

### Intro

You may need it when you need to process large amounts of data.

## Simple Mode

### Intro

The default display mode is recommended for small-screen devices. See the mobile phone emulator on the right for a preview of the components.

### Basic Usage

```html
<template>
  <var-pagination :current="3" :total="120" />
</template>
```

### Hide Size Changer

Use `show-size-changer` prop to hide size changer.

```html
<template>
  <var-pagination :current="3" :total="120" :show-size-changer="false"/>
</template>
```

### Show Total

Use `showTatol` prop to show custom total text.

```html
<template>
  <var-pagination
    :current="3"
    :total="66"
    :show-total="total => `Total ${total} items`"
  />
</template>
```

### Disabled

```html
<template>
  <var-pagination :current="3" :total="115" disabled />
</template>
```

## Basic Mode

### Intro

Set `simple` to `false` when you use medium and large screen devices, preview see `playground`

### Basic Usage

```html
<template>
  <var-pagination current="6" total="115" :simple="false"/>
</template>
```

### Enable page number to jump quickly

Use `show-quick-jumper` prop to enable page number to jump quickly.

```html
<template>
  <var-pagination
    :current="3"
    :total="120"
    :simple="false"
    show-quick-jumper
  />
</template>
```

### Size Option

Use `show-size-changer` hide size changer and use `size-option` prop set the number of `size` that can be chosen.

```html
<template>
  <var-space direction="column" :size="[14, 14]">
    <var-pagination
      :current="3"
      :total="120"
      :simple="false"
      :show-size-changer="false"
    />
    <var-pagination
      :current="3"
      :total="120"
      :simple="false"
      :size-option="[10, 20, 30, 40]"
    />
  </var-space>
</template>
```

### Show Total

```html
<template>
  <var-space direction="column" :size="[14, 14]">
    <var-pagination
      :current="3"
      :size="10"
      :total="120"
      :simple="false"
      :show-total="total => `Total ${total} items`"
    />
    <var-pagination
      :current="3"
      :size="10"
      :total="120"
      :simple="false"
      :show-total="(total, range) => `Total ${total}, current ${range[0]}-${range[1]}`"
    />
  </var-space>
</template>
```

### Disabled

```html
<template>
  <var-pagination :current="6" :total="120" :simple="false" disabled />
</template>
```

## API

### Props

| Prop                | Description | Type | Default |
|---------------------| -------------- | -------- | ---------- |
| `v-model: current`  | Current page number | _string \| number_ | `1` |
| `v-model: size`     | Number of data items per page | _string \| number_ | `10` |
| `total`             | Total number of data items | _string \| number_ | `0` |
| `simple`            | Whether to use simple mode | _boolean_ | `true` |
| `disabled`          | Disable pagination | _boolean_ | `false` |
| `show-size-changer` | Whether to show `size` select | _boolean_ | `true` |
| `show-quick-jumper` | Whether you can jump to pages directly	 | _boolean_ | `false` |
| `max-pager-count`   | Number of buttons displayed between ellipses	| _number_ | `3` |
| `size-option`       | Specify the sizeChanger options	 | _number[]_ | `[10, 20, 50, 100]` |
| `show-total`        | Show page item's title	 | _function(total, range)_ | `-` |

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

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--pagination-font-size` | `var(--font-size-md)` |  
| `--pagination-active-color` | `#fff` |  
| `--pagination-active-bg-color` | `var(--color-primary)` |  
| `--pagination-hover-bg-color` | `#edf5ff` |  
| `--pagination-total-margin` | `0 12px` |  
| `--pagination-total-line-height` | `24px` |  
| `--pagination-item-width` | `32px` |  
| `--pagination-item-height` | `32px` |  
| `--pagination-item-margin` | `0 6px` |  
| `--pagination-item-border-radius` | `4px` |  
| `--pagination-list-bg-color` | `#fff` |  
| `--pagination-list-active-bg-color` | `#edf5ff` |  
| `--pagination-list-active-color` | `var(--color-primary)` |  
| `--pagination-input-width` | `32px` |
| `--pagination-simple-padding` | `0 0 2px 0` |
| `--pagination-disabled-color` | `var(--color-text-disabled)` |
| `--pagination-bg-disabled-color` | `var(--color-disabled)` |
| `--pagination-size-line-height` | `24px` | 