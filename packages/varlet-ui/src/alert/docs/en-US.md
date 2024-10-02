# Alert

### Intro

Alerts display brief messages for the user without interrupting their use.

### Title

```html
<template>
  <var-alert title="Varlet UI" text="Varlet UI is a Material design component library developed based on Vue3, supporting mobile and desktop, developed and maintained by varletjs organization." />
</template>
```

### Content

```html
<template>
  <var-alert title="Varlet UI" text="Varlet UI 是一个基于 Vue3 开发的 Material Design 组件库，全面拥抱 Vue3 生态，支持移动端和桌面端，由 varletjs 组织维护。" />
</template>
```

## API

### Props

| Prop | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| `type` | Type, optional values are default, primary, info, success, warning, danger | _string_ | `default` | 
| `color` | Background color | string | `-` | 
| `title` | Title | string | `-` | 
| `text` | Content | string | `-` | 
| `elevation` | Elevation, optional values are true, false, and levels from 0-24 | string | number | boolean | `false` | 
| `closeable` | Whether the alert is closeable | boolean | `false` | 
| `icon-name` | Custom icon for the closeable alert, can only be used when closeable is true | string | `-` | 
| `namespace` | Namespace for the custom closeable alert icon | string | `var-icon` |

### Slots

| Name | Description | SlotProps |
| ---- | ---- | ----|
| `default` | The content of alert | `-` |
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
| `--alert-prepend-icon-margin-right` | `12px` |
| `--alert-close-icon-margin-left` | `12px` |
| `--alert-default-text-color` | `#555` |
| `--alert-primary-text-color` | `var(--color-on-primary-container)` |
| `--alert-danger-text-color` | `var(--color-on-danger-container)` |
| `--alert-success-text-color` | `var(--color-on-success-container)` |
| `--alert-warning-text-color` | `var(--color-on-warning-container)` |
| `--alert-info-text-color` | `var(--color-on-info-container)` |
| `--alert-default-color` | `#e0e0e0` |
| `--alert-primary-color` | `var(--color-primary-container)` |
| `--alert-danger-color` | `var(--color-danger-container)` |
| `--alert-success-color` | `var(--color-success-container)` |
| `--alert-warning-color` | `var(--color-warning-container)` |
| `--alert-info-color` | `var(--color-info-container)` |
| `--alert-content-font-size` | `14px` |
| `--alert-title-font-size` | `16px` |
| `--alert-title-font-weight` | `500` |