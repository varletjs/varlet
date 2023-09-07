<template>
  <div
    :class="
      classes(
        n(),
        n('$--box'),
        [vertical, n('--vertical')],
        [withText, n('--with-text')],
        [withPresetInset, n('--inset')],
        [dashed, n('--dashed')],
        [hairline, n('--hairline')]
      )
    "
    :style="style"
  >
    <slot v-if="!vertical">
      <span :class="n('text')" v-if="description">{{ description }}</span>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onUpdated } from 'vue'
import { toSizeUnit } from '../utils/elements'
import { toNumber, isBoolean } from '@varlet/shared'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { onSmartMounted } from '@varlet/use'

const { name, n, classes } = createNamespace('divider')

export default defineComponent({
  name,
  props,
  setup(props, { slots }) {
    const withText = ref(false)
    const withPresetInset = computed(() => {
      // the inset is only effective in horizontal mode
      const { vertical, inset } = props
      return !vertical && inset === true
    })
    const style = computed(() => {
      const { inset, vertical, margin } = props

      if (isBoolean(inset) || vertical) {
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

    onSmartMounted(checkHasText)
    onUpdated(checkHasText)

    function checkHasText() {
      // the default slot or description is only effective in horizontal mode
      const { description, vertical } = props
      withText.value = (slots.default || description != null) && !vertical
    }

    return {
      n,
      classes,
      withText,
      style,
      withPresetInset,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './divider';
</style>
