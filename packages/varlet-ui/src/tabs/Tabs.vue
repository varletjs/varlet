<template>
	<div class="var-tabs var--box">
		<slot />

		<div
			class="var-tabs__indicator"
			:style="{
				width: indicatorWidth,
				transform: `translateX(${indicatorX})`,
			}"
		></div>
	</div>
</template>

<script lang="ts">
import { defineComponent, provide, onMounted, watch, ref, Ref } from 'vue'
import { TabMessage, TABS_CONTROLLER_KEY, TabsController, props, TAB_COUNTER_KEY } from './props'
import { removeItem } from '../utils/shared'
import { countChildren } from '../utils/components'

export default defineComponent({
	name: 'VarTabs',
	props,
	setup(props) {
		const tabMessages: TabMessage[] = []
		const indicatorWidth: Ref<string> = ref('0px')
		const indicatorX: Ref<string> = ref('0px')

		const matchName = (): TabMessage | undefined => {
			return tabMessages.find(({ name }: TabMessage) => props.active === name)
		}
		const matchIndex = (): TabMessage | undefined => {
			return tabMessages.find(({ index }: TabMessage) => props.active === index.value)
		}
		const moveIndicator = ({ element }: TabMessage) => {
			indicatorWidth.value = `${element?.offsetWidth}px`
			indicatorX.value = `${element?.offsetLeft}px`
		}
		const activeEffect = () => {
			const tabMessage = matchName() || matchIndex()
			if (!tabMessage) {
				throw new Error('Active not match to the <var-tab>')
			}
			moveIndicator(tabMessage)
		}

		onMounted(() => activeEffect())

		watch(() => props.active, activeEffect)

		countChildren(TAB_COUNTER_KEY)

		provide<TabsController>(TABS_CONTROLLER_KEY, {
			receiveTabMessage(tabMessage: TabMessage) {
				tabMessages.push(tabMessage)
			},
			clearTabMessage(tabMessage: TabMessage) {
				removeItem(tabMessages, tabMessage)
			},
			onTabClick(tabMessage: TabMessage) {
				const active = tabMessage.name ?? tabMessage.index.value
				props.onChange?.(active)
				props['onUpdate:active']?.(active)
			},
		})

		return {
			indicatorWidth,
			indicatorX,
		}
	},
})
</script>

<style lang="less">
@import './tabs';
</style>
