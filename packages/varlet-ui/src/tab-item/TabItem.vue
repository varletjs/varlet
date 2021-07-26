<template>
  <var-swipe-item class="var-tab-item" :class="[!current && 'var-tab-item--inactive']">
    <slot v-if="initSlot" />
  </var-swipe-item>
</template>

<script lang="ts">
import SwipeItem from '../swipe-item'
import { defineComponent, ref, computed } from 'vue'
import { useTabsItems } from './provide'
import { props } from './props'
import type { Ref, ComputedRef } from 'vue'
import type { TabItemProvider } from './provide'

export default defineComponent({
  name: 'VarTabItem',
  components: {
    [SwipeItem.name]: SwipeItem,
  },
  props,
  setup(props) {
    const current: Ref<boolean> = ref(false)
    const initSlot: Ref<boolean> = ref(false)
    const name: ComputedRef<string | number | undefined> = computed(() => props.name)
    const { index, bindTabsItems } = useTabsItems()

    const setCurrent = (value: boolean) => {
      if (!initSlot.value && value) {
        initSlot.value = true
      }

      current.value = value
    }

    const tabItemProvider: TabItemProvider = {
      index,
      name,
      setCurrent,
    }

    bindTabsItems(tabItemProvider)

    return {
      current,
      initSlot,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../swipe-item/swipeItem';
@import './tabItem';
</style>
