<template>
  <var-swipe :class="n()" ref="swipe" :loop="loop" :touchable="canSwipe" :indicator="false" @change="handleSwipeChange">
    <slot />
  </var-swipe>
</template>

<script lang="ts">
import VarSwipe from '../swipe'
import { defineComponent, watch, ref } from 'vue'
import { useTabItem } from './provide'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { doubleRaf, call } from '@varlet/shared'
import { type TabItemProvider } from '../tab-item/provide'

const { name, n } = createNamespace('tabs-items')

export default defineComponent({
  name,
  components: { VarSwipe },
  props,
  setup(props) {
    const swipe = ref<null | typeof VarSwipe>(null)
    const { tabItemList, bindTabItem, length } = useTabItem()

    bindTabItem({})

    watch(() => props.active, handleActiveChange)

    watch(
      () => length.value,
      async () => {
        await doubleRaf()
        handleActiveChange(props.active)
      }
    )

    function matchName(active: number | string | undefined): TabItemProvider | undefined {
      return tabItemList.find(({ name }: TabItemProvider) => active === name.value)
    }

    function matchIndex(active: number | string | undefined): TabItemProvider | undefined {
      return tabItemList.find(({ index }: TabItemProvider) => active === index.value)
    }

    function matchActive(active: number | string | undefined): TabItemProvider | undefined {
      return matchName(active) || matchIndex(active)
    }

    function handleActiveChange(newValue: number | string | undefined) {
      const newActiveTabItemProvider: TabItemProvider | undefined = matchActive(newValue)
      if (!newActiveTabItemProvider) {
        return
      }

      tabItemList.forEach(({ setCurrent }) => setCurrent(false))
      newActiveTabItemProvider.setCurrent(true)
      swipe.value?.to(newActiveTabItemProvider.index.value)
    }

    function handleSwipeChange(currentIndex: number) {
      const tabItem = tabItemList.find(({ index }) => index.value === currentIndex) as TabItemProvider
      const active = tabItem.name.value ?? tabItem.index.value

      call(props['onUpdate:active'], active)
    }

    // expose
    function getSwipe() {
      return swipe.value
    }

    return {
      swipe,
      n,
      handleSwipeChange,
      getSwipe,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../swipe/swipe';
</style>
