# 标签

## 使用演示

### 引入

```js
import { Chip } from '@varlet/ui'

export default defineComponent({
  components: {
    [Chip.name]: Chip
  }
})
```

### 主题色标签

通过设置`type`属性控制标签的颜色

```html
<var-chip type="primary">主要标签</var-chip>
<var-chip type="success">成功标签</var-chip>
<var-chip type="danger">危险标签</var-chip>
<var-chip type="warning">警告标签</var-chip>
<var-chip type="info">信息标签</var-chip>
<var-chip>默认标签</var-chip>
```

### 空心样式标签
通过设置`plain`属性把标签设置成空心样式

```html
<var-chip plain type="primary">空心标签</var-chip>
```
### 非圆角标签
通过设置`round`属性为`false`把取消标签的圆角样式

```html
<var-chip :round="false" type="primary">非圆角标签</var-chip>
```

### 标签尺寸
通过设置`size`属性控制标签的大小
 ```html
<var-chip size="large">大标签</var-chip>
<var-chip>中等标签</var-chip>
<var-chip size="small">小标签</var-chip>
<var-chip size="mini">迷你标签</var-chip>
```
### 块级flex
```html
<var-chip type="primary" block>块级标签</var-chip>
<var-chip type="primary">块级标签</var-chip>
```

### 可关闭标签
通过使用`closable`属性控制显示标签的关闭图标，使用`close-name`属性设置关闭图标的样式（`close-name`必须在使用了`closeable`的情况下使用）
```html
<var-chip closable v-if="show" @close="show = false">可关闭标签</var-chip>
<var-chip closable icon-name="delete" v-if="show1" @close="show1 = false">自定义关闭图标</var-chip>
```

```js
import {defineComponent,Ref,ref} from 'vue'
export default defineComponent({
  setup(){
    const show: Ref<boolean> = ref(true);
    const show1: Ref<boolean> = ref(true);
    return {show,show1};
  }
})
```
### 自定义颜色标签
通过设置`color`和`text-color`属性设置标签颜色
```html
<var-chip color="#009688">标签</var-chip>
<var-chip color="#009688" plain>标签</var-chip>
<var-chip color="#faecd8" text-color="#e6a23c" plain>标签</var-chip>
<var-chip color="#faecd8" text-color="#e6a23c">标签</var-chip>
```
### 添加左右插槽标签
自定义标签两侧插槽
```html
 <var-chip type="primary" plain>
        <template #left>
          <var-icon name="star"></var-icon>
        </template>
        左侧插槽
 </var-chip>
 <var-chip type="primary" plain>
        <template #right>
          <var-icon name="fire"></var-icon>
        </template>
        右侧插槽
 </var-chip>
 <var-chip type="primary" plain>
        <template #left>
          <var-icon name="account-circle"></var-icon>
        </template>
        <template #right>
          <var-icon name="cake-variant"></var-icon>
        </template>
        左右两侧插槽
 </var-chip>
```

## API

### 属性

|参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| type | 类型, 可选值为 `default`, `primary`, `info`, `success`, `warning`, `danger` | _string_ | `default` |
| size | 尺寸, 可选值为 `normal`, `mini`, `small`, `large` | _string_ | `normal` |
| plain | 是否为空心样式 | _boolean_ | `false` |
| round | 是否为圆角样式 | _boolean_ | `true` |
| block | 块级元素 | _boolean_ | `false` |
| closeable | 是否为可关闭标签 | _boolean_ | `false` |
| close-name | 自定义可关闭标签的图标，必须在closeable为true的条件下才能用 | _string_ | _ |
| color | 标签颜色 | _string_ | _ |
| text-color | 文本颜色，优先级高于`color`属性 | _string_ | _ |

### 插槽
| 名称 | 说明 | 参数 |
| ---- | ---- | ----|
| default | 默认插槽 | _ |
| left | 插入至标签的左侧 | _ |
| right | 插入至标签的右侧 | _ |

### 事件

| 事件名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| close | 点击关闭按钮时触发，只有在显示关闭按钮的时候才能使用| _ |



