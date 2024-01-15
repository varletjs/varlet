<template>
  <Teleport :to="teleport === false ? undefined : teleport" :disabled="disabled || teleport === false">
    <transition :name="`${n()}-fade`" @after-enter="onOpened" @after-leave="onClosed">
      <var-snackbar-core v-bind="$props" :class="n('transition')">
        <slot />
        <template #icon v-if="$slots.icon">
          <slot name="icon" />
        </template>
        <template #action v-if="$slots.action">
          <slot name="action" />
        </template>
      </var-snackbar-core>
    </transition>
  </Teleport>
</template>

<script lang="ts">
import VarSnackbarCore from './core.vue'
import { defineComponent } from 'vue'
import { createNamespace, useTeleport } from '../utils/components'
import { props } from './props'

const { name, n } = createNamespace('snackbar')

export default defineComponent({
  name,
  components: { VarSnackbarCore },
  props,
  setup() {
    const { disabled } = useTeleport()

    return {
      disabled,
      n,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
</style>
