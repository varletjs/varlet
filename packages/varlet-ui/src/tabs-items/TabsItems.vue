<template>
  <var-swipe
    :class="n()"
    ref="swipeRef"
    :loop="loop"
    :touchable="canSwipe"
    :indicator="false"
    @change="handleSwipeChange"
  >
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
    const swipeRef = ref<null | typeof VarSwipe>(null)
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

    function matchActiveTabItem(active: number | string | undefined) {
      const matchedNameItem = tabItemList.find(({ name }) => name.value != null && active === name.value)
      const matchedIndexItem = tabItemList.find(({ index, name }) => name.value == null && active === index.value)

      return matchedNameItem ?? matchedIndexItem
    }

    function handleActiveChange(newValue: number | string | undefined) {
      if (!swipeRef.value) {
        return
      }

      const newActiveTabItemProvider = matchActiveTabItem(newValue)
      if (!newActiveTabItemProvider) {
        return
      }

      tabItemList.forEach(({ setCurrent }) => setCurrent(false))
      newActiveTabItemProvider.setCurrent(true)
      swipeRef.value.to(newActiveTabItemProvider.index.value)
    }

    function handleSwipeChange(currentIndex: number) {
      const tabItem = tabItemList.find(({ index }) => index.value === currentIndex) as TabItemProvider
      const active = tabItem.name.value ?? tabItem.index.value

      call(props['onUpdate:active'], active)
    }

    // expose
    function getSwipe() {
      return swipeRef.value
    }

    return {
      swipeRef,
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
