# Alert

### Intro

Alerts display brief messages for the user without interrupting their use.

### Title

```html
<template>
  <var-alert title="Pride And Prejudice" />
</template>
```

### Message

```html
<template>
  <var-alert message="I can't say exactly when, where, what expression I saw on your face, or what words I heard, that made me fall in love with you." />
</template>
```

### Type 

```html
<template>
  <var-alert 
    title="Pride And Prejudice" 
    message="I can't say exactly when, where, what expression I saw on your face, or what words I heard, that made me fall in love with you."
  />
  <var-alert 
    title="Pride And Prejudice" 
    message="I can't say exactly when, where, what expression I saw on your face, or what words I heard, that made me fall in love with you."
    type="success"
  />
  <var-alert 
    title="Pride And Prejudice" 
    message="I can't say exactly when, where, what expression I saw on your face, or what words I heard, that made me fall in love with you."
    type="warning"
  />
  <var-alert 
    title="Pride And Prejudice" 
    message="I can't say exactly when, where, what expression I saw on your face, or what words I heard, that made me fall in love with you."
    type="error"
  />
</template>
```

### Variant

```html
<template>
  <var-alert 
    title="Pride And Prejudice" 
    message="I can't say exactly when, where, what expression I saw on your face, or what words I heard, that made me fall in love with you."
  />
  <var-alert 
    title="Pride And Prejudice" 
    message="I can't say exactly when, where, what expression I saw on your face, or what words I heard, that made me fall in love with you."
    variant="tonal"
  />
  <var-alert 
    title="Pride And Prejudice" 
    message="I can't say exactly when, where, what expression I saw on your face, or what words I heard, that made me fall in love with you."
    variant="outlined"
  />
</template>
```

### Custom Icon

```html
<template>
  <var-alert 
    title="Pride And Prejudice" 
    message="I can't say exactly when, where, what expression I saw on your face, or what words I heard, that made me fall in love with you."
  >
    <template #icon>
      <var-icon name="heart" />
    </template>
  </var-alert>
</template>
```

### Allow To Close

```html
<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <var-alert 
    title="Pride And Prejudice" 
    message="I can't say exactly when, where, what expression I saw on your face, or what words I heard, that made me fall in love with you."
    closeable
    @close="show = false"
  >
    <template #icon>
      <var-icon name="heart" />
    </template>
  </var-alert>
</template>
```


## API

### Props

| Prop | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| `type` | Type, optional values are `info`, `success`, `warning`, `error` | _string_ | `info` | 
| `variant`   | Variant, optional values are `standard` `outlined` `tonal` | _string_ | `standard` |
| `color` | Background color | string | `-` | 
| `title` | Title | string | `-` | 
| `message` | Message | string | `-` | 
| `elevation` | Elevation, optional values are true, false, and levels from 0-24 | _string \| number \| boolean_ | `false` | 
| `closeable` | Whether the alert is closeable | boolean | `false` | 
| `icon-name` | Custom icon for the closeable alert, can only be used when closeable is true | string | `-` | 
| `namespace` | Namespace for the custom closeable alert icon | string | `var-icon` |

### Slots

| Name | Description | SlotProps |
| ---- | ---- | ----|
| `default` | The message of alert | `-` |
| `content` | The content of alert | `-` |
| `title`   | The title of alert | `-` |
| `icon` | The prepend icon of alert | `-` |
| `close-icon`   | The close icon of alert | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `close` | Triggered when the Close button is clicked and can only be used when the Close button is displayed | `event: Event` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
|-----------------------------| --- |
| `--alert-padding` | `16px` |
| `--alert-border-radius` | `4px` |
| `--alert-icon-margin-right` | `12px` |
| `--alert-close-icon-margin-left` | `12px` |
| `--alert-outlined-color` | `rgba(0, 0, 0, 0.87)` |
| `--alert-standard-color` | `rgba(255, 255, 255, 0.87)` |
| `--alert-error-background` | `var(--color-danger)` |
| `--alert-success-background` | `var(--color-success)` |
| `--alert-warning-background` | `var(--color-warning)` |
| `--alert-info-background` | `var(--color-info)` |
| `--alert-tonal-error-background`| `var(--color-danger-container)` |
| `--alert-tonal-success-background`| `var(--color-success-container)` |
| `--alert-tonal-warning-background`| `var(--color-warning-container)` |
| `--alert-tonal-info-background`| `var(--color-info-container)` |
| `--alert-tonal-error-color`| `var(--color-on-danger-container)` |
| `--alert-tonal-success-color`| `var(--color-on-success-container)` |
| `--alert-tonal-warning-color`| `var(--color-on-warning-container)` |
| `--alert-tonal-info-color`| `var(--color-on-info-container)` |
| `--alert-message-font-size` | `14px` |
| `--alert-title-font-size` | `16px` |
| `--alert-title-font-weight` | `500` |
| `--alert-message-margin-top` | `5px` |
| `--alert-message-line-height`| `18px` |
| `--alert-title-line-height`| `28px` |