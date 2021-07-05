<template>
  <div class="var-rate__warp">
    <div class="var-rate">
      <div
        :key="val"
        v-for="val in toNumber(count)"
        v-ripple="{ disabled: formReadonly || readonly || formDisabled || disabled || !ripple }"
        :style="getStyle(val)"
        :class="getClass(val)"
        @click="handleClick(val, $event)"
      >
        <var-icon :transition="0" :name="getIconName(val)" :style="{ fontSize: toSizeUnit(size) }" />
      </div>
    </div>
    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import Ripple from '../ripple'
import Icon from '../icon'
import FormDetails from '../form-details'
import { defineComponent, nextTick } from 'vue'
import { useForm } from '../form/provide'
import { useValidation } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { toNumber } from '../utils/shared'
import { props } from './props'
import type { RateProvider } from './provide'

export default defineComponent({
  name: 'VarRate',
  components: {
    [Icon.name]: Icon,
    [FormDetails.name]: FormDetails,
  },
  directives: { Ripple },
  props,
  setup(props) {
    const { form, bindForm } = useForm()
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()

    const getStyle = (val: number) => {
      const { count, size, gap } = props

      return {
        color: transformValue(val).color,
        marginRight: val !== toNumber(count) ? toSizeUnit(gap) : 0,
        width: toSizeUnit(size),
        height: toSizeUnit(size),
        borderRadius: '50%',
      }
    }

    const getClass = (val: number) => {
      const { type, color } = transformValue(val)

      return {
        'var-rate__content': true,
        'var-rate--disabled': form?.disabled.value,
        'var-rate--error': errorMessage.value,
        'var-rate--primary': type !== 'empty' && !color,
      }
    }

    const getIconName = (val: number) => {
      const { type } = transformValue(val)
      const { icon, halfIcon, emptyIcon } = props

      return type === 'full' ? icon : type === 'half' ? halfIcon : emptyIcon
    }

    const transformValue = (index: number) => {
      const { modelValue, disabled, disabledColor, color, half, emptyColor } = props
      let iconColor = null

      if (disabled || form?.disabled.value) iconColor = disabledColor
      else if (color) iconColor = color

      if (index <= toNumber(modelValue)) {
        return { type: 'full', score: index, color: iconColor }
      }

      if (half && index <= toNumber(modelValue) + 0.5) {
        return { type: 'half', score: index, color: iconColor }
      }

      return { type: 'empty', score: index, color: disabled || form?.disabled.value ? disabledColor : emptyColor }
    }

    const changeValue = (score: number, event: MouseEvent) => {
      if (props.half) {
        const { offsetWidth } = event.target as HTMLDivElement

        if (event.offsetX <= Math.floor(offsetWidth / 2)) score -= 0.5
      }

      props['onUpdate:modelValue']?.(score)
    }

    const validate = () => v(props.rules, toNumber(props.modelValue))

    const validateWithTrigger = () => nextTick(() => vt(['onChange'], 'onChange', props.rules, props.modelValue))

    const handleClick = (score: number, event: MouseEvent) => {
      const { readonly, disabled, onChange } = props

      if (readonly || disabled || form?.disabled.value || form?.readonly.value) {
        return
      }

      changeValue(score, event)
      onChange?.(score)
      validateWithTrigger()
    }

    const reset = () => {
      props['onUpdate:modelValue']?.(0)
      resetValidation()
    }

    const rateProvider: RateProvider = {
      reset,
      validate,
      resetValidation,
    }

    bindForm?.(rateProvider)

    return {
      errorMessage,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      getStyle,
      getClass,
      getIconName,
      handleClick,
      reset,
      validate,
      resetValidation,
      toSizeUnit,
      toNumber,
    }
  },
})
</script>

<style lang="less">
@import '../ripple/ripple';
@import '../icon/icon';
@import '../form-details/formDetails';
@import './rate';
</style>
