<template>
	<var-index-anchor />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IndexAnchor from '..'

export default defineComponent({
	name: 'IndexAnchorExample',
	components: {
		[IndexAnchor.name]: IndexAnchor,
	},
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
