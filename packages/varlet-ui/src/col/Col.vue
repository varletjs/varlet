<template>
  <div
    :class="
      classes(
        n(),
        n('$--box'),
        [span >= 0, n(`--span-${span}`)],
        [offset, n(`--offset-${offset}`)],
        ...getSize('xs', xs),
        ...getSize('sm', sm),
        ...getSize('md', md),
        ...getSize('lg', lg),
        ...getSize('xl', xl)
      )
    "
    :style="{
      flexDirection: direction,
      justifyContent: padStartFlex(justify),
      alignItems: padStartFlex(align),
      paddingLeft: toSizeUnit(padding.left),
      paddingRight: toSizeUnit(padding.right),
      paddingTop: toSizeUnit(padding.top),
      paddingBottom: toSizeUnit(padding.bottom),
    }"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { isPlainObject, toNumber, call } from '@varlet/shared'
import { props } from './props'
import { useRow, type ColPadding, type ColSizeDescriptor } from './provide'
import { padStartFlex, toSizeUnit } from '../utils/elements'
import { createNamespace } from '../utils/components'

const { name, n, classes } = createNamespace('col')

export default defineComponent({
  name,
  props,
  setup(props) {
    const span = computed(() => toNumber(props.span))
    const offset = computed(() => toNumber(props.offset))
    const padding = computed<ColPadding>(() => {
      const [y = 0, x = 0] = row?.average.value ?? []
      return { left: x, right: x, top: y, bottom: y }
    })

    const { row, bindRow } = useRow()

    call(bindRow, null)

    function getSize(mode: string, size: string | number | ColSizeDescriptor | undefined) {
      const classes: string[] = []

      if (size == null) {
        return classes
      }

      if (isPlainObject(size)) {
        const { offset, span } = size

        if (Number(span) >= 0) {
          classes.push(n(`--span-${mode}-${span}`))
        }

        if (offset) {
          classes.push(n(`--offset-${mode}-${offset}`))
        }

        return classes
      }

      if (Number(size) >= 0) {
        classes.push(n(`--span-${mode}-${size}`))
      }

      return classes
    }

    function handleClick(e: Event) {
      call(props.onClick, e)
    }

    return {
      span,
      offset,
      padding,
      n,
      classes,
      toNumber,
      toSizeUnit,
      getSize,
      handleClick,
      padStartFlex,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './col';
</style>
