# 徽标

### 引入

```js
import { createApp } from 'vue'
import { Badge } from '@varlet/ui'

createApp().use(Badge)
```

### 徽标类型

通过`type`属性设置徽标的类型。

```html
<var-badge type="primary" />
<var-badge type="info" />
<var-badge type="success" />
<var-badge type="warning" />
<var-badge type="danger" />
<var-badge />
```

### 圆点徽标

通过`dot`属性将徽标设置为圆点。

```html
<var-badge type="danger" dot />
```

### 自定义徽标内容

通过`value`属性设置徽标的内容。

```html
<var-badge type="danger" value="badge" />
<var-badge type="danger" value="hot" />
<var-badge type="danger" value="66" />
```

### 最大值

通过`value`和`max-value`控制徽标显示值的范围（当`value`与`max-value`都存在时生效）。

```html
<var-badge type="danger" :value="value" :max-value="maxValue" />
<var-badge type="danger" :value="value1" :max-value="maxValue" />
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const value = ref(88);
    const value1 = ref(188);
    const maxValue = ref(99);

    return {
      value,
      value1,
      maxValue
    }
  }
}
```

### 不同定位徽标

通过`position`属性设置徽标的位置。

```html
<var-badge type="danger" position="right-top">
  <var-chip plain :round="false" color="#009688">右上</var-chip>
</var-badge>
<var-badge type="danger" position="right-bottom">
  <var-chip plain :round="false" color="#009688">右下</var-chip>
</var-badge>
<var-badge type="danger" position="left-top">
  <var-chip plain :round="false" color="#009688">左上</var-chip>
</var-badge>
<var-badge type="danger" position="left-bottom">
  <var-chip plain :round="false" color="#009688">左下</var-chip>
</var-badge>
```

### 是否显示徽标

通过`hidden`属性设置是否显示徽标。

```html
<var-button @click="handleChange">点击改变状态</var-button>
<var-badge type="danger" position="right-top" :hidden="hidden">
  <var-chip plain :round="false" color="#009688">徽标</var-chip>
</var-badge>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const hidden = ref(false);

    const handleChange = () => {
      hidden.value = !hidden.value
    }

    return {
      hidden,
      handleChange
    }
  }
}
```

### 自定义徽标颜色

通过`color`属性设置徽标的颜色。

```html
<var-badge color="#6200ea" position="right-top">
  <var-chip plain :round="false" color="#009688">徽标</var-chip>
</var-badge>
```

### 自定义徽标图标

通过`icon`属性设置徽标图标。

```html
<var-badge color="#6200ea" position="right-top" icon="notebook">
  <var-chip plain :round="false" color="#009688">徽标</var-chip>
</var-badge>
```

## API

### 属性

|参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| `type` | 类型， 可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `dot` | 徽标是否为小圆点 | _boolean_ | `false` |
| `value` | 徽标中显示的值（当`dot`为`false`时生效）| _string \| number_ | `0` |
| `max-value` | 徽标中显示的最大值，当`value`大于`max-value`时会显示`max-value+`(当`value`与`max-value`都存在时生效)| _number_ | - |
| `position` | 徽标标签中有其他标签时定义徽标在其他标签上的位置，可选值`right-top` `top-bottom` `left-top` `left-bottom` | _string_ | `right-top` |
| `color` | 自定义徽标颜色 | _string_ | - |
| `icon` | 自定义徽标中图标的内容（优先级高于`value`） | _string_ | - |

### 插槽

| 名称 | 说明 | 参数 |
| ---- | ---- | ----|
| default |  徽标内容 | - |

### 主题变量

#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

| 变量名 | 默认值 |
| --- | --- |
| `@chip-default-color` | `#f5f5f5` |
| `@chip-primary-color` | `@color-primary`|
| `@chip-danger-color` |  `@color-danger`|
| `@chip-success-color` | `@color-success`|
| `@chip-warning-color` |  `@color-warning`|
| `@chip-info-color` | `@color-info`|

