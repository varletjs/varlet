<template>
	<div style="margin-top: 15px">
		<var-button @click="disabled = !disabled" style="margin: 8px 0"> disable </var-button>
		<var-expansion-panels v-model="value" @change="changeHandle" :accordion="false" :offset="false">
			<var-expansion-panel title="Item2121" name="1" :disabled="disabled">
				<template #icon> fsd</template>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua.
			</var-expansion-panel>
			<var-expansion-panel :disabled="disabled" name="2">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua.
			</var-expansion-panel>
			<var-expansion-panel name="3" :disabled="disabled">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua.
			</var-expansion-panel>
			<var-expansion-panel name="4" :disabled="disabled">
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
