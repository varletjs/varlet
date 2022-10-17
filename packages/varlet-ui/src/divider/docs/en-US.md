# Divider

### Intro
Used to separate parts of a list or layout.

### Basic Usage
```html
<template>
  <var-divider />
</template>
```

### Dashed Divider
```html
<template>
  <var-divider dashed />
</template>
```

### Inset Divider
```html
<template>
  <var-divider inset />
  <var-divider :inset="36" margin="36px 0" />
  <var-divider inset="-36px" />
</template>
```

### Vertical Divider
```html
<template>
  <div class="divider-example-vertical-container">
    <span>text</span>
    <var-divider vertical />
    <span>text</span>
    <var-divider vertical />
    <span>text</span>
  </div>
</template>

<style>
.divider-example-vertical-container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
}

.divider-example-vertical-container span {
  font-size: 14px;
  color: #888;
}
</style>
```

### Description Text
```html
<template>
  <var-divider description="Description" />
</template>
```

### Custom Description
```html
<template>
  <var-divider>
    <var-icon name="heart-outline" style="margin: 0 16px; color: rgb(41, 121, 255);" />
  </var-divider>
</template>
```

### Use 0.5px Divider
```html
<template>
  <var-divider hairline />
</template>
```

## API

### Props
| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `inset` | Set the indentation distance, and the number plus or minus sign controls the direction of indentation. The default indentation is `72px` when `true` is passed | _boolean \| number \| string_ | `false` |
| `vertical` | Whether to set divider to display vertically | _boolean_ | `false` |
| `dashed` | Whether divider is dashed | _boolean_ | `false` |
| `hairline` | Whether divider is 0.5px | _boolean_ | `false` |
| `description` | The text description of divider | _string_ | `-` |
| `margin` | Set `margin` of divider | _string_ | `-` |

### Slots
| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Custom content of divider | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--divider-color` | `rgba(0, 0, 0, 0.12)` |
| `--divider-text-color` | `#888`|
| `--divider-text-margin` | `8px 0`|
| `--divider-text-padding` | `0 8px`|
| `--divider-inset` |  `72px`|
| `--divider-vertical-inset` | `8px`|
