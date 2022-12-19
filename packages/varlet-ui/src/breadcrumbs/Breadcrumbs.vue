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
import { useBreadcrumbs } from './provide'
import { createNamespace } from '../utils/components'
import type { BreadcrumbsProvider } from './provide'

const { n, classes } = createNamespace('breadcrumbs')

export default defineComponent({
  name: 'VarBreadcrumbs',
  props,
  setup(_, { slots }) {
    const { index, breadcrumb, bindBreadcrumb } = useBreadcrumbs()
    const isLast = computed(() => index.value === breadcrumb.length.value - 1)
    const isSlot = computed(() => slots.separator)
    const parentSeparator = computed(() => breadcrumb.separator.value)

    const breadcrumbsProvider: BreadcrumbsProvider = {}

    bindBreadcrumb(breadcrumbsProvider)

    return {
      n,
      classes,
      isLast,
      parentSeparator,
      isSlot,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './breadcrumbs';
</style>
