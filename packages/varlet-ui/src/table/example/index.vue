<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-table>
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
import Table from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { reactive } from 'vue'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'TableExample',
  components: {
    [Table.name]: Table,
    AppType,
  },
  setup() {
    const data = reactive([
      {
        name: pack,
        nameValue: 'tom',
        math: 100,
        english: 135,
      },
      {
        name: pack,
        nameValue: 'jerry',
        math: 124,
        english: 38,
      },
    ])

    watchLang(use)

    return {
      pack,
      data,
    }
  },
}
</script>

<style lang="less">
.footer-container {
  display: flex;
  height: 54px;
  padding: 0 24px;
  align-items: center;
  justify-content: flex-end;
}
</style>
