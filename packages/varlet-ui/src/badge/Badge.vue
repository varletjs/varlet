<template>
  <div class="var-badge">
    <transition name="var-fade">
      <span
        v-show="!hidden"
        :class="[
      `var-badge--${type}`,
      'var-badge__content',
      {'var-badge--dot':dot},
      position?`var-badge--${position} var-badge--position`:null,
      dotPosition
      ]"
        :style="{background:color}"
      >
        <var-icon v-if="icon" :name="icon"></var-icon>
        <span v-else>{{values}}</span>
      </span>
    </transition>
    <slot></slot>
  </div>
</template>

<script lang="ts">
	import { defineComponent, Ref, ref } from 'vue'
	import { props } from './props'
	import Icon from '../icon'

	export default defineComponent({
		name: 'VarBadge',
		components: {
			[Icon.name]: Icon
		},
		props,
		setup(props) {
			console.log(typeof props.value === 'number' && typeof props.maxValue === 'number')
			console.log(props)
			const values: Ref<number | string | null | undefined> = ref(null)
			const dotPosition: Ref<string | null> = ref(null)
			if (props.dot) {
				values.value = null
			} else if (typeof props.value === 'number' && typeof props.maxValue === 'number') {
				values.value = props.value > props.maxValue ? `${props.maxValue}+` : props.value
			} else {
				values.value = props.value
			}
			if(props.position&&props.dot){
				dotPosition.value = props.position.indexOf('right') !== -1 ? 'var-badge--dot-right' : props.position.indexOf('left') !== -1 ? 'var-badge--dot-left' : null
			}
			return {
				values,
        dotPosition
			}
		}
	})
</script>

<style lang="less">
  @import "./badge";
</style>
