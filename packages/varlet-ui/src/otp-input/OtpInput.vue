<template>
  <div :class="classes(n())">
    <div :class="n('container')">
      <var-input
        v-for="(_, i) of length"
        v-model="model[i]"
        type="number"
        var-input-cover
        :key="i"
        :maxlength="1"
        :ref="
          (el) => {
            inputRefs[i] = el as VarInputInstance
          }
        "
        :variant="variant"
        :readonly="readonly"
        :disabled="disabled"
        :size="size"
        :text-color="textColor"
        :focus-color="focusColor"
        :blur-color="blurColor"
        :autofocus="i === 0 && autofocus"
        @input="handleInput"
        @focus="(event) => handleFocus(event, i)"
        @blur="handleBlur"
        @click="handleClick(i)"
        @keydown="handleKeydown"
      />
    </div>
    <var-form-details :error-message="errorMessage" @mousedown.stop>
      <template v-if="$slots['extra-message']" #extra-message>
        <slot name="extra-message" />
      </template>
    </var-form-details>
  </div>
</template>

<script lang="ts">
import VarInput from '../input'
import VarFormDetails from '../form-details'
import { defineComponent, ref, computed, nextTick } from 'vue'
import { props, type OptInputValidateTrigger } from './props'
import { call, preventDefault, raf } from '@varlet/shared'
import { useValidation, createNamespace } from '../utils/components'
import { useForm } from '../form/provide'
import { type OtpInputProvider } from './provide'

const { name, n, classes } = createNamespace('otp-input')

type VarInputInstance = InstanceType<typeof VarInput>

export default defineComponent({
  name,
  components: {
    VarInput,
    VarFormDetails,
  },
  props,
  setup(props) {
    const inputRefs = ref<Array<VarInputInstance>>([])
    const focusIndex = ref(props.autofocus ? 0 : -1)

    const { bindForm } = useForm()
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()

    const model = computed({
      get() {
        return String(props.modelValue).split('')
      },
      set(value) {
        call(props.onChange, value.join(''))
        call(props['onUpdate:modelValue'], value.join(''))
        validateWithTrigger('onChange')
      },
    })

    const otpInputProvider: OtpInputProvider = {
      reset,
      validate,
      resetValidation,
    }

    call(bindForm, otpInputProvider)

    function validateWithTrigger(trigger: OptInputValidateTrigger) {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    function focusInput(target: number | 'next' | 'prev') {
      if (target === 'next') {
        focusIndex.value += 1
      } else if (target === 'prev') {
        focusIndex.value -= 1
      } else {
        focusIndex.value = target
      }

      inputRefs.value[focusIndex.value].focus()
    }

    function handleFocus(event: Event, index: number) {
      focusIndex.value = index
      call(props.onFocus, event)
    }

    function handleBlur(event: Event) {
      call(props.onBlur, event)
    }

    function handleInput(value: string) {
      const array = model.value.slice()
      array[focusIndex.value] = value

      let target: 'next' | 'prev' | number | null = null
      const modelLength = model.value.length

      if (focusIndex.value >= modelLength) {
        target = modelLength
      } else if (focusIndex.value + 1 !== props.length) {
        target = 'next'
      }

      model.value = array

      call(props.onInput, model.value.join(''))

      if (target) {
        focusInput(target)
      }

      validateWithTrigger('onInput')
    }

    async function handleKeydown(event: KeyboardEvent) {
      const { disabled, readonly } = props
      if (disabled || readonly || !['ArrowLeft', 'ArrowRight', 'Backspace', 'Delete'].includes(event.key)) {
        return
      }

      preventDefault(event)

      const array = model.value.slice()
      let target: 'next' | 'prev' | null = null

      if (event.key === 'ArrowLeft') {
        target = 'prev'
      } else if (event.key === 'ArrowRight') {
        target = 'next'
      } else if (['Backspace', 'Delete'].includes(event.key)) {
        array[focusIndex.value] = ''
        model.value = array

        if (focusIndex.value > 0 && event.key === 'Backspace') {
          target = 'prev'
        }

        validateWithTrigger('onInput')
      }

      if (!target) {
        return
      }

      await raf()
      focusInput(target)
    }

    function handleClick(index: number) {
      focusInput(index)
      call(props.onClick, index)
    }

    // expose
    function reset() {
      call(props['onUpdate:modelValue'], '')
      resetValidation()
    }

    // expose
    function validate() {
      return v(props.rules, props.modelValue)
    }

    // expose
    function focus() {
      focusIndex.value = 0
      inputRefs.value[0].focus()
    }

    // expose
    function blur() {
      if (focusIndex.value > -1) {
        inputRefs.value[focusIndex.value].blur()
      }
      focusIndex.value = -1
    }

    return {
      model,
      inputRefs,
      errorMessage,
      focusIndex,
      n,
      classes,
      handleInput,
      handleFocus,
      handleBlur,
      handleKeydown,
      handleClick,
      blur,
      focus,
      reset,
      validate,
      resetValidation,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../form-details/formDetails';
@import '../input/input';
@import './otpInput';
</style>
