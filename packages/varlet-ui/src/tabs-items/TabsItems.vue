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
import { defineComponent, computed, watch, ref, Ref, nextTick, ComputedRef } from 'vue'
import { TabsItemsProvider, useTabItem } from './provide'
import { props } from './props'
import { TabItemProvider } from '../tab-item/provide'

export default defineComponent({
  name: 'VarTabsItems',
  inheritAttrs: false,
  props,
  setup(props) {
    const transitionHeight: Ref<string> = ref('auto')
    const active: ComputedRef<number | string> = computed(() => props.active)
    const { tabItemList, bindTabItem, length } = useTabItem()

    const resetTransitionHeight = () => {
      transitionHeight.value = 'auto'
    }

    const matchName = (active: number | string | undefined): TabItemProvider | undefined => {
      return tabItemList.find(({ name }: TabItemProvider) => active === name.value)
    }

    const matchIndex = (active: number | string | undefined): TabItemProvider | undefined => {
      return tabItemList.find(({ index }: TabItemProvider) => active === index.value)
    }

    const matchActive = (active: number | string | undefined): TabItemProvider | undefined => {
      return matchName(active) || matchIndex(active)
    }

    const resize = () => {
      const tabItem: TabItemProvider | undefined = matchActive(props.active)

      if (!tabItem) {
        return
      }

      const { element } = tabItem

      tabItemList.forEach(({ transition }) => transition(tabItem.index.value, -1))

      nextTick().then(() => {
        transitionHeight.value = `${(element.value as HTMLElement).offsetHeight}px`
      })
    }

    const tabsItemsProvider: TabsItemsProvider = {
      active,
      resize,
      resetTransitionHeight,
    }

    bindTabItem(tabsItemsProvider)

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
        const oldEl = oldElement.value as HTMLElement
        const newEl = newElement.value as HTMLElement

        tabItemList.forEach(({ transition }) => transition(newIndex.value, oldIndex.value))

        nextTick().then(() => {
          transitionHeight.value = `${Math.max(newEl.offsetHeight, oldEl.offsetHeight)}px`
        })
      }
    )

    watch(
      () => length.value,
      () => nextTick().then(resize)
    )

    return {
      transitionHeight,
      length,
      resize,
    }
  },
})
</script>

<style lang="less">
@import './tabsItems';
</style>
