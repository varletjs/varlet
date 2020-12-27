<template>
	<var-pull-refresh @refresh="refresh" v-model="isRefresh" success-duration="0">
		<div>
			<ul>
				<li v-for="(item, index) in data" :key="index">{{ item }}</li>
			</ul>
		</div>
	</var-pull-refresh>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PullRefresh from '..'

export default defineComponent({
	name: 'PullRefreshExample',
	components: {
		[PullRefresh.name]: PullRefresh,
	},
	setup() {
		const isRefresh = ref(true)
		const data1 = Array(10).fill(123)
		const data2 = Array(10).fill(456)
		const data = ref(data1)
		const refresh = () => {
			isRefresh.value = true
			setTimeout(() => {
				data.value = data.value[0] === 123 ? data2 : data1
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

<style scoped>
.example {
	background: antiquewhite;
}
</style>
