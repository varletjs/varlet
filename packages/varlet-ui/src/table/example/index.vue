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
        <th>
          <var-checkbox :model-value="isAllCheck" @change="handleAllCheckChange" />
        </th>
        <th>{{ pack.name }}</th>
        <th @click="sortBy(data, 'math')">
          <span style="display: inline-flex">
            {{ pack.math }}
            <var-icon :name="getIconName('math')" />
          </span>
        </th>
        <th @click="sortBy(data, 'english')">
          <span style="display: inline-flex">
            {{ pack.english }}
            <var-icon :name="getIconName('english')" />
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.nameValue">
        <td>
          <var-checkbox v-model="item.isCheck" />
        </td>
        <td>{{ item.name[item.nameValue] }}</td>
        <td>{{ item.math }}</td>
        <td>{{ item.english }}</td>
      </tr>
      <tr>
        <td></td>
        <td>{{ pack.total }}</td>
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
</template>

<script>
import Table from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Checkbox from '../../checkbox'
import Button from '../../button'
import Icon from '../../icon'
import { reactive, computed, ref, watch } from 'vue'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'TableExample',
  components: {
    [Table.name]: Table,
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    [Icon.name]: Icon,
    AppType,
  },
  setup() {
    const data = reactive([
      {
        name: pack,
        nameValue: 'tom',
        math: 100,
        english: 135,
        isCheck: false,
      },
      {
        name: pack,
        nameValue: 'jerry',
        math: 124,
        english: 38,
        isCheck: false,
      },
    ])
    const currentSort = ref(['', ''])
    const isAllCheck = computed(() => {
      const checkedCount = data.reduce((count, item) => (item.isCheck ? count + 1 : count), 0)
      return data.length === checkedCount
    })
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

    const getTotal = (list, key) => list.reduce((total, item) => item[key] + total, 0)

    const sortBy = (list, key) => {
      const sortMethods = {
        asc: (a, b) => a[key] - b[key],
        desc: (a, b) => b[key] - a[key],
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

    watchLang(use)

    return {
      isAllCheck,
      pack,
      data,
      sortBy,
      handleAllCheckChange,
      getTotal,
      getIconName,
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
