<template>
  <var-menu
    trigger="hover"
    placement="right-start"
    :class="n()"
    :disabled="disabled"
    :teleport="false"
    :close-on-click-reference="false"
  >
    <var-menu-option
      children-trigger
      :label="option[labelKey]"
      :value="option[valueKey]"
      :option="option"
      :ripple="option.ripple"
      :disabled="option.disabled"
      :highlight="highlightOptions.includes(option)"
    />

    <template #menu v-if="options.length">
      <template v-for="option in options" :key="option[valueKey]">
        <var-menu-children
          v-if="option[childrenKey]"
          :option="option"
          :options="option[childrenKey]"
          :disabled="option.disabled"
        />

        <var-menu-option
          v-else
          :label="option[labelKey]"
          :value="option[valueKey]"
          :option="option"
          :ripple="option.ripple"
          :disabled="option.disabled"
        />
      </template>
    </template>
  </var-menu>
</template>

<script lang="ts">
import VarMenu from '../menu/Menu.vue'
import VarMenuOption from '../menu-option/MenuOption.vue'
import { PropType, defineComponent } from 'vue'
import { createNamespace, pickProps } from '../utils/components'
import { type MenuSelectOption, props as menuSelectProps } from './props'

const { name, n } = createNamespace('menu-children')

export default defineComponent({
  name,
  components: {
    VarMenu,
    VarMenuOption,
  },
  props: {
    disabled: Boolean,
    option: {
      type: Object as PropType<MenuSelectOption>,
      required: true,
    },
    highlightOptions: pickProps(menuSelectProps, 'options'),
    ...pickProps(menuSelectProps, ['options', 'valueKey', 'labelKey', 'childrenKey']),
  },
  setup() {
    return {
      n,
    }
  },
})
</script>
