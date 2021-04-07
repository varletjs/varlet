# Rate

### Install

```js
import { createApp } from 'vue'
import { Rate } from '@varlet/ui'

createApp().use(Rate)
```

### Base Rate

Default display style

```html
<var-rate v-model="score"/>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const score = ref(3)
    
    return { 
      score 
    }
  }
}
```

### Customize the total rating

Customize the total number of rating by setting the `count` property

```html
<var-rate v-model="score" :count="8"/>
```

### Customize the rating icon color

Customize the selected color and the unselected color by setting the `color` and `empty-color` properties

```html
<var-rate v-model="score" color="#9c27b0" empty-color="#d199da"/>
<var-rate v-model="score" color="#e91e63" empty-color="#f48fb1"/>
<var-rate v-model="score" color="#4caf50" empty-color="#a5d6a7"/>
<var-rate v-model="score" color="#3f51b5" empty-color="#9fa8da"/>
```

### Customize the rating icon style

Customize the selected and unselected icon styles by setting the `icon` and `empty-icon` properties

```html
<var-rate v-model="score" icon="heart" empty-icon="heart-outline" color="red"></var-rate>
```

### Customize the rating icon size

Customize the size of the rating icon by setting the `size` property

```html
<var-rate v-model="score" :size="14"/>
<var-rate v-model="score" :size="16"/>
<var-rate v-model="score" :size="18"/>
<var-rate v-model="score" :size="20"/>
```

### Custom Icon Interval

Customize the spacing between scores by setting the `gap` property

```html
<var-rate v-model="score" :gap="2"/>
<var-rate v-model="score"/>
<var-rate v-model="score" :gap="6"/>
<var-rate v-model="score" :gap="8"/>
```

### allows half ICONS

Allow half-selection by setting the `half` property, and use `half-icon` to customize the style of the half-selection icon

```html
<var-rate v-model="score" :count="8" half/>
<var-rate v-model="score" :count="8" icon="heart" half-icon="heart-half-full" empty-icon="heart-outline" color="red" half></var-rate>
```

```js
import { ref } from 'vue'

export default {
	setup() {
		const score = ref(3.5)
    
		return { score }
	}
}
```

### Disables rating

Make the score in the disabled state by adding the `disabled` property, and use `disabled-color` to customize the color of the icon when disabled

```html
<var-rate v-model="score" disabled disabled-color="#bbbbbb"/>
```

### Read only rating

Make the score read-only by adding the `readonly` property

```html
<var-rate v-model="score" readonly/>
```

### Use water ripples

Set the `ripple` attribute to `false` to prohibit the use of water ripples

```html
<var-rate v-model="score" :ripple="false"/>
```

### listens for the change event

Other interaction logic is completed by calling the `change` event

```html
<var-rate v-model="score" @change="handleChange"/>
```

```js
import { ref } from 'vue'

export default { 
  setup() {
    const handleChange = (score) => {
      Snackbar({
        content: `click ${score}`,
        position: 'top'
      })
    }

    return { 
      handleChange 
    }
  }
}
```

### Validate

```html
The values are validated by passing in an array of validators，If the validator returns true, the validation passes。
Other values are converted to text as a user prompt。
```

```html
<var-rate :rules="[(v) => v >= 3 || 'It has to be greater than 2']" v-model='score' />
```

## API

### props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `v-model` | The current rating  | _number_,_string_ | `0` |
| `count` | total rating  | _number_,_string_ | `5` |
| `color` | The color of the icon when selected  | _string_ | `#ff9800` |
| `icon` | The icon style when the entire icon is selected  | _string_ | `star` |
| `empty-color` | The color of the icon when unchecked | _string_ | `#bdbdbd` |
| `empty-icon` | Style of the icon when unchecked | _string_ | `star-outline` |
| `size` | Icon size, default unit is `px` | _number_,_string_ | `20` |
| `gap` | Icon spacing, default unit is `px` | _number_,_string_ | `4` |
| `half` | Whether half selection is allowed | _boolean_ | `false` |
| `half-icon` | The half-selected icon style only works if `half` is `true` | _string_ | `star-half-full`|
| `disabled` | Whether or not rating is prohibited | _boolean_ | `false`|
| `disabled-color` | The color of the icon when disabling grading is only effective when `disabled` is `true` and has higher priority than `color` and `empty-color` | _string_ | `#bdbdbd`|
| `readonly` | Whether to use rating read-only | _boolean_ | `false`|
| `ripple` | Whether to use water ripple | _boolean_ | `true`|
| `rules` | The validation rules，Returns `true` to indicate that the validation passed，The remaining values are converted to text as user prompts | _Array<(v: string | number) => any>_ | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `change` | Triggered when the rating changes | The rating of the current click |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

### Rate Variables

| Variable | Default |
| --- | --- |
| `@rate-disabled-color` | `#aaa` |
| `@rate-error-color` | `@color-danger` |
| `@rate-action-padding` | `4px` |