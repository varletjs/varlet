<template>
  <div :class="classes(n(), [vertical, n('--column'), n('--row')])" :style="rootStyles">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type CSSProperties } from 'vue'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props } from './props'

const { name, n, classes } = createNamespace('avatar-group')

export default defineComponent({
  name,
  props,
  setup(props) {
    const rootStyles = computed<CSSProperties>(() => {
      if (props.offset == null) {
        return {}
      }

      return {
        '--avatar-group-offset': toSizeUnit(props.offset),
      }
    })

    return {
      rootStyles,
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './avatarGroup';
</style>
