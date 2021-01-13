<template>
  <img
    class="var-icon__image"
    :class="[tickTransition ? 'var-icon--hidden' : null]"
    :style="{
			transition: `all ${transition}ms`,
		}"
    :src="nextName"
    v-if="isURL(name)"
    v-bind="$attrs"
  >

	<i
		class="var-icon"
		:class="[`${namespace}--set`, `${namespace}-${nextName}`, tickTransition ? 'var-icon--hidden' : null]"
		:style="{
			transition: `all ${transition}ms`,
		}"
    v-else
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
      isURL,
			nextName,
			tickTransition,
		}
	},
})
</script>

<style lang="less">
@import './icon';
</style>
