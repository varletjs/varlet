<template>
  <div
    class="var-col var--box"
    :class="[
      span ? `var-col--span-${toNumber(span)}` : null,
      offset ? `var-col--offset-${toNumber(offset)}` : null
    ]"
    :style="{
      paddingLeft: toSizeUnit(padding.left),
      paddingRight: toSizeUnit(padding.right)
    }"
    @click="onClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { toNumber } from '../utils/shared'
import { props } from './props'
import { useRow } from './provide'
import { toSizeUnit } from '../utils/elements'
import type { Ref, ComputedRef } from 'vue'
import type { ColPadding, ColProvider } from './provide'

export default defineComponent({
  name: 'VarCol',
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
      toSizeUnit
    }
  }
})
</script>

<style lang="less">
@import "./col";
</style>
