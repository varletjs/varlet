<template>
  <div :class="classes(n(), n(`$-elevation--${elevation}`))">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, watch } from 'vue'
import { useButtons } from './provide'
import { call, createNamespace } from '../utils/components'
import { props } from './props'
import type { ButtonGroupProvider } from './provide'

const { n, classes } = createNamespace('button-group')

export default defineComponent({
  name: 'VarButtonGroup',
  props,
  setup(props) {
    const { length, buttons, bindButtons } = useButtons()
    const elevation = computed(() => props.elevation)
    const type = computed(() => props.type)
    const size = computed(() => props.size)
    // const syncButtons = () => buttons.forEach(({ sync }) => sync(props.boxShadow))
    //
    // watch(() => props.boxShadow, syncButtons)

    const buttonGroupProvider: ButtonGroupProvider = {
      elevation,
      type,
      size,
    }

    bindButtons(buttonGroupProvider)

    return {
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import './buttonGroup.less';
</style>
