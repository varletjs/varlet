<template>
	<component
		:is="isURL(name) ? 'img' : 'i'"
		class="var-icon"
		:class="[
			`${namespace}--set`,
			isURL(name) ? 'var-icon__image' : `${namespace}-${nextName}`,
			tickTransition ? 'var-icon--hidden' : null,
		]"
		:src="isURL(name) ? nextName : null"
		:style="{
			transition: `all ${transition}ms`,
			color,
			fontSize: size,
		}"
		@click="handleClick"
		v-bind="$attrs"
	/>
</template>

<script lang="ts">
import { defineComponent, watch, ref, Ref, nextTick } from 'vue'
import { isURL } from '../utils/shared'
import { props } from './props'

export default defineComponent({
	name: 'VarIcon',
	inheritAttrs: false,
	props,
	setup(props) {
		const nextName: Ref<string | undefined> = ref('')
		const tickTransition: Ref<boolean> = ref(false)

		watch(
			() => props.name,
			(newValue: string | undefined, oldValue: string | undefined) => {
				if (oldValue === undefined || !props.transition) {
					nextName.value = newValue
					return
				}

				tickTransition.value = true

				nextTick().then(() => {
					setTimeout(() => {
						if (oldValue !== undefined) {
							nextName.value = newValue
						}

						tickTransition.value = false
					}, props.transition)
				})
			},
			{ immediate: true }
		)

		const handleClick = (e: Event) => {
			props.onClick?.(e)
		}

		return {
			isURL,
			nextName,
			tickTransition,
			handleClick,
		}
	},
})
</script>

<style lang="less">
@import './icon';
</style>
