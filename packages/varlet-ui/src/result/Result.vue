<template>
  <div :class="classes(n())">
    <slot name="image">
      <var-icon v-if="status" :name="iconName" :size="imageSize" :class="n(`--${status}`)"></var-icon>
    </slot>
    <slot name="title">
      <div v-if="title" :class="n('title')">{{ title }}</div>
    </slot>
    <slot name="description">
      <div v-if="description" :class="n('description')">{{ description }}</div>
    </slot>
    <div :class="n('footer')" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { computed, ComputedRef, defineComponent } from 'vue'
import { props } from './props'

import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('result')

const STATUS_ICON_MAP = {
  info: 'information-outline',
  success: 'check-circle-outline',
  warning: 'warning',
  error: 'close-circle-outline',
}

export default defineComponent({
  name: 'VarResult',
  components: {
    VarIcon,
  },
  props,
  setup(props) {
    const iconName: ComputedRef<string> = computed(() => {
      const { status } = props

      return status ? STATUS_ICON_MAP[status] : ''
    })

    const statusColor: ComputedRef<string> = computed(() => {
      return ''
    })

    return {
      n,
      classes,
      iconName,
      statusColor,
    }
  },
})
</script>

<style lang="less">
@import './result.less';
</style>
