<template>
  <aside :class="classes(n(), n('$--box'), [border, n('--border')])" v-bind="$attrs">
    <div v-if="$slots.start" :class="classes(n('section'), n('start'))">
      <slot name="start"></slot>
    </div>

    <nav :class="n('content')">
      <slot></slot>
    </nav>

    <div v-if="$slots.end" :class="classes(n('section'), n('end'))">
      <slot name="end"></slot>
    </div>
  </aside>
</template>

<script lang="ts">
import { call } from '@varlet/shared'
import { computed, defineComponent } from 'vue'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { useRailNavigationItems, type RailNavigationProvider } from './provide'

const { name, n, classes } = createNamespace('rail-navigation')

export default defineComponent({
  name,
  props,
  setup(props) {
    const active = computed(() => props.active)
    const ripple = computed(() => props.ripple)
    const showLabel = computed(() => props.showLabel)
    const { bindRailNavigationItem } = useRailNavigationItems()
    const railNavigationProvider: RailNavigationProvider = {
      active,
      ripple,
      showLabel,
      onToggle,
    }

    bindRailNavigationItem(railNavigationProvider)

    function onToggle(value: number | string) {
      if (active.value === value) {
        return
      }

      call(props['onUpdate:active'], value)
      call(props.onChange, value)
    }

    return {
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './railNavigation';
</style>
