<template>
  <transition :name="transitionName" @after-enter="resetTransitionHeight">
    <div class="var-tab-item" ref="tabItemEl" v-show="show">
      <slot v-if="initSlot" />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { useTabsItems } from './provide'
import { props } from './props'
import type { Ref, ComputedRef } from 'vue'
import type { TabItemProvider } from './provide'

export default defineComponent({
  name: 'VarTabItem',
  props,
  setup(props) {
    const show: Ref<boolean> = ref(false)
    const initSlot: Ref<boolean> = ref(false)
    const tabItemEl: Ref<null | HTMLElement> = ref(null)
    const transitionName: Ref<string> = ref('var-tabs-items-left')
    const name: ComputedRef<string | number | undefined> = computed(() => props.name)
    const element: ComputedRef<HTMLElement | null> = computed(() => tabItemEl.value)
    const { index, tabsItems, bindTabsItems } = useTabsItems()
    const { active, resize, resetTransitionHeight } = tabsItems

    const transition = (newIndex: number, oldIndex: number) => {
      transitionName.value =
        oldIndex === -1 ? 'var-tab-item-right' : newIndex > oldIndex ? 'var-tab-item-right' : 'var-tab-item-left'
      show.value = active.value === props.name || active.value === index.value
    }

    const tabItemProvider: TabItemProvider = {
      index,
      name,
      element,
      transition,
    }

    bindTabsItems(tabItemProvider)

    watch(() => props.name, resize)

    watch(
      () => show.value,
      (newValue) => {
        if (newValue) {
          initSlot.value = true
        }
      },
      { immediate: true }
    )

    return {
      tabItemEl,
      initSlot,
      show,
      active,
      transitionName,
      resetTransitionHeight,
    }
  },
})
</script>

<style lang="less">
@import './tabItem';
</style>
