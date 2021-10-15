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
        :class="[
          modelValue === activeValue ? 'var-switch__track-active' : null,
          errorMessage ? 'var-switch__track-error' : null,
        ]"
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
          :class="[
            modelValue === activeValue ? 'var-switch__handle-active' : null,
            errorMessage ? 'var-switch__handle-error' : null,
          ]"
        >
          <var-loading v-if="loading" :radius="toNumber(size) / 2 - 2" />
        </div>
      </div>
    </div>
    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, nextTick } from 'vue'
import { useValidation } from '../utils/components'
import { toNumber } from '../utils/shared'
import { useForm } from '../form/provide'
import { props } from './props'
import VarFormDetails from '../form-details'
import VarLoading from '../loading'
import Ripple from '../ripple'
import type { ComputedRef } from 'vue'
import type { SwitchProvider } from './provide'

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
    VarLoading,
    VarFormDetails,
  },
  directives: { Ripple },
  props,
  setup(props) {
    const { bindForm, form } = useForm()
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()

    const validate = () => v(props.rules, props.modelValue)

    const validateWithTrigger = () => nextTick(() => vt(['onChange'], 'onChange', props.rules, props.modelValue))

    const styleComputed: ComputedRef<Record<string, Partial<StyleProps>>> = computed(() => {
      const { size, modelValue, color, closeColor, loadingColor, activeValue } = props

      const sizeNum = toNumber(size)
      const switchWidth = sizeNum * 2
      const switchHeight = sizeNum * 1.2

      return {
        handle: {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: modelValue === activeValue ? color || '' : closeColor || '',
          color: loadingColor && loadingColor,
        },
        ripple: {
          left: modelValue === activeValue ? `${sizeNum / 2}px` : `-${sizeNum / 2}px`,
          color: modelValue === activeValue ? color || '' : closeColor || '#999',
          width: `${sizeNum * 2}px`,
          height: `${sizeNum * 2}px`,
        },
        track: {
          height: `${switchHeight * 0.6}px`,
          width: `${switchWidth - 2}px`,
          borderRadius: `${switchWidth / 3}px`,
          filter: modelValue === activeValue || errorMessage?.value ? 'opacity(.6)' : 'brightness(.6)',
          backgroundColor: modelValue === activeValue ? color || '' : closeColor || '',
        },
        switch: {
          height: `${switchHeight}px`,
          width: `${switchWidth}px`,
        },
      }
    })

    const switchActive = () => {
      const {
        onClick,
        onChange,
        disabled,
        loading,
        readonly,
        modelValue,
        activeValue,
        inactiveValue,
        'onUpdate:modelValue': updateModelValue,
      } = props

      onClick?.()
      if (disabled || loading || readonly || form?.disabled.value || form?.readonly.value) return

      const newValue = modelValue === activeValue ? inactiveValue : activeValue
      onChange?.(newValue)
      updateModelValue?.(newValue)
      validateWithTrigger()
    }

    const reset = () => {
      props['onUpdate:modelValue']?.(props.inactiveValue)
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
      toNumber,
      styleComputed,
      errorMessage,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../ripple/ripple';
@import '../loading/loading';
@import '../form-details/formDetails';
@import './switch';
</style>
