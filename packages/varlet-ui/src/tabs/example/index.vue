<template>
	<var-tabs />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tabs from '..'

export default defineComponent({
	name: 'TabsExample',
	components: {
		[Tabs.name]: Tabs,
	},
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
