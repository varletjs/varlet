# 评分

### 引入

```js
import { createApp } from 'vue'
import { Rate } from '@varlet/ui'

createApp().use(Rate)
```

### 基础评分

默认显示样式

```html
<var-rate v-model="score"/>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const score = ref(3)

    return {
      score
    }
  }
}
```

### 自定义评分总数

通过设置`count`属性自定义评分总数

```html
<var-rate v-model="score" :count="8"/>
```

### 自定义评分图标颜色

通过设置`color`、`empty-color`属性来自定义选中是的颜色和未选中时的颜色

```html
<var-rate v-model="score" color="#9c27b0" empty-color="#d199da"/>
<var-rate v-model="score" color="#e91e63" empty-color="#f48fb1"/>
<var-rate v-model="score" color="#4caf50" empty-color="#a5d6a7"/>
<var-rate v-model="score" color="#3f51b5" empty-color="#9fa8da"/>
```

### 自定义评分图标样式

通过设置`icon`、`empty-icon`属性来自定义选中和未选的图标样式

```html
<var-rate v-model="score" icon="heart" empty-icon="heart-outline" color="red"></var-rate>
```

### 自定义评分图标尺寸

通过设置`size`属性来自定义评分图标的大小

```html
<var-rate v-model="score" :size="14"/>
<var-rate v-model="score" :size="16"/>
<var-rate v-model="score" :size="18"/>
<var-rate v-model="score" :size="20"/>
```

### 自定义图标间隔

通过设置`paddingRight`属性来自定义评分之间的间隔

```html
<var-rate v-model="score" :margin-right="2"/>
<var-rate v-model="score"/>
<var-rate v-model="score" :margin-right="6"/>
<var-rate v-model="score" :margin-right="8"/>
```

### 允许半图标

通过设置`half`属性允许评分半选，使用`half-icon`自定义图标半选时的样式

```html
<var-rate v-model="score" :count="8" half/>
<var-rate v-model="score" :count="8" icon="heart" half-icon="heart-half-full" empty-icon="heart-outline" color="red" half></var-rate>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const score = ref(3.5)

    return { score }
  }
}
```

### 禁用评分

通过设置`disabled`属性让评分处于禁止点击状态，使用`disabled-color`自定义禁用时图标的颜色

```html
<var-rate v-model="score" disabled disabled-color="#bbbbbb"/>
```

### 只读评分

通过设置`readonly`属性让评分处于只读状态

```html
<var-rate v-model="score" readonly/>
```

### 使用水波纹

通过设置`ripple`属性让评分时出现水波纹样式

```html
<var-rate v-model="score" ripple/>
```

### 监听change事件

通过调用`change`事件完成其他交互逻辑

```html
<var-rate v-model="score" @change="handleChange"/>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const handleChange = (score) => {
      Snackbar({
        content: `click ${score}`,
        position: 'top'
      })
    }

    return {
      handleChange
    }
  }
}
```

### 字段校验

```html
通过传入一个校验器数组可以对值进行校验，校验器返回true则为校验通过。
以外的值将转换为文本作为用户提示。
```

```html
<var-rate :rules="[(v) => v >= 3 || '必须大于2']" v-model='score' />
```

## API

### 属性

|参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| `v-model` | 当前分数 | _number_ | _ |
| `count` | 评分总数 | _number_ | `5` |
| `color` | 选中时图标的颜色 | _string_ | `#ff9800`|
| `icon` | 选中整个图标时的图标样式 | _string_ | `star`|
| `empty-color` | 未选中时图标的颜色 | _string_ | `#bdbdbd`|
| `empty-icon` | 未选中时图标的样式 | _string_ | `star-outline`|
| `size` | 图标大小，默认单位为`px` | _number_,_string_ | `20`|
| `margin-right` | 图标间隔，默认单位为`px` | _number_,_string_ | `4`|
| `half` | 是否允许半选 | _boolean_ | `false`|
| `half-icon` | 半选时图标的样式，只有在`half`为`true`时才有效| _string_ | `star-half-full`|
| `disabled` | 是否禁止评分 | _boolean_ | `false`|
| `disabled-color` | 禁止评分时图标的颜色，只有在`disabled`为`true`时才有效，优先级高于`color`、`empty-color`| _string_ | `#bdbdbd`|
| `readonly` | 是否使用评分只读 | _boolean_ | `false`|
| `ripple` | 是否使用水波纹 | _boolean_ | `false`|
| `rules` | 验证规则，返回`true`表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(v: string | number) => any>_ | `-` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| change | 评分改变时触发| 当前所点击所对应的分数 |

### 主题变量
#### 以下less变量可通过构建时进行变量覆盖从而修改主题样式

### Rate Variables

| 变量名 | 默认值 |
| --- | --- |
| `@rate-disabled-color` | `#aaa` |
| `@rate-error-color` | `@color-danger` |
| `@rate-action-padding` | `4px` |

