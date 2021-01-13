# 徽标

## 使用演示

### 引入

```js
import { Badge } from '@varlet/ui'

export default defineComponent({
	components: {
		[Badge.name]: Badge
	}
})
```

### 主题色徽标

通过设置`type`属性控制徽标的颜色

 ```html

<var-badge type="primary"></var-badge>
<var-badge type="info"></var-badge>
<var-badge type="success"></var-badge>
<var-badge type="warning"></var-badge>
<var-badge type="danger"></var-badge>
<var-badge></var-badge>
```

### 圆点徽标

通过设置`dot` 属性把徽标设置成圆点

```html

<var-badge type="danger" dot></var-badge>
```

### 自定义内容徽标

通过设置`value`的值定义徽标的内容

```html

<var-badge type="danger" value="badge"></var-badge>
<var-badge type="danger" value="hot"></var-badge>
<var-badge type="danger" :value="66"></var-badge>
```

### 最大值

通过设置`value`,`max-value`控制徽标显示内容的样式（当`value`与`max-value`都为数字时生效）

```html

<var-badge type="danger" :value="value" :max-value="maxValue"></var-badge>
<var-badge type="danger" :value="value1" :max-value="maxValue"></var-badge>
```

```js
import { defineComponent, Ref, ref } from 'vue'

export default defineComponent({
	setup() {
		const value: Ref<number> = ref(88);
		const value1: Ref<number> = ref(188);
		const maxValue: Ref<number> = ref(99);
		return { value, value1, maxValue };
	}
})
```

### 不同徽标定位

通过设置`position`的值定义徽标的位置

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

通过设置`hidden`的值定义徽标是否显示

```html

<var-button @click="handleChange">点击改变状态</var-button>
<var-badge type="danger" position="right-top" :hidden="hidden">
	<var-chip plain :round="false" color="#009688">徽标</var-chip>
</var-badge>
```

```js
import { defineComponent, Ref, ref } from 'vue'

export default defineComponent({
	setup() {
		const hidden: Ref<boolean> = ref(false);
		const handleChange = () => {
			hidden.value = !hidden.value
		}
		return { hidden, handleChange };
	}
})
```

### 自定义徽标颜色

通过设置`color`的值自定义徽标颜色

```html

<var-badge color="#6200ea" position="right-top">
	<var-chip plain :round="false" color="#009688">徽标</var-chip>
</var-badge>
```

### 自定义徽标图标

通过设置`icon`的值设置徽标图标

```html

<var-badge color="#6200ea" position="right-top" icon="account-circle">
	<var-chip plain :round="false" color="#009688">徽标</var-chip>
</var-badge>
```

## API

### 属性

|参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| type | 类型, 可选值为 `default`, `primary`, `info`, `success`, `warning`, `danger` | _string_ | `default` |
| dot | 是否为小圆点 | _boolean_ | `false` |
| value | 徽标中显示的值（当`dot`为`false`时生效）| _string_,_number_ | `0` |
| max-value | 徽标中显示的最大值，当`value`大于`max-value`时会显示`max-value+`(当`value`与`max-value`都为数字时生效)| _number_ | _ |
| position | 徽标标签中有其他标签时定义徽标在其他标签上的位置，可选值`right-top`,`top-bottom`,`left-top`,`left-bottom` | _string_ | _ |
| color | 自定义徽标的颜色 | _string_ | _ |
| icon | 自定义徽标中图标的内容（优先级高于`value`） | _string_ | _ |

### 插槽

| 名称 | 说明 | 参数 |
| ---- | ---- | ----|
| default | 默认插槽 | _ |

