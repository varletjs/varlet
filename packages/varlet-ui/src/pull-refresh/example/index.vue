<template>
	<var-pull-refresh @refresh="refresh" v-model="isRefresh" success-duration="2000">
		<ul class="pull-refresh__example">
			<li v-for="(item, index) in data" :key="index">{{ item + ' ' + (index + 1) }}</li>
		</ul>
	</var-pull-refresh>
</template>

<script>
import { defineComponent, ref } from 'vue'
import PullRefresh from '..'

const data1 = Array(10).fill('List Item')
const data2 = Array(10).fill('This is new List Item')

export default defineComponent({
  name: 'PullRefreshExample',
  components: {
    [PullRefresh.name]: PullRefresh,
  },
  setup() {
    const isRefresh = ref(true)
    const data = ref(data1)

    const refresh = () => {
      isRefresh.value = true
      setTimeout(() => {
        data.value = data.value[0] === 'List Item' ? data2 : data1
        isRefresh.value = false
      }, 2000)
    }

    return {
      refresh,
      isRefresh,
      data,
    }
  },
})
</script>

<style lang="less" scoped>
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
