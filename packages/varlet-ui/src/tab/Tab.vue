<template>
	<div
		class="var-tab var--box"
		ref="tabEl"
		v-ripple="{ disabled }"
		:class="[computeColorClass(), `var-tab--${direction}`]"
		:style="{
			color: computeColorStyle(),
		}"
		@click="handleClick"
	>
		<slot />
	</div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, inject, onMounted, onBeforeUnmount, ComputedRef, computed } from 'vue'
import { TAB_COUNTER_KEY, TabMessage, TABS_PROVIDER_KEY, TabsProvider } from '../tabs/props'
import { props } from './props'
import Ripple from '../ripple'
import { useAtParentIndex } from '../utils/components'

export default defineComponent({
	name: 'VarTab',
	directives: { Ripple },
	props,
	setup(props) {
		const tabsProvider = inject<TabsProvider>(TABS_PROVIDER_KEY)
		if (!tabsProvider) {
			throw new Error('<var-tabs> not found')
		}

		const {
			receiveTabMessage,
			clearTabMessage,
			onTabClick,
			active,
			activeColor,
			inactiveColor,
			disabledColor,
			direction,
		} = tabsProvider

		const tabEl: Ref<HTMLElement | null> = ref(null)
		const index: ComputedRef<number> = useAtParentIndex(TAB_COUNTER_KEY)
		const name: ComputedRef<string | number | undefined> = computed(() => props.name)
		const tabMessage: TabMessage = {
			name,
			index,
			element: null,
		}

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
			onTabClick(tabMessage)
		}

		onMounted(() => {
			tabMessage.element = tabEl.value
			receiveTabMessage(tabMessage)
		})

		onBeforeUnmount(() => {
			clearTabMessage(tabMessage)
		})

		return {
			tabEl,
			active,
			index,
			activeColor,
			inactiveColor,
			direction,
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
