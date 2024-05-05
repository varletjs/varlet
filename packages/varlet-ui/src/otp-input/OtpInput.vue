<template>
  <div :class="classes(n())" ref="contentRef">
    <div :class="n('container')">
      <var-input
        v-for="(_, i) of $props.length"
        v-model="model[i]"
        maxlength="1"
        type="number"
        :key="'otp-input-' + i"
        :ref="(el) => setRef(el as VarInputInstance, i)"
        :variant="variant ? 'standard' : 'outlined'"
        :readonly="$props.readonly"
        :disabled="$props.disabled"
        :size="$props.size"
        :text-color="$props.textColor"
        :focus-color="$props.focusColor"
        :blur-color="$props.blurColor"
        :autofocus="i === 0 && $props.autofocus"
        @input="handleInput"
        @focus="handleFocus(i)"
        @blur="handleBlur(i)"
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
import { defineComponent, ref, computed, nextTick, watch } from 'vue'
import { props, type OptInputValidateTrigger } from './props'
import { call, preventDefault, raf } from '@varlet/shared'
import { useValidation, createNamespace } from '../utils/components'
import { useForm } from '../form/provide'
import { focusChild } from '../utils/elements'
import { type OtpInputProvider } from './provide'

const { name, n, classes } = createNamespace('otp-input')

type VarInputInstance = InstanceType<typeof VarInput>

export default defineComponent({
  name,
  components: {
    VarInput,
  },
  props,
  setup(props) {
    const contentRef = ref()
    const inputRefs = ref<Array<VarInputInstance> | null>([])
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()

    const { bindForm, form } = useForm()

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

    const valueWhenFocus = ref('')
    const focusIndex = ref(-1)
    const blurIndex = ref(-1)

    watch(
      () => focusIndex.value,
      (index) => {
        if (index === -1) {
          validateWithTrigger('onBlur')
          call(props.onBlur, blurIndex.value)
        } else {
          validateWithTrigger('onFocus')
          call(props.onFocus, index)
        }
      }
    )

    const otpInputProvider: OtpInputProvider = {
      reset,
      validate,
      resetValidation,
    }

    call(bindForm, otpInputProvider)

    function setRef(el: VarInputInstance | null, index: number) {
      if (inputRefs.value && el) {
        inputRefs.value[index] = el
      }
    }

    function validateWithTrigger(trigger: OptInputValidateTrigger) {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    function handleFocus(index: number) {
      focusIndex.value = index
      valueWhenFocus.value = model.value[index]
    }

    function handleBlur(index: number) {
      blurIndex.value = index
      focusIndex.value = -1
    }

    function handleInput(val: string) {
      const array = model.value.slice()
      const value = val
      array[focusIndex.value] = value
      let target: any = null
      const modelLength = model.value.filter(Boolean).length
      if (focusIndex.value > modelLength) {
        target = modelLength
      } else if (focusIndex.value + 1 !== props.length) {
        target = 'next'
      }
      model.value = array
      call(props.onInput, model.value.join(''))

      if (target) {
        focusChild(contentRef.value!, target)
      }
      validateWithTrigger('onInput')
    }

    async function handleKeydown(event: KeyboardEvent) {
      if (props.readonly) return
      const array = model.value.slice()
      let target: 'next' | 'prev' | 'first' | 'last' | number | null = null

      if (!['ArrowLeft', 'ArrowRight', 'Backspace', 'Delete'].includes(event.key)) return

      preventDefault(event)

      if (event.key === 'ArrowLeft') {
        target = 'prev'
      } else if (event.key === 'ArrowRight') {
        target = 'next'
      } else if (['Backspace', 'Delete'].includes(event.key)) {
        array[focusIndex.value] = ''
        model.value = array
        if (focusIndex.value > 0 && event.key === 'Backspace') {
          if (valueWhenFocus.value) {
            valueWhenFocus.value = ''
          } else {
            target = 'prev'
          }
        }
        validateWithTrigger('onInput')
      }
      if (!target) return

      await raf()
      focusChild(contentRef.value!, target)
    }

    function handleClick(index: number) {
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
      blurIndex.value > -1 && inputRefs.value?.[blurIndex.value].focus()
    }

    // expose
    function blur() {
      if (focusIndex.value === -1) return
      blurIndex.value = focusIndex.value
      inputRefs.value?.[focusIndex.value].blur()
    }

    return {
      model,
      contentRef,
      inputRefs,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
      length,
      errorMessage,
      focusIndex,
      variant: props.variant,
      n,
      classes,
      handleInput,
      handleFocus,
      handleBlur,
      handleKeydown,
      handleClick,
      setRef,
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
@import './otpInput';
</style>
