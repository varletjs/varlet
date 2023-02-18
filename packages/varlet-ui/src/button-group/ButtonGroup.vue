<template>
  <div
    :class="
      classes(
        n(),
        [mode && !vertical, n('--mode')],
        [vertical, n('--vertical'), n('--horizontal')],
        n(`$-elevation--${elevation}`)
      )
    "
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useButtons } from './provide'
import { createNamespace } from '../utils/components'
import { props } from './props'
import type { ButtonGroupProvider } from './provide'

const { n, classes } = createNamespace('button-group')

export default defineComponent({
  name: 'VarButtonGroup',
  props,
  setup(props) {
    const { bindButtons } = useButtons()

    const buttonGroupProvider: ButtonGroupProvider = {
      elevation: props.elevation,
      type: props.type,
      size: props.size,
      color: props.color,
      mode: props.mode,
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
