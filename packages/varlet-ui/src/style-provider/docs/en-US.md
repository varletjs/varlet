# Style Provider

Component libraries organize styles through [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).
Each component has a corresponding style variable, you can directly replace the style variable on the root node by overriding it with a CSS file.
Or use StyleProvider components.

### Basic style variable

Here are some basic style variables for the component library

```css
:root {
  --font-size-xs: 10px;
  --font-size-sm: 12px;
  --font-size-md: 14px;
  --font-size-lg: 16px;
  --icon-size-xs: 16px;
  --icon-size-sm: 18px;
  --icon-size-md: 20px;
  --icon-size-lg: 22px;
  --color-primary: #3a7afe;
  --color-info: #00afef;
  --color-success: #00c48f;
  --color-warning: #ff9f00;
  --color-danger: #f44336;
  --color-disabled: #e0e0e0;
  --color-text-disabled: #aaa;
  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);
}
```

### Modify styles at runtime

Maybe you have a need to replace the style while the program is runtime，like a one-click skin change or something.
The component library provides a StyleProvider component to assist in managing styles,
Component provides' `component call` and `function call` and two invocation modes.

### Install

```js
import { createApp } from 'vue'
import { StyleProvider } from '@varlet/ui'

createApp().use(StyleProvider)
```

### Scoped Install

```js
import { StyleProvider } from '@varlet/ui'

export default {
  components: {
    [StyleProvider.Component.name]: StyleProvider
  }
}
```

### Component Call

Component calls can have a scope of custom component styles, Scope contamination is avoided.
Note that some elements sent outside the StyleProvider using the `teleport` will not work

```html
<var-style-provider :style-vars="styleVars">
  <var-rate v-model="state.score" />
  <var-switch v-model="state.license" />
  <var-button 
    style="margin-top: 10px" 
    type="primary"
    block
    @click="toggleTheme"
  >
    Toggle Theme
  </var-button>
</var-style-provider>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const state = reactive({
      score: 5,
      license: true,
    })

    const successTheme = {
      '--rate-primary-color': 'var(--color-success)',
      '--button-primary-color': 'var(--color-success)',
      '--switch-handle-active-background': 'var(--color-success)',
      '--switch-track-active-background': 'var(--color-success)',
    }
    const styleVars = ref(null)

    const toggleTheme = () => {
      styleVars.value = styleVars.value ? null : successTheme
    }

    return {
      state,
      styleVars,
      toggleTheme
    }
  }
}
```

### Function Call

A functional call is to update variables directly on `:root`, which is suitable for situations where a global update style is required

```html
<var-button type="primary" block @click="toggleRootTheme">Toggle Root Theme</var-button>
```

```js
export default {
  setup() {
    let rootStyleVars = null

    const darkTheme = {
      '--color-primary': '#3f51b5'
    }

    const toggleRootTheme = () => {
      rootStyleVars = rootStyleVars ? null : darkTheme
      StyleProvider(rootStyleVars)
    }

    return { toggleRootTheme }
  }
}
```

## API

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `style-vars` | CSS variables | _Record<string, string>_ | `{}` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Component content | `-` |