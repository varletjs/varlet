<template>
	<div
		class="var-switch"
		:class="`var-switch ${disabled ? ' var-switch__disable' : ''}`"
		@click="switchActive"
		:style="styleComputed.switch"
	>
		<div
			:style="styleComputed.track"
			:class="`var-switch__track${modelValue ? ' var-switch__track-active' : ''}`"
		></div>
		<div
			class="var-switch__ripple"
			:style="styleComputed.ripple"
			v-ripple="{
				disabled: !ripple || disabled || loading,
			}"
		>
			<div
				:style="styleComputed.handle"
				:class="`var-switch__handle var-elevation--2${modelValue ? ' var-switch__handle-active' : ''}`"
			>
				<var-loading v-if="loading" :radius="size / 2 - 2" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ComputedRef, computed } from 'vue'
import { props } from './props'
import Loading from '../Loading'
import Ripple from '../ripple'

type StyleProps = {
	width: string
	height: string
	left: string
	borderRadius: string
	backgroundColor: string
	color: string
}

export default defineComponent({
	name: 'VarSwitch',
	components: {
		[Loading.name]: Loading,
	},
	directives: { Ripple },
	props,
	setup(props) {
		const styleComputed: ComputedRef<Record<string, Partial<StyleProps>>> = computed(() => {
			const switchWidth = +props.size * 2
			const switchHeight = +props.size * 1.2

			return {
				handle: {
					width: `${props.size}px`,
					height: `${props.size}px`,
					backgroundColor: props.modelValue ? props.color || '' : props.closeColor || '',
					color: props.loadingColor && props.loadingColor,
				},
				ripple: {
					left: props.modelValue ? `${+props.size / 2}px` : `-${+props.size / 2}px`,
					color: props.modelValue ? props.closeColor || '#999' : props.color || '',
					width: `${+props.size * 2}px`,
					height: `${+props.size * 2}px`,
				},
				track: {
					height: `${switchHeight * 0.6}px`,
					width: `${switchWidth - 2}px`,
					borderRadius: `${switchWidth / 3}px`,
					filter: props.modelValue ? 'opacity(.6)' : 'brightness(.6)',
					backgroundColor: props.modelValue ? props.color || '' : props.closeColor || '',
				},
				switch: {
					height: `${switchHeight}px`,
					width: `${switchWidth}px`,
				},
			}
		})

		const switchActive = () => {
			props.onClick?.()
			if (props.disabled || props.loading) return
			props.onChange?.(!props.modelValue)
			props['onUpdate:modelValue']?.(!props.modelValue)
		}

		return {
			switchActive,
			styleComputed,
		}
	},
})
</script>

<style lang="less">
@import './switch';
</style>
