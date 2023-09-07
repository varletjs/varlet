<template>
  <div :class="n()">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { props } from './props'
import { useBreadcrumbsList, type BreadcrumbsProvider } from './provide'
import { createNamespace } from '../utils/components'

const { name, n } = createNamespace('breadcrumbs')

export default defineComponent({
  name,
  props,
  setup(props) {
    const separator = computed<string>(() => props.separator)
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
