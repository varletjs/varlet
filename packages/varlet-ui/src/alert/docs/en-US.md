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
  <var-space direction="column" size="large">
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
      type="danger"
    />
  </var-space>
</template>
```

### Variant

```html
<template>
  <var-space direction="column" size="large">
    <var-alert 
      title="Pride And Prejudice" 
      message="I can't say exactly when, where, what expression I saw on your face, or what words I heard, that made me fall in love with you."
    />
    <var-alert 
      variant="tonal"
      title="Pride And Prejudice" 
      message="I can't say exactly when, where, what expression I saw on your face, or what words I heard, that made me fall in love with you."
    />
    <var-alert
      variant="outlined"
      title="Pride And Prejudice" 
      message="I can't say exactly when, where, what expression I saw on your face, or what words I heard, that made me fall in love with you."
    />
  </var-space>
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
| `type` | Type, optional values are `info`, `success`, `warning`, `danger` | _string_ | `info` | 
| `variant`   | Variant, optional values are `standard` `outlined` `tonal` | _string_ | `standard` |
| `color` | Background color | string | `-` | 
| `title` | Title | string | `-` | 
| `message` | Message | string | `-` | 
| `elevation` | Elevation, optional values are true, false, and levels from 0-24 | _string \| number \| boolean_ | `false` | 
| `closeable` | Whether the alert is closeable | boolean | `false` | 

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
| `--alert-icon-size` | `22px` |
| `--alert-icon-margin` | `0 12px 0 0` |
| `--alert-close-icon-size` | `22px` |
| `--alert-close-icon-margin` | `2px 0 0 12px` |
| `--alert-standard-info-text-color` | `var(--color-on-info)` |
| `--alert-standard-danger-text-color` | `var(--color-on-danger)` |
| `--alert-standard-success-text-color` | `var(--color-on-success)` |
| `--alert-standard-warning-text-color` | `var(--color-on-warning)` |
| `--alert-danger-background` | `var(--color-danger)` |
| `--alert-success-background` | `var(--color-success)` |
| `--alert-warning-background` | `var(--color-warning)` |
| `--alert-info-background` | `var(--color-info)` |
| `--alert-tonal-danger-background` | `hsla(var(--hsl-danger), 0.12)` |
| `--alert-tonal-success-background` | `hsla(var(--hsl-success), 0.12)` |
| `--alert-tonal-warning-background` | `hsla(var(--hsl-warning), 0.12)` |
| `--alert-tonal-info-background` | `hsla(var(--hsl-info), 0.12)` |
| `--alert-tonal-danger-text-color` | `var(--color-danger)` |
| `--alert-tonal-success-text-color` | `var(--color-success)` |
| `--alert-tonal-warning-text-color` | `var(--color-warning)` |
| `--alert-tonal-info-text-color` | `var(--color-info)` |
| `--alert-message-font-size` | `14px` |
| `--alert-title-font-size` | `16px` |
| `--alert-title-font-weight` | `500` |
| `--alert-message-margin-top` | `4px` |
| `--alert-message-line-height` | `1.5` |
| `--alert-title-line-height` | `1.5` |