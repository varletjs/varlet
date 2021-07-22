<template>
  <var-swipe
    class="var-tabs-items"
    ref="swipe"
    :loop="loop"
    :touchable="canSwipe"
    :indicator="false"
    @change="handleSwipeChange"
  >
    <slot />
  </var-swipe>
</template>

<script lang="ts">
import Swipe from '../swipe'
import { defineComponent, watch, ref } from 'vue'
import { useTabItem } from './provide'
import { props } from './props'
import type { Ref } from 'vue'
import type { TabsItemsProvider } from './provide'
import type { TabItemProvider } from '../tab-item/provide'

export default defineComponent({
  name: 'VarTabsItems',
  components: {
    [Swipe.name]: Swipe,
  },
  props,
  setup(props) {
    const swipe: Ref<null | typeof Swipe> = ref(null)
    const { tabItemList, bindTabItem, length } = useTabItem()

    const matchName = (active: number | string | undefined): TabItemProvider | undefined => {
      return tabItemList.find(({ name }: TabItemProvider) => active === name.value)
    }

    const matchIndex = (active: number | string | undefined): TabItemProvider | undefined => {
      return tabItemList.find(({ index }: TabItemProvider) => active === index.value)
    }

    const matchActive = (active: number | string | undefined): TabItemProvider | undefined => {
      return matchName(active) || matchIndex(active)
    }

    const handleActiveChange = (newValue: number | string | undefined) => {
      const newActiveTabItemProvider: TabItemProvider | undefined = matchActive(newValue)
      if (!newActiveTabItemProvider) {
        return
      }

      tabItemList.forEach(({ setCurrent }) => setCurrent(false))
      newActiveTabItemProvider.setCurrent(true)
      swipe.value?.to(newActiveTabItemProvider.index.value)
    }

    const handleSwipeChange = (currentIndex: number) => {
      const tabItem = tabItemList.find(({ index }) => index.value === currentIndex) as TabItemProvider
      const active = tabItem.name.value ?? tabItem.index.value

      props['onUpdate:active']?.(active)
    }

    const tabsItemsProvider: TabsItemsProvider = {}
    bindTabItem(tabsItemsProvider)

    watch(() => props.active, handleActiveChange)

    watch(
      () => length.value,
      () => handleActiveChange(props.active)
    )

    return {
      swipe,
      handleSwipeChange,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../swipe/swipe';
</style>
