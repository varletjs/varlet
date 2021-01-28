<template>
	<div class="var-form">
		<slot />
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue'
import { props } from './props'
import { useChildren } from '../utils/components'
import { FORM_BIND_FORM_ITEM_KEY, FormProvider, Validation } from './provide'

export default defineComponent({
  name: 'VarForm',
  props,
  setup(props) {
    const { bindChildren: bindFormItem, childProviders: formItemProviders } = useChildren<FormProvider, Validation>(
      FORM_BIND_FORM_ITEM_KEY
    )

    const disabled: ComputedRef<boolean> = computed(() => props.disabled)
    const readonly: ComputedRef<boolean> = computed(() => props.readonly)

    const validate = async () => {
      const res = await Promise.all(formItemProviders.map(({ validate }) => validate()))

      return res.every((r) => r === true)
    }

    const reset = () => formItemProviders.forEach(({ reset }) => reset())

    const resetValidation = () => formItemProviders.forEach(({ resetValidation }) => resetValidation())

    const formProvider: FormProvider = {
      disabled,
      readonly,
    }

    bindFormItem(formProvider)

    return {
      validate,
      reset,
      resetValidation,
    }
  },
})
</script>
