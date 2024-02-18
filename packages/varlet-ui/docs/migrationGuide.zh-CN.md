# 从 2.x 迁移

### 介绍

本节主要介绍 `3.x` 版本相对于 `2.x` 版本的主要变化以及迁移的注意事项。

## 组件库(@varlet/ui)

### 组件重构

- DatePicker 组件移除了 `headerColor` 属性
- TimePicker 组件移除了 `headerColor` 属性
- ImagePreview 组件移除了 `current` 属性
- Chip 组件移除了 `closable` 属性
- Progress 组件移除了 `ripple` 属性
- IndexBar 组件移除了 `cssMode` 属性
- LoadingBar 组件移除了 `mergeConfig` 方法
- Button 组件新增 `iconContainer` 属性

### 组件样式变量变更

- BottomNavigation 组件新增 `--bottom-navigation-fab-border-radius`, `--bottom-navigation-border-color` 的默认值由 `#e3e3e3` 修改为 `var(--color-outline)`
- Steps 组件移除了 `--step-line-size` 和 `--step-min-size`, `--step-tag-color` 的默认值由 `#fff` 修改为 `var(--color-on-primary)`
- Progress 组件移除了 `--progress-ripple-color` 
- Slider 组件的自定义属性 `--slider-thumb-label-text-color` 的默认值由 `#fff` 修改为 `var(--color-on-primary)`
- Pagination 组件的自定义属性 `--pagination-active-color` 的默认值由 `#fff` 修改为 `var(--color-on-primary)`
- Divider 组件的自定义属性 `--divider-color` 的默认值由 `rgba(0, 0, 0, 0.12)` 修改为 `var(--color-outline)`
- Countdown 组件的自定义属性 `--countdown-text-color` 的默认值由 `#555` 修改为 `var(--color-text)`
- Cell 组件的自定义属性 `--cell-border-color` 的默认值由 `#bcc2cb` 修改为 `var(--color-outline)`
- Uploader 组件新增 `--uploader-file-border-radius`
- BackTop 组件新增 `--back-top-button-border-radius`
- Fab 组件新增 `--fab-trigger-border-radius`、`--fab-action-size` 和 `--fab-action-border-radius` 等自定义属性
- Tooltip 组件新增 `tooltip-default-text-color`、`tooltip-primary-text-color`、`tooltip-info-text-color`、`tooltip-success-text-color`、`tooltip-warning-text-color`和`tooltip-danger-text-color` 等自定义属性
- Badge 组件新增 `badge-default-text-color`、`badge-primary-text-color`、`badge-info-text-color`、`badge-success-text-color`、`badge-warning-text-color`和`badge-danger-text-color` 等自定义属性
- 组件根元素新增多个自定义属性，如下: 

| 属性名          | 属性值            |
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

## 组件库快速成型工具(@varlet/cli)

### 命令重构

- 新增 `compile:style-vars` 命令，用来编译组件的自定义属性

### 文档相关

- 新增md3亮色主题和暗色主题