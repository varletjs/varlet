<template>
	<var-icon />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '..'

export default defineComponent({
	name: 'IconExample',
	components: {
		[Icon.name]: Icon,
	},
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
