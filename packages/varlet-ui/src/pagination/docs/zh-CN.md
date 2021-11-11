# 分页

### 介绍

当你需要处理大量数据的时候，可能需要用到它。

### 引入

```js
import { createApp } from 'vue'
import { Pagination } from '@varlet/ui'

createApp().use(Pagination)
```
### 简约模式

默认的一种显示模式，推荐在小屏设备上使用，组件预览见右侧手机模拟器。

#### 基本使用

```html
<var-pagination :current="3" :total="120" />
```

#### 隐藏 size 控制器

使用 `show-size-changer` 可以控制 `size` 控制器的显示和隐藏。

```html
<var-pagination :current="3" :total="120" :show-size-changer="false"/>
```

#### 显示总数

使用 `showTatol` 属性自定义总数显示。

```html
<var-pagination 
  :current="3" 
  :total="66" 
  :show-total="total => `共 ${total} 条`" 
/>
```

#### 禁用

```html
<var-pagination :current="3" :total="115" disabled />
```

### 普通模式

`simple` 属性为 `false` 时，可以开启我们专门为宽屏设计的分页风格。

#### 基本使用

```vue
import Basic from '../example/Basic.vue'
```

```html
<var-pagination current="6" total="115" :simple="false"/>
```

#### 开启页码快速跳转

使用 `show-quick-jumper` 属性开启页面快速跳转

```vue
import QuickJumper from '../example/QuickJumper.vue'
```

```html
<var-pagination
  :current="3"
  :total="120"
  :simple="false" 
  show-quick-jumper
/>
```

#### Size 配置

使用 `show-size-changer` 可以隐藏 `size` 切换器。
使用 `size-option` 指定可以显示的条数。

```vue
import SizeOption from '../example/SizeOption.vue'
```

```html
<var-pagination :current="3" :total="120" :simple="false" :show-size-changer="false" />
<var-pagination :current="3" :total="120" :simple="false" :size-option="[10, 20, 30, 40]" />
```

#### 自定义显示总数

```vue
import ShowTotal from '../example/ShowTotal.vue'
```

```html
<var-pagination
  :current="3"
  :size="10"
  :total="120"
  :simple="false"
  :show-total="total => `共 ${total} 条`"
/>
<var-pagination
  :current="3"
  :size="10"
  :total="120"
  :simple="false"
  :show-total="(total, range) => `共 ${total}, 当前 ${range[0]}-${range[1]}`"
/>
```

#### 禁用

```vue
import Disabled from '../example/Disabled.vue'
```

```html
<var-pagination :current="6" :total="120" :simple="false" disabled />
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `current` | 当前页数 | _string \| number_ | `1` |
| `size` | 每页条数 | _string \| number_ | `10` |
| `total` | 总条数 | _string \| number_ | `0` |
| `simple` | 是否为简单模式 | _boolean_ | `true` |
| `disabled` | 禁用分页 | _boolean_ | `false` |
| `show-size-changer` | 是否显示 `size` 切换器 | _boolean_ | `true` |
| `show-quick-jumper` | 是否可以快速跳转至某页	 | _boolean_ | `false` |
| `max-pager-count` | 省略号间显示的按钮数量	 | _number_ | `3` |
| `size-option` | 指定每页可以显示多少条	 | _number[]_ | `[10, 20, 50, 100]` |
| `show-total` | 用于显示数据总量和当前数据顺序	 | _function(total, range)_ | `-` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `change` | `current` 或 `size` 改变后的回调 | `current: number` <br>`size: number`  |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `prev` | 上一页按钮内容 | `-` |
| `next` | 下一页按钮内容 | `-` |

### 样式变量

以下为组件使用的 css 变量,可以使用[StyleProvider 组件](#/zh-CN/style-provider)进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--pagination-font-size` | `var(--font-size-md)` |  
| `--pagination-active-color` | `#fff` |  
| `--pagination-active-bg-color` | `var(--color-primary)` |  
| `--pagination-hover-bg-color` | `rgb(245, 245, 245)` |  
| `--pagination-total-margin` | `0 12px` |  
| `--pagination-total-line-height` | `24px` |  
| `--pagination-item-width` | `32px` |  
| `--pagination-item-height` | `32px` |  
| `--pagination-item-margin` | `0 6px` |  
| `--pagination-item-border-radius` | `4px` |  
| `--pagination-list-bg-color` | `#fff` |  
| `--pagination-list-active-bg-color` | `#dbe4fd` |  
| `--pagination-list-active-color` | `var(--color-primary)` |  
| `--pagination-input-width` | `32px` |
| `--pagination-simple-padding` | `0 0 2px 0` |
| `--pagination-disabled-color` | `var(--color-text-disabled)` |
| `--pagination-bg-disabled-color` | `var(--color-disabled)` |
| `--pagination-size-line-height` | `24px` |  