<template>
  <div :class="n()">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { props } from './props'
import { useFormItems } from './provide'
import type { ComputedRef } from 'vue'
import type { FormProvider } from './provide'
import { createNamespace } from '../utils/components'

const { n } = createNamespace('form')

export default defineComponent({
  name: 'VarForm',
  props,
  setup(props) {
    const disabled: ComputedRef<boolean> = computed(() => props.disabled)
    const readonly: ComputedRef<boolean> = computed(() => props.readonly)
    const { formItems, bindFormItems } = useFormItems()

    // expose
    const validate = async () => {
      const res = await Promise.all(formItems.map(({ validate }) => validate()))

      const index = res.findIndex((r) => r === false)
      if (props.scrollToFirstError && index !== -1) {
        formItems[index].instance.proxy?.$el.scrollIntoView()
      }

      return index === -1
    }

    // expose
    const reset = () => formItems.forEach(({ reset }) => reset())

    // expose
    const resetValidation = () => formItems.forEach(({ resetValidation }) => resetValidation())

    const formProvider: FormProvider = {
      disabled,
      readonly,
    }

    bindFormItems(formProvider)

    return {
      n,
      validate,
      reset,
      resetValidation,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
</style>
