<template>
  <input ref="inputRef" v-model="value" type="text" :class="classes(n('input'), [multiple, n('input--multiple')])" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { call } from '@varlet/shared'
import { createNamespace, defineListenerProp } from '../utils/components'

const { n, classes } = createNamespace('select')

export default defineComponent({
  name: 'VarSelectInput',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    multiple: Boolean,
    'onUpdate:modelValue': defineListenerProp<(value: string) => void>(),
  },
  setup(props) {
    const inputRef = ref<HTMLInputElement>()

    const value = computed({
      get: () => props.modelValue,
      set: (val) => call(props['onUpdate:modelValue'], val),
    })

    const focus = () => {
      inputRef.value?.focus()
    }

    const blur = () => {
      inputRef.value?.blur()
    }

    return {
      n,
      classes,
      value,
      inputRef,

      // expose
      focus,
      blur,
    }
  },
})
</script>
