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
<var-skeleton v-model:loading="loading" title :rows="3">
  load content
</var-skeleton>
```

### Set rows width

```html
<var-skeleton
  v-model:loading="loading"
  title
  :rows="3"
  :rows-width="['300px', '200px', '100px']"
>
  加载的内容
</var-skeleton>
```

### Display avatar

```html
<var-skeleton v-model:loading="loading" avatar title :rows="3">
  load content
</var-skeleton>
```

### Display card

```html
<var-skeleton v-model:loading="loading" card avatar title :rows="3">
  load content
</var-skeleton>
```
