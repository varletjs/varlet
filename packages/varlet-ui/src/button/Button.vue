<template>
	<button
		v-ripple="{ disabled }"
		class="var--box var-button"
		:class="[
			`var-button--${size}`,
			block ? 'var--flex' : null,
			disabled ? 'var-button--disabled' : null,
			plain ? `var-button--plain-${type}` : `var-button--${type}`,
			plain ? 'var-button--plain' : 'var-elevation--2',
			round ? 'var-button--round' : null,
			outline ? 'var-button--outline' : null,
		]"
		:style="{
			color: color,
			background: background,
		}"
		:disabled="disabled"
		@click="handleClick"
		@touchstart="handleTouchstart"
	>
		<var-loading :type="loadingType" :size="loadingSize" v-if="loading" />
		<slot v-else />
	</button>
</template>

<script lang="ts">
import Ripple from '../ripple'
import Loading from '../Loading'
import { defineComponent } from 'vue'
import { props } from './props'

export default defineComponent({
	name: 'VarButton',
	components: {
		[Loading.name]: Loading,
	},
	directives: { Ripple },
	props,
	setup(props) {
		const handleClick = (event: Event) => {
			if (props.loading || props.disabled) {
				return
			}

			props.onClick?.(event)
		}

		const handleTouchstart = (event: Event) => {
			if (props.loading || props.disabled) {
				return
			}

			props.onTouchstart?.(event)
		}

		return {
			handleClick,
			handleTouchstart,
		}
	},
})
</script>

<style lang="less">
@import './button';
</style>
