<template>
  <div :class="classes(n())">
    <div :class="n('container')">
      <var-input
        ref="inputRef"
        type="number"
        var-otp-input-cover
        :model-value="modelValue"
        :variant="variant"
        :readonly="readonly"
        :disabled="disabled"
        :size="size"
        :text-color="textColor"
        :focus-color="focusColor"
        :blur-color="blurColor"
        :autofocus="index === 0 && autofocus"
        @update:model-value="handleInput"
        @focus="handleFocus"
        @blur="onItemBlur(index)"
        @click="handleClick(index)"
        @keydown="handleKeydown"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { preventDefault } from '@varlet/shared'
import VarInput from '../input'
import { createNamespace } from '../utils/components'
import { useInputOtp, type InputOtpItemProvider } from './provide'

const { name, n, classes } = createNamespace('otp-input')

type VarInputInstance = InstanceType<typeof VarInput>

export default defineComponent({
  name,
  components: {
    VarInput,
  },
  emits: ['update:modelValue'],
  setup() {
    const inputRef = ref<VarInputInstance>()
    const { index, inputOtp, bindInputOtp } = useInputOtp()
    const {
      activeInput,
      parentModel,
      disabled,
      readonly,
      variant,
      size,
      textColor,
      focusColor,
      blurColor,
      autofocus,
      onItemChange,
      onItemFocus,
      onItemBlur,
    } = inputOtp

    const modelValue = computed(() => {
      return parentModel.value.slice(index.value, index.value + 1)
    })

    const inputOtpItemProvider: InputOtpItemProvider = {
      index,
    }

    watch(
      () => activeInput.value,
      (value) => {
        if (value === index.value) {
          inputRef.value?.focus()
        }
      },
    )

    bindInputOtp(inputOtpItemProvider)

    function handleInput(value: string) {
      if (!value) {
        return
      }

      inputRef.value?.blur()

      onItemChange(index.value, value.slice(value.length - 1, value.length))
    }

    function handleFocus() {
      const input = inputRef.value?.$el.querySelector('input')
      if (input) {
        input.select()
      }
      onItemFocus(index.value)
    }

    function handleClick(index: number) {
      onItemChange(index)
    }

    function handleKeydown(event: KeyboardEvent) {
      if (disabled.value || readonly.value || !['ArrowLeft', 'ArrowRight', 'Backspace', 'Delete'].includes(event.key)) {
        return
      }

      preventDefault(event)

      if (event.key === 'ArrowLeft') {
        onItemChange(index.value - 1)
      } else if (event.key === 'ArrowRight') {
        onItemChange(index.value + 1)
      } else if (['Backspace', 'Delete'].includes(event.key)) {
        onItemChange(index.value, '')
        return
      }
    }

    return {
      index,
      modelValue,
      inputRef,
      disabled,
      readonly,
      variant,
      size,
      textColor,
      focusColor,
      blurColor,
      autofocus,
      n,
      classes,
      handleInput,
      handleClick,
      handleKeydown,
      handleFocus,
      onItemBlur,
    }
  },
})
</script>
