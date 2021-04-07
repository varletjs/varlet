<template>
  <div class="var-rate__warp" v-bind="$attrs">
    <div class="var-rate" ref="rate">
      <div
        class="var-rate__content"
        v-for="val in toNumber(count)"
        :key="val"
        v-ripple="{ disabled: formReadonly || formDisabled || readonly || disabled || !ripple }"
        :style="{
          color: transformValue(val).color,
          marginRight: val !== toNumber(count) ? toSizeUnit(gap) : 0,
          width: toSizeUnit(size),
          height: toSizeUnit(size),
          borderRadius: '50%',
        }"
        :class="{ 'var-rate--disabled': formDisabled, 'var-rate--error': errorMessage }"
      >
        <var-icon
          :transition="0"
          :name="`${
            transformValue(val).type === 'full' ? icon : transformValue(val).type === 'half' ? halfIcon : emptyIcon
          }`"
          :style="{ fontSize: toSizeUnit(size) }"
          @click="handleClick(val, $event)"
        />
      </div>
    </div>
    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import Ripple from '../ripple'
import { defineComponent, nextTick } from 'vue'
import { props, ValidateTriggers } from './props'
import { useValidation } from '../utils/components'
import { useForm } from '../form/provide'
import { RateProvider } from './provide'
import Icon from '../icon'
import FormDetails from '../form-details/FormDetails.vue'
import { toSizeUnit } from '../utils/elements'
import { toNumber } from '../utils/shared'

export default defineComponent({
  name: 'VarRate',
  components: {
    [Icon.name]: Icon,
    [FormDetails.name]: FormDetails,
  },
  directives: { Ripple },
  inheritAttrs: false,
  props,
  setup(props) {
    const { form, bindForm } = useForm()
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()

    const transformValue = (index: number) => {
      const { modelValue, disabled, disabledColor, color, half, emptyColor } = props

      if (index <= toNumber(modelValue)) {
        return { type: 'full', score: index, color: disabled || form?.disabled.value ? disabledColor : color }
      }
      if (half && index <= toNumber(modelValue) + 0.5) {
        return { type: 'half', score: index, color: disabled || form?.disabled.value ? disabledColor : color }
      }
      return { type: 'empty', score: index, color: disabled || form?.disabled.value ? disabledColor : emptyColor }
    }

    const validateWithTrigger = (trigger: ValidateTriggers) => {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, toNumber(modelValue))
      })
    }

    const changeValue = (score: number, event: MouseEvent) => {
      if (props.half) {
        const { offsetWidth } = event.target as HTMLDivElement
        if (event.offsetX <= Math.floor(offsetWidth / 2)) {
          score -= 0.5
        }
      }

      props['onUpdate:modelValue']?.(score)
    }

    const handleClick = (score: number, event: MouseEvent) => {
      const { readonly, disabled, onChange } = props

      if (readonly || disabled || form?.disabled.value || form?.readonly.value) {
        return
      }

      changeValue(score, event)
      onChange?.(score)
      validateWithTrigger('onChange')
    }

    const reset = () => {
      props['onUpdate:modelValue']?.(0)
      resetValidation()
    }

    const validate = () => v(props.rules, toNumber(props.modelValue))

    const rateProvider: RateProvider = {
      reset,
      validate,
      resetValidation,
    }

    bindForm?.(rateProvider)

    return {
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      toSizeUnit,
      toNumber,
      errorMessage,
      transformValue,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import './rate';
</style>
