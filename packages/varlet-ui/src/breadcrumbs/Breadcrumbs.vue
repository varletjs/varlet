<template>
  <div :class="n()">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, type ComputedRef } from 'vue'
import { props } from './props'
import { useBreadcrumbsList, type BreadcrumbsProvider } from './provide'
import { createNamespace } from '../utils/components'

const { n } = createNamespace('breadcrumbs')

export default defineComponent({
  name: 'VarBreadcrumbs',
  props,
  setup(props) {
    const separator: ComputedRef<string> = computed(() => props.separator)
    const { bindBreadcrumbList, length } = useBreadcrumbsList()

    const breadcrumbsProvider: BreadcrumbsProvider = {
      length,
      separator,
    }

    bindBreadcrumbList(breadcrumbsProvider)

    return { n }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './breadcrumbs';
</style>
