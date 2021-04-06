<template>
  <transition name="var-fade">
    <span v-bind="$attrs" v-ripple="{ disabled }" class="var-chip var--box" :class="contentClass" :style="controlStyle">
      <slot name="left"></slot>

      <span :class="[`var-chip--text-${size}`]">
        <slot />
      </span>

      <slot name="right"></slot>

      <span v-if="closable" class="var-chip--close" @click="$props.onClose">
        <var-icon :name="`${iconName ? iconName : 'close-circle'}`"></var-icon>
      </span>
    </span>
  </transition>
</template>

<script lang="ts">
import Ripple from '../ripple'
import { defineComponent, computed, ComputedRef } from 'vue'
import { props } from './props'
import Icon from '../icon'

export default defineComponent({
  name: 'VarChip',
  components: {
    [Icon.name]: Icon,
  },
  directives: { Ripple },
  inheritAttrs: false,
  props,
  setup(props) {
    const controlStyle = computed(() => {
      if (props.plain) {
        return {
          color: props.textColor || props.color,
          borderColor: props.color,
        }
      }

      return {
        color: props.textColor,
        background: props.color,
      }
    })

    const contentClass: ComputedRef<Array<string | false | undefined>> = computed(() => {
      const { size, block, type, plain, round } = props

      const blockClass = block ? 'var--flex' : 'var--inline-flex'
      const plainTypeClass = plain ? `var-chip--plain-${type}` : `var-chip--${type}`
      const plainClass = plain && `var-chip--plain`
      const roundClass = round && `var-chip--round`

      return [`var-chip--${size}`, blockClass, plainTypeClass, plainClass, roundClass]
    })

    return {
      controlStyle,
      contentClass,
    }
  },
})
</script>

<style lang="less">
@import './chip';
</style>
