# Loading

### Install

```js
import { Loading } from '@varlet/ui'

createApp().use(Loading)
```

### Type

```html
<var-loading type="cube" />
<var-loading type="wave" />
<var-loading type="rect" />
<var-loading type="disappear" />
```

### Size

```html
<var-loading type="cube" size="small" />
<var-loading type="wave" size="small" />
<var-loading type="rect" size="small" />
<var-loading type="disappear" size="small" />
```

## API

### Props

| prop | Description                                    | Type     | Default        |
| --------- | ---------------------------------------------- | -------- | -------------- |
| color     | Loading color                                  | _string_ | `currentColor` |
| type      | Can be set to `wave` `cube` `rect` `disappear` | _string_ | `wave`         |
| size      | Can be set to `large` `normal` `small` `mini`  | _string_ | `normal`       |
