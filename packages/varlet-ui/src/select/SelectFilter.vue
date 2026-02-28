<template>
  <input
    ref="filterInputRef"
    v-model="value"
    type="text"
    :class="classes(n('filter'), [multiple, n('filter--multiple')])"
  />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { call } from '@varlet/shared'
import { createNamespace, defineListenerProp } from '../utils/components'

const { n, classes } = createNamespace('select')

export default defineComponent({
  name: 'VarSelectFilter',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    multiple: Boolean,
    'onUpdate:modelValue': defineListenerProp<(value: string) => void>(),
  },
  setup(props) {
    const filterInputRef = ref<HTMLInputElement>()

    const value = computed({
      get: () => props.modelValue,
      set: (val) => call(props['onUpdate:modelValue'], val),
    })

    const focus = () => {
      filterInputRef.value?.focus()
    }

    const blur = () => {
      filterInputRef.value?.blur()
    }

    return {
      n,
      classes,
      value,
      filterInputRef,

      // expose
      focus,
      blur,
    }
  },
})
</script>
