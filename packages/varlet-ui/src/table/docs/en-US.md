# Table

### Intro

A minimal table, when you need to display some data in the form of a table, you may use it.

### Basic Usage

```html
<template>
  <var-table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Math</th>
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
</template>
```

### Footer Slots

You can insert something in the tail slot, the most common is to insert a `Pagination`.

```html
<script setup>
import { ref } from 'vue'

const list = ref(gen(1, 10))

function gen(current, size) {
  return Array.from({ length: size }).map((_, index) => {
    const id = (current - 1) * size + index + 1

    return {
      name: `Name ${id}`,
      math: id,
      english: id,
    }
  })
}

function get(current, size) {
  list.value = gen(current, size)
}
</script>

<template>
  <var-table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Math</th>
        <th>English</th>
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
      <div class="table-example-footer">
        <!-- Paging in the mobile preview mode uses the simple true mode, which is more friendly to small screen devices -->
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
</template>

<style>
.table-example-footer  {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  padding: 0 16px;
}
</style>
```

## API

### Props

| Prop         | Description | Type | Default |
|--------------| -------------- | -------- | ---------- |
| `full-width` | The width of the `table` (including the scrollable part)	| _string \| number_ | `100%` |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Content of `table` | `-` |
| `footer` | Footer of `table` | `-` |

### Style Variables
Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
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
