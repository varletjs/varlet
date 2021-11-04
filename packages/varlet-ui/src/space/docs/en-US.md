# Space 

### Intro

The component library provides two auxiliary layout components,
`<var-space>`,
so that you can layout more efficiently.

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
<var-space direction="column">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
</var-space>
```

### Space Between

```html
<var-space :size="['30px','10px']">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
</var-space>
```

### Right Align

```html
<var-space justify="end" >
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
</var-space>
```

## API

### Space Props

|     Prop      |      Description     |     Type    |    Default    |
| ------------- | ------------ | ---------- | ----------- |
|    `align`   |   Vertical arrangement, Can be set to`stretch` `center` `start` `end` `baseline` | _string_   |   `-`|
|`justify`|Horizontal arrangement, Can be set to `start` `end` `center` `space-around` `space-between`|_string_|`start`|
|     `size`   |   spacing, Can be set to `mini` `small` `normal` `large`或`[垂直间距, 水平间距]`(Support length unit)| _string_\|_number_\|[_string_\|_number_,_string_\|_number_]|`normal`|
|`wrap`|Whether to exceed the line break|_boolean_|`true`|
|`direction`|Layout direction, Can be set to `row` `column`|_string_|`row`|
|`inline`|Is it an inline element|_boolean_|`false`|


### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--space-mini-margin`|`4px`|
| `--space-small-margin`|`4px 6px`|
| `--space-normal-margin`|`8px 12px`|
| `--space-large-margin`|`12px 20px`|

