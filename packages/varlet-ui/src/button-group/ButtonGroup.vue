<template>
  <div
    :class="
      classes(
        n(),
        n('$--box'),
        [mode, `${n(`--mode-${mode}`)}`],
        [vertical, n('--vertical'), n('--horizontal')],
        [mode === 'normal', n(`$-elevation--${elevation}`)]
      )
    "
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
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
      elevation: computed(() => props.elevation),
      type: computed(() => props.type),
      size: computed(() => props.size),
      color: computed(() => props.color),
      mode: computed(() => props.mode),
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
