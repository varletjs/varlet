# Dark Mode

The first party of the component library provides the theme of dark mode.
The advantage of dark mode is that it has higher readability in low light environments.

### Toggle Theme

```html
<var-button block @click="toggleTheme">Toggle Theme</var-button>
```

```js
import dark from '@varlet/ui/es/themes/dark'
import { StyleProvider } from '@varlet/ui'

export default {
  setup() {
    let currentTheme
    
    const toggleTheme = () => {
      currentTheme = currentTheme ? null : dark
      StyleProvider(currentTheme)
    }
    
    return { toggleTheme }
  }
}
```

Inject the `text color` and `background color` variables recommended by the component library to control the overall color

```less
body {
  transition: background-color .25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
```
