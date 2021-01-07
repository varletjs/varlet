<template>
  <transition name="var-fade">
    <span
      v-ripple="{ disabled }"
      class="var-chip var--box"
      :class="[
				`var-chip--${size}`,
				block ? 'var--flex' : 'var--inline-flex',
				plain ? `var-chip--plain-${type}` : `var-chip--${type}`,
				{ 'var-chip--round' : round,
				  'var-chip--plain' : plain }
			]"
      :style=controlStyle
      v-bind="$attrs"
    >
      <span :class="[{ 'var-chip--left' : isLeft }]"><slot name="left"></slot></span>
			<slot/>
      <span :class="[{ 'var-chip--right' : isRight }]"><slot name="right"></slot></span>
			<span v-if="closable " class="var-chip--close" @click="$props.onClose">
        <var-icon :name="`${iconName ? iconName : 'close-circle'}`"></var-icon>
      </span>
		</span>
  </transition>
</template>

<script lang="ts">
import Ripple from '../ripple'
import { defineComponent, Ref, ref, computed, ComputedRef } from 'vue'
import { props } from './props'
import Icon from '../icon'

export default defineComponent({
  name: 'VarChip',
  components: {
    [Icon.name]: Icon
  },
  directives: { Ripple },
  inheritAttrs: false,
  props,
  setup(props, { slots }) {
    const isRight: Ref<boolean> = ref(false)
    const isLeft: Ref<boolean> = ref(false)
    isRight.value = !!slots.right
    isLeft.value = !!slots.left
    const controlStyle = computed(() => ({
      color: props.plain ? props.textColor || props.color || null : props.color ? props.textColor || '#fff' : null,
      background: !props.plain ? props.color || null : null,
      borderColor: props.plain ? props.color || null : null
    }))
    return {
      controlStyle,
      isRight,
      isLeft
    }
  }
})
</script>

<style lang="less">
@import './chip';
</style>
