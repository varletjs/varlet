<template>
	<var-checkbox-group />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CheckboxGroup from '..'

export default defineComponent({
	name: 'CheckboxGroupExample',
	components: {
		[CheckboxGroup.name]: CheckboxGroup,
	},
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
