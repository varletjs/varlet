# Loading

### Install

```js
import { createApp } from 'vue'
import { Loading } from '@varlet/ui'

createApp().use(Loading)
```

### Type

```html
<var-loading type="circle" />
<var-loading type="cube" />
<var-loading type="wave" />
<var-loading type="rect" />
<var-loading type="disappear" />
```

### Color
```html
<var-loading type="circle" color="#2979ff" />
<var-loading type="cube" color="#2979ff" />
<var-loading type="wave" color="#2979ff" />
<var-loading type="rect" color="#2979ff" />
<var-loading type="disappear" color="#2979ff" />
```

### Size

```html
<var-loading type="circle" size="small" />
<var-loading type="cube" size="small" />
<var-loading type="wave" size="small" />
<var-loading type="rect" size="small" />
<var-loading type="disappear" size="small" />
```

### Wrap

```html
<var-button @click="loading = !loading" style="margin-bottom: 8px">
  {{ loading ? 'Open' : 'Close' }}
</var-button>
<var-loading desc="loading...." type="circle" :loading="loading">
  <var-card title="Intro" description="Varlet is a Material design mobile component library developed based on Vue3, developed and maintained by partners in the community." />
</var-loading>
```

```javascript
import { ref } from 'vue'

export default {
  setup() {
    const loading = ref(false)

    return {
      loading,
    }
  }
}
```

## API

### Props

| prop     | Description                                             | Type     | Default        |
| -------- | ------------------------------------------------------- | -------- | -------------- |
| `color`  | Loading color                                           | _string_ | `currentColor` |
| `type`   | Can be set to `circle` `wave` `cube` `rect` `disappear` | _string_ | `circle`       |
| `size`   | Can be set to `large` `normal` `small` `mini`           | _string_ | `normal`       |
| `desc`   | Description of the loading                              | _string_ | `-`            |
| `loading`| Specify whether loading is active                       | _boolean_ | `false`      |
| `radius` | Set size when the `type` is `circle`                    | _string \| number_  | `-` |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Content wrapped in loading | `-` |
| `desc`    | Description of the loading | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--loading-opacity` | `0.38` |

