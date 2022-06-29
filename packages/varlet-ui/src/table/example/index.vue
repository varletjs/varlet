<script setup>
import VarTable from '..'
import VarPagination from '../../pagination'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { ref } from 'vue'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

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

const list = ref(gen(1, 10))

const get = (current, size) => {
  list.value = gen(current, size)
}

watchLang(use)
watchDarkMode(dark)
</script>

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

  <app-type>{{ pack.slot }}</app-type>
  <var-table>
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
        <var-pagination :current="1" :total="100" :size-option="[5, 10]" @change="get" />
      </div>
    </template>
  </var-table>
</template>

<style lang="less" scoped>
.footer {
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
  align-items: center;
  height: 48px;
}
</style>
