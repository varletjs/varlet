<template>
  <teleport :to="teleport" :disabled="disabled">
    <transition name="var-site-snackbar-fade" @after-enter="onOpened" @after-leave="onClosed">
      <var-site-snackbar-core v-bind="$props" class="var-site-snackbar-transition">
        <slot>{{ content }}</slot>
        <template #action>
          <slot name="action" />
        </template>
      </var-site-snackbar-core>
    </transition>
  </teleport>
</template>

<script>
import VarSiteSnackbarCore from './core'
import { defineComponent } from 'vue'
import { useTeleport } from '../utils/components'
import { props } from './props'

export default defineComponent({
  name: 'VarSiteSnackbar',
  components: {
    VarSiteSnackbarCore,
  },
  props,
  setup() {
    const { disabled } = useTeleport()

    return {
      disabled,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
</style>
