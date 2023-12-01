# Collapse

### Intro

A content area which can be collapsed and expanded.

### Basic Usage

Use `v-model` to control the name of active panels. `value` is an Array.

```html
<script setup>
import { ref } from 'vue'

const value = ref(['1'])

function handleChange(val) {
  console.log(val)
}
</script>

<template>
  <var-collapse v-model="value" @change="handleChange">
    <var-collapse-item title="Title" name="1">Hello World</var-collapse-item>
    <var-collapse-item title="Title" name="2">Hello World</var-collapse-item>
  </var-collapse>
</template>
```

### Hide Margin

Use `offset` prop to hide the margin.

```html
<script setup>
import { ref } from 'vue'

const value = ref(['2'])
</script>

<template>
  <var-collapse v-model="value" :offset="false">
    <var-collapse-item title="Title" name="1">Hello World</var-collapse-item>
    <var-collapse-item title="Title" name="2">Hello World</var-collapse-item>
  </var-collapse>
</template>
```

### Controlled Divider

Use `divider` prop to hide the divider.

```html
<script setup>
import { ref } from 'vue'

const value = ref([])
const divider = ref(false)
</script>

<template>
  <var-button @click="divider = !divider">
    {{ divider ? 'Hide Divider' : 'Show Divider' }}
  </var-button>
  <var-collapse v-model="value" :divider="divider">
    <var-collapse-item title="Title" name="1">Hello World</var-collapse-item>
    <var-collapse-item title="Title" name="2">Hello World</var-collapse-item>
    <var-collapse-item title="Title" name="3">Hello World</var-collapse-item>
  </var-collapse>
</template>
```


### Accordion Mode

Use `accordion` prop to open accordion mode, In this case `value` is a String.

```html
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <var-collapse v-model="value" accordion :offset="false">
    <var-collapse-item title="Title" name="1">Hello World</var-collapse-item>
    <var-collapse-item title="Title" name="2">Hello World</var-collapse-item>
  </var-collapse>
</template>
```

### Disabled

Use the `disabled` prop to disable CollapseItem.

```html
<script setup>
import { ref } from 'vue'

const value = ref([1])

const disabled = ref(false)  
</script>

<template>
  <var-space direction="column" :size="[8, 8]">
    <var-button @click="disabled = !disabled">
      {{ disabled ? 'enable' : 'disable' }}
    </var-button>
    
    <var-collapse v-model="value">
      <var-collapse-item title="Title" :name="1" :disabled="disabled">
        Hello World
      </var-collapse-item>
      <var-collapse-item title="Title" :name="2" :disabled="disabled">
        Hello World
      </var-collapse-item>
    </var-collapse>
  </var-space>
</template>
```

### Custom Content

```html
<script setup>
import { ref } from 'vue'

const value = ref(['1'])  
</script>

<template>
  <var-collapse v-model="value">
    <var-collapse-item title="This is a Title" name="1" icon="account-circle">
      Hello World
    </var-collapse-item>
    <var-collapse-item name="2">
      <template #title>This is a Title</template>
      <template #icon>^_^</template>
      This is a content
    </var-collapse-item>
  </var-collapse>
</template>
```

### Toggle All
```html
<script setup>
const collapseRef = ref(null)
const toggleAllValue = ref(['2', '4'])  

function handleChange(val) {
  console.log(val)
}

function toggleAll() {
  collapseRef.value.toggleAll()
}

function toggleAllOpen() {
  collapseRef.value.toggleAll(true)
}

</script>

<template>
  <var-button @click="toggleAll" style="margin: 8px">Toggle All</var-button>
    <var-button @click="toggleAll" style="margin: 8px">Toggle All Open</var-button>
  <var-collapse v-model="toggleAllValue" ref="collapseRef">
    <var-collapse-item title="title" disabled name="1">This is a content.</var-collapse-item>
    <var-collapse-item title="title" disabled name="2">This is a content.</var-collapse-item>
    <var-collapse-item title="title" name="3">This is a content.</var-collapse-item>
    <var-collapse-item title="title" name="4">This is a content.</var-collapse-item>

  </var-collapse>
</template>
```

## API

### Props

#### Collapse Props

| Prop        | Description                                                 | Type                                                                                | Default |
| ----------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------- |
| `v-model`   | Names of current active panels                              | accordion mode： _string \| number_ <br> non-accordion mode：_string[] \| number[]_ | `-`     |
| `accordion` | Whether to be accordion mode                                | _boolean_                                                                           | `false` |
| `elevation` | Elevation level, options `true` `false` and level of `0-24` | _string \| number \| boolean_                                                       | `true`  |
| `offset`    | Whether to show margin                                      | _boolean_                                                                           | `true`  |
| `divider`   | Whether to show divider                                     | _boolean_                                                                           | `true`  |

#### CollapseItem Props

| Prop       | Description                 | Type               | Default        |
| ---------- | --------------------------- | ------------------ | -------------- |
| `name`     | Name                        | _string \| number_ | `index`        |
| `title`    | Title                       | _string \| number_ | `-`            |
| `icon`     | Icon name                   | _string_           | `chevron-down` |
| `disabled` | Whether to disable collapse | _boolean_          | `false`        |

### Events

#### Collapse Events

| Event       | Description                                              | arguments |
| ----------- | -------------------------------------------------------- | --------- |
| `change`    | Emitted when active index changed                        | `value`   |
| `toggleAll` | Simultaneously control all sub panels to turn on and off | `expanded?:boolean`  |

### Slots

#### Collapse Slots

| Name      | Description         | SlotProps |
| --------- | ------------------- | --------- |
| `default` | Content of collapse | `-`       |

#### CollapseItem Slots

| Name      | Description       | SlotProps |
| --------- | ----------------- | --------- |
| `default` | Content           | `-`       |
| `title`   | Title             | `-`       |
| `icon`    | Custom right icon | `-`       |

### Style Variables
Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable                       | Default                          |
| ------------------------------ | -------------------------------- |
| `--collapse-background`        | `#fff`                           |
| `--collapse-text-color`        | `#232222`                        |
| `--collapse-header-font-size`  | `var(--font-size-lg)`            |
| `--collapse-header-padding`    | `10px 12px`                      |
| `--collapse-content-font-size` | `var(--font-size-md)`            |
| `--collapse-content-padding`   | `0 12px 10px`                    |
| `--collapse-item-margin-top`   | `16px`                           |
| `--collapse-disable-color`     | `#bdbdbd`                        |
| `--collapse-divider-top`       | `thin solid rgba(0, 0, 0, 0.12)` |
