<template>
  <teleport :to="teleport" :disabled="disabled">
    <transition :name="`${n()}-fade`" @after-enter="onOpened" @after-leave="onClosed">
      <var-snackbar-core v-bind="$props" class="var-snackbar__transition">
        <slot>{{ content }}</slot>
        <template #action>
          <slot name="action" />
        </template>
      </var-snackbar-core>
    </transition>
  </teleport>
</template>

<script>
import { defineComponent } from 'vue'
import VarSnackbarCore from './core'
import { createNamespace, useTeleport } from '../utils/components'
import { props } from './props'

const { n } = createNamespace('snackbar')

export default defineComponent({
  name: 'VarSnackbar',
  components: {
    VarSnackbarCore,
  },
  props,
  setup() {
    const { disabled } = useTeleport()

    return {
      n,
      disabled,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
</style>
