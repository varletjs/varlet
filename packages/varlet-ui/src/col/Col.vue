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
import { defineComponent, ref, computed, watch } from 'vue'
import { isPlainObject, toNumber, call } from '@varlet/shared'
import { props } from './props'
import { useRow, type ColPadding, type ColProvider, type ColSizeDescriptor } from './provide'
import { padStartFlex, toSizeUnit } from '../utils/elements'
import { createNamespace } from '../utils/components'

const { name, n, classes } = createNamespace('col')

export default defineComponent({
  name,
  props,
  setup(props) {
    const span = computed(() => toNumber(props.span))
    const offset = computed(() => toNumber(props.offset))
    const padding = ref<ColPadding>({ left: 0, right: 0, top: 0, bottom: 0 })
    const { row, bindRow } = useRow()

    const colProvider: ColProvider = {
      setPadding(pad: ColPadding) {
        padding.value = pad
      },
    }

    watch([() => props.span, () => props.offset], () => {
      row?.computePadding()
    })

    call(bindRow, colProvider)

    function getSize(mode: string, size: string | number | ColSizeDescriptor | undefined) {
      const classes: string[] = []

      if (size == null) {
        return classes
      }

      if (isPlainObject(size)) {
        const { offset, span } = size

        Number(span) >= 0 && classes.push(n(`--span-${mode}-${span}`))
        offset && classes.push(n(`--offset-${mode}-${offset}`))
      } else {
        Number(size) >= 0 && classes.push(n(`--span-${mode}-${size}`))
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
