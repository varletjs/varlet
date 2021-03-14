<template>
  <div
    class="var-col var--box"
    :class="[
      span ? `var-col--span-${toNumber(span)}` : null,
      offset ? `var-col--offset-${toNumber(offset)}` : null
    ]"
    :style="{
      paddingLeft: toPx(padding.left),
      paddingRight: toPx(padding.right)
    }"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed, ComputedRef, watch } from 'vue'
import { toNumber } from '../utils/shared'
import { props } from './props'
import { ColPadding, ColProvider, useRow } from './provide'
import { toPx } from '../utils/elements'

export default defineComponent({
  name: 'VarCol',
  inheritAttrs: false,
  props,
  setup(props) {
    const padding: Ref<ColPadding> = ref({ left: 0, right: 0 })
    const span: ComputedRef<number> = computed(() => toNumber(props.span))
    const offset: ComputedRef<number> = computed(() => toNumber(props.offset))

    const { row, bindRow } = useRow()

    const colProvider: ColProvider = {
      span,
      offset,
      setPadding(pad: ColPadding) {
        padding.value = pad
      }
    }

    watch([() => props.span, () => props.offset], () => {
      row?.computePadding()
    })

    bindRow?.(colProvider)

    return {
      padding,
      toNumber,
      toPx,
    }
  }
})
</script>

<style lang="less">
@import "./col";
</style>
