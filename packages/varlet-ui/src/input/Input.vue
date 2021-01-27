<template>
	<div
		class="var-input var--box"
		:class="[disabled ? 'var-input--disabled' : null]"
		@click="handleClick"
		v-bind="$attrs"
	>
		<div
			class="var-input__controller"
			:class="[
				isFocus ? 'var-input--focus' : null,
				errorMessage ? 'var-input--error' : null,
				formDisabled || disabled ? 'var-input--disabled' : null,
			]"
			:style="{
				color: isFocus ? activeColor : inactiveColor,
			}"
		>
			<slot name="prepend-icon">
				<div class="var-input__icon" @click="handleClickPrependIcon">
					<var-icon :name="prependIcon" v-if="prependIcon" />
				</div>
			</slot>

			<div class="var-input__wrap">
				<textarea
					class="var-input__input"
					ref="input"
					autocomplete="off"
					:class="[formDisabled || disabled ? 'var-input--disabled' : null, 'var-input--textarea']"
					:style="{
						textAlign,
						color: textColor,
						resize: resize ? 'vertical' : 'none',
					}"
					:id="inputId"
					:disabled="formDisabled || disabled"
					:readonly="formReadonly || readonly"
					:rows="rows"
					:maxlength="maxlength"
					:value="modelValue"
					v-if="textarea"
					@focus="handleFocus"
					@blur="handleBlur"
					@input="handleInput"
					@change="handleChange"
				>
				</textarea>
				<input
					class="var-input__input"
					ref="input"
					autocomplete="off"
					:class="[formDisabled || disabled ? 'var-input--disabled' : null]"
					:style="{
						textAlign,
						color: textColor,
					}"
					:id="inputId"
					:type="type"
					:disabled="formDisabled || disabled"
					:readonly="formReadonly || readonly"
					:maxlength="maxlength"
					:value="modelValue"
					v-else
					@focus="handleFocus"
					@blur="handleBlur"
					@input="handleInput"
					@change="handleChange"
				/>
				<label class="var-input__placeholder" :class="[computePlaceholderState()]" :for="inputId">
					{{ placeholder }}
				</label>
				<div
					class="var-input__line"
					:class="[
						formDisabled || disabled ? 'var-input--line-disabled' : null,
						errorMessage ? 'var-input--line-error' : null,
					]"
					:style="{ background: inactiveColor }"
					v-if="line"
				>
					<div
						class="var-input__dot"
						:class="[
							isFocus ? 'var-input--spread' : null,
							formDisabled || disabled ? 'var-input--line-disabled' : null,
							errorMessage ? 'var-input--line-error' : null,
						]"
						:style="{ background: activeColor }"
					></div>
				</div>

				<var-form-details :error-message="errorMessage" :maxlength-text="maxlengthText" />
			</div>

			<slot name="append-icon">
				<div class="var-input__icon" @click="handleClickAppendIcon">
					<var-icon
						:name="appendIcon || 'close-circle'"
						:size="clearable ? '14px' : null"
						v-if="appendIcon || clearable"
						@click="handleClear"
					/>
				</div>
			</slot>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, Ref, computed, ComputedRef, nextTick } from 'vue'
import { props, ValidateTriggers } from './props'
import { isEmpty, isNumber } from '../utils/shared'
import { useParent, useValidation } from '../utils/components'
import { FORM_BIND_FORM_ITEM_KEY, FormProvider } from '../form/provide'
import { InputProvider } from './provide'
import FormDetails from '../form-details'
import Icon from '../icon'

export default defineComponent({
  name: 'VarInput',
  components: {
    [Icon.name]: Icon,
    [FormDetails.name]: FormDetails,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const { bindParent: bindForm, parentProvider: formProvider } = useParent<FormProvider, InputProvider>(
      FORM_BIND_FORM_ITEM_KEY
    )

    const inputId: Ref<string> = ref(`var-input-${getCurrentInstance()!.uid}`)
    const isFocus: Ref<boolean> = ref(false)
    const inputEl: Ref<HTMLInputElement | null> = ref(null)

    const isNumberValue: ComputedRef<boolean> = computed(() => isNumber(props.modelValue))
    const maxlengthText: ComputedRef<string> = computed(() => {
      const { maxlength, modelValue } = props

      if (!maxlength) {
        return ''
      }

      if (isEmpty(modelValue)) {
        return `0 / ${maxlength}`
      }

      return `${String(modelValue).length}/${maxlength}`
    })

    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()

    const validate = () => v(props.rules, props.modelValue)

    const validateWithTrigger = (trigger: ValidateTriggers) =>
      nextTick(() => vt(props.validateTrigger, trigger, props.rules, props.modelValue))

    const computePlaceholderState = () => {
      if (!props.hint && !isEmpty(props.modelValue)) {
        return 'var-input--placeholder-hidden'
      }
      if (props.hint && (!isEmpty(props.modelValue) || isFocus.value)) {
        return 'var-input--placeholder-hint'
      }
    }

    const normalizeValue = (value: string) => {
      return isNumberValue.value ? parseFloat(value) : value
    }

    const handleFocus = (e: Event) => {
      isFocus.value = true
      props.onFocus?.(e)

      validateWithTrigger('onFocus')
    }

    const handleBlur = (e: Event) => {
      isFocus.value = false
      props.onBlur?.(e)

      validateWithTrigger('onBlur')
    }

    const handleInput = (e: Event) => {
      const { value } = e.target as HTMLInputElement

      props['onUpdate:modelValue']?.(normalizeValue(value))
      props.onInput?.(e)

      validateWithTrigger('onInput')
    }

    const handleChange = (e: Event) => {
      props.onChange?.(e)

      validateWithTrigger('onChange')
    }

    const handleClear = () => {
      if (
        formProvider?.disabled.value ||
				formProvider?.readonly.value ||
				props.disabled ||
				props.readonly ||
				!props.clearable
      ) {
        return
      }

      props['onUpdate:modelValue']?.(undefined)
      props.onClear?.()

      validateWithTrigger('onClear')
    }

    const handleClick = (e: Event) => {
      if (formProvider?.disabled.value || props.disabled) {
        return
      }

      props.onClick?.(e)

      validateWithTrigger('onClick')
    }

    const handleClickAppendIcon = (e: Event) => {
      if (formProvider?.disabled.value || props.disabled) {
        return
      }

      props.onClickAppendIcon?.(e)
    }

    const handleClickPrependIcon = (e: Event) => {
      if (formProvider?.disabled.value || props.disabled) {
        return
      }

      props.onClickPrependIcon?.(e)
    }

    const focus = () => {
      ;(inputEl.value as HTMLInputElement).focus()
    }

    const blur = () => {
      ;(inputEl.value as HTMLInputElement).blur()
    }

    const reset = () => {
      props['onUpdate:modelValue']?.(undefined)
      resetValidation()
    }

    const inputProvider: InputProvider = {
      reset,
      validate,
      resetValidation,
    }

    bindForm?.(inputProvider)

    return {
      inputEl,
      inputId,
      isFocus,
      errorMessage,
      maxlengthText,
      formDisabled: formProvider?.disabled,
      formReadonly: formProvider?.readonly,
      computePlaceholderState,
      handleFocus,
      handleBlur,
      handleInput,
      handleChange,
      handleClear,
      handleClick,
      handleClickAppendIcon,
      handleClickPrependIcon,
      validate,
      resetValidation,
      reset,
      focus,
      blur,
    }
  },
})
</script>

<style lang="less">
@import './input';
</style>
