# 表格

### 介绍

展示行列数据。

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

可以在尾部插槽中插入一些东西，最常见的是加入分页组件。

```vue
import FooterSlots from '../example/FooterSlots.vue'
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `fullWidth` | `table` 的宽度	| _string \| number_ | `100%` |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | Table的内容 | `-` |
| `footer` | Table底部内容 | `-` |

### 样式变量
以下为组件使用的css变量,可以使用[StyleProvider组件](#/zh-CN/style-provider)进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--table-background` | `@table-background` | 
| `--table-border-radius` | `@table-border-radius` | 
| `--table-thead-border-bottom` | `@table-thead-border-bottom` | 
| `--table-thead-th-text-color` | `@table-thead-th-text-color` | 
| `--table-thead-th-font-size` | `@table-thead-th-font-size` | 
| `--table-thead-tr-border-bottom` | `@table-thead-tr-border-bottom` | 
| `--table-tbody-tr-hover-background` | `@table-tbody-tr-hover-background` | 
| `--table-tbody-tr-border-bottom` | `@table-tbody-tr-border-bottom` | 
| `--table-footer-min-height` | `@table-footer-min-height` | 
| `--table-footer-border-top` | `@table-footer-border-top` | 
