<template>
  <div class="var-tabs-items" :style="{ height: transitionHeight }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref, nextTick } from 'vue'
import { useTabItem } from './provide'
import { props } from './props'
import type { Ref, ComputedRef } from 'vue'
import type { TabsItemsProvider } from './provide'
import type { TabItemProvider } from '../tab-item/provide'
import { getParentScroller, getTop, scrollTo, toPxNum } from '../utils/elements'
import { linear } from '../utils/shared'

export default defineComponent({
  name: 'VarTabsItems',
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

    const scrollIntoView = (el: HTMLElement) => {
      const { scrollIntoView, distance } = props

      if (!scrollIntoView) {
        return
      }

      setTimeout(() => {
        scrollTo(getParentScroller(el), {
          top: getTop(el) - toPxNum(distance),
          animation: linear,
        })
      }, 300)
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
          scrollIntoView(newEl)
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
@import '../styles/common';
@import './tabsItems';
</style>
