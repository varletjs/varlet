<template>
  <var-swipe-item :class="classes(n(), [!current, n('--inactive')])" var-tab-item-cover>
    <slot />
  </var-swipe-item>
</template>

<script lang="ts">
import VarSwipeItem from '../swipe-item'
import { defineComponent, ref, computed, type Ref, type ComputedRef } from 'vue'
import { useTabsItems, useLists, type TabItemProvider } from './provide'
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
    const current: Ref<boolean> = ref(false)
    const name: ComputedRef<string | number | undefined> = computed(() => props.name)
    const { index, bindTabsItems } = useTabsItems()
    const { bindLists } = useLists()

    const setCurrent = (value: boolean) => {
      current.value = value
    }

    const tabItemProvider: TabItemProvider = {
      index,
      name,
      current: computed(() => current.value),
      setCurrent,
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
