<template>
	<transition :name="transitionName" @after-enter="resetTransitionHeight">
		<div class="var-tab-item" ref="tabItemEl" v-show="show">
			<slot />
		</div>
	</transition>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed, ComputedRef, watch } from 'vue'
import { useParent, useAtParentIndex } from '../utils/components'
import { TABS_ITEMS_BIND_TAB_ITEM_KEY, TABS_ITEMS_COUNT_TAB_ITEM_KEY, TabsItemsProvider } from '../tabs-items/provide'
import { TabItemProvider } from './provide'
import { props } from './props'

export default defineComponent({
	name: 'VarTabItem',
	props,
	setup(props) {
		const { parentProvider: tabsItemsProvider, bindParent } = useParent<TabsItemsProvider, TabItemProvider>(
			TABS_ITEMS_BIND_TAB_ITEM_KEY
		)
		const { index } = useAtParentIndex(TABS_ITEMS_COUNT_TAB_ITEM_KEY)

		if (!tabsItemsProvider || !bindParent || !index) {
			throw Error('<var-tab-item/> must in <var-tabs-items/>')
		}

		const show: Ref<boolean> = ref(false)
		const tabItemEl: Ref<null | HTMLElement> = ref(null)
		const transitionName: Ref<string> = ref('var-tabs-items-left')
		const name: ComputedRef<string | number | undefined> = computed(() => props.name)
		const element: ComputedRef<HTMLElement | null> = computed(() => tabItemEl.value)
		const { active, resize, resetTransitionHeight } = tabsItemsProvider

		const transition = (newIndex: number, oldIndex: number) => {
			transitionName.value =
				oldIndex === -1 ? 'var-tab-item-right' : newIndex > oldIndex ? 'var-tab-item-right' : 'var-tab-item-left'
			show.value = active.value === props.name || active.value === index.value
		}

		const tabItemProvider: TabItemProvider = {
			index,
			name,
			element,
			transition,
		}

		bindParent(tabItemProvider)

		watch(() => props.name, resize)

		return {
			tabItemEl,
			show,
			active,
			transitionName,
			resetTransitionHeight,
		}
	},
})
</script>

<style lang="less">
@import './tabItem';
</style>
