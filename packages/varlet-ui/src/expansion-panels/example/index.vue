<template>
	<div class="expansion-panels-demo">
		<div>
			<app-type>基本使用</app-type>
			<var-expansion-panels v-model="value" @change="changeHandle">
				<var-expansion-panel title="Item" name="1">hello world</var-expansion-panel>
				<var-expansion-panel title="Item" name="2">hello world</var-expansion-panel>
			</var-expansion-panels>
		</div>

		<div>
			<app-type>隐藏边距</app-type>
			<var-expansion-panels v-model="value" :offset="false">
				<var-expansion-panel title="Item" name="1">hello world</var-expansion-panel>
				<var-expansion-panel title="Item" name="2">hello world</var-expansion-panel>
			</var-expansion-panels>
		</div>

		<div>
			<app-type>手风琴模式</app-type>
			<var-expansion-panels v-model="value1" accordion :offset="false">
				<var-expansion-panel title="Item" name="1">hello world</var-expansion-panel>
				<var-expansion-panel title="Item" name="2">hello world</var-expansion-panel>
			</var-expansion-panels>
		</div>

		<div>
			<app-type>禁用</app-type>
			<var-button @click="disabled = !disabled" style="margin-bottom: 8px">
				{{ disabled ? '恢复' : '禁用' }}
			</var-button>
			<var-expansion-panels v-model="value1" accordion>
				<var-expansion-panel title="Item" name="1" :disabled="disabled">hello world</var-expansion-panel>
				<var-expansion-panel title="Item" name="2" :disabled="disabled">hello world</var-expansion-panel>
			</var-expansion-panels>
		</div>

		<div>
			<app-type>自定义标题</app-type>
			<var-expansion-panels v-model="value1" accordion>
				<var-expansion-panel title="Expansion panels" name="1" icon="account-circle">hello world</var-expansion-panel>
				<var-expansion-panel>
					<template #title>Title Slot</template>
					<template #icon>Icon Slot</template>

					hello world
				</var-expansion-panel>
			</var-expansion-panels>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import ExpansionPanels from '..'
import ExpansionPanel from '../../expansion-panel'
import Button from '../../button'

export default defineComponent({
	name: 'ExpansionPanelsExample',
	components: {
		[ExpansionPanels.name]: ExpansionPanels,
		[ExpansionPanel.name]: ExpansionPanel,
		[Button.name]: Button,
	},
	setup() {
		const disabled = ref(false)
		const value = ref(['1'])
		const value1 = ref('1')
		const changeHandle = (val) => {
			console.log({ val })
			console.log(value.value)
		}
		return {
			disabled,
			value,
			value1,
			changeHandle,
		}
	},
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
