<script setup>
import { watchLang, onThemeChange } from '@varlet/cli/client'
import { use, t } from './locale'

watchLang(use, 'pc')
onThemeChange()
</script>

<template>
  <var-table class="reset">
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
</template>

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
