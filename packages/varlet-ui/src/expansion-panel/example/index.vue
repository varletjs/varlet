<template>
	<var-expansion-panel />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ExpansionPanel from '..'

export default defineComponent({
	name: 'ExpansionPanelExample',
	components: {
		[ExpansionPanel.name]: ExpansionPanel,
	},
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
