<template>
  <div
    :class="
      classes(
        n(),
        n('$--box'),
        [vertical, n('--vertical')],
        [withText, n('--with-text')],
        [isInset, n('--inset')],
        [dashed, n('--dashed')],
        [hairline, n('--hairline')]
      )
    "
    :style="style"
  >
    <slot>
      <span :class="n('text')" v-if="description">{{ description }}</span>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, onUpdated, toRefs } from 'vue'
import { toSizeUnit } from '../utils/elements'
import { isBoolean, toNumber } from '@varlet/shared'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { useMounted } from '@varlet/use'

const { n, classes } = createNamespace('divider')

export default defineComponent({
  name: 'VarDivider',
  props,
  setup(props, { slots }) {
    const state = reactive({ withText: false })
    const isInset = computed(() => {
      return isBoolean(props.inset) ? props.inset : true
    })

    const style = computed(() => {
      const { inset, vertical, margin } = props
      const baseStyle = { margin }

      if (isBoolean(inset) || inset === 0) {
        return { ...baseStyle }
      }

      const _inset = toNumber(inset)
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

    const checkHasText = () => {
      state.withText = Boolean(slots.default) || Boolean(props.description)
    }

    useMounted(() => {
      checkHasText()
    })

    onUpdated(() => {
      checkHasText()
    })

    return {
      n,
      classes,
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
