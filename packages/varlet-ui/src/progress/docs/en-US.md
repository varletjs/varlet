# Progress

### Intro

Display the current progress of an operation flow.

### Install

```js
import { Progress } from '@varlet/ui'

createApp().use(Progress)
```

## Progress linear

### Basic Usage

Use `value` to set completion value.

```html
<var-progress :value="20" />
<var-progress :value="value" />
```

### Style

Use `line-width` to set width of Progress bar. Use `color` to set color of Progress. Use `track-color` to set color of Progress-Track. Use `ripple` to set loading style.

```html
<var-progress :value="30" line-width="8" />
<var-progress 
  :value="60" 
  line-width="10" 
  color="purple" 
  track-color="#dec3e6" 
/>
<var-progress :value="80" line-width="10" ripple />
```

### Action

Use `show-action` to show `action`. The default value for `action` is the percentage of current progress, and you can use slot to insert custom content.

```html
<var-progress :value="30" show-action />
<var-progress :value="value" show-action />
<var-progress :value="100" show-action> success </var-progress>
```

### Custom style

Use the `style` to customize the style.

```html
<var-progress :value="30" line-width="10" style="border-radius: 4px" />
<var-progress :value="60" show-action style="color: #72c140" />
```

## Progress circle

### Size

Use `size` to change size of Progress.

```html
<var-progress :value="30" line-width="3" mode="circle" />
<var-progress 
  :value="50" 
  line-width="3" 
  size="56" 
  mode="circle" 
/>
<var-progress 
  :value="70" 
  line-width="3" 
  size="72" 
  mode="circle" 
/>
```

### Style

Use `line-width` to set width of Progress bar. Use `color` to set color of Progress. Use `track-color` to set color of Progress-Track. Use `ripple` to set loading style.

```html
<var-progress :value="30" line-width="8" />
<var-progress 
  :value="60" 
  line-width="10" 
  color="purple" 
  track-color="#dec3e6" 
/>
<var-progress :value="80" line-width="10" ripple />
```

### Action

Use `show-action` to show `action`. The default value for `action` is the percentage of current progress, and you can use slot to insert custom content.

```html
<var-progress 
  :value="30" 
  line-width="5" 
  size="56" 
  mode="circle" 
  show-action 
/>
<var-progress 
  :value="value" 
  line-width="5" 
  size="56" 
  mode="circle" 
  show-action 
/>
<var-progress 
  :value="100" 
  line-width="5"
  size="56" 
  mode="circle" 
  show-action
>
  success
</var-progress>
```

### Origin

Use `rotate` to change origin.

```html
<var-progress 
  :value="value" 
  line-width="5" 
  size="56" 
  mode="circle" 
/>
<var-progress
  :value="value"
  line-width="5"
  size="56"
  mode="circle"
  :rotate="90"
/>
<var-progress
  :value="value"
  line-width="5"
  size="56"
  mode="circle"
  :rotate="180"
/>
```

### Hide Progress-Track

Use `show-track` to hide Progress-Track.

```html
<var-progress 
  :value="30" 
  line-width="3" 
  mode="circle" 
  :show-track="false" 
/>
<var-progress
  :value="50"
  line-width="5"
  size="56"
  mode="circle"
  :show-track="false"
  show-action
/>
<var-progress
  :value="value"
  line-width="8"
  size="72"
  mode="circle"
  :show-track="false"
  show-action
  :rotate="90"
/>
```

## API

### Props

| prop | Description      | Type     | Default  |
| --------- | ---------------- | -------- | -------- |
| `mode` | mode of Progress | _string_ | `linear` |
| `value` | completion value   | _number \| string_ |  `0`  |
| `line-width` | width of the progress bar  | _number \| string_ | `4` |
| `color` | color of the progress bar  | _string_  | `#005CAF` |
| `track-color`  | color of the progress track | _string_   | `#d8d8d8` |
| `show-action` | Whether the action is visible or not | _boolean_ | `false` |
| `ripple`(only supports linear progress) | loading style for progress | _boolean_ | `false` |
| `size`(only supports circle progress) | size of progress | _number \| string_ | `40` |
| `rotate`(only supports circle progress) | origin of progress | _number_ | `0` |
| `show-track`(only supports circle progress) | Whether the progress track is visible or not | _boolean_ | `true` |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Custom action | - |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@progress-font-size` | `@font-size-sm` |
| `@progress-ripple-color` | `#fff` |
| `@progress-background` | `@color-primary` |