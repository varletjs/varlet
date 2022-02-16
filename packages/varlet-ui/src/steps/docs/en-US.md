# Steps

### Intro

Steps is a navigation bar that guides users through the steps of a task.

### Install

```js
import { createApp } from 'vue'
import { Steps, Step } from '@varlet/ui'

createApp().use(Steps).use(Step)
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
<var-button type="primary" block @click="next">next</var-button>
```

```javascript
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(0)

    const next = () => {
      active.value = (active.value + 1) % 4
    }
    
    return {
      active,
      next
    }
  }
}
```

### Custom Style

```html
<var-steps 
  :active="active"
  active-color="#f44336"
  inactive-color="#e99eb4"
>
  <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">
    Step1
  </var-step>
  <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">
    Step2
  </var-step>
  <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">
    Step3
  </var-step>
  <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">
    Step4
  </var-step>
</var-steps>
```

### Vertical Mode

Change the display direction of the step bar through the `direction` attribute.

```html
<var-steps direction="vertical" :active="active">
  <var-step>Step1</var-step>
  <var-step>Step2</var-step>
  <var-step>Step3</var-step>
  <var-step>Step4</var-step>
</var-steps>
```

## API

### Props

#### Steps Props

| Prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `active` | Active step | _string \| number_ | `0` |
| `direction` | Mode of steps, Can be set to `vertical` | _string_ | `horizontal` |
| `active-color` | Active step color | _string_ | `#2979ff` |
| `inactive-color` | Inactive step color | _string_ | `#9e9e9e` |

#### Step Props

| Prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `active-icon` | Active icon name  | _string_ | `check` |
| `current-icon` | Icon name of current ste	 | _string_ | `-`|
| `inactive-icon` | Inactive icon name	 | _string_ | `-`|

### Events

#### Steps Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `click-step` | Emitted after click step | `index: number` |

### Slots

#### Step Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Content of step | `-`|

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
| --- | --- |
| `--step-tag-size` | `20px` |
| `--step-tag-background` | `#9e9e9e` |
| `--step-tag-font-size` | `var(--font-size-md)` |
| `--step-tag-color` | `#fff` |
| `--step-tag-active-color` | `var(--color-primary)` |
| `--step-tag-margin` | `4px 0` |
| `--step-tag-icon-size` | `var(--font-size-lg)` |
| `--step-content-font-size` | `var(--font-size-md)` |
| `--step-content-color` | `rgba(0, 0, 0, 0.38)` |
| `--step-content-active-color` | `#000` |
| `--step-line-background` | `#000` |
| `--step-vertical-min-height` | `30px` |
| `--step-vertical-tag-margin` | `0 4px` |
| `--step-vertical-line-height` | `calc(100% - 30px)` |
| `--step-vertical-line-min-height` | `20px` |
