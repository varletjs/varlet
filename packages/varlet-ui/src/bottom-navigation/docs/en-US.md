# BottomNavigation

### Install

```js
import { createApp } from 'vue'
import { BottomNavigation, BottomNavigationItem } from '@varlet/ui'

const app = createApp();
app.use(BottomNavigation);
app.use(BottomNavigationItem);
```

### Basic Usage

```html
<var-bottom-navigation v-model="active">
  <var-bottom-navigation-item label="label" icon="home" />
  <var-bottom-navigation-item label="label" icon="magnify" />
  <var-bottom-navigation-item label="label" icon="heart" />
  <var-bottom-navigation-item label="label" icon="account-circle" />
</var-bottom-navigation>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(0)

    return { active }
  }
}
```

### Match by name

```html
<var-bottom-navigation v-model="active">
  <var-bottom-navigation-item name="home" label="label" icon="home" />
  <var-bottom-navigation-item name="search" label="label" icon="magnify" />
  <var-bottom-navigation-item name="heart" label="label" icon="heart" />
  <var-bottom-navigation-item name="user" label="label" icon="account-circle" />
</var-bottom-navigation>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const active = ref("home")

    return { active }
  }
}
```

### Show Badge

```html
<var-bottom-navigation v-model="active">
  <var-bottom-navigation-item label="label" icon="home" />
  <var-bottom-navigation-item label="label" icon="magnify" badge />
  <var-bottom-navigation-item label="label" icon="heart" :badge="badgeProps" />
  <var-bottom-navigation-item label="label" icon="account-circle" />
</var-bottom-navigation>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(0)
    const badgeProps = {
      type: 'primary',
      value: '66'
    }

    return { active, badgeProps }
  }
}
```

### Custom Icon

```html
<var-bottom-navigation v-model="active">
  <var-bottom-navigation-item name="home" label="label">
    <template #icon="props">
      <img style="width: 20px" :src="props.active ? homeIcon.active : homeIcon.inactive" />
    </template>
  </var-bottom-navigation-item>
  <var-bottom-navigation-item label="label" icon="magnify" />
  <var-bottom-navigation-item label="label" icon="heart" />
  <var-bottom-navigation-item label="label" icon="account-circle" />
</var-bottom-navigation>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(0)
    const homeIcon = {
      active: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-active.png',
      inactive: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-inactive.png'
    }

    return { active, homeIcon }
  }
}
```


### Custom Color

```html
<var-bottom-navigation v-model="active" active-color="red" inactive-color="#2196f3">
  <var-bottom-navigation-item label="label" icon="home" />
  <var-bottom-navigation-item label="label" icon="magnify" />
  <var-bottom-navigation-item label="label" icon="heart" />
  <var-bottom-navigation-item label="label" icon="account-circle" />
</var-bottom-navigation>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(0)

    return { active }
  }
}
```

### Change Event

```html
<var-bottom-navigation v-model="active" @change="handleChange">
  <var-bottom-navigation-item label="label" icon="home" />
  <var-bottom-navigation-item label="label" icon="magnify" />
  <var-bottom-navigation-item label="label" icon="heart" />
  <var-bottom-navigation-item label="label" icon="account-circle" />
</var-bottom-navigation>
```

```js
import { ref } from 'vue'
import Snackbar from '../../snackbar'

export default {
  setup() {
    const active = ref(0)
    function handleChange(active) {
      Snackbar.info(`changed to ${active}`)
    }

    return { active, handleChange }
  }
}
```

### Click Event

```html
<var-bottom-navigation v-model="active">
  <var-bottom-navigation-item  @click="handleClick" label="label" icon="home" />
  <var-bottom-navigation-item  @click="handleClick" label="label" icon="magnify" />
  <var-bottom-navigation-item  @click="handleClick" label="label" icon="heart" />
  <var-bottom-navigation-item  @click="handleClick" label="label" icon="account-circle" />
</var-bottom-navigation>
```

```js
import { ref } from 'vue'
import Snackbar from '../../snackbar'

export default {
  setup() {
    const active = ref(0)
    function handleClick(active) {
      Snackbar.success(`clicked ${active}`)
    }

    return { active, handleClick }
  }
}
```

### Fab

```html
<var-bottom-navigation v-model="fab" style="margin-top: 10px">
  <template #fab>
    <div class="fab_example">
      <var-icon name="plus" color="#fff" size="34" />
    </div>
  </template>
  <var-bottom-navigation-item :label="pack.label" icon="home" />
  <var-bottom-navigation-item :label="pack.label" icon="magnify" />
  <var-bottom-navigation-item :label="pack.label" icon="heart" />
  <var-bottom-navigation-item :label="pack.label" icon="account-circle" />
</var-bottom-navigation>
```

```js
import { ref } from 'vue'
import VarIcon from '../../icon'

export default {
  components:{VarIcon},
  setup() {
    const active = ref(0)
    return { active }
  }
}
```
```css
<style lang="less" scoped>
.fab_example {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
}
</style>
```

## API

### Props

#### BottomNavigation Props

|Prop | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| `v-model` | Identifier of current tab | _number \| string_ | `0` |
| `fixed` |	Whether to fixed bottom | _boolean_ | `false` |
| `border` | Whether to show border | _boolean_ | `false` |
| `z-index` | Z-index | _number \| string_ | `1` |
| `active-color` | Color of active tab item | _string_ | `var(--color-primary)` |
| `inactive-color` | Color of inactive tab item | _string_ | `#646566` |

#### BottomNavigationItem Props

|Prop | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| `name` | Identifier | _string_ | `-` |
| `icon` | Icon name, equivalent to the [name property](/#/zh-CN/icon) of Icon component | _string_ | `-` |
| `label` | Label text content | _string_ | - |
| `namespace` | Icon namespace, extensible custom icon library, equivalent to the [namespace property](/#/zh-CN/icon)  of Icon component | _string_ | `var-icon` |
| `badge` | Logo in the upper right corner of the icon | _boolean \| BadgeProps_ | `false` |

### Events

#### BottomNavigation Events

|Event | Description | Arguments |
| ---- | ---- | ---- |
| `before-change` | The callback function before switching labels, which returns false to prevent switching, supports the return of promise | `active: number \| string` |
| `change` | Triggered when switching labels | `active: number \| string` |

#### BottomNavigationItem Events

|Event | Description | Arguments |
| ---- | ---- | ---- |
| `click` | Trigger on click | `active: number \| string` |

### Slots

#### BottomNavigationItem Slots

| Slot | Description | Arguments |
| ---- | ---- | ----|
| `default` | Custom label text content that overwrites the content of `label`  | `-` |
| `icon` | Custom Icon | `active: boolean` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

### BottomNavigation Variables

| Variable | Default |
| --- | --- |
| `--bottom-navigation-height` | `50px` |
| `--bottom-navigation-z-index` | `1` |
| `--bottom-navigation-background-color` | `#fff` |
| `--bottom-navigation-border-color` | `#bcc2cb` |

### BottomNavigationItem Variables

| Variable | Default |
| --- | --- |
| `--bottom-navigation-item-font-size` | `var(--font-size-sm)` |
| `--bottom-navigation-item-inactive-color` | `#646566` |
| `--bottom-navigation-item-active-color` | `var(--color-primary)` |
| `--bottom-navigation-item-active-background-color` | `#fff` |
| `--bottom-navigation-item-line-height` | `1` |
| `--bottom-navigation-item-icon-size` | `22px` |
| `--bottom-navigation-item-icon-margin-bottom` | `5px` |
