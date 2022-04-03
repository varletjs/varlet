# BackTop

### Intro

A button to back to top.

### Install

```js
import { createApp } from 'vue'
import { BackTop } from '@varlet/ui'

createApp().use(BackTop)
```

### Basic Usage

```html
<div>
  <var-cell v-for="list in lists" :key="list">Scroll to bottom {{ list }}</var-cell>
  <var-back-top :duration="300" />
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

| Prop | Description                                                         | Type   | Default |
| ----- |---------------------------------------------------------------------|--------|-------|
| `target` | The target to trigger scroll, If it is undefined back top will listen to the nearest scrollable parent.  | _string \| HTMLElement_     | `-` |
| `visibility-height` | The button will not show until the scroll height reaches this value | _string \| number_ | `200` |
| `bottom`            | `BackTop` 距离页面底部的高度                       | _string \| number_ | `40` |
| `right`            | `BackTop` 距离页面右侧的宽度                       | _string \| number_ | `40` |
| `duration` | Time to return to top（ms）                               | _number_ | `300` |

### Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `click` | Triggers when click | `event: Event` |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Custom the content | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--back-top-right` | `40px` |
| `--back-top-bottom` | `40px` |
| `--back-top-button-size` | `40px` |
