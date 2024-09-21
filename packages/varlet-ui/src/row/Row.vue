<template>
  <div
    :class="classes(n(), n('$--box'))"
    :style="{
      justifyContent: padStartFlex(justify),
      alignItems: padStartFlex(align),
      margin: `${-average[0]}px ${-average[1]}px`,
    }"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { props } from './props'
import { isArray, call } from '@varlet/shared'
import { useCols } from './provide'
import { toPxNum, padStartFlex } from '../utils/elements'
import { createNamespace } from '../utils/components'

const { name, n, classes } = createNamespace('row')

export default defineComponent({
  name,
  props,
  setup(props) {
    const average = computed(() =>
      isArray(props.gutter) ? props.gutter.map((numeric) => toPxNum(numeric) / 2) : [0, toPxNum(props.gutter) / 2]
    )
    const { bindCols } = useCols()

    bindCols({ average })

    function handleClick(e: Event) {
      call(props.onClick, e)
    }

    return {
      average,
      n,
      classes,
      handleClick,
      padStartFlex,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './row';
</style>
