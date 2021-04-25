# Progress 进度条

### 介绍

展示操作的当前进度。

### 引入

```js
import { createApp } from 'vue'
import { Progress } from '@varlet/ui'

createApp().use(Progress)
```

## 线性进度条

### 基本使用

通过 `value` 属性设置当前进度。

```html
<var-progress :value="20" />
<var-progress :value="value" />
```

### 自定义样式

通过`line-width`、`color`、`track-color`、`ripple` 属性设置线宽、进度条颜色、轨道颜色、水波纹加载效果。

```html
<var-progress :value="30" line-width="8" />
<var-progress :value="60" line-width="10" color="purple" track-color="#dec3e6" />
<var-progress :value="80" line-width="10" style="border-radius: 4px" ripple />
```

### 显示标签

通过 `show-action`属性将action显示，action 默认为进度的百分比，可以使用插槽插入自定义内容。

```html
<var-progress :value="30" show-action />
<var-progress :value="value" show-action />
<var-progress :value="100" show-action> success </var-progress>
```

## 环形进度条

### 自定义样式

```html
<var-progress 
  :value="30" 
  line-width="5" 
  :size="56" 
  mode="circle" 
  color="purple" 
  track-color="#dec3e6" 
/>
```


### 隐藏轨道

通过`show-track`属性隐藏 track。

```html
<var-progress :value="50" :size="56" mode="circle" :show-track="false" />
```
## API

### 属性

| 参数  |   说明  | 类型     | 默认值   |
| ----  | --------------- | -------- | -------- |
| `mode`  | `progress` 的模式，可选值为`linear, circle` | _string_ | `linear` |
| `value` | `progress` 的进度 | _string \| number_ |  `0`  |
| `line-width` | `progress` 的线宽 | _string \| number_ | `4` |
| `color` | `progress` 的颜色 | _string_  | `#005CAF` |
| `track-color`  | `progress` 轨道的颜色 | _string_   | `#d8d8d8` |
| `show-action` | 是否显示 action | _boolean_ | `false` |
| `ripple` | 水波纹加载效果（仅支持线性进度条） | _boolean_ | `false` |
| `size` | `progress` 的尺寸（仅支持环形进度条） | _string \| number_ | `40` |
| `rotate` | `progress` 的原点（仅支持环形进度条） | _number_ | `0` |
| `show-track` | 是否显示 `progress` 的轨道（仅支持环形进度条） | _boolean_ | `true` |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | 自定义 action | `-` |

### 主题变量
#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

| 变量名 | 默认值 |
| --- | --- |
| `@progress-font-size` | `@font-size-sm` |
| `@progress-ripple-color` | `#fff` |
| `@progress-background` | `@color-primary` |