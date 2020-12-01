# Loading 加载

### 引入

```js
import { Loading } from '@varlet/ui'

export default defineComponent({
	components: {
		[Loading.name]: Loading,
	},
})
```

### Loading 类型

```html
<varlet-loading type="cube" />
<varlet-loading type="wave" />
<varlet-loading type="rect" />
<varlet-loading type="disappear" />
```

### Loading 大小

```html
<varlet-loading type="cube" size="small" />
<varlet-loading type="wave" size="small" />
<varlet-loading type="rect" size="small" />
<varlet-loading type="disappear" size="small" />
```

## API

### 属性

| 参数  | 说明                                                      | 类型     | 默认值    |
| ----- | --------------------------------------------------------- | -------- | --------- |
| color | loading 的颜色                                            | _string_ | `#00BCD4` |
| type  | loading 的类型，可选值为 `wave` `cube` `rect` `disappear` | _string_ | `wave`    |
| size  | loading 的大小，可选值位 `large` `normal` `small` `mini`  | _string_ | `normal`  |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 加载文案 |
