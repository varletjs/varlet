<template>
	<var-tab-item />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TabItem from '..'

export default defineComponent({
	name: 'TabItemExample',
	components: {
		[TabItem.name]: TabItem,
	},
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
