# Divider

### Intro
Used to separate parts of a list or layout.


### Install

```js
import { createApp } from 'vue'
import { Divider } from '@varlet/ui'

createApp().use(Divider)
```

### Scoped Install

```js
import { Divider } from '@varlet/ui'

export default {
  components: {
    [Divider.Component.name]: Divider,
  }
}
```

### Basic Usage
```js
<p>Whatever is worth doing is worth doing well.</p>
<var-divider />
<p>
  In delay there lies no plenty, Then come kiss me, sweet and twenty, Youth’s a stuff that will not endure.
</p>
```

### Inset Divider
```js
<var-divider inset />
<var-divider :inset="36" margin="36px 0" />
<var-divider :inset="-36" />
```

### The vertical divider
```js
<var-button text disabled>Text</var-button>
<var-divider vertical />
<var-button text type="primary">Link</var-button>
<var-divider vertical />
<var-button text>
  <var-icon name="github" />
</var-button>
```

### The divider with description
```js
<var-divider description="Description" />
```

### Custom
```js
<var-divider>
  <span :style="{ fontSize: '16px', padding: '0 18px', color: 'red' }">
    Custom content and styles
  </span>
</var-divider>
```


## API

### Props
| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| inset | Set the indentation distance, and the number plus or minus sign controls the direction of indentation. The default indentation is `72px` when `true` is passed | _boolean/number_ | `false` |
| vertical | Whether to set divider to display vertically | _boolean_ | `false` |
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