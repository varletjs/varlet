<template>
  <teleport :to="teleport" :disabled="disabled">
    <transition name="var-snackbar-fade" @after-enter="onOpened" @after-leave="onClosed">
      <var-snackbar-core v-bind="$props" class="var-snackbar-transition">
        <slot>
          {{ content }}
        </slot>
        <template #action>
          <slot name="action"></slot>
        </template>
      </var-snackbar-core>
    </transition>
  </teleport>
</template>

<script>
import { defineComponent } from 'vue'
import VarSnackbarCore from './core'
import { useTeleport } from '../utils/components'
import { props } from './props'

export default defineComponent({
  name: 'VarSnackbar',
  components: {
    VarSnackbarCore,
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
