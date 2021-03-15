# Layout

### Intro

```html
The component library provides two auxiliary layout components,
<var-row/> and <var-col/>, 
so that you can layout more efficiently.
```

### Install

```js
import { createApp } from 'vue';
import { Row, Col } from '@varlet/ui';

createApp().use(Row).use(Col)
```

### Gird System

```html
The <var-row/> component divides a row into an average grid of 24 columns (24 pieces). 
The <var-col/> provides the span property to set the number of pieces in the column and the offset property to set the number of pieces offset in the column.
```

```html
<var-row>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
```

### Offset

```html
<var-row>
  <var-col :span="16" :offset="8">offset: 8 span: 16</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
```

### Alignment

```html
The layout component is laid out in Flex by default, 
using the <var-row/> justify and align properties to set the alignment of the main and cross axes.
```

```html
 <var-row>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
<var-row justify="center">
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
<var-row justify="flex-end">
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
<var-row justify="space-around">
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
<var-row justify="space-between">
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
```

### Gutter

```html
<var-row :gutter="10">
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
  <var-col :span="8">span: 8</var-col>
</var-row>
```

## API

### Props

### Row Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `gutter` | Col gutter(px, rem) | _number \| string_ | `0` |
| `justify` | Spindle alignment, optional value is `flex-start` `flex-end` `center` `space-between` `space-around` | _string_ | `flex-start` |
| `align` | Cross axis alignment, optional value is `flex-start` `flex-end` `center` | _string_ | `flex-start` |

### Col Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `span` | Number of grids occupied by columns | _number \| string_ | `24` |
| `offset` | Number of grids for column offsets | _number \| string_ | `0` |

### Events

### Row Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered when you click Row | `event: Event` |

### Col Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered when you click Col | `event: Event` |

### Slots

### Row Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Row content | `-` |

### Col Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Col content | `-` |