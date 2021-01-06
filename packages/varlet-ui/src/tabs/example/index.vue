<template>
	<div class="example">
		<app-type>基本使用</app-type>
		<var-tabs style="width: 345px" v-model:active="active" @change="handleChange">
			<var-tab v-for="i in list" :key="i">{{ i }}</var-tab>
		</var-tabs>

		<app-type>修改颜色</app-type>
		<var-tabs
			style="width: 345px"
			color="rgb(98,0,234)"
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
			color="rgb(98,0,234)"
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
			color="rgb(98,0,234)"
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
			color="rgb(98,0,234)"
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

		<var-tabs
			style="width: 100%"
			color="rgb(98,0,234)"
			active-color="#fff"
			inactive-color="rgb(193,155,247)"
			indicator-size="0"
			direction="vertical"
			fixed-bottom
			:elevation="4"
			v-model:active="activeBottom"
			@change="handleChange"
		>
			<var-tab>
				<var-icon name="checkbox-marked-circle" style="margin-bottom: 5px" />
				<div>第一个</div>
			</var-tab>
			<var-tab>
				<var-icon name="checkbox-marked-circle" style="margin-bottom: 5px" />
				<div>第二个</div>
			</var-tab>
			<var-tab>
				<var-icon name="checkbox-marked-circle" style="margin-bottom: 5px" />
				<div>第三个</div>
			</var-tab>
		</var-tabs>

		<app-type>视图联动</app-type>
		<var-tabs
			ref="s"
			style="width: 345px"
			color="rgb(98,0,234)"
			active-color="#fff"
			inactive-color="rgb(193,155,247)"
			:elevation="2"
			v-model:active="activeRelation"
			@change="handleChange"
		>
			<var-tab v-for="i in list2" :key="i.id">
				{{ i.name }}
			</var-tab>
		</var-tabs>

		<var-tabs-items ref="s1" style="margin-top: 10px" v-model:active="activeRelation">
			<var-tab-item v-for="i in list2" :key="i.id"> {{ i.name }}视图 </var-tab-item>
		</var-tabs-items>

		<var-button @click="push" style="margin-bottom: 10px">push</var-button>
		<var-button @click="unshift" style="margin-bottom: 10px">unshift</var-button>
		<var-button @click="pop" style="margin-bottom: 10px">pop</var-button>
		<var-button @click="shift" style="margin-bottom: 10px">shift</var-button>

		<app-type>开启粘性布局</app-type>
		<var-tabs
			style="width: 345px"
			color="rgb(98,0,234)"
			active-color="#fff"
			inactive-color="rgb(193,155,247)"
			indicator-size="0px"
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
import { defineComponent, ref, Ref, reactive, nextTick } from 'vue'
import Tabs from '..'
import Tab from '../../tab'
import Icon from '../../icon'
import TabsItems from '../../tabs-items'
import TabItem from '../../tab-item'
import Button from '../../button'

export default defineComponent({
	name: 'TabsExample',
	components: {
		[Tabs.name]: Tabs,
		[Tab.name]: Tab,
		[TabsItems.name]: TabsItems,
		[TabItem.name]: TabItem,
		[Icon.name]: Icon,
		[Button.name]: Button,
	},
	setup() {
		const active: Ref<number> = ref(0)
		const s: Ref<any> = ref(null)
		const s1: Ref<any> = ref(null)
		const activeBottom: Ref<number> = ref(0)
		const activeRelation: Ref<any> = ref(0)
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

		const list2 = reactive<any>([
			{
				id: 1,
				name: '瓜瓜',
			},
			{
				id: 2,
				name: '咋咋',
			},
			{
				id: 3,
				name: '拉拉',
			},
		])

		const handleChange = (...args: any[]) => {
			console.log(...args)
		}

		return {
			active,
			activeBottom,
			activeName,
			activeRelation,
			list,
			list2,
			s,
			s1,
			handleChange,
			push() {
				list2.push({
					id: Date.now(),
					name: '尾插',
				})
			},
			unshift() {
				list2.unshift({
					id: Date.now(),
					name: '头插',
				})
			},
			pop() {
				list2.pop()
			},
			shift() {
				list2.shift()
			},
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
	height: 300vh;

	* {
		box-sizing: border-box;
	}
}
</style>
