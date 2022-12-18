<template>
  <div :class="classes(n())">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { props } from './props'
import { useBreadcrumbList } from './provide'
import { createNamespace } from '../utils/components'
import type { BreadcrumbProvider } from './provide'
import type { ComputedRef } from 'vue'

const { n, classes } = createNamespace('breadcrumb')

export default defineComponent({
  name: 'VarBreadcrumbs',
  inheritAttrs: false,
  props,
  setup(props) {
    const separator: ComputedRef<string> = computed(() => props.separator)
    const { bindBreadcrumbList, length } = useBreadcrumbList()

    const breadcrumbProvide: BreadcrumbProvider = {
      length,
      separator,
    }

    bindBreadcrumbList(breadcrumbProvide)

    return {
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './breadcrumb';
</style>
