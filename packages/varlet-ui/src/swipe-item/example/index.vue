<template>
	<var-swipe-item />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SwipeItem from '..'

export default defineComponent({
	name: 'SwipeItemExample',
	components: {
		[SwipeItem.name]: SwipeItem,
	},
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
