# Pagination

### Intro

You may need it when you need to process large amounts of data.

### Install

```js
import { createApp } from 'vue'
import { Pagination } from '@varlet/ui'

createApp().use(Pagination)
```
### Simple Mode

The default display mode is recommended for small-screen devices. See the mobile phone emulator on the right for a preview of the components.

#### Basic Usage

```html
<var-pagination :current="3" :total="120" />
```

#### Hide Size Changer

Use `showSizeChanger` prop to hide size changer.

```html
<var-pagination :current="3" :total="120" :show-size-changer="false"/>
```

#### Show Total

Use `showTatol` prop to show custom total text.

```html
<var-pagination
  :current="3"
  :total="66"
  :show-total="total => `Total ${total} items`"
/>
```

#### Disabled

```html
<var-pagination :current="3" :total="115" disabled />
```

### Basic Mode

Set `simple` to `false` when you use medium and large screen devices.

#### Basic Usage

```vue
import Basic from '../example/Basic.vue'
```

```html
<var-pagination current="6" total="115" :simple="false" />
```

#### Enable page number to jump quickly

Use `showQuickJumper` prop to enable page number to jump quickly.

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

#### Size Option

Use `showSizeChanger` hide size changer and use `sizeOption` prop set the number of `size` that can be chosen.

```vue
import SizeOption from '../example/SizeOption.vue'
```

```html
<var-pagination :current="3" :total="120" :simple="false" :show-size-changer="false" />
<var-pagination :current="3" :total="120" :simple="false" :size-option="[10, 20, 30, 40]" />
```

#### Show Total

```vue
import ShowTotal from '../example/ShowTotal.vue'
```

```html
<var-pagination
  :current="3"
  :size="10"
  :total="120"
  :simple="false"
  :show-total="total => `Total ${total} items`"
/>
<var-pagination
  :current="3"
  :size="10"
  :total="120"
  :simple="false"
  :show-total="(total, range) => `Total ${total}, current ${range[0]}-${range[1]}`"
/>
```

#### Disabled

```vue
import Disabled from '../example/Disabled.vue'
```

```html
<var-pagination :current="6" :total="120" :simple="false" disabled />
```

## API

### Props

| prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `current` | Current page number | _string \| number_ | `1` |
| `size` | Number of data items per page | _string \| number_ | `10` |
| `total` | Total number of data items | _string \| number_ | `0` |
| `simple` | Whether to use simple mode | _boolean_ | `true` |
| `disabled` | Disable pagination | _boolean_ | `false` |
| `showSizeChanger` | Whether to show `size` select | _boolean_ | `true` |
| `showQuickJumper` | Whether you can jump to pages directly	 | _boolean_ | `false` |
| `maxPagerCount` | Number of buttons displayed between ellipses	| _number_ | `3` |
| `sizeOption` | Specify the sizeChanger options	 | _number[]_ | `[10, 20, 50, 100]` |
| `showTotal` | Show page item's title	 | _function(total, range)_ | `-` |

### Events

| Event | Description | arguments |
| ----- | -------------- | -------- |
| `change` | Callback after `current` or `size` changes | `current: number` <br>`size: number`  |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `prev` | Content of previous button | `-` |
| `next` | Content of next button | `-` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
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