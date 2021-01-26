<template>
	<div class="var-switch">
		<div
			class="var-switch-block"
			:class="[disabled || formDisabled ? 'var-switch__disable' : null]"
			@click="switchActive"
			:style="styleComputed.switch"
		>
			<div
				:style="styleComputed.track"
				class="var-switch__track"
				:class="[modelValue ? 'var-switch__track-active' : null, errorMessage ? 'var-switch__track-error' : null]"
			></div>
			<div
				class="var-switch__ripple"
				:style="styleComputed.ripple"
				v-ripple="{
					disabled: !ripple || disabled || loading || formDisabled,
				}"
			>
				<div
					:style="styleComputed.handle"
					class="var-switch__handle var-elevation--2"
					:class="[modelValue ? 'var-switch__handle-active' : null, errorMessage ? 'var-switch__handle-error' : null]"
				>
					<var-loading v-if="loading" :radius="size / 2 - 2" />
				</div>
			</div>
		</div>
		<var-form-details :error-message="errorMessage" />
	</div>
</template>

<script lang="ts">
import { defineComponent, ComputedRef, computed, nextTick } from 'vue'
import { useParent, useValidation } from '../utils/components'
import { FORM_BIND_FORM_ITEM_KEY, FormProvider } from '../form/provide'
import { SwitchProvider } from './provide'
import { props } from './props'
import FormDetails from '../form-details'
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
		[FormDetails.name]: FormDetails,
	},
	directives: { Ripple },
	props,
	setup(props) {
		const { bindParent: bindForm, parentProvider: formProvider } = useParent<FormProvider, SwitchProvider>(
			FORM_BIND_FORM_ITEM_KEY
		)
		const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()

		const validate = () => v(props.rules, props.modelValue)

		const validateWithTrigger = () => nextTick(() => vt(['onChange'], 'onChange', props.rules, props.modelValue))

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
					color: props.modelValue ? props.color || '' : props.closeColor || '#999',
					width: `${+props.size * 2}px`,
					height: `${+props.size * 2}px`,
				},
				track: {
					height: `${switchHeight * 0.6}px`,
					width: `${switchWidth - 2}px`,
					borderRadius: `${switchWidth / 3}px`,
					filter: props.modelValue || errorMessage?.value ? 'opacity(.6)' : 'brightness(.6)',
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
			if (
				props.disabled ||
				props.loading ||
				props.readonly ||
				formProvider?.disabled.value ||
				formProvider?.readonly.value
			)
				return
			props.onChange?.(!props.modelValue)
			props['onUpdate:modelValue']?.(!props.modelValue)
			validateWithTrigger()
		}

		const reset = () => {
			props['onUpdate:modelValue']?.(false)
			resetValidation()
		}

		const switchProvider: SwitchProvider = {
			reset,
			validate,
			resetValidation,
		}

		bindForm?.(switchProvider)

		return {
			switchActive,
			styleComputed,
			errorMessage,
			formDisabled: formProvider?.disabled,
			formReadonly: formProvider?.readonly,
		}
	},
})
</script>

<style lang="less">
@import './switch';
</style>
