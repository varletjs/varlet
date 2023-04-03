# Cell

### Intro

The cell is a single display item in the list.

### Basic Usage

```html
<template>
  <var-cell>This is Cell</var-cell>
</template>
```

### Show Icon

```html
<template>
  <var-cell icon="fire" title="This is Cell">
    <template #extra>
      <var-icon name="information" />
    </template>
  </var-cell>
</template>
```

### Show Description

```html
<template>
  <var-cell title="This is Cell" description="description" />
</template>
```

### Show Border

```html
<template>
  <var-cell border>This is Cell</var-cell>
</template>
```

### Use As List Item

```html
<script setup>
import { ref } from 'vue'

const items = ref([
  {
    name: 'Vue2',
    icon: 'star',
    enabled: false,
  },
  {
    name: 'Vue3',
    icon: 'heart',
    enabled: false,
  },
  {
    name: 'React',
    icon: 'close-circle',
    enabled: false,
  },
])

const handleClick = (item) => {
  item.enabled = !item.enabled
}
</script>

<template>
  <var-paper :elevation="2">
    <var-cell
      v-for="(item, index) in items"
      :key="item.name"
      ripple
      :icon="item.icon"
      :border="index !== items.length - 1"
      :border-offset="0"
      @click="handleClick(item)"
    >
      {{ item.name }}

      <template #extra>
        <var-switch v-model="item.enabled" @click.stop />
      </template>
    </var-cell>
  </var-paper>
</template>
```

## API

### Props

| Prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `title` | Title | _string \| number_ | `-` |
| `icon` | Icon name | _string_ | `-` |
| `description` | Description | _string_ | `-` |
| `border` | Whether to show border | _boolean_ | `false` |
| `border-offset` | Border offset | _string \| number_ | `-` |
| `icon-class` | Icon className | _string_ | `-` |
| `title-class` | Title className | _string_ | `-` |
| `description-class` | Description className | _string_ | `-` |
| `extra-class` | Extra className | _string_ | `-` |
| `ripple` | Whether to enable the water wave effect | _boolean_ | `false` |

### Events

| Event        | Description                                                                                          | Arguments      |
| ------------ | ---------------------------------------------------------------------------------------------------- | -------------- |
| `click`      | Triggered when the cell is clicked.  | `event: Event` |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Content of cell | `-` |
| `icon` | Icon of cell | `-` |
| `description` | Description of cell | `-` |
| `extra` | Extra of cell | `-` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable        | Default |
|-----------------| --- |
| `--cell-color`  | `var(--color-text)` |
| `--cell-font-size` | `var(--font-size-md)` |
| `--cell-description-font-size` | `var(--font-size-sm)` |
| `--cell-description-color` | `rgba(0, 0, 0, 0.6)` |
| `--cell-padding` | `10px 12px` |
| `--cell-min-height` | `40px` |
| `--cell-border-color` | `#bcc2cb` |
| `--cell-border-left` | `12px` |
| `--cell-border-right` | `12px` |
| `--cell-icon-right` | `8px` |
| `--cell-extra-left` | `8px` |
