<template>
  <div
    :class="
      classes(
        n(),
        n('$--box'),
        [mode, `${n(`--mode-${mode}`)}`],
        [vertical, n('--vertical'), n('--horizontal')],
        [mode === 'normal', formatElevation(elevation, 2)]
      )
    "
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useButtons, type ButtonGroupProvider } from './provide'
import { createNamespace, formatElevation } from '../utils/components'
import { props } from './props'

const { n, classes } = createNamespace('button-group')

export default defineComponent({
  name: 'VarButtonGroup',
  props,
  setup(props) {
    const { bindButtons } = useButtons()

    const buttonGroupProvider: ButtonGroupProvider = {
      elevation: computed(() => props.elevation),
      type: computed(() => props.type),
      size: computed(() => props.size),
      color: computed(() => props.color),
      textColor: computed(() => props.textColor),
      mode: computed(() => props.mode),
    }

    bindButtons(buttonGroupProvider)

    return {
      n,
      classes,
      formatElevation,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './buttonGroup';
</style>
