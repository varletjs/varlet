<template>
  <div :class="classes(n())">
    <div :class="classes(n('content'), !isLast ? n('--active') : null)">
      <slot />
      <template v-if="!isLast">
        <slot name="separator" />
        <div v-if="!isSlot" :class="classes(n('separator'))">
          {{ separator ?? parentSeparator }}
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent , computed } from 'vue'
import { props } from './props'
import { useBreadcrumbItem } from './provide'
import { createNamespace } from '../utils/components'
import type { BreadcrumbItemProvider } from './provide'

const { n, classes } = createNamespace('breadcrumb-item')

export default defineComponent({
  name: 'VarBreadcrumbItem',
  props,
  setup(_, { slots }) {
    const { index, breadcrumb, bindBreadcrumb } = useBreadcrumbItem()
    const isLast = computed(() => index.value === breadcrumb.length.value - 1)
    const isSlot = computed(() => slots.separator)
    const parentSeparator = computed(() => breadcrumb.separator.value)

    const breadcrumbItemProvider: BreadcrumbItemProvider = {}

    bindBreadcrumb(breadcrumbItemProvider)

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
@import './BreadcrumbItem';
</style>
