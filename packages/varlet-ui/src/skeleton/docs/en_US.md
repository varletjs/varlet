# Skeleton

### Install
```js
import { Skeleton } from '@varlet/ui'

export default defineComponent({
  components: {
    [Skeleton.name]: Skeleton
  },
  setup() {
    const loading: Ref<boolean> = ref(true)
  
    return { loading }
  }
})
```

### Base
```html
<varlet-skeleton
  v-model:loading="loading"
  title
  :row="3"
>
  load content
</varlet-skeleton>
```

### Set row width
```html
<varlet-skeleton
  v-model:loading="loading"
  title
  :row="3"
  :row-width="['300px', '200px', '100px']"
>
  load content
</varlet-skeleton>
```

### Display avatar
```html
<varlet-skeleton
  v-model:loading="loading"
  avatar
  title
  :row="3"
>
  load content
</varlet-skeleton>
```

### Display card 
```html
<varlet-skeleton
  v-model:loading="loading"
  card
  avatar
  title
  :row="3"
>
  load content
</varlet-skeleton>
```
    