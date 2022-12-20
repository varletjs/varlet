<template>
  <div :class="classes(n())">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { props } from './props'
import { useBreadcrumbsList } from './provide'
import { createNamespace } from '../utils/components'
import type { BreadcrumbsProvider } from './provide'
import type { ComputedRef } from 'vue'

const { n, classes } = createNamespace('breadcrumbs')

export default defineComponent({
  name: 'VarBreadcrumbs',
  inheritAttrs: false,
  props,
  setup(props) {
    const separator: ComputedRef<string> = computed(() => props.separator)
    const { bindBreadcrumbList, length } = useBreadcrumbsList()

    const breadcrumbsProvide: BreadcrumbsProvider = {
      length,
      separator,
    }

    bindBreadcrumbList(breadcrumbsProvide)

    return {
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './breadcrumbs';
</style>
