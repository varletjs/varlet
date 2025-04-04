<template>
  <div
    ref="tabEl"
    v-ripple="{ disabled: disabled || !ripple }"
    :class="classes(n(), n('$--box'), computeColorClass(), n(`--${itemDirection}`))"
    :style="{
      color: computeColorStyle(),
    }"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { call } from '@varlet/shared'
import Ripple from '../ripple'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { useTabs, type TabProvider } from './provide'

const { name, n, classes } = createNamespace('tab')

export default defineComponent({
  name,
  directives: { Ripple },
  props,
  setup(props) {
    const tabEl = ref<HTMLElement | null>(null)
    const element = computed<HTMLElement | null>(() => tabEl.value)
    const name = computed(() => props.name)
    const disabled = computed(() => props.disabled)
    const { index, tabs, bindTabs } = useTabs()
    const { onTabClick, active, activeColor, inactiveColor, disabledColor, itemDirection, resize } = tabs

    const tabProvider: TabProvider = {
      name,
      index,
      disabled,
      element,
    }

    bindTabs(tabProvider)

    watch(() => [props.name, props.disabled], resize)

    function shouldActive() {
      if (props.name != null) {
        return active.value === props.name
      }

      return active.value === index?.value
    }

    function computeColorStyle() {
      return props.disabled ? disabledColor.value : shouldActive() ? activeColor.value : inactiveColor.value
    }

    function computeColorClass() {
      return props.disabled ? n('$-tab--disabled') : shouldActive() ? n('$-tab--active') : n('$-tab--inactive')
    }

    function handleClick(event: Event) {
      const { disabled, name, onClick } = props

      if (disabled) {
        return
      }

      call(onClick, name ?? index.value, event)
      onTabClick(tabProvider)
    }

    return {
      tabEl,
      active,
      activeColor,
      inactiveColor,
      itemDirection,
      n,
      classes,
      computeColorStyle,
      computeColorClass,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import './tab';
</style>
