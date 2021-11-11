# Ripple Directive

### Intro
Causes the element to generate a ripple spread effect when clicked.

### Install

```js
import { createApp } from 'vue'
import { Ripple } from '@varlet/ui'

createApp().use(Ripple)
```

### Basic Use

```html
<div class="block var-elevation--2" v-ripple>click</div>
```

### Custom Color

```html
<div class="block var-elevation--2" v-ripple="{ color: '#2979ff' }">click</div>
```

### Disabled Status

```html
<div class="block var-elevation--2" v-ripple="{ disabled: true }">click</div>
```

## API

### Options

| Option | Description | Type | Default | 
| --- | --- | --- | --- | 
| `color` | Ripple color | _string_ | `currentColor` |
| `disabled` | Whether to disable ripple | _boolean_ | `false` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--ripple-cubic-bezier` | `cubic-bezier(0.68, 0.01, 0.62, 0.6)` |

