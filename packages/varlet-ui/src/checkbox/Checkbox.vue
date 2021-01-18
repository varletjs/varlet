<template>
	<div class="var-checkbox" @click="handleClick" v-bind="$attrs">
		<div
			class="var-checkbox__action"
			v-ripple="{ disabled: disabled || !ripple }"
			:class="[
				checked ? 'var-checkbox--checked' : 'var-checkbox--unchecked',
				disabled ? 'var-checkbox--disabled' : null,
			]"
			:style="{
				color: checked ? checkedColor : uncheckedColor,
			}"
		>
			<slot name="checked-icon" v-if="checked">
				<var-icon
					class="var-checkbox__icon"
					name="checkbox-marked"
					:style="{
						fontSize: iconSize,
					}"
				/>
			</slot>
			<slot name="unchecked-icon" v-else>
				<var-icon
					class="var-checkbox__icon"
					name="checkbox-blank-outline"
					:class="[disabled ? 'var-checkbox--disabled' : null]"
					:style="{
						fontSize: iconSize,
					}"
				/>
			</slot>
		</div>
		<div class="var-checkbox__text" :class="[disabled ? 'var-checkbox--disabled' : null]">
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed, ComputedRef, watch } from 'vue'
import { props } from './props'
import Icon from '../icon'
import Ripple from '../ripple'
import { useAtParentIndex, useParent } from '../utils/components'
import {
	CHECKBOX_GROUP_BIND_CHECKBOX_KEY,
	CHECKBOX_GROUP_COUNT_CHECKBOX_KEY,
	CheckboxGroupProvider,
} from '../checkbox-group/provide'
import { CheckboxProvider } from './provide'

export default defineComponent({
	name: 'VarCheckbox',
	directives: { Ripple },
	components: {
		[Icon.name]: Icon,
	},
	inheritAttrs: false,
	props,
	setup(props) {
		const { bindParent, parentProvider: checkboxGroupProvider } = useParent<CheckboxGroupProvider, CheckboxProvider>(
			CHECKBOX_GROUP_BIND_CHECKBOX_KEY
		)
		useAtParentIndex(CHECKBOX_GROUP_COUNT_CHECKBOX_KEY)

		const value: Ref<any> = ref(false)

		const checked: ComputedRef<boolean> = computed(() => value.value === props.checkedValue)
		const checkedValue: ComputedRef<boolean> = computed(() => props.checkedValue)

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

			// has parent check max
			const forbidCheck = checkboxGroupProvider.checkedCount.value >= Number(checkboxGroupProvider.max.value)
			if (checkboxGroupProvider && !checked.value && forbidCheck) {
				return
			}

			if (changedValue == null) {
				changedValue = checked.value ? props.uncheckedValue : props.checkedValue
			}

			value.value = changedValue

			props['onUpdate:modelValue']?.(value.value)
			props.onChange?.(value.value)

			changedValue === props.checkedValue
				? checkboxGroupProvider?.onChecked(props.checkedValue)
				: checkboxGroupProvider?.onUnchecked(props.checkedValue)
		}

		const handleClick = (e: Event) => {
			if (props.disabled) {
				return
			}

			props.onClick?.(e)

			toggle()
		}

		const sync = (values: Array<any>) => {
			value.value = values.includes(props.checkedValue) ? props.checkedValue : props.uncheckedValue
		}

		const checkboxProvider: CheckboxProvider = {
			checkedValue,
			checked,
			sync,
		}

		bindParent?.(checkboxProvider)

		return {
			checked,
			handleClick,
			toggle,
		}
	},
})
</script>

<style lang="less">
@import './checkbox';
</style>
