<template>
	<div class="var-checkbox-group" :class="[`var-checkbox-group--${direction}`]" v-bind="$attrs">
		<slot />
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, watch } from 'vue'
import { props } from './props'
import { useAtChildrenCounter, useChildren } from '../utils/components'
import { CHECKBOX_GROUP_BIND_CHECKBOX_KEY, CHECKBOX_GROUP_COUNT_CHECKBOX_KEY, CheckboxGroupProvider } from './provide'
import { CheckboxProvider } from '../checkbox/provide'

export default defineComponent({
	name: 'VarCheckboxGroup',
	inheritAttrs: false,
	props,
	setup(props) {
		const { bindChildren, childProviders: checkboxProviders } = useChildren<CheckboxGroupProvider, CheckboxProvider>(
			CHECKBOX_GROUP_BIND_CHECKBOX_KEY
		)
		const { length } = useAtChildrenCounter(CHECKBOX_GROUP_COUNT_CHECKBOX_KEY)

		const checkedCount: ComputedRef<number> = computed(() => props.modelValue.length)
		const max: ComputedRef<number | string | undefined> = computed(() => props.max)

		const onChecked = (changedValue: any) => {
			if (!props.modelValue.includes(changedValue)) {
				const changedModelValue = [...props.modelValue, changedValue]

				props['onUpdate:modelValue']?.(changedModelValue)
				props.onChange?.(changedModelValue)
			}
		}

		const onUnchecked = (changedValue: any) => {
			if (!props.modelValue.includes(changedValue)) {
				return
			}

			const changedModelValue = props.modelValue.filter((value) => value !== changedValue)

			props['onUpdate:modelValue']?.(changedModelValue)
			props.onChange?.(changedModelValue)
		}

		const syncAllCheckbox = () => {
			checkboxProviders.forEach(({ sync }) => sync(props.modelValue))
		}

		const checkAll = () => {
			const checkedValues: any[] = checkboxProviders.map(({ checkedValue }) => checkedValue.value)
			const changedModelValue: any[] = [...new Set(checkedValues)]

			props['onUpdate:modelValue']?.(changedModelValue)

			return changedModelValue
		}

		const uncheckAll = () => {
			const changedModelValue: any[] = []

			props['onUpdate:modelValue']?.(changedModelValue)

			return changedModelValue
		}

		const inverseAll = () => {
			const checkedValues: any[] = checkboxProviders
				.filter(({ checked }) => !checked.value)
				.map(({ checkedValue }) => checkedValue.value)

			const changedModelValue: any[] = [...new Set(checkedValues)]

			props['onUpdate:modelValue']?.(changedModelValue)

			return changedModelValue
		}

		watch(() => props.modelValue, syncAllCheckbox, { deep: true })

		// checkbox insert or remove
		watch(() => length.value, syncAllCheckbox)

		bindChildren({
			checkedCount,
			max,
			onChecked,
			onUnchecked,
		})

		return {
			checkAll,
			uncheckAll,
			inverseAll,
		}
	},
})
</script>

<style lang="less">
@import './checkboxGroup';
</style>
