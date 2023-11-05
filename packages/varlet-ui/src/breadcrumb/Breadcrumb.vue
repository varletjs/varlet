<template>
  <div :class="n()">
    <div :class="classes(n('content'), [!isLast, n('--active')])" @click="handleClick">
      <slot />
    </div>
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
import { call } from '@varlet/shared'

const { name, n, classes } = createNamespace('breadcrumb')

export default defineComponent({
  name,
  props,
  setup(props) {
    const { index, breadcrumb, bindBreadcrumb } = useBreadcrumb()
    const isLast = computed(() => index.value === breadcrumb.length.value - 1)
    const parentSeparator = computed(() => breadcrumb.separator.value)

    bindBreadcrumb(null)

    function handleClick(e: Event) {
      if (isLast.value) {
        return
      }

      call(props.onClick, e)
    }

    return {
      n,
      classes,
      isLast,
      parentSeparator,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './breadcrumb';
</style>
