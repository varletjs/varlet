# 从 2.x 迁移

### 介绍

本节主要介绍从 `2.x` 迁移至 `3.x` 的注意事项

### 组件功能变更

- DatePicker 组件移除了对 `headerColor` 属性的兼容
- TimePicker 组件移除了对 `headerColor` 属性的兼容
- ImagePreview 组件移除了对 `current` 属性的兼容
- Chip 组件移除了对 `closable` 属性的兼容
- Progress 组件移除了对 `ripple` 属性的兼容
- IndexBar 组件移除了对 `cssMode` 属性的兼容
- LoadingBar 组件移除了对 `mergeConfig` 方法的兼容

### 组件样式变量变更

为了使组件样式定义更加容易，并且支持 `Material Design 3`，`3.x` 版本对组件库的样式变量进行了一次重构，新增了一些基础样式变量。

| 变量名  |
|----------------|
| `--color-on-primary` |
| `--color-on-info` |
| `--color-on-success` |
| `--color-on-warning` |
| `--color-on-danger` |
| `--color-primary-container` |
| `--color-info-container` |
| `--color-success-container` |
| `--color-warning-container` |
| `--color-danger-container` |
| `--color-on-primary-container` |
| `--color-on-info-container` |
| `--color-on-success-container` |
| `--color-on-warning-container` |
| `--color-on-danger-container` |
| `--color-outline` |
| `--color-surface-container` |
| `--color-surface-container-low` |
| `--color-surface-container-high` |
| `--color-surface-container-highest` |
| `--color-inverse-surface` |
| `--color-on-surface-variant` |

以下列举了一些可能会影响页面样式的变量变更。

- DatePicker 

  - `--picker-header-padding` 变更为 `--date-picker-header-padding`
  - `--picker-header-color` 变更为 `--date-picker-header-color`
  - `--picker-actions-padding` 变更为 `--date-picker-actions-padding`

- Pagination

  移除
  `--pagination-list-bg-color`,
  `--pagination-list-active-bg-color`,
  `--pagination-list-active-color`

- Step

  移除
  `--step-min-size`,
  `--step-line-size`

- Progress

  移除 `--progress-ripple-color`

- Select/Input

  组件进行了一次较大的重构，支持了前置图标存在时的占位符 (hint) 动画
  
  | 移除变量  |
  | ----------------| 
  | `--field-decorator-standard-normal-padding-top` |
  | `--field-decorator-standard-normal-padding-bottom` |
  | `--field-decorator-standard-normal-icon-padding` |
  | `--field-decorator-standard-normal-non-hint-padding-top` |
  | `--field-decorator-standard-normal-placeholder-translate-y` |
  | `--field-decorator-standard-small-padding-top` |
  | `--field-decorator-standard-small-padding-bottom` |
  | `--field-decorator-standard-small-icon-padding` |
  | `--field-decorator-standard-small-non-hint-padding-top` |
  | `--field-decorator-standard-small-placeholder-translate-y` |
  | `--field-decorator-outlined-normal-padding-top` |
  | `--field-decorator-outlined-normal-padding-bottom` |
  | `--field-decorator-outlined-normal-icon-padding` |
  | `--field-decorator-outlined-normal-placeholder-translate-y` |
  | `--field-decorator-outlined-small-padding-top` |
  | `--field-decorator-outlined-small-padding-bottom` |
  | `--field-decorator-outlined-small-icon-padding` |
  | `--field-decorator-outlined-small-placeholder-translate-y` |

  | 新增变量  |
  | ----------------| 
  | `--field-decorator-standard-normal-margin-top` |
  | `--field-decorator-standard-normal-margin-bottom` |
  | `--field-decorator-standard-normal-icon-margin-top` |
  | `--field-decorator-standard-normal-icon-margin-bottom` |
  | `--field-decorator-standard-normal-non-hint-margin-top` |
  | `--field-decorator-standard-small-margin-top` |
  | `--field-decorator-standard-small-margin-bottom` |
  | `--field-decorator-standard-small-icon-margin-top` |
  | `--field-decorator-standard-small-icon-margin-bottom` |
  | `--field-decorator-standard-small-non-hint-margin-top` |
  | `--field-decorator-outlined-normal-margin-top` |
  | `--field-decorator-outlined-normal-margin-bottom` |
  | `--field-decorator-outlined-normal-icon-margin-top` |
  | `--field-decorator-outlined-normal-icon-margin-bottom` |
  | `--field-decorator-outlined-small-margin-top` |
  | `--field-decorator-outlined-small-margin-bottom` |
  | `--field-decorator-outlined-small-icon-margin-top` |
  | `--field-decorator-outlined-small-icon-margin-bottom` |