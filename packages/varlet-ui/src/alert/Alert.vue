<template>
  <div
    :class="classes(n(), n('$--box'), n(`--${variant}`), n(`--${type}`), formatElevation(elevation, 2))"
    :style="{
      'background-color': color,
    }"
    role="alert"
  >
    <div v-if="isInternalType || $slots['icon']" :class="n('icon')">
      <slot name="icon">
        <var-icon v-if="isInternalType" :name="iconTypeMap[type]" />
      </slot>
    </div>

    <slot name="content">
      <div :class="n('content')">
        <div v-if="title || $slots['title']" :class="n('title')">
          <slot name="title">{{ title }}</slot>
        </div>
        <div v-if="message || $slots['default']" :class="n('message')">
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
import { computed, defineComponent } from 'vue'
import { call } from '@varlet/shared'
import VarIcon from '../icon'
import { createNamespace, formatElevation } from '../utils/components'
import { props, type AlertType } from './props'

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
