<template>
	<div class="example">
		<app-type>基本使用</app-type>
		<var-tabs style="width: 345px" v-model:active="active" @change="handleChange">
			<var-tab v-for="i in list" :key="i">{{ i }}</var-tab>
		</var-tabs>

		<app-type>修改颜色</app-type>
		<var-tabs
			style="width: 345px"
			background="rgb(98,0,234)"
			active-color="#fff"
			inactive-color="rgb(193,155,247)"
			v-model:active="active"
			@change="handleChange"
		>
			<var-tab v-for="i in list" :key="i">{{ i }}</var-tab>
		</var-tabs>

		<app-type>开启阴影</app-type>
		<var-tabs
			style="width: 345px"
			background="rgb(98,0,234)"
			active-color="#fff"
			inactive-color="rgb(193,155,247)"
			:elevation="4"
			v-model:active="active"
			@change="handleChange"
		>
			<var-tab v-for="i in list" :key="i">{{ i }}</var-tab>
		</var-tabs>

		<app-type>禁用标签</app-type>
		<var-tabs
			style="width: 345px"
			background="rgb(98,0,234)"
			active-color="#fff"
			inactive-color="rgb(193,155,247)"
			:elevation="4"
			v-model:active="active"
			@change="handleChange"
		>
			<var-tab disabled>禁用项</var-tab>
			<var-tab v-for="i in list" :key="i">{{ i }}</var-tab>
		</var-tabs>

		<app-type>垂直布局</app-type>
		<var-tabs
			style="width: 345px"
			direction="vertical"
			background="rgb(98,0,234)"
			active-color="#fff"
			inactive-color="rgb(193,155,247)"
			:elevation="4"
			v-model:active="active"
			@change="handleChange"
		>
			<var-tab v-for="i in list" :key="i">
				<var-icon name="checkbox-marked-circle" style="margin-bottom: 5px" size="20px" />
				<div>{{ i }}</div>
			</var-tab>
		</var-tabs>

		<app-type>开启粘性布局</app-type>
		<var-tabs
			style="width: 345px"
			background="rgb(98,0,234)"
			active-color="#fff"
			inactive-color="rgb(193,155,247)"
			sticky
			offset-top="20px"
			:elevation="4"
			v-model:active="active"
			@change="handleChange"
		>
			<var-tab v-for="i in list" :key="i">
				<var-icon name="checkbox-marked-circle" style="margin-right: 5px" />
				<div>{{ i }}</div>
			</var-tab>
		</var-tabs>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, reactive } from 'vue'
import Tabs from '..'
import Tab from '../../tab'
import Icon from '../../icon'

export default defineComponent({
	name: 'TabsExample',
	components: {
		[Tabs.name]: Tabs,
		[Tab.name]: Tab,
		[Icon.name]: Icon,
	},
	setup() {
		const active: Ref<number> = ref(0)
		const activeName: Ref<string> = ref('测试1')
		const list = reactive<any>([
			'测试1',
			'测试2',
			'测试3',
			'测试4',
			'长文字嘎嘎嘎嘎嘎',
			'测试5',
			'测试6',
			'测试7',
			'测试8',
			'测试9',
		])

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
	height: 200vh;

	* {
		box-sizing: border-box;
	}
}
</style>
