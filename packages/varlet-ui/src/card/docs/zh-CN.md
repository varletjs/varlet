# 卡片

### 引入

```js
import { createApp } from 'vue'
import { Card } from '@varlet/ui'

createApp().use(Card)
```

### 基本使用

```html
<var-card
  title="风景"
  description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
/>
```

### 显示副标题

```html
<var-card
  title="风景"
  subtitle="公园里的风景"
  description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
/>
```

### 显示图片

```html
<var-card title="风景" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
```

### 使用插槽

```html
<var-card
  title="风景"
  subtitle="公园里的风景"
  description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
  src="https://varlet.gitee.io/varlet-ui/cat.jpg"
>
  <template #extra>
    <var-button type="primary" style="margin-right: 10px">添加按钮</var-button>
    <var-button type="warning">添加按钮</var-button>
  </template>
</var-card>
```

### 水波效果

```html
<var-card title="风景" ripple />
```

## API

### 属性

| 参数          | 说明                                                            | 类型               | 默认值  |
| ------------- | --------------------------------------------------------------- | ------------------ | ------- |
| `title`       | 卡片标题                                                        | _string_           | `-`     |
| `subtitle`    | 卡片副标题                                                      | _string_           | `-`     |
| `description` | 卡片描述                                                        | _string_           | `-`     |
| `elevation`   | 卡片阴影程度等级                                                | _string \| number_ | `2`     |
| `src`         | 图片地址                                                        | _string_           | `-`     |
| `fit`         | 填充模式, 可选值为 `fill` `contain` `cover` `none` `scale-down` | _string_           | `cover` |
| `alt`         | 替代文本                                                        | _string_           | `-`     |
| `height`      | 图片高度                                                        | _string \| number_ | `-`     |
| `ripple`      | 是否开启水波                                                    | _boolean_          | `false` |

### 插槽

| 插槽名        | 说明           | 参数 |
| ------------- | -------------- | ---- |
| `image`       | 自定义图片     | `-`  |
| `title`       | 自定义标题     | `-`  |
| `subtitle`    | 自定义副标题   | `-`  |
| `description` | 自定义描述     | `-`  |
| `extra`       | 自定义底部内容 | `-`  |

### 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `click` | 点击卡片时触发 | `event: Event` |
