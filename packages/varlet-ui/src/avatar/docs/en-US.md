# Avatar

### Intro

Avatar Component

### Avatar Size

```html
<template>
  <var-space align="end">
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="small" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="large" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="56" />
  </var-space>
</template>
```

## API

### Props

| Prop | Description                                                                                             | Type   | Default |
| ----- |---------------------------------------------------------------------------------------------------------|--------|-------|
| `target` | The target to trigger scroll, If it is undefined back top will listen to the nearest scrollable parent. | _string \| HTMLElement_     | `-` |
| `visibility-height` | The button will not show until the scroll height reaches this value                                     | _string \| number_ | `200` |
| `bottom`            | Distance between `BackTop` and page bottom                                                              | _string \| number_ | `40` |
| `right`            | Distance between `BackTop` and page right                                                               | _string \| number_ | `40` |
| `duration` | Time to return to top（ms）                                                                               | _number_ | `300` |

### Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `click` | Triggers when click | `event: Event` |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Custom the content | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--back-top-right` | `40px` |
| `--back-top-bottom` | `40px` |
| `--back-top-button-size` | `40px` |
