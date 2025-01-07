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
import { computed, defineComponent } from 'vue'
import { call, isArray } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { padStartFlex, toPxNum } from '../utils/elements'
import { props } from './props'
import { useCols } from './provide'

const { name, n, classes } = createNamespace('row')

export default defineComponent({
  name,
  props,
  setup(props) {
    const average = computed(() =>
      isArray(props.gutter) ? props.gutter.map((numeric) => toPxNum(numeric) / 2) : [0, toPxNum(props.gutter) / 2],
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
