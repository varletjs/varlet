# Cell

### Intro

The cell is a single display item in the list.

### Install

```js
import { Cell } from '@varlet/ui'

createApp().use(Cell)
```

### Basic Usage

```html
<var-cell> This is Cell </var-cell>
```

### Show Icon
```html
<var-cell icon="fire" title="This is Cell">
  <template #extra>
    <var-icon name="information" />
  </template>
</var-cell>
```

### Show Description
```html
<var-cell title="This is Cell" desc="description" />
```

### Show Border
```html
<var-cell border> This is Cell </var-cell>
```

## API

### Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `title` | Title	| _string_ ｜ _number_ | - |
| `icon` | Icon name | _string_ | - |
| `desc` | Description | _string_ | - |
| `border` | Whether to show border | _boolean_ | `false` |
| `icon-class` | Icon className | _string_ | - |
| `title-class` | Title className | _string_ | - |
| `desc-class` | Description className | _string_ | - |
| `extra-class` | Extra className | _string_ | - |

### 插槽

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Content of cell | - |
| `icon` | Icon of cell | - |
| `desc` | Description of cell | - |
| `extra` | Extra of cell | - |
