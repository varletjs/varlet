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

## API

### Props

| Attribute | Description                                    | Type     | Default   |
| --------- | ---------------------------------------------- | -------- | --------- |
| color     | Loading color                                  | _string_ | `#00BCD4` |
| type      | Can be set to `wave` `cube` `rect` `disappear` | _string_ | `wave`    |
| size      | Can be set to `large` `normal` `small` `mini`  | _string_ | `normal`  |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Loading text |
