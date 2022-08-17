<template>
  <div :class="n('wrap')">
    <div :class="n()">
      <div
        :key="val"
        v-for="val in toNumber(count)"
        v-ripple="{ disabled: formReadonly || readonly || formDisabled || disabled || !ripple }"
        :style="getStyle(val)"
        :class="getClass(val)"
        @click="handleClick(val, $event)"
      >
        <var-icon
          :class="n('content-icon')"
          var-rate-cover
          :transition="0"
          :namespace="namespace"
          :name="getCurrentState(val).name"
          :style="{ fontSize: toSizeUnit(size) }"
        />
      </div>
    </div>
    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import VarFormDetails from '../form-details'
import Ripple from '../ripple'
import { defineComponent, nextTick } from 'vue'
import { useForm } from '../form/provide'
import { useValidation, call, createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { toNumber } from '@varlet/shared'
import { props } from './props'
import type { RateProvider } from './provide'

const { n } = createNamespace('rate')

export default defineComponent({
  name: 'VarRate',
  components: {
    VarIcon,
    VarFormDetails,
  },
  directives: { Ripple },
  props,
  setup(props) {
    const { form, bindForm } = useForm()
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()

    const getStyle = (val: number) => {
      const { count, size, gap } = props

      return {
        color: getCurrentState(val).color,
        marginRight: val !== toNumber(count) ? toSizeUnit(gap) : 0,
        width: toSizeUnit(size),
        height: toSizeUnit(size),
      }
    }

    const getClass = (val: number) => {
      const { name, color } = getCurrentState(val)

      return {
        [n('content')]: true,
        [n('--disabled')]: form?.disabled.value || props.disabled,
        [n('--error')]: errorMessage.value,
        [n('--primary')]: name !== props.emptyIcon && !color,
      }
    }

    const getCurrentState = (index: number) => {
      const { modelValue, disabled, disabledColor, color, half, emptyColor, icon, halfIcon, emptyIcon } = props
      let iconColor = color

      if (disabled || form?.disabled.value) iconColor = disabledColor

      if (index <= toNumber(modelValue)) {
        return { color: iconColor, name: icon }
      }

      if (half && index <= toNumber(modelValue) + 0.5) {
        return { color: iconColor, name: halfIcon }
      }

      return { color: disabled || form?.disabled.value ? disabledColor : emptyColor, name: emptyIcon }
    }

    const changeValue = (score: number, event: MouseEvent) => {
      if (props.half) {
        const { offsetWidth } = event.target as HTMLDivElement

        if (event.offsetX <= Math.floor(offsetWidth / 2)) score -= 0.5
      }

      call(props['onUpdate:modelValue'], score)
    }

    const validate = () => v(props.rules, toNumber(props.modelValue))

    const validateWithTrigger = () => nextTick(() => vt(['onChange'], 'onChange', props.rules, props.modelValue))

    const handleClick = (score: number, event: MouseEvent) => {
      const { readonly, disabled, onChange } = props

      if (readonly || disabled || form?.disabled.value || form?.readonly.value) {
        return
      }

      changeValue(score, event)
      call(onChange, score)
      validateWithTrigger()
    }

    const reset = () => {
      call(props['onUpdate:modelValue'], 0)
      resetValidation()
    }

    const rateProvider: RateProvider = {
      reset,
      validate,
      resetValidation,
    }

    call(bindForm, rateProvider)

    return {
      errorMessage,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      getStyle,
      getClass,
      getCurrentState,
      handleClick,
      reset,
      validate,
      resetValidation,
      toSizeUnit,
      toNumber,
      n,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import '../icon/icon';
@import '../form-details/formDetails';
@import './rate';
</style>
