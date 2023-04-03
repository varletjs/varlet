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
    }"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { isPlainObject, toNumber } from '@varlet/shared'
import { props } from './props'
import { useRow } from './provide'
import { padStartFlex, toSizeUnit } from '../utils/elements'
import { createNamespace, call } from '../utils/components'
import type { Ref, ComputedRef } from 'vue'
import type { ColPadding, ColProvider, ColSizeDescriptor } from './provide'

const { n, classes } = createNamespace('col')

export default defineComponent({
  name: 'VarCol',
  props,
  setup(props) {
    const padding: Ref<ColPadding> = ref({ left: 0, right: 0 })
    const span: ComputedRef<number> = computed(() => toNumber(props.span))
    const offset: ComputedRef<number> = computed(() => toNumber(props.offset))
    const { row, bindRow } = useRow()
    const colProvider: ColProvider = {
      setPadding(pad: ColPadding) {
        padding.value = pad
      },
    }

    const getSize = (mode: string, size: string | number | ColSizeDescriptor | undefined) => {
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

    const handleClick = (e: Event) => {
      call(props.onClick, e)
    }

    watch([() => props.span, () => props.offset], () => {
      row?.computePadding()
    })

    call(bindRow, colProvider)

    return {
      n,
      classes,
      padding,
      toNumber,
      toSizeUnit,
      getSize,
      span,
      offset,
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
