<template>
  <div :class="classes(n())">
    <div :class="classes(n('content'), !isLast ? n('--active') : null)">
      <slot />
      <slot v-if="!isLast" name="separator">
        <div :class="classes(n('separator'))">
          {{ separator ?? parentSeparator }}
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { props } from './props'
import { useBreadcrumb } from './provide'
import { createNamespace } from '../utils/components'
import type { BreadcrumbProvider } from './provide'

const { n, classes } = createNamespace('breadcrumb')

export default defineComponent({
  name: 'VarBreadcrumbs',
  props,
  setup() {
    const { index, breadcrumb, bindBreadcrumb } = useBreadcrumb()
    const isLast = computed(() => index.value === breadcrumb.length.value - 1)
    const parentSeparator = computed(() => breadcrumb.separator.value)

    const breadcrumbProvider: BreadcrumbProvider = {}

    bindBreadcrumb(breadcrumbProvider)

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
