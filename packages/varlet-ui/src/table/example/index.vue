<script setup>
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

const list = ref(gen(1, 10))
const list2 = ref(gen(1, 10))

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

function get2(current, size) {
  list2.value = gen(current, size)
}

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-table>
    <thead>
      <tr>
        <th>{{ t('name') }}</th>
        <th>{{ t('math') }}</th>
        <th>{{ t('english') }}</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>{{ t('jerry') }}</td>
        <td>124</td>
        <td>38</td>
      </tr>
      <tr>
        <td>{{ t('tom') }}</td>
        <td>100</td>
        <td>135</td>
      </tr>
    </tbody>
  </var-table>

  <app-type>{{ t('slot') }}</app-type>
  <var-table>
    <thead>
      <tr>
        <th>{{ t('name') }}</th>
        <th>{{ t('math') }}</th>
        <th>{{ t('english') }}</th>
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

  <app-type>{{ t('fixedHeader') }}</app-type>
  <var-table scroller-height="400px">
    <thead style="position: sticky; top: 0">
      <tr>
        <th>{{ t('name') }}</th>
        <th>{{ t('math') }}</th>
        <th>{{ t('english') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="l in list2" :key="l.name">
        <td>{{ l.name }}</td>
        <td>{{ l.math }}</td>
        <td>{{ l.english }}</td>
      </tr>
    </tbody>

    <template #footer>
      <div class="footer">
        <var-pagination :current="1" :total="100" :size-option="[5, 10]" @change="get2" />
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
