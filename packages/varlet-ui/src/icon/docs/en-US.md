# Icon

### Intro
Font based icon library, also support web images.
Font icons are from [Material Design Icon](https://materialdesignicons.com/).

### Install

```js
import { createApp } from 'vue'
import { Icon } from '@varlet/ui'

createApp().use(Icon)
```

### Icon Size

```html
<var-icon name="checkbox-marked-circle" />
<var-icon name="checkbox-marked-circle" :size="26"/>
```

### Icon Color

```html
<var-icon name="checkbox-marked-circle" color="#2979ff" />
<var-icon name="checkbox-marked-circle" color="#2979ff" :size="26"/>
```

### Use Image

When the name passed in is a URL the `img` tag is displayed in `cover` mode.
`size` is the width and height of the image.

```html
<var-icon name="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="32" />
```

### Events

```html
<var-icon 
  name="checkbox-marked-circle"
  color="#2979ff"
  @click="() => Snackbar.success('Click success')"
/>
```

```js
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    return { Snackbar }
  }
}
```

### Icon Animation

When `transition (ms)` is set, and the icon is toggled by its `name`, trigger a toggle animation.

```html
<var-icon color="#2979ff" :name="name" :transition="300" :size="30" />
```

```js
export default {
  setup() {
    const name = ref('information')
    
    const toggle = () => {
      name.value = name.value === 'information' 
        ? 'checkbox-marked-circle' 
        : 'information'
    }
    
    return {
      name,
      toggle
    }
  }
}
```

### Custom Icons

First you need to set up your own font and install it into your project.
Let's assume that we extend a font named `my-icons`.

```css
/* Set the font */
@font-face {
  font-family: "my-icons";
  src: url("https://xxx.my-icons.eot");
  src: url("https://xxx.my-icons.eot") format("embedded-opentype"), 
    url("https://xxx.my-icons.woff2") format("woff2"), 
    url("https://xxx.my-icons.woff") format("woff"), 
    url("https://xxx.my-icons.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

/* Font style */
.my-icon--set,
.my-icon--set::before {
  position: relative;
  display: inline-block;
  font: normal normal normal 14px/1 "my-icons";
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

/* Font names map code points */
.my-icon-hot::before {
  content: "\F000";
}
```

Here you have successfully extended your icon library.
So `my-icon` is your font `namespace`.
You can use it this way:

```html
<var-icon namespace="my-icon" name="hot" />
```

## API

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `name` | icon name | _string_ | `-` |
| `size` | icon size(px, rem, %) | _string \| number_ | `-` |
| `color` | icon color, Only applies to font icons | _string_ | `-` |  
| `namespace` | Icon namespace, extensible custom icon library |  _string_ | `var-icon` |
| `transition` | Transition animation time(ms) |  _string \| number_ | `0` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `click` | Triggered when you click on the icon | `event: Event` |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@icon-size` | `20px` |