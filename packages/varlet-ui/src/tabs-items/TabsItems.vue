<template>
	<div
		class="var-tabs-items"
		:style="{
			height: transitionHeight,
		}"
		v-bind="$attrs"
	>
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref, Ref, nextTick, onMounted, ComputedRef } from 'vue'
import { useChildren, countChildren } from '../utils/components'
import { TABS_ITEMS_BIND_TAB_ITEM_KEY, TabsItemsProvider, TABS_ITEMS_COUNT_TAB_ITEM_KEY } from './provide'
import { props } from './props'
import { TabItemProvider } from '../tab-item/provide'
import { debounce, isNumber } from '../utils/shared'

export default defineComponent({
	name: 'VarTabsItems',
	inheritAttrs: false,
	props,
	setup(props) {
		const transitionHeight: Ref<string> = ref('auto')
		const active: ComputedRef<number | string> = computed(() => props.active)
		const { bindChildren, childProviders: tabItemProviders } = useChildren<TabsItemsProvider, TabItemProvider>(
			TABS_ITEMS_BIND_TAB_ITEM_KEY
		)
		const { length } = countChildren(TABS_ITEMS_COUNT_TAB_ITEM_KEY)

		const resetTransitionHeight = debounce(() => {
			transitionHeight.value = 'auto'
		}, 1000)

		const matchName = (active: number | string | undefined): TabItemProvider | undefined => {
			return tabItemProviders.find(({ name }: TabItemProvider) => active === name.value)
		}

		const matchIndex = (active: number | string | undefined): TabItemProvider | undefined => {
			return tabItemProviders.find(({ index }: TabItemProvider) => active === index.value)
		}

		const matchBoundary = (active: number | string | undefined): TabItemProvider | undefined => {
			if (length.value === 0) {
				return
			}

			isNumber(active)
				? active > length.value - 1
					? props['onUpdate:active']?.(length.value - 1)
					: props['onUpdate:active']?.(0)
				: null

			return matchIndex(props.active)
		}

		const matchActive = (active: number | string | undefined): TabItemProvider | undefined => {
			return matchName(active) || matchIndex(active) || matchBoundary(active)
		}

		const resize = () => {
			const tabItemProvider: TabItemProvider | undefined =
				matchName(props.active) || matchIndex(props.active) || matchBoundary(props.active)

			if (!tabItemProvider) {
				return
			}

			const { element } = tabItemProvider

			tabItemProviders.forEach(({ transition }) => transition(tabItemProvider.index.value, -1))

			nextTick().then(() => {
				transitionHeight.value = `${(element.value as HTMLElement).offsetHeight}px`
			})
		}

		const tabsItemsProvider: TabsItemsProvider = {
			active,
			resize,
			resetTransitionHeight,
		}

		bindChildren(tabsItemsProvider)

		watch(
			() => props.active,
			(newValue: number | string | undefined, oldValue: number | string | undefined) => {
				const oldActiveTabItemProvider: TabItemProvider | undefined = matchActive(oldValue)
				const newActiveTabItemProvider: TabItemProvider | undefined = matchActive(newValue)
				if (!oldActiveTabItemProvider || !newActiveTabItemProvider) {
					return
				}

				const { element: oldElement, index: oldIndex } = oldActiveTabItemProvider
				const { element: newElement, index: newIndex } = newActiveTabItemProvider

				tabItemProviders.forEach(({ transition }) => transition(newIndex.value, oldIndex.value))

				nextTick().then(() => {
					transitionHeight.value = `${Math.max(
						(newElement.value as HTMLElement).offsetHeight,
						(oldElement.value as HTMLElement).offsetHeight
					)}px`
				})
			}
		)

		watch(
			() => length.value,
			() => nextTick().then(resize)
		)

		onMounted(resize)

		return {
			transitionHeight,
			resize,
		}
	},
})
</script>

<style lang="less">
@import './tabsItems';
</style>
