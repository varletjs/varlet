<template>
  <var-menu
    trigger="hover"
    placement="right-start"
    :teleport="false"
    :disabled="disabled"
    :close-on-click-reference="false"
  >
    <slot />

    <template #menu v-if="options.length">
      <template v-for="option in options" :key="option[valueKey]">
        <var-menu-children v-if="option.children" :options="option.children" :disabled="option.disabled">
          <var-menu-option
            children-trigger
            :label="option[labelKey]"
            :value="option[valueKey]"
            :option="option"
            :ripple="option.ripple"
            :disabled="option.disabled"
          />
        </var-menu-children>

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
import { defineComponent } from 'vue'
import { createNamespace, pickProps } from '../utils/components'
import { props as menuSelectProps } from './props'

const { name, n } = createNamespace('menu-children')

export default defineComponent({
  name,
  components: {
    VarMenu,
    VarMenuOption,
  },
  props: {
    disabled: Boolean,
    ...pickProps(menuSelectProps, ['options', 'valueKey', 'labelKey']),
  },
  setup() {
    return {
      n,
    }
  },
})
</script>
