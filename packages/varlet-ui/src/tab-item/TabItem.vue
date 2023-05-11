<template>
  <var-swipe-item :class="classes(n(), [!current, n('--inactive')])" var-tab-item-cover>
    <slot />
  </var-swipe-item>
</template>

<script lang="ts">
import VarSwipeItem from '../swipe-item'
import { defineComponent, computed, type ComputedRef } from 'vue'
import { useLists, useTabsItems, type TabItemProvider } from './provide'
import { props } from './props'
import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('tab-item')

export default defineComponent({
  name: 'VarTabItem',
  components: {
    VarSwipeItem,
  },
  props,
  setup(props) {
    const { index, tabsItems, bindTabsItems } = useTabsItems()
    const { bindLists } = useLists()
    const name: ComputedRef<string | number | undefined> = computed(() => props.name)
    const current: ComputedRef<boolean> = computed(() => index.value === Number(tabsItems.active.value))

    const tabItemProvider: TabItemProvider = {
      index,
      name,
      current,
    }

    bindTabsItems(tabItemProvider)
    bindLists(tabItemProvider)

    return {
      n,
      classes,
      current,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../swipe-item/swipeItem';
@import './tabItem';
</style>
