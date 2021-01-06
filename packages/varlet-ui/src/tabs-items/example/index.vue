<template>
	<var-tabs-items />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TabsItems from '..'

export default defineComponent({
	name: 'TabsItemsExample',
	components: {
		[TabsItems.name]: TabsItems,
	},
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
