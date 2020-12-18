<template>
	<var-chips />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Chips from '..'

export default defineComponent({
	name: 'ChipsExample',
	components: {
		[Chips.name]: Chips,
	},
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
