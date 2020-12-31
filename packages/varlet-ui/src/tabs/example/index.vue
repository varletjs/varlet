<template>
	<div class="example">
		<var-tabs v-model:active="active" @change="handleChange">
			<var-tab v-for="i in list" :key="i">{{ i }}</var-tab>
		</var-tabs>

		<var-tabs v-model:active="activeName" @change="handleChange">
			<var-tab v-for="i in list" :key="i" :name="i">{{ i }}</var-tab>
		</var-tabs>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, reactive } from 'vue'
import Tabs from '..'
import Tab from '../../tab'

export default defineComponent({
	name: 'TabsExample',
	components: {
		[Tabs.name]: Tabs,
		[Tab.name]: Tab,
	},
	setup() {
		const active: Ref<number> = ref(0)
		const activeName: Ref<string> = ref('测试1')
		const list = reactive<any>(['测试1', '测试2', '测试3', '测试4'])

		const handleChange = (...args: any[]) => {
			console.log(...args)
		}

		return {
			active,
			activeName,
			list,
			handleChange,
		}
	},
})
</script>

<style lang="less" scoped>
.example {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	background: antiquewhite;
}
</style>
