# Loading

### Install

```js
import { createApp } from 'vue'
import { Loading } from '@varlet/ui'

createApp().use(Loading)
```

### Type

```html
<var-loading type="circle" />
<var-loading type="cube" />
<var-loading type="wave" />
<var-loading type="rect" />
<var-loading type="disappear" />
```

### Color
```html
<var-loading type="circle" color="#3a7afe" />
<var-loading type="cube" color="#3a7afe" />
<var-loading type="wave" color="#3a7afe" />
<var-loading type="rect" color="#3a7afe" />
<var-loading type="disappear" color="#3a7afe" />
```

### Size

```html
<var-loading type="circle" size="small" />
<var-loading type="cube" size="small" />
<var-loading type="wave" size="small" />
<var-loading type="rect" size="small" />
<var-loading type="disappear" size="small" />
```

## API

### Props

| prop    | Description                                             | Type     | Default        |
| ------- | ------------------------------------------------------- | -------- | -------------- |
| `color` | Loading color                                           | _string_ | `currentColor` |
| `type`  | Can be set to `circle` `wave` `cube` `rect` `disappear` | _string_ | `circle`       |
| `size`  | Can be set to `large` `normal` `small` `mini`           | _string_ | `normal`       |
