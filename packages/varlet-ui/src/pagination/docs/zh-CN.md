# 分页

### 介绍

用于分解大量数据。

### 引入

```js
import { createApp } from 'vue'
import { Pagination } from '@varlet/ui'

createApp().use(Pagination)
```
### 简单模式

`simple` 属性为 `true` 时， 适用于小屏设备。

#### 基本使用

```html
<var-pagination current="6" total="115" />
```

#### 隐藏 size 切换器

使用 `showSizeChanger` 隐藏 `size` 切换器。

```html
<var-pagination current="3" total="115" :show-size-changer="false" />
```

#### 显示总数

使用 `showTatol` 属性自定义总数显示。

```html
<var-pagination 
  current="3" 
  size="20" 
  total="66" 
  :show-total="total => `共 ${total} 条`" 
/>
```

#### 禁用

```html
<var-pagination total="66" disabled />
```

### 普通模式

`simple` 属性为 `false` 时， 适用于中大屏设备。

#### 基本使用

使用 `showQuickJumper` 属性开启快速跳转

```vue
import Basic from '../example/Basic.vue'
```

```html
<var-pagination current="6" total="115" :simple="false" show-quick-jumper />
```

#### Size 配置

使用 `showSizeChanger` 隐藏 `size` 切换器，使用 `sizeOption` 指定可以显示的条数。

```vue
import SizeOption from '../example/SizeOption.vue'
```

```html
<var-pagination current="6" total="115" :simple="false" :show-size-changer="false" />
<var-pagination current="3" total="115" :simple="false" :size-option="[10, 20, 30, 40]" />
```

#### 显示总数

```vue
import ShowTotal from '../example/ShowTotal.vue'
```

```html
<var-pagination
  current="3"
  size="10"
  total="66"
  :simple="false"
  :show-total="total => `共 ${total} 条`"
/>
<var-pagination
  current="3"
  size="10"
  total="66"
  :simple="false"
  :show-total="(total, range) => `${total} 条中的 ${range[0]}-${range[1]}`"
/>
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
| `showSizeChanger` | 是否显示 `size` 切换器 | _boolean_ | `true` |
| `showQuickJumper` | 是否可以快速跳转至某页	 | _boolean_ | `false` |
| `maxShowBtnCount` | 省略号间显示的按钮数量	 | _number_ | `3` |
| `sizeOption` | 指定每页可以显示多少条	 | _number[]_ | `[10, 20, 50, 100]` |
| `showTotal` | 用于显示数据总量和当前数据顺序	 | _function(total, range)_ | `-` |

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
| `--pagination-total-margin` | `0 6px 0 0` |  
| `--pagination-item-width` | `32px` |  
| `--pagination-item-height` | `32px` |  
| `--pagination-item-margin` | `0 4px` |  
| `--pagination-item-border-radius` | `4px` |  
| `--pagination-size-padding` | `0 6px` |  
| `--pagination-list-bg-color` | `#fff` |  
| `--pagination-list-active-bg-color` | `#dbe4fd` |  
| `--pagination-list-active-color` | `var(--color-primary)` |  
| `--pagination-input-width` | `36px` |  
| `--pagination-input-margin` | `0 6px` |  