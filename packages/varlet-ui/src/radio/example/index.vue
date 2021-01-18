<template>
	<app-type>基本用法</app-type>
	<var-radio v-model="v">radio {{ v }}</var-radio>

	<app-type>组 {{ i }}</app-type>
	<var-radio-group v-model="i">
		<var-radio :checked-value="1">1</var-radio>
		<var-radio :checked-value="2">2</var-radio>
		<var-radio :checked-value="3">3</var-radio>
	</var-radio-group>

	<var-button @click="i = 3">i = 3</var-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Radio from '..'
import Icon from '../../icon'
import RadioGroup from '../../radio-group'
import Button from '../../button'

export default defineComponent({
	name: 'RadioExample',
	components: {
		[Radio.name]: Radio,
		[RadioGroup.name]: RadioGroup,
		[Icon.name]: Icon,
		[Button.name]: Button,
	},
	setup() {
		return {
			v: ref(false),
			i: ref(0),
		}
	},
})
</script>

<style scoped>
.example {
	background: antiquewhite;
}
</style>
