# Skeleton

### Install

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

### Base

```html
<var-skeleton v-model:loading="loading" title :row="3">
  load content
</var-skeleton>
```

### Set row width

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

### Display avatar

```html
<var-skeleton v-model:loading="loading" avatar title :row="3">
  load content
</var-skeleton>
```

### Display card

```html
<var-skeleton v-model:loading="loading" card avatar title :row="3">
  load content
</var-skeleton>
```
