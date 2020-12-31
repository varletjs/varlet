<template>
	<div class="var-tab var--box" ref="tabEl" v-ripple @click="handleClick">
		<slot />
	</div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, inject, onMounted, onBeforeUnmount, ComputedRef, watch } from 'vue'
import { TAB_COUNTER_KEY, TabMessage, TABS_CONTROLLER_KEY, TabsController } from '../tabs/props'
import { props } from './props'
import Ripple from '../ripple'
import { useAtParentIndex } from '../utils/components'

export default defineComponent({
	name: 'VarTab',
	directives: { Ripple },
	props,
	setup(props) {
		const tabsController = inject<TabsController>(TABS_CONTROLLER_KEY)
		if (!tabsController) {
			throw new Error('<var-tabs> not found')
		}

		const { receiveTabMessage, clearTabMessage, onTabClick } = tabsController
		const tabEl: Ref<HTMLElement | null> = ref(null)
		const index: ComputedRef<number> = useAtParentIndex(TAB_COUNTER_KEY)
		const tabMessage: TabMessage = {
			name: props.name,
			index,
			element: null,
		}

		const handleClick = (event: Event) => {
			props.onClick?.(props.name ?? index.value, event)
			onTabClick(tabMessage)
		}

		watch(
			() => props.name,
			(newValue) => {
				tabMessage.name = newValue
			}
		)

		onMounted(() => {
			tabMessage.element = tabEl.value
			receiveTabMessage(tabMessage)
		})

		onBeforeUnmount(() => {
			clearTabMessage(tabMessage)
		})

		return {
			tabEl,
			index,
			handleClick,
		}
	},
})
</script>

<style lang="less">
@import './tab';
</style>
