<template>
	<div class="var-radio" @click="handleClick" v-bind="$attrs">
		<div
			class="var-radio__action"
			v-ripple="{ disabled: disabled || !ripple }"
			:class="[checked ? 'var-radio--checked' : 'var-radio--unchecked', disabled ? 'var-radio--disabled' : null]"
			:style="{
				color: checked ? checkedColor : uncheckedColor,
			}"
		>
			<slot name="checked-icon" v-if="checked">
				<var-icon
					class="var-radio__icon"
					name="radio-marked"
					:style="{
						fontSize: iconSize,
					}"
				/>
			</slot>
			<slot name="unchecked-icon" v-else>
				<var-icon
					class="var-radio__icon"
					name="radio-blank"
					:class="[disabled ? 'var-radio--disabled' : null]"
					:style="{
						fontSize: iconSize,
					}"
				/>
			</slot>
		</div>
		<div class="var-radio__text" :class="[disabled ? 'var-radio--disabled' : null]">
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref, Ref, watch } from 'vue'
import { props } from './props'
import Ripple from '../ripple'
import Icon from '../icon'
import { useAtParentIndex, useParent } from '../utils/components'
import { RadioGroupProvider, RADIO_GROUP_COUNT_RADIO_KEY, RADIO_GROUP_BIND_RADIO_KEY } from '../radio-group/provide'
import { RadioProvider } from './provide'

export default defineComponent({
	name: 'VarRadio',
	directives: { Ripple },
	components: {
		[Icon.name]: Icon,
	},
	inheritAttrs: false,
	props,
	setup(props) {
		const { bindParent, parentProvider: radioGroupProvider } = useParent<RadioGroupProvider, RadioProvider>(
			RADIO_GROUP_BIND_RADIO_KEY
		)
		useAtParentIndex(RADIO_GROUP_COUNT_RADIO_KEY)

		const value: Ref<any> = ref(false)

		const checked: ComputedRef<boolean> = computed(() => value.value === props.checkedValue)

		watch(
			() => props.modelValue,
			(newValue) => {
				value.value = newValue
			},
			{ immediate: true }
		)

		const toggle = (changedValue?: any) => {
			if (props.disabled) {
				return
			}

			// force toggle validate value
			const isInvalidValue = changedValue !== props.uncheckedValue && changedValue !== props.checkedValue
			if (changedValue != null && (isInvalidValue || changedValue === value.value)) {
				return
			}

			if (radioGroupProvider && value.value === props.checkedValue) {
				return
			}

			if (changedValue == null) {
				changedValue = checked.value ? props.uncheckedValue : props.checkedValue
			}

			value.value = changedValue

			props['onUpdate:modelValue']?.(value.value)
			props.onChange?.(value.value)

			changedValue === props.checkedValue && radioGroupProvider?.onToggle(props.checkedValue)
		}

		const handleClick = (e: Event) => {
			if (props.disabled) {
				return
			}

			props.onClick?.(e)

			toggle()
		}

		const sync = (v: any) => {
			value.value = v === props.checkedValue ? props.checkedValue : props.uncheckedValue
		}

		bindParent?.({
			sync,
		})

		return {
			checked,
			handleClick,
			toggle,
		}
	},
})
</script>

<style lang="less">
@import './radio';
</style>
