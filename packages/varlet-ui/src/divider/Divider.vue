<template>
  <div
    class="var-divider"
    :class="[vertical ? 'var-divider--vertical' : null, withText ? 'var-divider--with-text' : null]"
    :style="style"
  >
    <span class="var-divider__text">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, onMounted, toRefs } from 'vue'
import { isBool, isNumber } from '../utils/shared'
import { props } from './props'

export default defineComponent({
  name: 'VarDivider',
  props,
  setup(props, { slots }) {
    const state = reactive({ withText: false })

    const style = computed(() => {
      const { inset, vertical } = props

      if ((isBool(inset) && inset) || (isNumber(inset) && inset > 0)) {
        return vertical
          ? {
              height: `calc(80% - ${isBool(inset) ? 16 : inset}px)`,
            }
          : {
              width: `calc(100% - ${isBool(inset) ? 72 : inset}px)`,
              left: `${isBool(inset) ? 72 : inset}px`,
            }
      }

      return {}
    })

    onMounted(() => {
      state.withText = Boolean(slots.default?.().length)
    })

    return {
      ...toRefs(state),
      style,
    }
  },
})
</script>

<style lang="less">
@import './divider';
</style>
