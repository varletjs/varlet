<template>
  <div
    :class="
      classes(
        n(),
        n('$--box'),
        formatElevation(elevation, 2),
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
import { createNamespace, formatElevation } from '../utils/components'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'
import { call } from '@varlet/shared'

const { name, n, classes } = createNamespace('paper')

export default defineComponent({
  name,
  directives: { Ripple },
  props,
  setup(props) {
    function handleClick(e: Event) {
      call(props.onClick, e)
    }

    return {
      n,
      classes,
      formatElevation,
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
