<template>
	<div class="var-expansion-panels">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, nextTick, watch } from 'vue'
import { useChildren, useAtChildrenCounter } from '../utils/components'
import {
	EXPANSION_PANELS_BIND_EXPANSION_PANEL_KEY,
	EXPANSION_PANELS_COUNT_EXPANSION_PANEL_KEY,
	ExpansionPanelsProvider,
} from './provide'
import { ExpansionPanelProvider } from '../expansion-panel/provide'
import { props } from './props'
import { isArray } from '../utils/shared'

export default defineComponent({
	name: 'VarExpansionPanels',
	props,
	setup(props) {
		const active: ComputedRef<number | string | Array<number | string> | undefined> = computed(() => props.modelValue)
		const offset: ComputedRef<boolean> = computed(() => props.offset)
		const { bindChildren, childProviders: ExpansionPanelProvider } = useChildren<
			ExpansionPanelsProvider,
			ExpansionPanelProvider
		>(EXPANSION_PANELS_BIND_EXPANSION_PANEL_KEY)
		const { length } = useAtChildrenCounter(EXPANSION_PANELS_COUNT_EXPANSION_PANEL_KEY)

		const checkValue = () => {
			if (!props.accordion && !isArray(props.modelValue)) {
				console.warn('[Varlet] ExpansionPanels: type of prop "modelValue" should be Array')
			}
			if (props.accordion && isArray(props.modelValue)) {
				console.warn('[Varlet] ExpansionPanels: type of prop "modelValue" should be String or Number')
			}
		}

		const getValue = (value: number | string | undefined, isExpand: boolean) => {
			checkValue()
			if (isExpand) return props.accordion ? value : [...(props.modelValue as Array<string | number>), value]
			return props.accordion
				? undefined
				: (props.modelValue as Array<string | number>).filter((name: string | number) => name !== value)
		}

		const updateItem = (value: number | string | undefined, isExpand: boolean) => {
			if (props.accordion) {
				ExpansionPanelProvider.forEach(({ name, toggle }: ExpansionPanelProvider) => {
					if (value !== name.value) toggle(false, true)
				})
			}
			const modelValue = getValue(value, isExpand)
			props['onUpdate:modelValue']?.(modelValue)
			props.onChange?.(modelValue)
		}
		const expansionPanelsProvider: ExpansionPanelsProvider = {
			active,
			offset,
			updateItem,
		}

		bindChildren(expansionPanelsProvider)

		watch(
			() => length.value,
			() =>
				nextTick(() => {
					checkValue()
					ExpansionPanelProvider.forEach(({ init }) => init(props.accordion))
				})
		)
	},
})
</script>

<style lang="less">
@import 'expansionPanels';
</style>
