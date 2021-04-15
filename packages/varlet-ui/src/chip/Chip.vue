<template>
  <transition name="var-fade">
    <span class="var-chip var--box" :class="contentClass" :style="chipStyles" v-bind="$attrs">
      <slot name="left" />

      <span :class="[`var-chip--text-${size}`]">
        <slot />
      </span>

      <slot name="right" />

      <span v-if="closable" class="var-chip--close" @click="onClose">
        <var-icon :name="`${iconName ? iconName : 'close-circle'}`"></var-icon>
      </span>
    </span>
  </transition>
</template>

<script lang="ts">
import Icon from '../icon'
import { defineComponent, computed, ComputedRef } from 'vue'
import { props } from './props'

export default defineComponent({
  name: 'VarChip',
  components: {
    [Icon.name]: Icon,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const chipStyles = computed(() => {
      const { plain, textColor, color } = props

      if (plain) {
        return {
          color: textColor || color,
          borderColor: color,
        }
      }

      return {
        color: textColor,
        background: color,
      }
    })

    const contentClass: ComputedRef<Array<string | false | undefined>> = computed(() => {
      const { size, block, type, plain, round } = props

      const blockClass = block ? `var--flex` : 'var--inline-flex'
      const plainTypeClass = plain ? `var-chip--plain var-chip--plain-${type}` : `var-chip--${type}`
      const roundClass = round && `var-chip--round`

      return [`var-chip--${size}`, blockClass, plainTypeClass, roundClass]
    })

    return {
      chipStyles,
      contentClass,
    }
  },
})
</script>

<style lang="less">
@import './chip';
</style>
