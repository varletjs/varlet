# Table

### Intro

A table displays rows of data.

### Install

```js
import { createApp } from 'vue'
import { Table } from '@varlet/ui'

createApp().use(Table)
```

### Basic Usage

```html
<var-table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Mathematics</th>
      <th>English</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jerry</td>
      <td>124</td>
      <td>38</td>
    </tr> 
    <tr>
      <td>Tom</td>
      <td>100</td>
      <td>135</td>
    </tr>
  </tbody>
</var-table>
```

### Slots

```html
<var-table>
  <thead>
    <tr>
      <th style="padding: 16px 8px">
        <var-checkbox :model-value="isAllCheck" @change="handleAllCheckChange" />
      </th>
      <th>Name</th>
      <th @click="sortBy(data, 'math')">
        <span style="display: inline-flex">
          Mathematics
          <var-icon :name="getIconName('math')" />
        </span>
      </th>
      <th @click="sortBy(data, 'english')">
        <span style="display: inline-flex">
          English
          <var-icon :name="getIconName('english')" />
        </span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in data" :key="item.name">
      <td style="padding: 16px 8px">
        <var-checkbox v-model="item.isCheck" />
      </td>
      <td>{{ item.name }}</td>
      <td>{{ item.math }}</td>
      <td>{{ item.english }}</td>
    </tr>
    <tr>
      <td></td>
      <td>Total</td>
      <td>{{ getTotal(data, 'math') }}</td>
      <td>{{ getTotal(data, 'english') }}</td>
    </tr>
  </tbody>
  
  <template #footer>
    <div class="footer-container">
      <var-button type="primary">footer slot</var-button>
    </div>
  </template>
</var-table>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const data = reactive([
      {
        name: 'Jerry',
        math: 100,
        english: 135,
        isCheck: false
      },
      {
        name: 'Tom',
        math: 124,
        english: 38,
        isCheck: false
      }
    ])
    const currentSort = ref(['', ''])

    const isAllCheck = computed(() => {
      const checkedCount = data.reduce((count, item) => (item.isCheck ? count + 1 : count), 0)
      return data.length === checkedCount
    })

    const getTotal = (list, key) => list.reduce((total, item) => item[key] + total, 0)

    const sortBy = (list, key) => {
      const sortMethods = {
        asc: (a, b) => a[key] - b[key],
        desc: (a, b) => b[key] - a[key]
      }
      const [currentSortKey, currentSortValue] = currentSort.value
      let sortMethod

      if (currentSortKey !== key) {
        sortMethod = 'asc'
      }

      if (currentSortKey === key) {
        sortMethod = currentSortValue === 'asc' ? 'desc' : 'asc'
      }

      list.sort(sortMethods[sortMethod])

      currentSort.value = [key, sortMethod]
    }

    const getIconName = (key) => {
      const [currentSortKey, currentSortValue] = currentSort.value

      if (currentSortKey !== key) {
        return 'dots-vertical'
      }

      return currentSortValue === 'asc' ? 'chevron-up' : 'chevron-down'
    }
    
    const handleAllCheckChange = (value) => {
      const check = (item) => {
        item.isCheck = true
      }
      const unCheck = (item) => {
        item.isCheck = false
      }
      data.forEach(value ? check : unCheck)
    }
    
    return {
      data,
      isAllCheck,
      sortBy,
      getTotal,
      getIconName,
      handleAllCheckChange
    }
  }
}
```

```css
.footer-container {
  display: flex;
  height: 54px;
  padding: 0 24px;
  align-items: center;
  justify-content: flex-end;
}
```
## API

### Props

| Prop | Description | Type | Default |
| ----- | -------------- | -------- | ---------- |
| `fullWidth` | Width of `table`	| _string \| number_ | `100%` |

### Slots

| Slot | Description | Arguments |
| ----- | -------------- | -------- |
| `default` | Content of `table` | `-` |
| `footer` | Footer of `table` | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable | Default |
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
