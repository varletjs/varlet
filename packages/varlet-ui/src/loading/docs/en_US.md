# Loading

### Install

```js
import { Loading } from '@varlet/ui'

export default defineComponent({
	components: {
		[Loading.name]: Loading,
	},
})
```

### Type

```html
<varlet-loading type="cube" />
<varlet-loading type="wave" />
<varlet-loading type="rect" />
<varlet-loading type="disappear" />
```

### Size

```html
<varlet-loading type="cube" size="small" />
<varlet-loading type="wave" size="small" />
<varlet-loading type="rect" size="small" />
<varlet-loading type="disappear" size="small" />
```

### Text

```html
<varlet-loading type="cube">loading</varlet-loading>
<varlet-loading type="wave">loading</varlet-loading>
<varlet-loading type="rect">loading</varlet-loading>
<varlet-loading type="disappear">loading</varlet-loading>
```

### Horizontal

```html
<varlet-loading type="cube" :vertical="false">loading</varlet-loading>
<varlet-loading type="wave" :vertical="false">loading</varlet-loading>
<varlet-loading type="rect" :vertical="false">loading</varlet-loading>
<varlet-loading type="disappear" :vertical="false">loading</varlet-loading>
```

## API

### Props

| Attribute | Description                                          | Type      | Default   |
| --------- | ---------------------------------------------------- | --------- | --------- |
| color     | Loading color                                        | _string_  | `#00BCD4` |
| type      | Can be set to `wave` `cube` `rect` `disappear`       | _string_  | `wave`    |
| size      | Can be set to `large` `normal` `small` `mini`        | _string_  | `medium`  |
| fontColor | Text color                                           | _string_  | `#ccc`    |
| fontSize  | Text font size                                       | _number_  | `14`      |
| vertical  | Whether to arrange icons and text content vertically | _boolean_ | `true`    |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Loading text |
