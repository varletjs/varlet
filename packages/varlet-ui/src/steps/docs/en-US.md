# Steps

### Intro

Steps is a navigation bar that guides users through the steps of a task.

### Install

```js
import { Steps, Step } from '@varlet/ui'

createApp().use(Steps)
createApp().use(Step)
```

### Basic Usage

Use `active` prop to control the progress of step, value is index of step and is counted from `0`.

```html
<var-steps :active="active">
  <var-step>Step1</var-step>
  <var-step>Step2</var-step>
  <var-step>Step3</var-step>
  <var-step>Step4</var-step>
</var-steps>
<var-button type="primary" @click="next">next</var-button>
```

```javascript
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(0)

    const next = () => {
      active.value = active.value === 4 ? 0 : active.value + 1
    }
    
    return {
      value,
      next
    }
  }
}
```

### Custom Style

Clicking on `step` will trigger the `click-step` event.

```html
 <var-steps 
  :active="active"  
  active-color="purple" 
  inactive-color="#afcf7f"
  @click-step="click"
>
  <var-step 
    active-icon="fire" 
    current-icon="heart" 
    inactive-icon="delete"
  >
    Step1
  </var-step>
  <var-step 
    active-icon="fire" 
    current-icon="heart" 
    inactive-icon="delete"
  >
    Step2
  </var-step>
  <var-step 
    active-icon="fire" 
    current-icon="heart" 
    inactive-icon="delete"
  >
    Step3
  </var-step>
  <var-step 
    active-icon="fire" 
    current-icon="heart" 
    inactive-icon="delete"
  >
    Step4
  </var-step>
</var-steps>
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(0)

    const click = (index) => {
      active.value = index
    }
    
    return {
      value,
      click
    }
  }
}
```

### Dynamic steps

Steppers can have their steps dynamically added or removed.

```html
<var-select placeholder="Change the number of steps" v-model="count">
  <var-option v-for="item in list" :key="item" :label="item" :value="item" />
</var-select>
<var-steps>
  <var-step v-for="i in count" :key="i">Step{{ i }}</var-step>
</var-steps>
```
```javascript
import { ref } from 'vue'

export default {
  setup() {
    const list = ref([2, 3, 4, 5])
    const count = ref(2)
    
    return {
      list,
      count
    }
  }
}
```

### Vertical Mode

Use `direction` prop to change mode of steps.

```html
<var-steps direction="vertical" :active="5">
  <var-step active-icon="notebook">
    <h3 style="margin: 0">2021-02-13</h3>
    <span>do something...</span>
  </var-step>
  <var-step active-icon="notebook">
    <h3 style="margin: 0">2021-02-14</h3>
    <span>do something...</span>
  </var-step>
  <var-step active-icon="notebook">
    <h3 style="margin: 0">2021-02-15</h3>
    <span>do something...</span>
  </var-step>
  <var-step active-icon="notebook">
    <h3 style="margin: 0">2021-02-16</h3>
    <span>do something...</span>
  </var-step>
</var-steps>
```

## API

### Props

### Steps Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `active` | Active step | _number_ ｜ _string_ | `0` |
| `direction` | Mode of steps, Can be set to `vertical` | _string_ | `horizontal` |
| `active-color` | Active step color | _string_ | `#2979ff` |
| `inactive-color` | Inactive step color | _string_ | `#9e9e9e` |

### Step Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `active-icon` | Active icon name  | _string_ | `check` |
| `current-icon` | Icon name of current ste	 | _string_ | - |
| `inactive-icon` | Inactive icon name	 | _string_ | - |

### Events

### Steps Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `click-step` | Emitted after click step | `index: number` |

### Slots

### Step Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Content of step | - |
