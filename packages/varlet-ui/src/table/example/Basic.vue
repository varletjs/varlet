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
      <tr>
        <td>{{ pack.jerry }}</td>
        <td>124</td>
        <td>38</td>
      </tr>
      <tr>
        <td>{{ pack.tom }}</td>
        <td>100</td>
        <td>135</td>
      </tr>
    </tbody>
  </var-table>
</template>

<script>
import VarTable from '..'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'BasicExample',
  components: {
    VarTable,
  },
  setup() {
    watchLang(use, 'pc')

    return {
      pack,
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
}
</style>
