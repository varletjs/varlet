# Progress 进度条

### 介绍

展示操作的当前进度

### 引入

```js
import { Progress } from '@varlet/ui'

createApp().use(Progress)
```

## 线性进度条

### 基本使用

通过 `value` 属性设置当前进度

```html
<var-progress :value="20" />
<var-progress :value="value" />
```

### 不同样式

通过`line-width`、`color`、`track-color`、`ripple` 属性设置线宽、进度条颜色、轨道颜色、水波纹加载效果

```html
<var-progress :value="30" line-width="8" />
<var-progress 
  :value="60" 
  line-width="10" 
  color="purple" 
  track-color="#dec3e6" 
/>
<var-progress :value="80" line-width="10" ripple />
```

### 显示标签

通过 `show-action`属性将action显示，action 默认为进度的百分比，可以使用插槽插入自定义内容

```html
<var-progress :value="30" show-action />
<var-progress :value="value" show-action />
<var-progress :value="100" show-action> success </var-progress>
```

### 自定义样式

通过`style`属性自定义样式

```html
<var-progress :value="30" line-width="10" style="border-radius: 4px" />
<var-progress :value="60" show-action style="color: #72c140" />
```

## 环形进度条

### 不同尺寸

通过`size`属性改变进度条大小

```html
<var-progress :value="30" line-width="3" mode="circle" />
<var-progress 
  :value="50" 
  line-width="3" 
  size="56" 
  mode="circle" 
/>
<var-progress 
  :value="70" 
  line-width="3" 
  size="72" 
  mode="circle" 
/>
```

### 不同样式

```html
<var-progress :value="30" line-width="8" />
<var-progress 
  :value="60" 
  line-width="10" 
  color="purple" 
  track-color="#dec3e6" 
/>
<var-progress :value="80" line-width="10" ripple />
```

### 显示标签

```html
<var-progress 
  :value="30" 
  line-width="5" 
  size="56" 
  mode="circle" 
  show-action 
/>
<var-progress 
  :value="value" 
  line-width="5" 
  size="56" 
  mode="circle" 
  show-action 
/>
<var-progress 
  :value="100" 
  line-width="5"
  size="56" 
  mode="circle" 
  show-action
>
  success
</var-progress>
```

### 不同原点

通过 `rotate` 属性设置环形进度条的原点

```html
<var-progress 
  :value="value" 
  line-width="5" 
  size="56" 
  mode="circle" 
/>
<var-progress
  :value="value"
  line-width="5"
  size="56"
  mode="circle"
  :rotate="90"
/>
<var-progress
  :value="value"
  line-width="5"
  size="56"
  mode="circle"
  :rotate="180"
/>
```

### 隐藏轨道

通过 `show-track`属性将轨道隐藏

```html
<var-progress 
  :value="30" 
  line-width="3" 
  mode="circle" 
  :show-track="false" 
/>
<var-progress
  :value="50"
  line-width="5"
  size="56"
  mode="circle"
  :show-track="false"
  show-action
/>
<var-progress
  :value="value"
  line-width="8"
  size="72"
  mode="circle"
  :show-track="false"
  show-action
  :rotate="90"
/>
```

## API

### 属性

| 参数  |   说明  | 类型     | 默认值   |
| ----  | --------------- | -------- | -------- |
| `mode`  | progress 的模式 | _string_ | `linear` |
| `value` | progress 的进度 | _string \| number_ |  `0`  |
| `line-width` | progress 的线宽 | _string \| number_ | `4` |
| `color` | progress 的颜色 | _string_  | `#005CAF` |
| `track-color`  | progress 轨道的颜色 | _string_   | `#d8d8d8` |
| `show-action` | 是否显示 action | _boolean_ | `false` |
| `ripple`(仅支持线性进度条) | 水波纹加载效果 | _boolean_ | `false` |
| `size`（仅支持环形进度条） | progress 的尺寸 | _string \| number_ | `40` |
| `rotate`（仅支持环形进度条） | progress 的原点 | _number_ | `0` |
| `show-track`（仅支持环形进度条） | 是否显示 progress 的轨道 | _boolean_ | `true` |

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