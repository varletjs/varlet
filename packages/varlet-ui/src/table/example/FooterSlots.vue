<template>
  <var-table class="reset">
    <thead>
      <tr>
        <th>{{ pack.name }}</th>
        <th>{{ pack.math }}</th>
        <th>{{ pack.english }}</th>
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
        <var-pagination :simple="false" :current="1" :total="100" :size-option="[5, 10]" @change="get" />
      </div>
    </template>
  </var-table>
</template>

<script>
import VarTable from '..'
import VarPagination from '../../pagination'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { use, pack } from './locale'
import { gen } from './index'
import { ref } from 'vue'

export default {
  name: 'BasicExample',
  components: {
    VarTable,
    VarPagination,
  },
  setup() {
    const list = ref(gen(1, 10))

    const get = (current, size) => {
      list.value = gen(current, size)
    }

    watchLang(use, 'pc')
    watchDarkMode(dark)

    return {
      pack,
      get,
      list,
    }
  },
}
</script>

<style lang="less">
.reset {
  table {
    margin: 0;
    color: inherit;
    font-size: inherit;
    border-radius: 0;
    box-shadow: none;

    td {
      color: inherit;
    }
  }

  ul {
    padding: 0;
    box-shadow: none;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    border-radius: 0;
    background: inherit;
  }
}
</style>

<style lang="less" scoped>
.footer {
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
  align-items: center;
  height: 60px;
}
</style>
