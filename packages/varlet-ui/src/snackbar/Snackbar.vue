<template>
  <Teleport :to="teleport === false ? undefined : teleport" :disabled="disabled || teleport === false">
    <transition :name="`${n()}-fade`" @after-enter="onOpened" @after-leave="onClosed">
      <var-snackbar-core v-bind="$props" :class="n('transition')">
        <slot>{{ content }}</slot>
        <template #icon>
          <slot name="icon" />
        </template>
        <template #action>
          <slot name="action" />
        </template>
      </var-snackbar-core>
    </transition>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VarSnackbarCore from './core.vue'
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
