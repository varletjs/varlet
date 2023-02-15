<template>
  <div :class="classes(n(), [vertical, n('--column'), n('--row')])" :style="rootStyles">
    <slot></slot>
    <slot name="rest"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import type { ComputedRef, StyleValue } from 'vue'

const { n, classes } = createNamespace('avatar-group')

export default defineComponent({
  name: 'VarAvatarGroup',
  components: {},
  props,
  setup(props) {
    const rootStyles: ComputedRef<StyleValue> = computed(() => {
      if (props.offset == null) {
        return {}
      }

      return {
        '--avatar-group-offset': toSizeUnit(props.offset),
      } as StyleValue
    })

    return {
      n,
      classes,
      toSizeUnit,
      rootStyles,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './avatarGroup.less';
</style>
