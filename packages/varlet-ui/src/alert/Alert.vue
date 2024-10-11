<template>
  <div
    :class="classes(n(), n('$--box'), n(`--${variant}`), n(`--${type}`), formatElevation(elevation, 2))"
    :style="{
      'background-color': color,
    }"
    role="alert"
  >
    <div :class="n('icon')" v-if="isInternalType || $slots['icon']">
      <slot name="icon">
        <var-icon v-if="isInternalType" :name="iconTypeMap[type]" />
      </slot>
    </div>

    <slot name="content">
      <div :class="n('content')">
        <div :class="n('title')" v-if="title || $slots['title']">
          <slot name="title">{{ title }}</slot>
        </div>
        <div :class="n('message')" v-if="message || $slots['default']">
          <slot>{{ message }}</slot>
        </div>
      </div>
    </slot>

    <div v-if="closeable" :class="n('close-icon')" @click="handleClose">
      <slot name="close-icon">
        <var-icon name="close-circle" />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { defineComponent, computed } from 'vue'
import { props, type AlertType } from './props'
import { createNamespace, formatElevation } from '../utils/components'
import { call } from '@varlet/shared'

const { name, n, classes } = createNamespace('alert')

const iconTypeMap: Record<AlertType, string> = {
  success: 'checkbox-marked-circle',
  warning: 'warning',
  info: 'information',
  danger: 'error',
}

export default defineComponent({
  name,
  components: {
    VarIcon,
  },
  props,
  setup(props) {
    const isInternalType = computed(() => ['info', 'success', 'danger', 'warning'].includes(props.type))

    function handleClose(e: Event) {
      call(props.onClose, e)
    }

    return {
      n,
      classes,
      iconTypeMap,
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
