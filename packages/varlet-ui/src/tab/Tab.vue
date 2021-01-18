<template>
	<div
		class="var-tab var--box"
		ref="tabEl"
		v-ripple="{ disabled }"
		:class="[computeColorClass(), `var-tab--${itemDirection}`]"
		:style="{
			color: computeColorStyle(),
		}"
		@click="handleClick"
	>
		<slot />
	</div>
</template>

<script lang="ts">
import Ripple from '../ripple'
import { defineComponent, Ref, ref, computed, ComputedRef, watch } from 'vue'
import { props } from './props'
import { TabsProvider, TABS_BIND_TAB_KEY, TABS_COUNT_TAB_KEY } from '../tabs/provide'
import { useAtParentIndex, useParent } from '../utils/components'
import { TabProvider } from './provide'

export default defineComponent({
	name: 'VarTab',
	directives: { Ripple },
	props,
	setup(props) {
		const { parentProvider: tabsProvider, bindParent } = useParent<TabsProvider, TabProvider>(TABS_BIND_TAB_KEY)
		const { index } = useAtParentIndex(TABS_COUNT_TAB_KEY)

		if (!tabsProvider || !bindParent || !index) {
			throw Error('<var-tab/> must in <var-tabs/>')
		}

		const tabEl: Ref<HTMLElement | null> = ref(null)
		const name: ComputedRef<string | number | undefined> = computed(() => props.name)
		const disabled: ComputedRef<boolean> = computed(() => props.disabled)
		const element: ComputedRef<HTMLElement | null> = computed(() => tabEl.value)

		const tabProvider: TabProvider = {
			name,
			index,
			disabled,
			element,
		}

		bindParent(tabProvider)

		const { onTabClick, active, activeColor, inactiveColor, disabledColor, itemDirection, resize } = tabsProvider

		const computeColorStyle = () => {
			return props.disabled
				? disabledColor.value
				: active.value === props.name || active.value === index.value
				? activeColor.value
				: inactiveColor.value
		}

		const computeColorClass = () => {
			return props.disabled
				? 'var-tab--disabled'
				: active.value === props.name || active.value === index.value
				? 'var-tab--active'
				: 'var-tab--inactive'
		}

		const handleClick = (event: Event) => {
			if (props.disabled) {
				return
			}

			props.onClick?.(props.name ?? index.value, event)
			onTabClick(tabProvider)
		}

		watch(() => props.name, resize)
		watch(() => props.disabled, resize)

		return {
			tabEl,
			active,
			activeColor,
			inactiveColor,
			itemDirection,
			computeColorStyle,
			computeColorClass,
			handleClick,
		}
	},
})
</script>

<style lang="less">
@import './tab';
</style>
