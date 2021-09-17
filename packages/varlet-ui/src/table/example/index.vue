<template>
  <app-type>基本使用</app-type>
  <var-table>
    <thead>
      <tr>
        <th>姓名</th>
        <th>数学</th>
        <th>英语</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.math }}</td>
        <td>{{ item.english }}</td>
      </tr>
    </tbody>
  </var-table>

  <app-type>表格全宽</app-type>
  <var-table :full-width="960">
    <thead>
      <tr>
        <th>姓名</th>
        <th>数学</th>
        <th>英语</th>
        <th>姓名</th>
        <th>数学</th>
        <th>英语</th>
        <th>姓名</th>
        <th>数学</th>
        <th>英语</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.math }}</td>
        <td>{{ item.english }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.math }}</td>
        <td>{{ item.english }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.math }}</td>
        <td>{{ item.english }}</td>
      </tr>
    </tbody>
  </var-table>

  <app-type>求和</app-type>
  <var-table>
    <thead>
      <tr>
        <th>姓名</th>
        <th>数学</th>
        <th>英语</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.math }}</td>
        <td>{{ item.english }}</td>
      </tr>
      <tr>
        <td>总分</td>
        <td>{{ getTotal(data, 'math') }}</td>
        <td>{{ getTotal(data, 'english') }}</td>
      </tr>
    </tbody>
  </var-table>

  <app-type>选择行</app-type>
  <var-table>
    <thead>
      <tr>
        <th>
          <var-checkbox :model-value="isAllCheck" @change="handleAllCheckChange" />
        </th>
        <th>姓名</th>
        <th>数学</th>
        <th>英语</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.name">
        <td style="width: 36px">
          <var-checkbox v-model="item.isCheck" />
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.math }}</td>
        <td>{{ item.english }}</td>
      </tr>
    </tbody>
  </var-table>

  <app-type>排序</app-type>
  <var-table>
    <thead>
      <tr>
        <th>姓名</th>
        <th @click="sortBy(data2, 'math')">
          数学
          <var-icon :name="getIconName('math')" />
        </th>
        <th @click="sortBy(data2, 'english')">
          英语
          <var-icon :name="getIconName('english')" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data2" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.math }}</td>
        <td>{{ item.english }}</td>
      </tr>
    </tbody>
  </var-table>

  <app-type>插入footer</app-type>
  <var-table>
    <thead>
      <tr>
        <th>姓名</th>
        <th>数学</th>
        <th>英语</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.math }}</td>
        <td>{{ item.english }}</td>
      </tr>
    </tbody>

    <template #footer>
      <div class="footer-container">this is footer slot</div>
    </template>
  </var-table>
</template>

<script>
import Table from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Skeleton from '../../skeleton'
import Checkbox from '../../checkbox'
import { reactive, computed, ref } from 'vue'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'TableExample',
  components: {
    [Table.name]: Table,
    [Skeleton.name]: Skeleton,
    [Checkbox.name]: Checkbox,
    AppType,
  },
  setup() {
    const data = reactive([
      {
        name: '耗子君',
        math: 124,
        english: 38,
        isCheck: false,
      },
      {
        name: '火猫桑',
        math: 100,
        english: 135,
        isCheck: false,
      },
    ])
    const data2 = reactive([
      {
        name: '火猫桑',
        math: 100,
        english: 135,
        isCheck: false,
      },
      {
        name: '耗子君',
        math: 124,
        english: 38,
        isCheck: false,
      },
    ])
    const data3 = reactive([
      {
        name: '火猫桑',
        math: 100,
        english: 135,
      },
      {
        name: '耗子君',
        math: 124,
        english: 38,
      },
      {
        name: '康康酱',
        math: 90,
        english: 90,
      },
      {
        name: '王浩桑',
        math: 120,
        english: 140,
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
      currentSort,
      isAllCheck,
      pack,
      data,
      data2,
      data3,
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
