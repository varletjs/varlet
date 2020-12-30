<template>
	<i
		class="var-icon"
		:class="[`${namespace}--set`, `${namespace}-${nextName}`, tickTransition ? 'var-icon--hidden' : null]"
		:style="{ transition: `transform ${transition}ms` }"
		v-bind="$attrs"
	/>
</template>

<script lang="ts">
import { defineComponent, watch, ref, Ref, nextTick } from 'vue'
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
				if (oldValue === undefined) {
					nextName.value = newValue
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

		return {
			nextName,
			tickTransition,
		}
	},
})
</script>

<style lang="less">
@import './icon';
</style>
