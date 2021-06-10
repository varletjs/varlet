# Divider

### Intro
Used to separate parts of a list or layout.


### Install

```js
import { createApp } from 'vue'
import { Divider } from '@varlet/ui'

createApp().use(Divider)
```

### Basic Usage
```js
<var-divider />
```

### Dashed Divider
```js
<var-divider dashed />
```

### Inset Divider
```js
<var-divider inset />
<var-divider :inset="36" margin="36px 0" />
<var-divider :inset="-36" />
```

### Vertical Divider
```js
<span>Text</span>
<var-divider vertical />
<span>Text</span>
<var-divider vertical />
<span>Text</span>
```

### The Divider with description
```js
<var-divider description="Description" />
```

### Custom
```js
<var-divider>
  <var-icon name="heart-outline" style="margin: 0 16px; color: rgb(41, 121, 255);" />
</var-divider>
```


## API

### Props
| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| inset | Set the indentation distance, and the number plus or minus sign controls the direction of indentation. The default indentation is `72px` when `true` is passed | _boolean \| number_ | `false` |
| vertical | Whether to set divider to display vertically | _boolean_ | `false` |
| dashed | Whether divider is dashed | _boolean_ | `false` |
| description | The text description of divider | _string_ | `-` |
| margin | Set `margin` of divider | _string_ | `-` |

### Slots
| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Custom content of divider | `-` |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@divider-color` | `#bcc2cb` |
| `@divider-text-color` | `#888`|
| `@divider-text-margin` | `8px`|
| `@divider-inset` |  `72px`|
| `@divider-vertical-inset` | `8px`|
