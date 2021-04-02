# BackTop

### Intro

A button to back to top

### Install

```js
import { BackTop } from '@varlet/ui'

createApp().use(BackTop)
```

### Basic Usage

```html
<div class="var-back-top__example">
  <var-cell v-for="list in lists" :key="list">Scroll to bottom {{ list }}</var-cell>
  <var-back-top target=".var-back-top__example" :duration="300" />
</div>
```
```javascript
const lists = [...Array(100).keys()]

export default {
  setup() {
    return {
      lists
    }
  }
}
```

## API

### Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `target` | The target to trigger scroll	| _string_ | - |
| `visibility-height` | The button will not show until the scroll height reaches this value | _number_ ｜ _string_ | `200` |
| `duration` | Time to return to top（ms） | _number_ | `300` |

### Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `click` | Triggers when click | `event: Event` |

### 插槽

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Custom the content | - |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@back-top-right` | `40px` |
| `@back-top-bottom` | `40px` |
| `@back-top-button-size` | `40px` |
