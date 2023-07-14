<template>
  <div
    :class="
      classes(
        n(),
        n('$--box'),
        [vertical, n('--vertical')],
        [withText, n('--with-text')],
        [validInset, n('--inset')],
        [dashed, n('--dashed')],
        [hairline, n('--hairline')]
      )
    "
    :style="style"
  >
    <slot v-if="$slots.default && !vertical">
      <span :class="n('text')" v-if="description && !vertical">{{ description }}</span>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, onUpdated, toRefs } from 'vue'
import { toSizeUnit } from '../utils/elements'
import { toNumber } from '@varlet/shared'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { onSmartMounted } from '@varlet/use'

const { n, classes } = createNamespace('divider')

export default defineComponent({
  name: 'VarDivider',
  props,
  setup(props, { slots }) {
    const state = reactive({ withText: false })

    const validInset = computed(() => {
      // the inset is only effective in horizontal mode
      const { vertical, inset } = props
      return !vertical && inset === true
    })

    const style = computed(() => {
      const { inset, vertical, margin } = props

      if (inset === true || vertical) {
        return { margin }
      }

      const _inset = toNumber(inset)
      const absInsetWithUnit = Math.abs(_inset) + (inset + '').replace(_inset + '', '')

      return {
        margin,
        width: `calc(100% - ${toSizeUnit(absInsetWithUnit)})`,
        left: _inset > 0 ? toSizeUnit(absInsetWithUnit) : toSizeUnit(0),
      }
    })

    const checkHasText = () => {
      // the default slot or description is only effective in horizontal mode
      const { description, vertical } = props
      state.withText = (Boolean(slots.default) || Boolean(description)) && !vertical
    }

    onSmartMounted(() => {
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
      validInset,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './divider';
</style>
