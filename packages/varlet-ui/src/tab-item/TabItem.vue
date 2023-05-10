<template>
  <var-swipe-item :class="classes(n(), [!current, n('--inactive')])" var-tab-item-cover>
    <slot />
  </var-swipe-item>
</template>

<script lang="ts">
import VarSwipeItem from '../swipe-item'
import { defineComponent, ref, computed } from 'vue'
import { useTabsItems } from './provide'
import { props } from './props'
import type { Ref, ComputedRef } from 'vue'
import type { TabItemProvider } from './provide'
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

    const setCurrent = (value: boolean) => {
      current.value = value
    }

    const tabItemProvider: TabItemProvider = {
      index,
      name,
      setCurrent,
    }

    bindTabsItems(tabItemProvider)

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
