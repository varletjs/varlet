# 水波指令

### 引入
```js
import { Ripple } from '@varlet/ui'

export default defineComponent({
  directives: {
    Ripple
  }
})
```

### 基本使用
```html
<div v-ripple class="example__button">基本使用</div>
```

### 修改颜色
```html
<div v-ripple="{ color: 'red' }">修改颜色</div>
```

