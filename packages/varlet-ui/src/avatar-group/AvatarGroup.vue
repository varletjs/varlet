<template>
  <div :class="classes(n(), [vertical, n('--column'), n('--row')])" :style="rootStyles">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, type ComputedRef, type StyleValue } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'

const { n, classes } = createNamespace('avatar-group')

export default defineComponent({
  name: 'VarAvatarGroup',
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
@import './avatarGroup';
</style>
