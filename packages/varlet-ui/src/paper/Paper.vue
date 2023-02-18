<template>
  <div
    :class="
      classes(
        n(),
        n('$--box'),
        n(`$-elevation--${elevation}`),
        [onClick, n('--cursor')],
        [round, n('--round')],
        [inline, n('$--inline-flex')]
      )
    "
    :style="{
      width: toSizeUnit(width),
      height: toSizeUnit(height),
      'border-radius': toSizeUnit(radius),
    }"
    v-ripple="{ disabled: !ripple }"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Ripple from '../ripple'
import { defineComponent } from 'vue'
import { call, createNamespace } from '../utils/components'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'

const { n, classes } = createNamespace('paper')

export default defineComponent({
  name: 'VarPaper',
  directives: { Ripple },
  props,
  setup(props) {
    const handleClick = (e: Event) => {
      call(props.onClick, e)
    }

    return {
      n,
      classes,
      toSizeUnit,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './paper';
</style>
