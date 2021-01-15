<template>
  <app-type>正常加载</app-type>
  <var-pull-refresh
    v-model="refreshing"
    @refresh="refresh"
  >
    <var-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="暂无更多"
      @load="load"
    >
      <div class="list">
        <div v-for="d in list" :key="d" class="list-item">{{ d }}</div>
      </div>
    </var-list>
  </var-pull-refresh>
<!--  <app-type>出现异常</app-type>-->
<!--  <var-list-->
<!--    v-model:loading="loading"-->
<!--    v-model:error="error"-->
<!--    :finished="finished"-->
<!--    error-text="请求异常,点击重试"-->
<!--    finished-text="暂无更多"-->
<!--    @load="load2"-->
<!--  >-->
<!--    <div class="list">-->
<!--      <div v-for="d in list" :key="d" class="list-item">{{ d }}</div>-->
<!--    </div>-->
<!--  </var-list>-->

<!--  <app-type>局部滚动</app-type>-->
<!--  <div class="scroller">-->
<!--    <var-list-->
<!--      v-model:loading="loading"-->
<!--      :finished="finished"-->
<!--      finished-text="暂无更多"-->
<!--      @load="load"-->
<!--    >-->
<!--      <div class="list">-->
<!--        <div v-for="d in list" :key="d" class="list-item">{{ d }}</div>-->
<!--      </div>-->
<!--    </var-list>-->
<!--  </div>-->
</template>

<script lang="ts">
import { defineComponent, ref, Ref, reactive } from 'vue'
import PullRefresh from '../../pull-refresh'
import List from '..'

export default defineComponent({
  name: 'ListExample',
  components: {
    [List.name]: List,
    [PullRefresh.name]: PullRefresh
  },
  setup() {
    const loading: Ref<boolean> = ref(false)
    const refreshing: Ref<boolean> = ref(false)
    const finished: Ref<boolean> = ref(false)

    const error: Ref<boolean> = ref(false)
    const list: number[] = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    return {
      refreshing,
      list,
      error,
      loading,
      finished,
      refresh() {
        refreshing.value = true
        setTimeout(() => {
          refreshing.value = false
        }, 1000)
      },
      load() {
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            list.push(list.length + 1)
          }
          loading.value = false

          if (list.length >= 30) {
            finished.value = true
          }
        }, 1000)
      },
      load2() {
        console.log('load2')

        setTimeout(() => {
          loading.value = false
          error.value = true
        }, 1000)
      }
    }
  }
})
</script>

<style lang="less" scoped>
.scroller {
  width: 100%;
  height: 50vh;
  overflow: auto;
  background: lightskyblue;
}

.list {
  width: 100%;

  .list-item {
    width: 100%;
    padding: 20px;
    text-align: center;
  }
}
</style>
