<template>
  <div
    :class="classes(n(), n(`--${type}`), [outline, n('--outline')], formatElevation(elevation, 2), n('$--box'))"
    :style="{
      'background-color': color,
    }"
    role="alert"
  >
    <div :class="n('--prepend')" v-if="$slots['prepend']">
      <slot name="prepend" />
    </div>
    <div :class="n('content')">
      <div :class="n('title')">
        <slot name="title">{{ title }}</slot>
      </div>
      <slot>{{ text }}</slot>
    </div>
    <div v-if="closeable" :class="n('--close')" @click="handleClose">
      <slot name="close">
        <var-icon :name="`${iconName ? iconName : 'close-circle'}`" :namespace="namespace" />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { defineComponent } from 'vue'
import { props } from './props'
import { createNamespace, formatElevation } from '../utils/components'
import { call } from '@varlet/shared'

const { name, n, classes } = createNamespace('alert')

export default defineComponent({
  name,
  components: {
    VarIcon,
  },
  props,
  setup(props) {
    function handleClose(e: Event) {
      call(props.onClose, e)
    }

    return {
      n,
      classes,
      formatElevation,
      handleClose,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../icon/icon';
@import './alert';
</style>
