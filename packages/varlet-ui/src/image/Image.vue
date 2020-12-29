<template>
	<div
		class="var-image var--box"
		v-ripple="{ disabled: !ripple }"
		:style="{
			width: width,
			height: height,
			'border-radius': radius,
		}"
		:class="[!block ? 'var--inline-block' : null]"
	>
		<img
			class="var-image__image"
			:alt="alt"
			:lazy-error="error"
			:lazy-loading="loading"
			:style="{
				'object-fit': fit,
			}"
			@load="handleLoad"
			@error="handleError"
			v-lazy="src"
			v-bind="$attrs"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'
import Ripple from '../ripple'
import Lazy, { LazyHTMLElement } from '../lazy'

export default defineComponent({
	name: 'VarImage',
	directives: {
		Lazy,
		Ripple,
	},
	inheritAttrs: false,
	props,
	setup(props) {
		const handleLoad = (e: Event) => {
			const el: LazyHTMLElement = e.currentTarget as LazyHTMLElement

			el._lazy.state === 'success' && props.onLoad?.(e, 'success')
			el._lazy.state === 'error' && props.onError?.(e, 'error')
		}

		const handleError = (e: Event) => {
			const el: LazyHTMLElement = e.currentTarget as LazyHTMLElement

			el._lazy.state !== 'pending' && props.onError?.(e, 'native-error')
		}

		return {
			handleLoad,
			handleError,
		}
	},
})
</script>

<style lang="less">
@import './image';
</style>
