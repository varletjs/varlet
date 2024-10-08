<template>
  <transition :name="`${n()}-fade`">
    <div
      :class="classes(n(), n(`--${type}`), [outline, n('--outline')], formatElevation(elevation, 2), n('$--box'))"
      :style="{
        'background-color': color,
      }"
      role="alert"
    >
      <div :class="n('icon')" v-if="isInternalType || $slots['icon']">
        <slot name="icon">
          <var-icon v-if="isInternalType" :name="ICON_TYPE_MAP[type]" />
        </slot>
      </div>
      <div :class="n('content')">
        <div :class="n('title')">
          <slot name="title">{{ title }}</slot>
        </div>
        <slot>{{ text }}</slot>
      </div>
      <div v-if="closeable" :class="n('close-icon')" @click="handleClose">
        <slot name="close-icon">
          <var-icon :name="`${iconName ? iconName : 'close-circle'}`" :namespace="namespace" />
        </slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { defineComponent, computed } from 'vue'
import { props, type AlertType } from './props'
import { createNamespace, formatElevation } from '../utils/components'
import { call } from '@varlet/shared'

const { name, n, classes } = createNamespace('alert')

const ICON_TYPE_MAP: Record<AlertType, string> = {
  success: 'checkbox-marked-circle',
  warning: 'warning',
  info: 'information',
  error: 'error',
}

export default defineComponent({
  name,
  components: {
    VarIcon,
  },
  props,
  setup(props) {
    const isInternalType = computed(() => ['info', 'success', 'error', 'warning'].includes(props.type))

    function handleClose(e: Event) {
      call(props.onClose, e)
    }

    return {
      ICON_TYPE_MAP,
      n,
      classes,
      isInternalType,
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
