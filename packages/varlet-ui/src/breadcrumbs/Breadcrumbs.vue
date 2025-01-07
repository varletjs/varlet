<template>
  <div :class="n()" role="navigation" aria-label="Breadcrumbs">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { useBreadcrumbsList, type BreadcrumbsProvider } from './provide'

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
