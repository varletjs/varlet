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

### Fixed Table Headers

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
  <var-table scroller-height="400px">
    <thead style="position: sticky; top: 0">
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
| `full-width` | The width of the `table` (including the scrollable part) | _string \| number_ | `100%` |
| `elevation` | Elevation level, options `true` `false` and level of `0-24` | _string \| number \| boolean_|   `true`    |
| `scroller-height` ***3.2.0*** | The height of the scroll container, which can be used to implement functions such as longitudinal partial scrolling and fixed table headers. | _string \| number_ | `-` |

### Slots

| Name | Description | SlotProps |
| ----- | -------------- | -------- |
| `default` | Content of `table` | `-` |
| `footer` | Footer of `table` | `-` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--table-background` | `#fff` |
| `--table-border-radius` | `2px` |
| `--table-thead-border-bottom` | `thin solid var(--color-outline)` |
| `--table-thead-th-text-color` | `rgba(0, 0, 0, 0.6)` |
| `--table-thead-th-text-align` | `left` |
| `--table-thead-th-font-size` | `14px` |
| `--table-thead-tr-border-bottom` | `thin solid var(--color-outline)` |
| `--table-tbody-tr-hover-background` | `#eee` |
| `--table-tbody-tr-border-bottom` | `thin solid var(--color-outline)` |
| `--table-tbody-td-text-color` | `#555` |
| `--table-tbody-td-font-size` | `16px` |
| `--table-tbody-td-text-align` | `left`|
| `--table-row-height` | `46px` |
| `--table-row-padding` | `0 16px` |
| `--table-footer-border-top` | `thin solid var(--color-outline)` |
