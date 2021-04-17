<template>
  <var-tabs v-model:active="current" sticky offset-top="50px" style="margin-bottom: 10px">
    <var-tab>{{ pack.basicUsage }}</var-tab>
    <var-tab>{{ pack.loadFail }}</var-tab>
    <var-tab>{{ pack.tipText }}</var-tab>
  </var-tabs>

  <var-tabs-items v-model:active="current">
    <var-tab-item>
      <var-list :finished="finished" v-model:loading="loading" @load="load">
        <var-cell :key="d" v-for="d in list"> {{ pack.listItem }}: {{ d }} </var-cell>
      </var-list>
    </var-tab-item>
    <var-tab-item>
      <var-list :finished="finished2" v-model:error="error" v-model:loading="loading2" @load="load2">
        <var-cell :key="d" v-for="d in list2"> {{ pack.listItem }}: {{ d }} </var-cell>
      </var-list>
    </var-tab-item>
    <var-tab-item>
      <var-list
        :loading-text="pack.loadingText"
        :finished-text="pack.finishedText"
        :error-text="pack.errorText"
        :finished="finished3"
        v-model:loading="loading3"
        @load="load3"
      >
        <var-cell :key="d" v-for="d in list3"> {{ pack.listItem }}: {{ d }} </var-cell>
      </var-list>
    </var-tab-item>
  </var-tabs-items>
</template>

<script>
import List from '..'
import Cell from '../../cell'
import Tabs from '../../tabs'
import Tab from '../../tab'
import TabsItems from '../../tabs-items'
import TabItem from '../../tab-item'
import { ref, reactive } from 'vue'
import { watchLang } from '../../utils/components'
import { use, pack } from './locale'

export default {
  name: 'ListExample',
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [TabsItems.name]: TabsItems,
    [TabItem.name]: TabItem,
  },
  setup() {
    const loading = ref(false)
    const loading2 = ref(false)
    const loading3 = ref(false)
    const finished = ref(false)
    const finished2 = ref(false)
    const finished3 = ref(false)
    const error = ref(false)
    const list = reactive([])
    const list2 = reactive([])
    const list3 = reactive([])

    const current = ref(0)

    watchLang(use)

    return {
      pack,
      current,
      error,
      list,
      list2,
      list3,
      loading,
      loading2,
      loading3,
      finished,
      finished2,
      finished3,
      load() {
        setTimeout(() => {
          for (let i = 0; i < 20; i++) {
            list.push(list.length + 1)
          }

          loading.value = false

          if (list.length >= 60) {
            finished.value = true
          }
        }, 1000)
      },
      load2() {
        setTimeout(() => {
          if (list2.length === 40) {
            error.value = true
            loading2.value = false
            return
          }

          for (let i = 0; i < 20; i++) {
            list2.push(list2.length + 1)
          }

          loading2.value = false
        }, 1000)
      },
      load3() {
        setTimeout(() => {
          for (let i = 0; i < 20; i++) {
            list3.push(list3.length + 1)
          }

          loading3.value = false

          if (list3.length >= 60) {
            finished3.value = true
          }
        }, 1000)
      },
    }
  },
}
</script>
