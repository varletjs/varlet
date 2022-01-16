# 表格

### 介绍

一个极简的表格，当你需要以表格的形式展示一些数据的时候，可能会用的上它。

### 引入

```js
import { createApp } from 'vue'
import { Table } from '@varlet/ui'

createApp().use(Table)
```

### 基本使用

```vue
import BasicExample from '../example/Basic.vue'
```

```html
<var-table>
  <thead>
    <tr>
      <th>姓名</th>
      <th>数学</th>
      <th>英语</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>耗子君</td>
      <td>124</td>
      <td>38</td>
    </tr>
    <tr>
      <td>火猫桑</td>
      <td>100</td>
      <td>135</td>
    </tr>
  </tbody>
</var-table>
```

### 尾部插槽

可以在尾部插槽中插入一些东西，最常见的是插入分页组件。

```vue
import FooterSlots from '../example/FooterSlots.vue'
```

```html
<var-table>
  <thead>
    <tr>
      <th>姓名</th>
      <th>数学</th>
      <th>英语</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="l in list" :key="l.name">
      <td>{{ l.name }}</td>
      <td>{{ l.math }}</td>
      <td>{{ l.english }}</td>
    </tr>
  </tbody>

  <template #footer>
    <div class="footer">
      <!-- 手机预览模式下分页使用了simple为true的模式，对小屏设备更友好 -->
      <var-pagination
        :simple="false"
        :current="1"
        :total="100"
        :size-option="[5, 10]"
        @change="get"
      />
    </div>
  </template>
</var-table>
```

```js
const gen = (current, size) => {
  return Array.from({ length: size }).map((_, index) => {
    const id = (current - 1) * size + index + 1

    return {
      name: `Name ${id}`,
      math: id,
      english: id,
    }
  })
}

export default {
  setup() {
    const list = ref(gen(1, 10))

    const get = (current, size) => {
      list.value = gen(current, size)
    }

    return {
      list,
      get
    }
  }
}
```

```less
.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  padding: 0 16px;
}
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `full-Width` | `table` 的宽度(包含可滚动部分)	| _string \| number_ | `100%` |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | Table的内容 | `-` |
| `footer` | Table尾部内容 | `-` |

### 样式变量
以下为组件使用的 css 变量,可以使用 [StyleProvider组件](#/zh-CN/style-provider)进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--table-background` | `#fff` |
| `--table-border-radius` | `2px` |
| `--table-thead-border-bottom` | `thin solid rgba(0, 0, 0, 0.12)` |
| `--table-thead-th-text-color` | `rgba(0, 0, 0, 0.6)` |
| `--table-thead-th-font-size` | `14px` |
| `--table-thead-tr-border-bottom` | `thin solid rgba(0, 0, 0, 0.12)` |
| `--table-tbody-tr-hover-background` | `#eee` |
| `--table-tbody-tr-border-bottom` | `thin solid rgba(0, 0, 0, 0.12)` |
| `--table-tbody-td-font-size` | `16px` |
| `--table-row-height` | `46px` |
| `--table-row-padding` | `0 16px` |
| `--table-footer-border-top` | `thin solid rgba(0, 0, 0, 0.12)` |
