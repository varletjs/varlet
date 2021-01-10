<template>
	<div style="margin-top: 15px">
		<button @click="disabled = !disabled">check</button>
		<var-expansion-panels v-model="value" @change="changeHandle" :accordion="false">
			<var-expansion-panel title="Item2121" name="1">
				<template #icon> fsd</template>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua.
			</var-expansion-panel>
			<var-expansion-panel :disabled="disabled" name="2">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua.
			</var-expansion-panel>
			<var-expansion-panel name="3">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua.
			</var-expansion-panel>
			<var-expansion-panel name="4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua.
			</var-expansion-panel>
		</var-expansion-panels>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ExpansionPanels from '..'
import ExpansionPanel from '../../expansion-panel'

export default defineComponent({
	name: 'ExpansionPanelsExample',
	components: {
		[ExpansionPanels.name]: ExpansionPanels,
		[ExpansionPanel.name]: ExpansionPanel,
	},
	setup() {
		const disabled = ref(false)
		const value = ref(['2', '3'])
		const changeHandle = (val: any) => {
			console.log({ val })
			console.log(value.value)
		}
		return {
			disabled,
			value,
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
