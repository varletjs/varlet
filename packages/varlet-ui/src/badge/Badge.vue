<template>
  <div class="var-badge">
    <transition name="var-fade">
      <span
        v-show="!hidden"
        :class="[
      `var-badge--${type}`,
      'var-badge__content',
      {'var-badge--dot':dot},
      position?`var-badge--${position} var-badge--position`:null
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
			const values: Ref<number | string | null | undefined> = ref(null)
			if (props.dot) {
				values.value = null
			} else if (typeof props.value === 'number' && typeof props.maxValue === 'number') {
				values.value = props.value > props.maxValue ? `${props.maxValue}+` : props.value
			} else {
				values.value = props.value
			}
			return {
				values
			}
		}
	})
</script>

<style lang="less">
  @import "./badge";
</style>
