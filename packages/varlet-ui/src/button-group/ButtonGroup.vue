<template>
  <div :class="classes(n(), n('$-elevation--2'))">
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
    const boxShadow: ComputedRef<boolean> = computed(() => props.boxShadow)
    // const syncButtons = () => buttons.forEach(({ sync }) => sync(props.boxShadow))
    //
    // watch(() => props.boxShadow, syncButtons)

    const buttonGroupProvider: ButtonGroupProvider = {
      boxShadow,
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
