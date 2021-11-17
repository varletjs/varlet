<template>
  <var-pull-refresh @refresh="refresh" v-model="isRefresh" success-duration="2000">
    <var-cell v-for="(item, index) in data" :key="index" border>{{ item + ' ' + (index + 1) }}</var-cell>
  </var-pull-refresh>
</template>

<script>
import { onMounted, ref, onBeforeUnmount } from 'vue'
import VarPullRefresh from '..'
import VarCell from '../../cell'
import { watchDarkMode } from '../../utils/components'

const data1 = Array(10).fill('List Item')
const data2 = Array(10).fill('This is new List Item')

export default {
  name: 'PullRefreshExample',
  components: {
    VarPullRefresh,
    VarCell,
  },
  setup() {
    const isRefresh = ref(false)
    const data = ref(data1)

    const refresh = () => {
      setTimeout(() => {
        data.value = data.value[0] === 'List Item' ? data2 : data1
        isRefresh.value = false
      }, 2000)
    }

    const prevent = (event) => {
      event.preventDefault()
    }

    onMounted(() => {
      document.body.addEventListener('touchmove', prevent, { passive: false })
    })

    onBeforeUnmount(() => {
      document.body.removeEventListener('touchmove', prevent)
    })

    watchDarkMode()

    return {
      refresh,
      isRefresh,
      data,
    }
  },
}
</script>

<style lang="less" scoped>
.var-pull-refresh {
  margin-top: 18px;
}

.pull-refresh__example {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    min-height: 40px;
    line-height: 40px;
    padding: 0 16px;
    border-bottom: 1px solid #ccc;

    &:first-child {
      border-top: 1px solid #ccc;
    }
  }
}
</style>
