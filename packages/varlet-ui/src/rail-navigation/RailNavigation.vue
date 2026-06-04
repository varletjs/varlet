<template>
  <aside :class="classes(n(), n('$--box'))" v-bind="$attrs">
    <div v-if="$slots.start" :class="n('section')">
      <slot name="start"></slot>
    </div>

    <nav :class="n('content')">
      <slot></slot>
    </nav>

    <div v-if="$slots.end" :class="n('section')">
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
    const { bindRailNavigationItem } = useRailNavigationItems()
    const railNavigationProvider: RailNavigationProvider = {
      active: computed(() => props.active),
      ripple: computed(() => props.ripple),
      onToggle,
    }

    bindRailNavigationItem(railNavigationProvider)

    function onToggle(active: number | string) {
      if (props.active === active) {
        return
      }

      call(props['onUpdate:active'], active)
      call(props.onChange, active)
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
@import '../badge/badge';
@import '../icon/icon';
@import '../rail-navigation-item/railNavigationItem';
@import '../ripple/ripple';
@import './railNavigation';
</style>
