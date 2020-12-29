<template>
	<var-icon :name="name" :transition="transition" color="red" size="30px" />

	<div>
		<var-button @click="toggle">toggle</var-button>
		<var-button @click="toggleTransition">toggle transition</var-button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import Icon from '..'
import Button from '../../button'

export default defineComponent({
	name: 'IconExample',
	components: {
		[Icon.name]: Icon,
		[Button.name]: Button,
	},
	setup() {
		const name: Ref<string> = ref('checkbox-marked-circle')
		const show: Ref<boolean> = ref(true)
		const transition: Ref<number> = ref(0)

		return {
			name,
			show,
			transition,
			toggleTransition() {
				transition.value = 300

				name.value = name.value === 'checkbox-marked-circle' ? 'information-outline' : 'checkbox-marked-circle'
			},
			toggle() {
				transition.value = 0

				name.value = name.value === 'checkbox-marked-circle' ? 'information-outline' : 'checkbox-marked-circle'
			},
		}
	},
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
