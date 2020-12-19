# 骨架屏

### 引入

```js
import { Skeleton } from '@varlet/ui'

export default defineComponent({
  components: { 
    [Skeleton.name]: Skeleton,
  },
  setup() {
    const loading: Ref<boolean> = ref(true)

    return { loading }
  },
})
```

### 基本使用

```html
<var-skeleton v-model:loading="loading" title :row="3">
  加载的内容
</var-skeleton>
```

### 自定义段落高度

```html
<var-skeleton
  v-model:loading="loading"
  title
  :row="3"
  :row-width="['300px', '200px', '100px']"
>
  加载的内容
</var-skeleton>
```

### 显示头像

```html
<var-skeleton v-model:loading="loading" avatar title :row="3">
  加载的内容
</var-skeleton>
```

### 显示卡片

```html
<var-skeleton v-model:loading="loading" card avatar title :row="3">
  加载的内容
</var-skeleton>
```
