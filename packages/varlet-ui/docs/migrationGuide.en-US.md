# Migrating from 2.x

### Intro

This section mainly introduces the considerations for migrating from `2.x` to `3.x`

### Component function changes

- DatePicker component removes compatibility with `headerColor` property
- TimePicker component removes compatibility with `headerColor` property
- ImagePreview component removes compatibility with `current` property
- Chip component removed compatibility with `closable` property
- Progress component removed compatibility with `ripple` property
- IndexBar component removes compatibility with `cssMode` property
- LoadingBar component removed compatibility with `mergeConfig` method

### Component style variable changes

In order to make component style definition easier and support `Material Design 3`, the `3.x` version has restructured the style variables of the component library and added some new basic style variables.

| Variable  |
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

  - `--picker-header-padding` change to `--date-picker-header-padding`
  - `--picker-header-color` change to `--date-picker-header-color`
  - `--picker-actions-padding` change to `--date-picker-actions-padding`

- Pagination

  Remove
  `--pagination-list-bg-color`,
  `--pagination-list-active-bg-color`,
  `--pagination-list-active-color`

- Step

  Remove
  `--step-min-size`,
  `--step-line-size`

- Progress

  Remove `--progress-ripple-color`

- Select/Input

  The component has undergone a major refactoring and supports hint animation when the prepend icon exists.
  
  | Removed Variable  |
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

  | Added Variable  |
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