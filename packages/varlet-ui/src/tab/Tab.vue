<template>
  <div
    class="var-tab var--box"
    ref="tabEl"
    v-ripple="{ disabled }"
    :class="[computeColorClass(), `var-tab--${itemDirection}`]"
    :style="{
      color: computeColorStyle(),
    }"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { props } from './props'
import Ripple from '../ripple'
import { useTabs } from './provide'
import type { Ref, ComputedRef } from 'vue'
import type { TabProvider } from './provide'

export default defineComponent({
  name: 'VarTab',
  directives: { Ripple },
  props,
  setup(props) {
    const tabEl: Ref<HTMLElement | null> = ref(null)
    const name: ComputedRef<string | number | undefined> = computed(() => props.name)
    const disabled: ComputedRef<boolean> = computed(() => props.disabled)
    const element: ComputedRef<HTMLElement | null> = computed(() => tabEl.value)
    const { index, tabs, bindTabs } = useTabs()
    const { onTabClick, active, activeColor, inactiveColor, disabledColor, itemDirection, resize } = tabs

    const tabProvider: TabProvider = {
      name,
      index,
      disabled,
      element,
    }

    bindTabs(tabProvider)

    const computeColorStyle = () => {
      const { disabled, name } = props

      return disabled
        ? disabledColor.value
        : active.value === name || active.value === index?.value
        ? activeColor.value
        : inactiveColor.value
    }

    const computeColorClass = () => {
      const { disabled, name } = props

      return disabled
        ? 'var-tab--disabled'
        : active.value === name || active.value === index?.value
        ? 'var-tab--active'
        : 'var-tab--inactive'
    }

    const handleClick = (event: Event) => {
      const { disabled, name, onClick } = props

      if (disabled) {
        return
      }

      onClick?.(name ?? index.value, event)
      onTabClick(tabProvider)
    }

    watch(() => props.name, resize)
    watch(() => props.disabled, resize)

    return {
      tabEl,
      active,
      activeColor,
      inactiveColor,
      itemDirection,
      computeColorStyle,
      computeColorClass,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import '../ripple/ripple';
@import './tab';
</style>
