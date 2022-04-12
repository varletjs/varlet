<template>
  <var-tabs v-model:active="current" sticky offset-top="54px" style="margin-bottom: 10px">
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

<script setup>
import VarList from '..'
import VarCell from '../../cell'
import VarTabs from '../../tabs'
import VarTab from '../../tab'
import VarTabsItems from '../../tabs-items'
import VarTabItem from '../../tab-item'
import dark from '../../themes/dark'
import { reactive, toRefs } from 'vue'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

const values = reactive({
  loading: false,
  loading2: false,
  loading3: false,
  finished: false,
  finished2: false,
  finished3: false,
  error: false,
  list: [],
  list2: [],
  list3: [],
  current: 0,
})

const { list, list2, list3, loading, loading2, loading3, finished, finished2, finished3, error, current } =
  toRefs(values)

watchLang(use)
watchDarkMode(dark)

const load3 = () => {
  if (values.current !== 2) {
    values.loading3 = false
    return
  }

  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      values.list3.push(values.list3.length + 1)
    }

    values.loading3 = false

    if (values.list3.length >= 60) {
      values.finished3 = true
    }
  }, 1000)
}

const load = () => {
  if (values.current !== 0) {
    values.loading = false
    return
  }

  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      values.list.push(values.list.length + 1)
    }

    values.loading = false

    if (values.list.length >= 60) {
      values.finished = true
    }
  }, 1000)
}

const load2 = () => {
  if (values.current !== 1) {
    values.loading2 = false
    return
  }

  setTimeout(() => {
    if (values.list2.length === 40) {
      values.error = true
      values.loading2 = false
      return
    }

    for (let i = 0; i < 20; i++) {
      values.list2.push(values.list2.length + 1)
    }

    values.loading2 = false
  }, 1000)
}
</script>
