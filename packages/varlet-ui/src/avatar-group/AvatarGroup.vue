<template>
  <div
    :class="classes(n(), [vertical, n('--column'), n('--row')])"
    :style="{
      '--offset': `${offset}px`,
    }"
  >
    <slot name="avatar" v-for="(option, index) in renderOptions" v-bind="option" :key="index">
      <var-avatar :src="option.src" bordered />
    </slot>
    <slot name="rest" v-if="restOptions.length" v-bind="{ options: restOptions, rest: restOptions.length }">
      <var-avatar bordered> +{{ restOptions.length }} </var-avatar>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import VarAvatar from '../avatar'

const { n, classes } = createNamespace('avatar-group')

export default defineComponent({
  name: 'VarAvatarGroup',
  components: {
    VarAvatar,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const renderOptions = computed(() => {
      if (props.options.length <= props.max) return props.options

      return props.options.filter((_, index) => index < props.max)
    })

    const restOptions = computed(() => {
      if (props.options.length <= props.max) return []

      return props.options.filter((_, index) => index >= props.max)
    })

    return {
      n,
      classes,
      renderOptions,
      restOptions,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './avatarGroup.less';
</style>
