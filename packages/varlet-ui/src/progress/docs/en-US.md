# Progress

### Intro

Display the current progress of an operation flow.

### Install

```js
import { createApp } from 'vue'
import { Progress } from '@varlet/ui'

createApp().use(Progress)
```

## Progress linear

### Basic Usage

Set the current progress through the `value` attribute.

```html
<var-progress :value="20" />
<var-progress :value="value" />
```

### Custom Style

Set the line width, progress bar color, track color and ripple loading effect through the attributes of `line-width`, `color`, `track-color` and `ripple`.

```html
<var-progress :value="30" line-width="8" />
<var-progress :value="60" line-width="10" color="purple" track-color="#dec3e6" />
<var-progress :value="80" line-width="10" style="border-radius: 4px" ripple />
```

### Show Action

The action is displayed through the `show-action` attribute. The action is the percentage of progress by default. You can use the slot to insert custom content.

```html
<var-progress :value="30" show-action />
<var-progress :value="value" show-action />
<var-progress :value="100" show-action> success </var-progress>
```

## Progress circle

### Custom Style

```html
<var-progress
  :value="30"
  line-width="5"
  :size="56"
  mode="circle"
  color="purple"
  track-color="#dec3e6"
/>
```

### Hide Track

Use `show-track` prop to hide track.

```html
<var-progress :value="50" :size="56" mode="circle" :show-track="false" />
```
## API

### Props

| prop | Description      | Type     | Default  |
| --------- | ---------------- | -------- | -------- |
| `mode` | Mode of Progress. Optional value is `linear, circle` | _string_ | `linear` |
| `value` | Completion value   | _string \| number_ |  `0`  |
| `line-width` | Width of the progress bar  | _string \| number_ | `4` |
| `color` | Color of the progress bar  | _string_  | `#005CAF` |
| `track-color`  | Color of the progress track | _string_   | `#d8d8d8` |
| `show-action` | Whether the action is visible or not | _boolean_ | `false` |
| `ripple` | Loading style for progress (only supports linear progress) | _boolean_ | `false` |
| `size` | Size of progress (only supports circle progress) | _string \| number_ | `40` |
| `rotate` | Origin of progress (only supports circle progress) | _number_ | `0` |
| `show-track` | Whether the progress track is visible or not (only supports circle progress) | _boolean_ | `true` |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Custom action | `-` |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@progress-font-size` | `@font-size-sm` |
| `@progress-ripple-color` | `#fff` |
| `@progress-background` | `@color-primary` |