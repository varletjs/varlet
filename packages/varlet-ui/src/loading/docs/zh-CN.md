# Loading 加载

### 引入

```js
import { createApp } from 'vue'
import { Loading } from '@varlet/ui'

createApp().use(Loading)
```

### Loading 类型

```html
<var-loading type="circle" />
<var-loading type="cube" />
<var-loading type="wave" />
<var-loading type="rect" />
<var-loading type="disappear" />
```

### Loading 颜色
```html
<var-loading type="circle" style="color: #2979ff" />
<var-loading type="cube"  style="color: #2979ff"/>
<var-loading type="wave" style="color: #2979ff" />
<var-loading type="rect" style="color: #2979ff" />
<var-loading type="disappear" style="color: #2979ff" />
```

### Loading 大小

```html
<var-loading type="circle" size="small" />
<var-loading type="cube" size="small" />
<var-loading type="wave" size="small" />
<var-loading type="rect" size="small" />
<var-loading type="disappear" size="small" />
```

## API

### 属性

| 参数    | 说明                                                               | 类型     | 默认值         |
| ------- | ------------------------------------------------------------------ | -------- | -------------- |
| `color` | loading 的颜色                                                     | _string_ | `currentColor` |
| `type`  | loading 的类型，可选值为 `circle` `wave` `cube` `rect` `disappear` | _string_ | `circle`       |
| `size`  | loading 的大小，可选值位 `large` `normal` `small` `mini`           | _string_ | `normal`       |
