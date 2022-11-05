<script setup>
import Form from '..'
import VarIcon from '../../icon'
import VarFormDetails from '../../form-details'
import { nextTick } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: Array,
  },
  validateTrigger: {
    type: Array,
    default: () => ['onToggle'],
  },
  extraMessage: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue'])

const { useForm, useValidation } = Form
const {
  errorMessage,
  validateWithTrigger: _validateWithTrigger,
  validate: _validate,
  resetValidation,
} = useValidation()
const { bindForm, form } = useForm()

const reset = () => {
  emit('update:modelValue', false)
  resetValidation()
}

const validate = () => _validate(props.rules, props.modelValue)

const validateWithTrigger = (trigger) => {
  nextTick(() => {
    const { validateTrigger, rules, modelValue } = props
    _validateWithTrigger(validateTrigger, trigger, rules, modelValue)
  })
}

const handleClick = () => {
  if (props.readonly || props.disabled || form?.readonly.value || form?.disabled.value) {
    return
  }

  emit('update:modelValue', !props.modelValue)
  validateWithTrigger('onToggle')
}

const apis = {
  reset,
  validate,
  resetValidation,
}

defineExpose(apis)
bindForm?.(apis)
</script>

<template>
  <div
    class="var-custom-form-component"
    :class="{
      'var-custom-form-component--disabled': disabled || form?.disabled.value,
      'var-custom-form-component--error': errorMessage,
    }"
  >
    <div class="var-custom-form-component__container" @click="handleClick">
      <var-icon
        class="var-custom-form-component__icon"
        :name="modelValue ? 'checkbox-marked-circle' : 'close-circle'"
        :transition="250"
      />
      <slot />
    </div>
    <var-form-details :error-message="errorMessage" :extra-message="extraMessage" />
  </div>
</template>

<style scoped lang="less">
.var-custom-form-component {
  cursor: pointer;

  &__container {
    display: flex;
    align-items: center;
  }

  &__icon {
    margin-right: 6px;
    font-size: 24px;
  }

  &--disabled {
    color: var(--color-text-disabled);
    cursor: not-allowed;
  }

  &--error {
    color: var(--color-danger);
  }
}
</style>
