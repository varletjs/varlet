<template>
  <var-swipe-item :class="classes(n(), [!current, n('--inactive')])" var-tab-item-cover>
    <slot />
  </var-swipe-item>
</template>

<script lang="ts">
import VarSwipeItem from '../swipe-item'
import { defineComponent, ref, computed } from 'vue'
import { useTabsItems, useLists, type TabItemProvider } from './provide'
import { props } from './props'
import { createNamespace } from '../utils/components'

const { name, n, classes } = createNamespace('tab-item')

export default defineComponent({
  name,
  components: { VarSwipeItem },
  props,
  setup(props) {
    const current = ref(false)
    const name = computed(() => props.name)
    const { index, bindTabsItems } = useTabsItems()
    const { bindLists } = useLists()

    const tabItemProvider: TabItemProvider = {
      index,
      name,
      current: computed(() => current.value),
      setCurrent,
    }

    bindTabsItems(tabItemProvider)
    bindLists(tabItemProvider)

    function setCurrent(value: boolean) {
      current.value = value
    }

    return {
      current,
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../swipe-item/swipeItem';
@import './tabItem';
</style>
