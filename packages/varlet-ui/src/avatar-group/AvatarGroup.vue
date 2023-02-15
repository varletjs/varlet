<template>
  <div
    :class="classes(n(), [vertical, n('--column'), n('--row')])"
    :style="{
      '--avatar-group-offset': offset ? toSizeUnit(offset) : '',
    }"
  >
    <slot></slot>
    <slot name="rest"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'

const { n, classes } = createNamespace('avatar-group')

export default defineComponent({
  name: 'VarAvatarGroup',
  components: {},
  inheritAttrs: false,
  props,
  setup() {
    return {
      n,
      classes,
      toSizeUnit,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './avatarGroup.less';
</style>
