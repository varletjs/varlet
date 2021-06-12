<template>
  <div
    class="var-divider var--box"
    :class="[
      vertical ? 'var-divider--vertical' : null,
      withText ? 'var-divider--with-text' : null,
      isInset ? 'var-divider--inset' : null,
      dashed ? 'var-divider--dashed' : null,
    ]"
    :style="style"
  >
    <slot>
      <span class="var-divider__text" v-if="description">{{ description }}</span>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, onMounted, toRefs } from 'vue'
import { toSizeUnit } from '../utils/elements'
import { isBool, toNumber } from '../utils/shared'
import { props } from './props'

export default defineComponent({
  name: 'VarDivider',
  props,
  setup(props, { slots }) {
    const state = reactive({ withText: false })

    const isInset = computed(() => (isBool(props.inset) ? props.inset : true))

    const style = computed(() => {
      const { inset, vertical, margin } = props
      const baseStyle = {
        margin,
      }

      if (isBool(inset) || inset === 0) return { ...baseStyle }

      // -18px -> -18
      const _inset = toNumber(inset)
      // -18px -> 18px
      const absInsetWithUnit = Math.abs(_inset) + (inset + '').replace(_inset + '', '')
      return vertical
        ? {
            ...baseStyle,
            height: `calc(80% - ${toSizeUnit(absInsetWithUnit)})`,
          }
        : {
            ...baseStyle,
            width: `calc(100% - ${toSizeUnit(absInsetWithUnit)})`,
            left: _inset > 0 ? toSizeUnit(absInsetWithUnit) : toSizeUnit(0),
          }
    })

    onMounted(() => {
      state.withText = Boolean(slots.default?.().length) || Boolean(props.description)
    })

    return {
      ...toRefs(state),
      style,
      isInset,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './divider';
</style>
