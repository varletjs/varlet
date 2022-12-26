<template>
  <div :class="classes(n(), [!isLast, n('--active')])" @click="onClick">
    <slot />
    <slot v-if="!isLast" name="separator">
      <div :class="n('separator')">
        {{ separator ?? parentSeparator }}
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { props } from './props'
import { useBreadcrumb } from './provide'
import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('breadcrumb')

export default defineComponent({
  name: 'VarBreadcrumb',
  props,
  setup() {
    const { index, breadcrumb, bindBreadcrumb } = useBreadcrumb()
    const isLast = computed(() => index.value === breadcrumb.length.value - 1)
    const parentSeparator = computed(() => breadcrumb.separator.value)

    bindBreadcrumb(null)

    return {
      n,
      classes,
      isLast,
      parentSeparator,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './breadcrumb';
</style>
