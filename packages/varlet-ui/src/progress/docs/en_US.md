# Progress

### Introduce

Display the current progress of an operation flow.

### Install

```js
import { Progress } from '@varlet/ui'

export default defineComponent({
  components: {
    [Progress.name]: Progress,
  },
})
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
<var-progress :value="100" show-action>
  success
</var-progress>
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

| Attribute | Description      | Type     | Default  |
| --------- | ---------------- | -------- | -------- |
| mode      | mode of Progress | _string_ | `linear` |

### Progress linear

| Attribute   | Description                            | Type                 | Default   |
| ----------- | -------------------------------------- | -------------------- | --------- |
| value       | completion value                       | _number_             | `0`       |
| lineWidth   | To set width of the progress bar       | _number_ ｜ _string_ | `4`       |
| color       | To set color of the progress bar       | _string_             | `#005CAF` |
| trackColor  | To set color of the progress track     | _string_             | `#afd9ff` |
| ripple      | To set loading style for progress      | _boolean_            | `false`   |
| show-action | Whether the `action` is visible or not | _boolean_            | `false`   |

### Progress circle

**_Note：Progress circle not support the `ripple` attribute_**

| Attribute | Description | Type | Default |
| ----- | ----------------------------- | -------- | -------------- |
| value | completion value | _number_ | `0` |
| lineWidth | To set width of the progress bar | _number_ ｜ _string_ | `4` |
| color | To set color of the progress bar | _string_ | `#005CAF` |
| trackColor | To set color of the progress track | _string_ | `#afd9ff` |
| show-action | Whether the `action` is visible or not | _boolean_ | `false` |
| size | To set size of progress | _number_ | `40` |
| rotate | To set origin of progress | _number_ | `0` |
| show-track | Whether the progress track is visible or not | _boolean_ | `true` |
