# Migrate from 2.x

### Introduce
This section mainly introduces the main changes of the `3.x` version compared to the `2.x` version and the considerations for migration.

## Components Library(@varlet/ui)

### Component Refactoring

- The `headerColor` attribute has been removed from the DatePicker component
- The TimePicker component has removed the `headerColor` attribute
- ImagePreview component has removed the `current` attribute
- Chip component removed `closable` attribute
- The `ripple` attribute has been removed from the Progress component
- IndexBar component has removed the `cssMode` attribute
- The `mergeConfig` method has been removed from the LoadingBar component
- Button component adds `iconContainer` attribute

### Component style variable changes

- The BottomNavigation component adds `--bottom-navigation-fab-border-radius`, and the default value of `--bottom-navigation-border-color` is changed from `#e3e3e3` to `var(--color-outline)`
- The Steps component has removed `--step-line-size` and `--step-min-size`, and the default value of `--step-tag-color` has been changed from `#fff` to `var(-- color-on-primary)`
- Progress component removed `--progress-ripple-color`
- The default value of the custom attribute `--slider-thumb-label-text-color` of the Slider component is changed from `#fff` to `var(--color-on-primary)`
- The default value of the custom property `--pagination-active-color` of the Pagination component is changed from `#fff` to `var(--color-on-primary)`
- The default value of the Divider component's custom attribute `--divider-color` is changed from `rgba(0, 0, 0, 0.12)` to `var(--color-outline)`
- The default value of the Countdown component's custom property `--countdown-text-color` is modified from `#555` to `var(--color-text)`
- The default value of the Cell component's custom attribute `--cell-border-color` is modified from `#bcc2cb` to `var(--color-outline)`
- Added `--uploader-file-border-radius` to the Uploader component
- Added `--back-top-button-border-radius` to BackTop component
- Fab component adds new custom properties such as `--fab-trigger-border-radius`, `--fab-action-size` and `--fab-action-border-radius`
- Tooltip component adds `tooltip-default-text-color`, `tooltip-primary-text-color`, `tooltip-info-text-color`, `tooltip-success-text-color`, `tooltip-warning- Custom properties such as text-color` and `tooltip-danger-text-color`
- Badge component adds `badge-default-text-color`, `badge-primary-text-color`, `badge-info-text-color`, `badge-success-text-color`, `badge-warning- Custom properties such as text-color` and `badge-danger-text-color`
- Several new custom attributes have been added to the component root element, as follows:

| attribute name | attribute value |
|----------------|------------------|
| `--color-on-primary` | `#fff` |
| `--color-on-info` | `#fff` |
| `--color-on-success` | `#fff` |
| `--color-on-warning` | `#fff` |
| `--color-on-danger` | `#fff` |
| `--color-primary-container` | `#3a7afe` |
| `--color-info-container` | `#00afef` |
| `--color-success-container` | `#00c48f` |
| `--color-warning-container` | `#ff9f00` |
| `--color-danger-container` | `#f44336` |
| `--color-on-primary-container` | `#fff` |
| `--color-on-info-container` | `#fff` |
| `--color-on-success-container` | `#fff` |
| `--color-on-warning-container` | `#fff` |
| `--color-on-danger-container` | `#fff` |
| `--color-outline` | `rgba(0, 0, 0, 0.12)` |