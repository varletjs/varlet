# Skeleton

### Intro

Display some space occupying elements with transition effect to optimize the loading process.

### Install

```js
import { createApp } from 'vue'
import { Skeleton } from '@varlet/ui'

createApp().use(Skeleton)
```

### Basic Use

```html
<var-skeleton :loading="loading">Loading Data</var-skeleton>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const loading = ref(true)

    return { loading }
  }
}
```

### Display Title

```html
<var-skeleton title :loading="loading">Loading Data</var-skeleton>
```

### Custom Rows Height

```html
<var-skeleton
  title
  :rows="3"
  :loading="loading"
  :rows-width="['200px', '100px', '50px']"
>
  Loading Data
</var-skeleton>
```

### Display Avatar

```html
<var-skeleton
  title
  avatar
  :rows="3"
  :loading="loading"
>
	Loading Data
</var-skeleton>
```

### Display Card

```html
<var-skeleton
  title
  avatar
  card
  :rows="3"
  :loading="loading"
>
  Loading Data
</var-skeleton>
```

### Fullscreen Mode

```html
<var-button type="danger" @click="fullscreen">Toggle Fullscreen Mode</var-button>
<var-skeleton fullscreen :loading="loading" />
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const loading = ref(false)

    const fullscreen = () => {
      loading.value = true

      setTimeout(() => {
        loading.value = false
      }, 2000)
    }

    return {
      loading,
      fullscreen,
    }
  }
}
```

## API

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `loading` | Loading Status Set to `true` to turn on the skeleton | _boolean_ | `true` |
| `title` | Whether to display the title | _boolean_ | `false` |
| `card` | Whether to display the card | _boolean_ | `false` |
| `avatar` | Whether to display the avatar | _boolean_ | `false` |
| `fullscreen` | Whether to enable fullscreen mode | _boolean_ | `false` |
| `fullscreen-z-index` | Fullscreen mode z-index | _string \| number_ | `100` |
| `title-width` | Title Width  | _string \| number_ | `50%` |
| `card-height` | Card Height  | _string \| number_ | `160px` |
| `avatar-size` | Avatar size  | _string \| number_ | `34px` |
| `rows` | The paragraph number of rows | _string \| number_ | `3` |
| `rows-width` | The width of each line of a paragraph | _number[] \| string[]_ | `['12px', '12px', '12px']` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Loaded content | `-` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--skeleton-content-padding` | `16px` |
| `--skeleton-card-height` | `160px` |
| `--skeleton-card-border-radius` | `4px` |
| `--skeleton-card-margin-bottom` | `16px` |
| `--skeleton-card-background-color` | `rgba(0, 0, 0, 0.12)` |
| `--skeleton-animation-background` | `linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))` |
| `--skeleton-avatar-size` | `34px` |
| `--skeleton-avatar-border-radius` | `50%` |
| `--skeleton-avatar-margin-right` | `16px` |
| `--skeleton-avatar-background-color` | `rgba(0, 0, 0, 0.12)` |
| `--skeleton-title-width` | `50%` |
| `--skeleton-title-border-radius` | `10px` |
| `--skeleton-title-background-color` | `rgba(0, 0, 0, 0.12)` |
| `--skeleton-row-height` | `12px` |
| `--skeleton-row-border-radius` | `10px` |
| `--skeleton-row-margin-top` | `10px` |