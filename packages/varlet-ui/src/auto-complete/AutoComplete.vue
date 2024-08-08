<template>
  <div :class="n()">
    <var-menu-select
      placement="bottom"
      same-width
      v-model:show="isShowOptionPanel"
      v-model="menuSelected"
      :options="autoCompleteOptionsMenu"
    >
      <var-input v-model="inputValue" placement="top" same-width />
    </var-menu-select>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { props } from './props'
import VarInput from '../input'
import VarMenuSelect from '../menu-select'
import { call, isArray } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { useVModel } from '@varlet/use'

const { classes, n } = createNamespace('auto-complete')

export default defineComponent({
  name: 'VarAutoComplete',
  components: { VarInput, VarMenuSelect },
  props,
  setup(props) {
    const inputValue = useVModel(props, 'modelValue')
    const menuSelected = useVModel(props, 'modelValue')
    const isShowOptionPanel = ref(false)
    const autoCompleteOptionsMenu = ref(isArray(props.options) ? props.options : [])
    const autoCompleteOptions = computed(() => (isArray(props.options) ? props.options : []))

    watch(
      () => inputValue.value,
      (value) => {
        if (value !== undefined) {
          autoCompleteOptionsMenu.value = autoCompleteOptions.value.map((item) => ({
            value: value + item.value,
            label: value + item.label,
          }))
        }
      }
    )

    watch(
      () => menuSelected.value,
      (value) => {
        call(props['onUpdate:modelValue'], value)
      }
    )

    return {
      classes,
      n,
      autoCompleteOptionsMenu,
      menuSelected,
      autoCompleteOptions,
      isShowOptionPanel,
      inputValue,
    }
  },
})
</script>

<style lang="less">
@import './autoComplete.less';
</style>
