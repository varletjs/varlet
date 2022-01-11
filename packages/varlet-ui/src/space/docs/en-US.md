# Space 

### Intro

The component library provides two auxiliary layout components,
`<var-space>`,
so that you can do flex layout more efficiently.

### Install

```js
import { createApp } from 'vue'
import { Space } from '@varlet/ui'

createApp().use(Space)
```

### Basic use

```html
<var-space>
  <var-button>Button1</var-button>
  <var-button>Button2</var-button>
  <var-button>Button3</var-button>
</var-space>
```

### Vertical

```html
<var-space direction="column" size="large">
  <var-button>Button1</var-button>
  <var-button>Button2</var-button>
  <var-button>Button3</var-button>
</var-space>
```

### Space Size

```html
<var-space :size="[20, 20]">
  <var-button>Button1</var-button>
  <var-button>Button2</var-button>
  <var-button>Button3</var-button>
  <var-button>Button4</var-button>
  <var-button>Button5</var-button>
  <var-button>Button6</var-button>
</var-space>
```

### Right Align

```html
<var-space justify="end" >
  <var-button>Button1</var-button>
  <var-button>Button2</var-button>
</var-space>
```

### Space Around

```html
<var-space justify="space-around">
  <var-button>Button1</var-button>
  <var-button>Button2</var-button>
</var-space>
```

### Align Center

```html
<var-space justify="center">
  <var-button>Button1</var-button>
  <var-button>Button2</var-button>
</var-space>
```

### Space Between

```html
<var-space justify="space-between">
  <var-button>Button1</var-button>
  <var-button>Button2</var-button>
</var-space>
```

## API


|     Prop      |      Description     |     Type   |    Default  |
| ------------- | ------------ | --------- | --------- |
|    `align`   |   Vertical arrangement, Can be set to `stretch` `center` `start` `end` `baseline` | _string_  |   `-`|
|`justify`|Horizontal arrangement, Can be set to `start` `end` `center` `space-around` `space-between`|_string_|`start`|
|     `size`   |   spacing, Can be set to `mini` `small` `normal` `large` or `[Vertical, Horizontal]`(Support length unit)| _string \|number \| [string \| number, string \| number]_ |`normal`|
|`wrap`|Whether to exceed the line break|_boolean_|`true`|
|`direction`|Layout direction, Can be set to `row` `column`|_string_|`row`|
|`inline`|Is it an inline element|_boolean_|`false`|

### Slots

| Name | Description      | SlotProps |
| --- |------------------| --- |
| `default` | Content of space | `-` |
