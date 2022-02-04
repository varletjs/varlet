<template>
  <div
    class="var-col var--box"
    :class="[
      span ? `var-col--span-${span}` : null,
      offset ? `var-col--offset-${offset}` : null,
      ...getSize('xs', xs),
      ...getSize('sm', sm),
      ...getSize('md', md),
      ...getSize('lg', lg),
      ...getSize('xl', xl),
    ]"
    :style="{
      paddingLeft: toSizeUnit(padding.left),
      paddingRight: toSizeUnit(padding.right),
    }"
    @click="onClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { isPlainObject, toNumber } from '../utils/shared'
import { props } from './props'
import { useRow } from './provide'
import { toSizeUnit } from '../utils/elements'
import type { Ref, ComputedRef } from 'vue'
import type { ColPadding, ColProvider, SizeDescriptor } from './provide'

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

    const getSize = (mode: string, size: string | number | SizeDescriptor | undefined) => {
      if (!size) return []
      const classes = []

      if (isPlainObject(size)) {
        const { span, offset } = size
        span && classes.push(`var-col--span-${mode}-${span}`)
        offset && classes.push(`var-col--offset-${mode}-${offset}`)
      } else {
        classes.push(`var-col--span-${mode}-${size}`)
      }
      return classes
    }

    watch([() => props.span, () => props.offset], () => {
      row?.computePadding()
    })

    bindRow?.(colProvider)

    return {
      padding,
      toNumber,
      toSizeUnit,
      getSize,
      span,
      offset,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './col';
</style>
